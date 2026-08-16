const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');

// ─── Default Admin Credentials ──────────────────────────────
const ADMIN_EMAIL = process.env.ADMIN_EMAIL || 'admin@primetroniqinnovations.com';
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || 'admin123';

// ─── Auth Middleware ─────────────────────────────────────────
function requireAdmin(req, res, next) {
    if (req.session && req.session.isAdmin) {
        return next();
    }
    res.redirect('/admin/login');
}

// ─── Admin Login Page ────────────────────────────────────────
router.get('/login', (req, res) => {
    if (req.session && req.session.isAdmin) {
        return res.redirect('/admin');
    }
    res.render('admin/login', {
        title: 'Admin Login',
        error: null
    });
});

// ─── Admin Login POST ────────────────────────────────────────
router.post('/login', (req, res) => {
    const { email, password } = req.body;

    if (email === ADMIN_EMAIL && password === ADMIN_PASSWORD) {
        req.session.isAdmin = true;
        req.session.adminEmail = email;
        return res.redirect('/admin');
    }

    res.render('admin/login', {
        title: 'Admin Login',
        error: 'Invalid email or password'
    });
});

// ─── Admin Logout ────────────────────────────────────────────
router.get('/logout', (req, res) => {
    req.session.destroy();
    res.redirect('/admin/login');
});

// ─── Admin Dashboard ─────────────────────────────────────────
router.get('/', requireAdmin, async (req, res) => {
    let submissions = [];
    let totalSubmissions = 0;
    let unreadCount = 0;
    let todayCount = 0;
    
    // Pagination parameters
    let page = parseInt(req.query.page) || 1;
    let limit = parseInt(req.query.limit) || 25;
    
    // Validate limit to be 25, 50, or 100
    if (![25, 50, 100].includes(limit)) {
        limit = 25;
    }
    if (page < 1) page = 1;
    
    const offset = (page - 1) * limit;

    try {
        const mysql = require('mysql2/promise');
        const db = await mysql.createConnection({
            host: process.env.DB_HOST,
            user: process.env.DB_USER,
            password: process.env.DB_PASSWORD,
            database: process.env.DB_NAME
        });

        // Get total counts
        const [[{total}]] = await db.execute('SELECT COUNT(*) as total FROM contact_submissions');
        totalSubmissions = total;

        const [[{unread}]] = await db.execute('SELECT COUNT(*) as unread FROM contact_submissions WHERE is_read = 0');
        unreadCount = unread;

        const today = new Date().toISOString().slice(0, 10);
        const [[{today_count}]] = await db.execute('SELECT COUNT(*) as today_count FROM contact_submissions WHERE DATE(created_at) = ?', [today]);
        todayCount = today_count;

        // Get paginated submissions
        // mysql2 requires limit/offset to be passed as strings or correctly parsed integers if using placeholders.
        // It's safer to format them directly into the query string for limit/offset.
        const [rows] = await db.execute(`SELECT * FROM contact_submissions ORDER BY created_at DESC LIMIT ${limit} OFFSET ${offset}`);
        submissions = rows;

        await db.end();
    } catch (err) {
        console.error("Dashboard DB Error:", err);
        // Fallback for in-memory if DB fails
        const apiRoutes = require('./api');
        const allSubs = apiRoutes.getSubmissions() || [];
        totalSubmissions = allSubs.length;
        unreadCount = allSubs.filter(s => !s.is_read).length;
        todayCount = allSubs.filter(s => s.created_at && s.created_at.toISOString().slice(0, 10) === new Date().toISOString().slice(0, 10)).length;
        submissions = allSubs.slice(offset, offset + limit);
    }
    
    const totalPages = Math.ceil(totalSubmissions / limit);

    res.render('admin/dashboard', {
        title: 'Admin Dashboard',
        adminEmail: req.session.adminEmail,
        submissions,
        totalSubmissions,
        unreadCount,
        todayCount,
        pagination: {
            page,
            limit,
            totalPages
        }
    });
});

// ─── SMTP Settings Page ─────────────────────────────────────
router.get('/settings', requireAdmin, (req, res) => {
    const apiRoutes = require('./api');
    const smtp = apiRoutes.getSmtpSettings();

    res.render('admin/settings', {
        title: 'SMTP Settings',
        adminEmail: req.session.adminEmail,
        smtp: {
            host: smtp.host,
            port: smtp.port,
            secure: smtp.secure,
            username: smtp.user,
            password: smtp.pass ? '••••••••' : '',
            from_email: smtp.from
        },
        success: req.query.success || null,
        error: req.query.error || null
    });
});

module.exports = router;
