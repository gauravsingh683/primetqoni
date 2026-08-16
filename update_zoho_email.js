const fs = require('fs');

let fileContent = fs.readFileSync('d:/primetroniqinnovations/data/servicesData.js', 'utf8');

const newZohoEmailContent = `'zoho-email': { 
        title: 'Zoho Mail & Workplace Suite', 
        category: 'Business Email & CRM', 
        imageUrl: 'https://images.unsplash.com/photo-1596526131083-e8c633c948d2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
        actionButton: { text: 'Book Demo', url: '/book-demo' },
        description: \`
        <div class="animate-on-scroll">
            <p style="font-size: 1.2rem; color: var(--primary); font-weight: 700; text-transform: uppercase; letter-spacing: 1px;">Ad-Free Business Email & Complete Productivity Suite</p>
            <p style="font-size: 1.1rem; color: var(--text-primary); font-weight: 500;"><strong>Experience secure, encrypted, privacy-guaranteed email with Zoho Workplace.</strong></p>
            <p>Whether you need a simple, ad-free business email hosting solution (Zoho Mail) or a comprehensive unified communication and collaboration platform (Zoho Workplace), Primetroniq Innovations provides expert setup, licensing, and 1-click migration from legacy systems like Google Workspace or Microsoft Exchange.</p>
        </div>

        <div class="animate-on-scroll" style="margin-top: 50px;">
            <h3 style="color: var(--primary-dark); font-size: 2rem; margin-bottom: 20px; text-align: center;">More Than Just Email: The Zoho Workplace Suite</h3>
            <p style="text-align: center; max-width: 800px; margin: 0 auto 40px auto; color: var(--text-secondary);">Zoho Workplace bundles a complete set of creation, collaboration, and communication tools. Say goodbye to scattered apps and disjointed workflows.</p>
            
            <div class="grid grid-cols-2" style="gap: 30px; margin-bottom: 50px;">
                <!-- Module 1: Zoho Mail -->
                <div class="card hover-lift" style="padding: 30px; border: 1px solid var(--glass-border); border-radius: 16px; background: var(--bg-surface);">
                    <i class="fas fa-envelope-open-text" style="font-size: 2.5rem; color: #f59e0b; margin-bottom: 15px;"></i>
                    <h4 style="font-size: 1.4rem; color: var(--primary-dark); margin-bottom: 15px; font-weight: 700;">Secure Zoho Mail</h4>
                    <p style="color: var(--text-secondary); font-size: 0.95rem; margin-bottom: 15px;">Enterprise-grade email hosting with top-tier security and absolutely no ads.</p>
                    <ul style="color: var(--text-secondary); font-size: 0.9rem; padding-left: 20px;">
                        <li><strong>Custom Domain:</strong> Look professional with custom @yourcompany.com email addresses.</li>
                        <li><strong>Offline Mode:</strong> Read and reply to emails even when your internet connection drops.</li>
                        <li><strong>Streams:</strong> Collaborate socially on emails by tagging teammates instead of endless forwarding.</li>
                        <li><strong>Secure & Private:</strong> 100% ad-free, S/MIME encryption, and stringent privacy protocols.</li>
                    </ul>
                </div>

                <!-- Module 2: Unified Communication -->
                <div class="card hover-lift" style="padding: 30px; border: 1px solid var(--glass-border); border-radius: 16px; background: var(--bg-surface);">
                    <i class="fas fa-comments" style="font-size: 2.5rem; color: #3b82f6; margin-bottom: 15px;"></i>
                    <h4 style="font-size: 1.4rem; color: var(--primary-dark); margin-bottom: 15px; font-weight: 700;">Unified Communication</h4>
                    <p style="color: var(--text-secondary); font-size: 0.95rem; margin-bottom: 15px;">Stay connected with your team via instant messaging and high-definition video conferencing.</p>
                    <ul style="color: var(--text-secondary); font-size: 0.9rem; padding-left: 20px;">
                        <li><strong>Zoho Cliq:</strong> Instant team chat, dedicated channels, audio calls, and bot integrations.</li>
                        <li><strong>Zoho Meeting:</strong> Secure web conferencing and webinar platform with screen sharing.</li>
                        <li><strong>In-Context Chat:</strong> Chat with colleagues directly from within an email or a document you are co-editing.</li>
                        <li><strong>Mobile Ready:</strong> Stay in the loop with powerful native apps for iOS and Android.</li>
                    </ul>
                </div>

                <!-- Module 3: Office Suite -->
                <div class="card hover-lift" style="padding: 30px; border: 1px solid var(--glass-border); border-radius: 16px; background: var(--bg-surface);">
                    <i class="fas fa-file-alt" style="font-size: 2.5rem; color: #10b981; margin-bottom: 15px;"></i>
                    <h4 style="font-size: 1.4rem; color: var(--primary-dark); margin-bottom: 15px; font-weight: 700;">Powerful Office Suite</h4>
                    <p style="color: var(--text-secondary); font-size: 0.95rem; margin-bottom: 15px;">Create, collaborate, and publish documents, spreadsheets, and presentations natively in the cloud.</p>
                    <ul style="color: var(--text-secondary); font-size: 0.9rem; padding-left: 20px;">
                        <li><strong>Zoho Writer:</strong> A minimalist word processor with real-time co-authoring and AI-assisted grammar tools.</li>
                        <li><strong>Zoho Sheet:</strong> Advanced spreadsheets with AI data insights, pivot tables, and custom functions.</li>
                        <li><strong>Zoho Show:</strong> Create visually stunning presentations and broadcast them securely to remote teams.</li>
                        <li><strong>Microsoft Compatibility:</strong> Seamlessly import, edit, and export Word, Excel, and PowerPoint files.</li>
                    </ul>
                </div>

                <!-- Module 4: Cloud Storage -->
                <div class="card hover-lift" style="padding: 30px; border: 1px solid var(--glass-border); border-radius: 16px; background: var(--bg-surface);">
                    <i class="fas fa-cloud-upload-alt" style="font-size: 2.5rem; color: #8b5cf6; margin-bottom: 15px;"></i>
                    <h4 style="font-size: 1.4rem; color: var(--primary-dark); margin-bottom: 15px; font-weight: 700;">WorkDrive Cloud Storage</h4>
                    <p style="color: var(--text-secondary); font-size: 0.95rem; margin-bottom: 15px;">A secure, shared workspace for your team to store, organize, and manage files centrally.</p>
                    <ul style="color: var(--text-secondary); font-size: 0.9rem; padding-left: 20px;">
                        <li><strong>Team Folders:</strong> Create dedicated workspaces for different departments with granular access controls.</li>
                        <li><strong>File Versioning:</strong> Automatically save previous versions of files so you can revert changes anytime.</li>
                        <li><strong>External Sharing:</strong> Share large files securely with external clients using password-protected links and expiration dates.</li>
                        <li><strong>Desktop Sync:</strong> Access cloud files directly from your PC/Mac without taking up local hard drive space.</li>
                    </ul>
                </div>
            </div>
        </div>

        <div class="animate-on-scroll" style="background: var(--bg-surface); padding: 50px; border-radius: 24px; border: 1px solid var(--glass-border); margin-bottom: 60px; box-shadow: var(--shadow-md);">
            <div class="grid grid-cols-2" style="gap: 40px; align-items: center;">
                <div>
                    <h3 style="color: var(--primary-dark); font-size: 2rem; margin-bottom: 20px;">Seamless 1-Click Migration</h3>
                    <p style="color: var(--text-secondary); font-size: 1rem; line-height: 1.7; margin-bottom: 20px;">Worried about losing historical emails, contacts, or calendar events? Primetroniq Innovations handles your entire migration process seamlessly with zero downtime.</p>
                    <ul style="color: var(--text-secondary); font-size: 0.95rem; padding-left: 0; list-style-type: none; margin: 0; line-height: 1.8;">
                        <li><i class="fas fa-check-circle" style="color: var(--primary); margin-right: 10px;"></i> Migrate from Google Workspace</li>
                        <li><i class="fas fa-check-circle" style="color: var(--primary); margin-right: 10px;"></i> Migrate from Microsoft Office 365</li>
                        <li><i class="fas fa-check-circle" style="color: var(--primary); margin-right: 10px;"></i> Migrate from Microsoft Exchange Server</li>
                        <li><i class="fas fa-check-circle" style="color: var(--primary); margin-right: 10px;"></i> IMAP/POP3 migrations for custom hosting</li>
                    </ul>
                </div>
                <div style="background: var(--gradient-primary); padding: 30px; border-radius: 16px; color: white; text-align: center;">
                    <i class="fas fa-shield-alt" style="font-size: 3rem; margin-bottom: 20px;"></i>
                    <h4 style="font-size: 1.5rem; margin-bottom: 15px; font-weight: 700;">Enterprise-Grade Security</h4>
                    <p style="font-size: 0.9rem; opacity: 0.9; margin-bottom: 20px;">Compliance and security are built-in from day one.</p>
                    <div style="display: flex; flex-wrap: wrap; justify-content: center; gap: 10px;">
                        <span class="badge" style="background: rgba(255,255,255,0.2); color: white; border: none;">eDiscovery</span>
                        <span class="badge" style="background: rgba(255,255,255,0.2); color: white; border: none;">S/MIME Encryption</span>
                        <span class="badge" style="background: rgba(255,255,255,0.2); color: white; border: none;">GDPR Compliant</span>
                        <span class="badge" style="background: rgba(255,255,255,0.2); color: white; border: none;">Two-Factor Auth</span>
                        <span class="badge" style="background: rgba(255,255,255,0.2); color: white; border: none;">EAR (Encryption At Rest)</span>
                    </div>
                </div>
            </div>
        </div>

        <div class="animate-on-scroll" style="margin-top: 50px;">
            <div style="display: flex; justify-content: space-between; align-items: flex-end; margin-bottom: 30px;">
                <h3 style="color: var(--primary-dark); font-size: 2rem; margin: 0;">Zoho Mail & Workplace Pricing</h3>
                <span class="badge" style="background: rgba(34, 197, 94, 0.1); color: #16a34a; font-size: 0.9rem; border: 1px solid rgba(34, 197, 94, 0.2);">Estimated Pricing for India (INR)</span>
            </div>
            
            <div class="grid grid-cols-3" style="gap: 20px; margin-bottom: 40px;">
                
                <!-- Mail Lite Plan -->
                <div class="card hover-lift" style="padding: 30px; border: 1px solid var(--glass-border); border-radius: 16px; background: var(--bg-surface); position: relative;">
                    <h4 style="font-size: 1.4rem; color: var(--primary-dark); margin-bottom: 10px; font-weight: 700;">Mail Lite</h4>
                    <p style="color: var(--text-secondary); font-size: 0.9rem; margin-bottom: 20px; min-height: 40px;">Stand-alone email hosting for small teams needing a professional domain.</p>
                    <div style="margin-bottom: 25px;">
                        <span style="font-size: 2.5rem; font-weight: 800; color: var(--primary);">₹59</span>
                        <span style="color: var(--text-secondary); font-size: 0.85rem;">/user/month (annual)</span>
                    </div>
                    <a href="/contact" class="btn btn-outline" style="width: 100%; text-align: center; margin-bottom: 25px;">Buy Now</a>
                    
                    <h5 style="font-size: 0.95rem; font-weight: 700; margin-bottom: 15px; color: var(--text-primary);">Includes:</h5>
                    <ul style="color: var(--text-secondary); font-size: 0.9rem; padding-left: 0; list-style-type: none; margin: 0; line-height: 1.8;">
                        <li><i class="fas fa-check" style="color: #10b981; margin-right: 8px;"></i> Email hosting for multiple domains</li>
                        <li><i class="fas fa-check" style="color: #10b981; margin-right: 8px;"></i> 5 GB Storage per user</li>
                        <li><i class="fas fa-check" style="color: #10b981; margin-right: 8px;"></i> Email routing and aliasing</li>
                        <li><i class="fas fa-check" style="color: #10b981; margin-right: 8px;"></i> Offline access & mobile apps</li>
                        <li><i class="fas fa-check" style="color: #10b981; margin-right: 8px;"></i> IMAP/POP support</li>
                    </ul>
                </div>

                <!-- Workplace Standard Plan -->
                <div class="card hover-lift" style="padding: 30px; border: 2px solid var(--primary); border-radius: 16px; background: var(--bg-surface); position: relative; box-shadow: 0 10px 30px rgba(10, 37, 64, 0.1);">
                    <div style="position: absolute; top: -15px; left: 50%; transform: translateX(-50%); background: var(--gradient-primary); color: white; padding: 5px 15px; border-radius: 20px; font-size: 0.8rem; font-weight: 700; letter-spacing: 1px; text-transform: uppercase;">Most Popular</div>
                    <h4 style="font-size: 1.4rem; color: var(--primary-dark); margin-bottom: 10px; font-weight: 700;">Workplace Standard</h4>
                    <p style="color: var(--text-secondary); font-size: 0.9rem; margin-bottom: 20px; min-height: 40px;">The complete unified communication and office suite bundle.</p>
                    <div style="margin-bottom: 25px;">
                        <span style="font-size: 2.5rem; font-weight: 800; color: var(--primary);">₹99</span>
                        <span style="color: var(--text-secondary); font-size: 0.85rem;">/user/month (annual)</span>
                    </div>
                    <a href="/contact" class="btn btn-primary" style="width: 100%; text-align: center; margin-bottom: 25px;">Buy Now</a>
                    
                    <h5 style="font-size: 0.95rem; font-weight: 700; margin-bottom: 15px; color: var(--text-primary);">Everything in Mail Lite, plus:</h5>
                    <ul style="color: var(--text-secondary); font-size: 0.9rem; padding-left: 0; list-style-type: none; margin: 0; line-height: 1.8;">
                        <li><i class="fas fa-check" style="color: #10b981; margin-right: 8px;"></i> 30 GB Mail Storage per user</li>
                        <li><i class="fas fa-check" style="color: #10b981; margin-right: 8px;"></i> <strong>Zoho WorkDrive</strong> (10GB shared/user)</li>
                        <li><i class="fas fa-check" style="color: #10b981; margin-right: 8px;"></i> <strong>Office Suite</strong> (Writer, Sheet, Show)</li>
                        <li><i class="fas fa-check" style="color: #10b981; margin-right: 8px;"></i> <strong>Zoho Cliq</strong> (Team messaging)</li>
                        <li><i class="fas fa-check" style="color: #10b981; margin-right: 8px;"></i> <strong>Zoho Meeting</strong> (Video conferencing)</li>
                    </ul>
                </div>

                <!-- Workplace Professional Plan -->
                <div class="card hover-lift" style="padding: 30px; border: 1px solid var(--glass-border); border-radius: 16px; background: #0a2540; position: relative;">
                    <h4 style="font-size: 1.4rem; color: white; margin-bottom: 10px; font-weight: 700;">Workplace Professional</h4>
                    <p style="color: rgba(255,255,255,0.7); font-size: 0.9rem; margin-bottom: 20px; min-height: 40px;">Advanced capabilities with massive storage and enterprise compliance.</p>
                    <div style="margin-bottom: 25px;">
                        <span style="font-size: 2.5rem; font-weight: 800; color: white;">₹379</span>
                        <span style="color: rgba(255,255,255,0.7); font-size: 0.85rem;">/user/month (annual)</span>
                    </div>
                    <a href="/contact" class="btn" style="background: white; color: #0a2540; width: 100%; text-align: center; margin-bottom: 25px; font-weight: 700;">Buy Now</a>
                    
                    <h5 style="font-size: 0.95rem; font-weight: 700; margin-bottom: 15px; color: white;">Everything in Standard, plus:</h5>
                    <ul style="color: rgba(255,255,255,0.85); font-size: 0.9rem; padding-left: 0; list-style-type: none; margin: 0; line-height: 1.8;">
                        <li><i class="fas fa-shield-alt" style="color: #38bdf8; margin-right: 8px;"></i> 100 GB Mail Storage per user</li>
                        <li><i class="fas fa-shield-alt" style="color: #38bdf8; margin-right: 8px;"></i> 100 GB WorkDrive Storage per user</li>
                        <li><i class="fas fa-shield-alt" style="color: #38bdf8; margin-right: 8px;"></i> eDiscovery & Data Retention</li>
                        <li><i class="fas fa-shield-alt" style="color: #38bdf8; margin-right: 8px;"></i> S/MIME Encryption</li>
                        <li><i class="fas fa-shield-alt" style="color: #38bdf8; margin-right: 8px;"></i> Active Directory Integration</li>
                    </ul>
                </div>
                
            </div>
            <p style="font-size: 0.8rem; color: var(--text-secondary); text-align: center; font-style: italic;">* Note: Prices shown are estimates for the Indian market, billed annually, and are exclusive of applicable GST. Prices may vary based on Zoho's current regional pricing strategies and promotions.</p>
        </div>
        \`,
        benefits: [
            { title: 'Privacy Guaranteed', text: 'Unlike competitors, Zoho never scans your emails for ad targeting. Your data is strictly yours.' },
            { title: 'Incredible Value', text: 'Get an entire suite of office apps and communication tools for less than the cost of a basic competitor email.' },
            { title: 'Zero Downtime Migration', text: 'Our experts ensure a smooth transition from Google or Microsoft with no lost data or downtime.' },
            { title: 'Advanced Security', text: 'Protect your business communications with S/MIME, 2FA, and robust spam filters.' }
        ],
        features: ['Ad-Free Secure Email', 'Zoho WorkDrive (Cloud Storage)', 'Zoho Cliq (Team Chat)', 'Zoho Meeting (Video Conferencing)', 'Office Suite (Writer, Sheet, Show)', 'eDiscovery & Compliance'],
        techStack: ['Zoho Cloud Infrastructure', 'IMAP/POP/ActiveSync', 'S/MIME Encryption', 'SAML & SSO', 'Active Directory Sync'],
        keywords: 'Zoho Mail Pricing India, Zoho Workplace, Business Email Hosting, Google Workspace Alternative, Corporate Email Setup'
    },`;

// Replace the old zoho-email block
const zohoRegex = /'zoho-email':\s*\{[\s\S]*?keywords:\s*'[^']*'\s*\},/g;
if(zohoRegex.test(fileContent)) {
    fileContent = fileContent.replace(zohoRegex, newZohoEmailContent);
    fs.writeFileSync('d:/primetroniqinnovations/data/servicesData.js', fileContent);
    console.log("Successfully rebuilt zoho-email page with massive 4x content and pricing.");
} else {
    console.log("Regex match failed for zoho-email.");
}
