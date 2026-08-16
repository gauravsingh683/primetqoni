const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');

// ─── In-Memory Storage (replaced by MySQL when configured) ──
let contactSubmissions = [];
let smtpSettings = {
    host: process.env.SMTP_HOST || '',
    port: parseInt(process.env.SMTP_PORT) || 587,
    secure: process.env.SMTP_SECURE === 'true',
    user: process.env.SMTP_USER || '',
    pass: process.env.SMTP_PASS || '',
    from: process.env.SMTP_FROM || 'info@primetroniqinnovations.com'
};

// Try to load MySQL if available
let db = null;
async function initDB() {
    try {
        const mysql = require('mysql2/promise');
        db = await mysql.createConnection({
            host: process.env.DB_HOST || 'localhost',
            user: process.env.DB_USER || 'root',
            password: process.env.DB_PASSWORD || '',
            database: process.env.DB_NAME || 'primetroniq_db'
        });

        // Create tables if they don't exist
        await db.execute(`
            CREATE TABLE IF NOT EXISTS contact_submissions (
                id INT AUTO_INCREMENT PRIMARY KEY,
                name VARCHAR(255) NOT NULL,
                email VARCHAR(255) NOT NULL,
                phone VARCHAR(50),
                company VARCHAR(255),
                service VARCHAR(255),
                message TEXT NOT NULL,
                ip_address VARCHAR(45),
                created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                is_read BOOLEAN DEFAULT FALSE
            )
        `);

        await db.execute(`
            CREATE TABLE IF NOT EXISTS smtp_settings (
                id INT PRIMARY KEY DEFAULT 1,
                host VARCHAR(255),
                port INT DEFAULT 587,
                is_secure BOOLEAN DEFAULT FALSE,
                username VARCHAR(255),
                password VARCHAR(255),
                from_email VARCHAR(255),
                updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
            )
        `);

        // Load SMTP settings from DB
        const [rows] = await db.execute('SELECT * FROM smtp_settings WHERE id = 1');
        if (rows.length > 0) {
            smtpSettings = {
                host: rows[0].host || smtpSettings.host,
                port: rows[0].port || smtpSettings.port,
                secure: rows[0].is_secure || smtpSettings.secure,
                user: rows[0].username || smtpSettings.user,
                pass: rows[0].password || smtpSettings.pass,
                from: rows[0].from_email || smtpSettings.from
            };
        }

        console.log('  ✅ MySQL connected successfully');
    } catch (err) {
        console.log('  ⚠️  MySQL not available, using in-memory storage');
        console.log('     Configure .env with DB_HOST, DB_USER, DB_PASSWORD, DB_NAME');
    }
}
initDB();

// ─── Send Email Helper ──────────────────────────────────────
async function sendEmail(to, subject, html) {
    if (!smtpSettings.host || !smtpSettings.user) {
        console.log('  ⚠️  SMTP not configured, skipping email');
        return false;
    }

    try {
        const transporter = nodemailer.createTransport({
            host: smtpSettings.host,
            port: smtpSettings.port,
            secure: smtpSettings.secure,
            auth: {
                user: smtpSettings.user,
                pass: smtpSettings.pass
            }
        });

        await transporter.sendMail({
            from: `"Primetroniq Innovations" <${smtpSettings.from}>`,
            to: to,
            subject: subject,
            html: html
        });
        return true;
    } catch (err) {
        console.error('  ❌ Email send error:', err.message);
        return false;
    }
}

// ─── POST /api/contact ──────────────────────────────────────
router.post('/contact', async (req, res) => {
    try {
        const { name, email, phone, company, service, message } = req.body;

        // Validation
        if (!name || !email || !message) {
            return res.status(400).json({ 
                success: false, 
                message: 'Name, email, and message are required.' 
            });
        }

        const submission = {
            name, email, phone: phone || '', 
            company: company || '', service: service || '',
            message, ip_address: req.ip,
            created_at: new Date()
        };

        // Store in database or memory
        if (db) {
            await db.execute(
                'INSERT INTO contact_submissions (name, email, phone, company, service, message, ip_address) VALUES (?, ?, ?, ?, ?, ?, ?)',
                [name, email, phone || '', company || '', service || '', message, req.ip]
            );
        } else {
            submission.id = contactSubmissions.length + 1;
            submission.is_read = false;
            contactSubmissions.push(submission);
        }

        // Send notification email
        const emailHtml = `
            <div style="font-family: 'Segoe UI', Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #f8fafc; border-radius: 12px; overflow: hidden;">
                <div style="background: linear-gradient(135deg, #0a2540, #2563EB); padding: 30px; text-align: center;">
                    <h1 style="color: #fff; margin: 0; font-size: 24px;">🔔 New Contact Form Submission</h1>
                </div>
                <div style="padding: 30px;">
                    <table style="width: 100%; border-collapse: collapse;">
                        <tr><td style="padding: 12px; font-weight: bold; color: #475569; border-bottom: 1px solid #e2e8f0;">Name</td><td style="padding: 12px; color: #0f172a; border-bottom: 1px solid #e2e8f0;">${name}</td></tr>
                        <tr><td style="padding: 12px; font-weight: bold; color: #475569; border-bottom: 1px solid #e2e8f0;">Email</td><td style="padding: 12px; color: #0f172a; border-bottom: 1px solid #e2e8f0;"><a href="mailto:${email}">${email}</a></td></tr>
                        <tr><td style="padding: 12px; font-weight: bold; color: #475569; border-bottom: 1px solid #e2e8f0;">Phone</td><td style="padding: 12px; color: #0f172a; border-bottom: 1px solid #e2e8f0;">${phone || 'N/A'}</td></tr>
                        <tr><td style="padding: 12px; font-weight: bold; color: #475569; border-bottom: 1px solid #e2e8f0;">Company</td><td style="padding: 12px; color: #0f172a; border-bottom: 1px solid #e2e8f0;">${company || 'N/A'}</td></tr>
                        <tr><td style="padding: 12px; font-weight: bold; color: #475569; border-bottom: 1px solid #e2e8f0;">Service</td><td style="padding: 12px; color: #0f172a; border-bottom: 1px solid #e2e8f0;">${service || 'N/A'}</td></tr>
                        <tr><td style="padding: 12px; font-weight: bold; color: #475569;" valign="top">Message</td><td style="padding: 12px; color: #0f172a;">${message}</td></tr>
                    </table>
                </div>
                <div style="background: #f1f5f9; padding: 15px; text-align: center; font-size: 13px; color: #94a3b8;">
                    Submitted on ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })} IST
                </div>
            </div>
        `;

        await sendEmail(
            process.env.SMTP_FROM || 'info@primetroniqinnovations.com',
            `New Inquiry from ${name} - Primetroniq Innovations`,
            emailHtml
        );

        res.json({ success: true, message: 'Thank you! Your message has been sent successfully.' });

    } catch (err) {
        console.error('Contact form error:', err);
        res.status(500).json({ success: false, message: 'An error occurred. Please try again later.' });
    }
});

// ─── POST /api/book-demo ────────────────────────────────────
router.post('/book-demo', async (req, res) => {
    try {
        const { name, email, phone, company, service, preferredDate, message } = req.body;

        if (!name || !email || !phone) {
            return res.status(400).json({ success: false, message: 'Name, email, and phone are required.' });
        }

        // Store as contact submission with demo tag
        const demoMessage = `[DEMO REQUEST]\nPreferred Date: ${preferredDate || 'Not specified'}\nService: ${service || 'Not specified'}\n\n${message || ''}`;

        if (db) {
            await db.execute(
                'INSERT INTO contact_submissions (name, email, phone, company, service, message, ip_address) VALUES (?, ?, ?, ?, ?, ?, ?)',
                [name, email, phone, company || '', service || '', demoMessage, req.ip]
            );
        } else {
            contactSubmissions.push({
                id: contactSubmissions.length + 1,
                name, email, phone, company: company || '',
                service: service || '', message: demoMessage,
                ip_address: req.ip, created_at: new Date(), is_read: false
            });
        }

        // Send email notification
        await sendEmail(
            process.env.SMTP_FROM || 'info@primetroniqinnovations.com',
            `📅 Demo Request from ${name} - Primetroniq Innovations`,
            `<h2>New Demo Request</h2><p><strong>Name:</strong> ${name}</p><p><strong>Email:</strong> ${email}</p><p><strong>Phone:</strong> ${phone}</p><p><strong>Company:</strong> ${company || 'N/A'}</p><p><strong>Service:</strong> ${service || 'N/A'}</p><p><strong>Preferred Date:</strong> ${preferredDate || 'N/A'}</p><p><strong>Message:</strong> ${message || 'N/A'}</p>`
        );

        res.json({ success: true, message: 'Demo request submitted! We will contact you shortly.' });
    } catch (err) {
        console.error('Demo booking error:', err);
        res.status(500).json({ success: false, message: 'An error occurred. Please try again.' });
    }
});

// ─── GET /api/submissions (Admin only) ──────────────────────
router.get('/submissions', async (req, res) => {
    if (!req.session || !req.session.isAdmin) {
        return res.status(401).json({ success: false, message: 'Unauthorized' });
    }

    try {
        if (db) {
            const [rows] = await db.execute('SELECT * FROM contact_submissions ORDER BY created_at DESC');
            res.json({ success: true, data: rows });
        } else {
            res.json({ success: true, data: contactSubmissions.sort((a, b) => b.created_at - a.created_at) });
        }
    } catch (err) {
        res.status(500).json({ success: false, message: 'Error fetching submissions' });
    }
});

// ─── POST /api/smtp-settings (Admin only) ───────────────────
router.post('/smtp-settings', async (req, res) => {
    if (!req.session || !req.session.isAdmin) {
        return res.status(401).json({ success: false, message: 'Unauthorized' });
    }

    try {
        const { host, port, secure, username, password, from_email } = req.body;

        smtpSettings = {
            host: host || '',
            port: parseInt(port) || 587,
            secure: secure === 'true' || secure === true,
            user: username || '',
            pass: password || '',
            from: from_email || 'info@primetroniqinnovations.com'
        };

        if (db) {
            await db.execute(
                `INSERT INTO smtp_settings (id, host, port, is_secure, username, password, from_email) 
                 VALUES (1, ?, ?, ?, ?, ?, ?)
                 ON DUPLICATE KEY UPDATE host=?, port=?, is_secure=?, username=?, password=?, from_email=?`,
                [host, port, secure, username, password, from_email, host, port, secure, username, password, from_email]
            );
        }

        res.json({ success: true, message: 'SMTP settings updated successfully.' });
    } catch (err) {
        res.status(500).json({ success: false, message: 'Error saving SMTP settings' });
    }
});

// ─── GET /api/smtp-settings (Admin only) ─────────────────────
router.get('/smtp-settings', async (req, res) => {
    if (!req.session || !req.session.isAdmin) {
        return res.status(401).json({ success: false, message: 'Unauthorized' });
    }

    res.json({
        success: true,
        data: {
            host: smtpSettings.host,
            port: smtpSettings.port,
            secure: smtpSettings.secure,
            username: smtpSettings.user,
            password: smtpSettings.pass ? '••••••••' : '',
            from_email: smtpSettings.from
        }
    });
});

// ─── POST /api/test-smtp (Admin only) ───────────────────────
router.post('/test-smtp', async (req, res) => {
    if (!req.session || !req.session.isAdmin) {
        return res.status(401).json({ success: false, message: 'Unauthorized' });
    }

    const result = await sendEmail(
        smtpSettings.from,
        '✅ SMTP Test - Primetroniq Innovations',
        '<h2>SMTP Configuration Test</h2><p>If you received this email, your SMTP settings are configured correctly!</p><p>Sent at: ' + new Date().toLocaleString() + '</p>'
    );

    if (result) {
        res.json({ success: true, message: 'Test email sent successfully!' });
    } else {
        res.json({ success: false, message: 'Failed to send test email. Check your SMTP settings.' });
    }
});

// Export for use in server.js and admin.js
router.getSubmissions = () => contactSubmissions;
router.getSmtpSettings = () => smtpSettings;

module.exports = router;
