const fs = require('fs');

let fileContent = fs.readFileSync('d:/primetroniqinnovations/data/servicesData.js', 'utf8');

const newGoogleContent = `'google-workspace': { 
        title: 'Google Workspace Implementation', 
        category: 'Business Email & CRM', 
        imageUrl: 'https://images.unsplash.com/photo-1573804633927-bfcbcd909acd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
        actionButton: { text: 'Book Demo', url: '/book-demo' },
        description: \`
        <div class="animate-on-scroll">
            <p style="font-size: 1.2rem; color: var(--primary); font-weight: 700; text-transform: uppercase; letter-spacing: 1px;">The Future of Work is Here</p>
            <p style="font-size: 1.1rem; color: var(--text-primary); font-weight: 500;"><strong>Connect, create, and collaborate seamlessly with Google Workspace.</strong></p>
            <p>Google Workspace (formerly G Suite) integrates the world's most popular productivity apps into a single, highly secure, cloud-native platform. As a trusted partner, Primetroniq Innovations provides expert consultation, licensing, and zero-downtime migration services to help your enterprise transition to Google's powerful ecosystem.</p>
        </div>

        <div class="animate-on-scroll" style="margin-top: 50px;">
            <h3 style="color: var(--primary-dark); font-size: 2rem; margin-bottom: 20px; text-align: center;">A Complete Collaboration Ecosystem</h3>
            <p style="text-align: center; max-width: 800px; margin: 0 auto 40px auto; color: var(--text-secondary);">Empower your employees to do their best work from anywhere, on any device, with tools they already know and love.</p>
            
            <div class="grid grid-cols-2" style="gap: 30px; margin-bottom: 50px;">
                <!-- Module 1: Communication -->
                <div class="card hover-lift" style="padding: 30px; border: 1px solid var(--glass-border); border-radius: 16px; background: var(--bg-surface);">
                    <i class="fas fa-envelope" style="font-size: 2.5rem; color: #ea4335; margin-bottom: 15px;"></i>
                    <h4 style="font-size: 1.4rem; color: var(--primary-dark); margin-bottom: 15px; font-weight: 700;">Communication Hub</h4>
                    <p style="color: var(--text-secondary); font-size: 0.95rem; margin-bottom: 15px;">Secure business email and high-fidelity video conferencing.</p>
                    <ul style="color: var(--text-secondary); font-size: 0.9rem; padding-left: 20px;">
                        <li><strong>Gmail for Business:</strong> Professional @yourcompany.com email with industry-leading spam and phishing protection.</li>
                        <li><strong>Google Meet:</strong> Enterprise-grade video conferencing with noise cancellation, attendance tracking, and live streaming.</li>
                        <li><strong>Google Chat:</strong> 1:1 and group messaging with dedicated "Spaces" for deep project collaboration.</li>
                        <li><strong>Google Calendar:</strong> Smart scheduling, meeting room booking, and team availability sharing.</li>
                    </ul>
                </div>

                <!-- Module 2: Collaboration -->
                <div class="card hover-lift" style="padding: 30px; border: 1px solid var(--glass-border); border-radius: 16px; background: var(--bg-surface);">
                    <i class="fas fa-file-alt" style="font-size: 2.5rem; color: #4285f4; margin-bottom: 15px;"></i>
                    <h4 style="font-size: 1.4rem; color: var(--primary-dark); margin-bottom: 15px; font-weight: 700;">Content Creation</h4>
                    <p style="color: var(--text-secondary); font-size: 0.95rem; margin-bottom: 15px;">Create and edit text documents, robust spreadsheets, and beautiful presentations.</p>
                    <ul style="color: var(--text-secondary); font-size: 0.9rem; padding-left: 20px;">
                        <li><strong>Google Docs:</strong> Real-time co-authoring with instant auto-save and comprehensive version history.</li>
                        <li><strong>Google Sheets:</strong> Powerful data analysis with Smart Fill, AI-driven insights, and seamless macro support.</li>
                        <li><strong>Google Slides:</strong> Create polished pitch decks collaboratively with built-in Q&A features.</li>
                        <li><strong>Google Forms:</strong> Easily create custom surveys and questionnaires to gather customer or employee feedback.</li>
                    </ul>
                </div>

                <!-- Module 3: Storage -->
                <div class="card hover-lift" style="padding: 30px; border: 1px solid var(--glass-border); border-radius: 16px; background: var(--bg-surface);">
                    <i class="fas fa-hdd" style="font-size: 2.5rem; color: #fbbc04; margin-bottom: 15px;"></i>
                    <h4 style="font-size: 1.4rem; color: var(--primary-dark); margin-bottom: 15px; font-weight: 700;">Cloud Storage & Search</h4>
                    <p style="color: var(--text-secondary); font-size: 0.95rem; margin-bottom: 15px;">Store, access, and share files in one secure place.</p>
                    <ul style="color: var(--text-secondary); font-size: 0.9rem; padding-left: 20px;">
                        <li><strong>Google Drive:</strong> Massive pooled storage limits for your entire organization.</li>
                        <li><strong>Shared Drives:</strong> Store files at the team level, ensuring data stays with the company even if an employee leaves.</li>
                        <li><strong>Drive for Desktop:</strong> Access cloud files directly from your Mac or PC without using up local disk space.</li>
                        <li><strong>Cloud Search:</strong> Use Google's powerful search engine to find files, emails, and data across your entire company instantly.</li>
                    </ul>
                </div>

                <!-- Module 4: Security -->
                <div class="card hover-lift" style="padding: 30px; border: 1px solid var(--glass-border); border-radius: 16px; background: var(--bg-surface);">
                    <i class="fas fa-shield-alt" style="font-size: 2.5rem; color: #34a853; margin-bottom: 15px;"></i>
                    <h4 style="font-size: 1.4rem; color: var(--primary-dark); margin-bottom: 15px; font-weight: 700;">Enterprise Security & Control</h4>
                    <p style="color: var(--text-secondary); font-size: 0.95rem; margin-bottom: 15px;">Manage users, devices, and data securely and easily.</p>
                    <ul style="color: var(--text-secondary); font-size: 0.9rem; padding-left: 20px;">
                        <li><strong>Admin Console:</strong> Centralized dashboard to add users, manage devices, and configure security settings.</li>
                        <li><strong>Google Vault:</strong> Retain, search, and export your organization's data for eDiscovery and compliance.</li>
                        <li><strong>Endpoint Management:</strong> Require screen locks, wipe data remotely, and enforce policies on employee devices.</li>
                        <li><strong>Data Loss Prevention (DLP):</strong> Prevent sensitive information (like credit card numbers) from leaking outside the company.</li>
                    </ul>
                </div>
            </div>
        </div>

        <div class="animate-on-scroll" style="background: var(--bg-surface); padding: 50px; border-radius: 24px; border: 1px solid var(--glass-border); margin-bottom: 60px; box-shadow: var(--shadow-md);">
            <div class="grid grid-cols-2" style="gap: 40px; align-items: center;">
                <div style="background: linear-gradient(135deg, #4285f4 0%, #ea4335 50%, #fbbc04 100%); padding: 3px; border-radius: 16px;">
                    <div style="background: #111; padding: 30px; border-radius: 14px; color: white; text-align: center; height: 100%;">
                        <i class="fas fa-magic" style="font-size: 3rem; margin-bottom: 20px; color: #fff;"></i>
                        <h4 style="font-size: 1.8rem; margin-bottom: 15px; font-weight: 700; color: #fff;">Gemini AI for Workspace</h4>
                        <p style="font-size: 1rem; opacity: 0.9; margin-bottom: 20px; color: #ccc;">Supercharge your team's productivity with generative AI built right into your apps.</p>
                        <ul style="color: #ccc; font-size: 0.9rem; padding-left: 0; list-style-type: none; margin: 0; line-height: 1.8; text-align: left;">
                            <li><i class="fas fa-bolt" style="color: #fbbc04; margin-right: 10px;"></i> <strong>Help me write:</strong> Draft emails and documents instantly.</li>
                            <li><i class="fas fa-bolt" style="color: #fbbc04; margin-right: 10px;"></i> <strong>Help me organize:</strong> Generate complex spreadsheets from simple prompts.</li>
                            <li><i class="fas fa-bolt" style="color: #fbbc04; margin-right: 10px;"></i> <strong>Help me visualize:</strong> Create custom images for presentations.</li>
                        </ul>
                    </div>
                </div>
                <div>
                    <h3 style="color: var(--primary-dark); font-size: 2rem; margin-bottom: 20px;">Zero-Downtime Migration Services</h3>
                    <p style="color: var(--text-secondary); font-size: 1rem; line-height: 1.7; margin-bottom: 20px;">Changing email providers can be daunting. As certified Google Cloud Partners, we ensure your transition is smooth, secure, and invisible to your customers.</p>
                    <ul style="color: var(--text-secondary); font-size: 0.95rem; padding-left: 0; list-style-type: none; margin: 0; line-height: 1.8;">
                        <li><i class="fas fa-check-circle" style="color: #34a853; margin-right: 10px;"></i> Pre-migration technical assessment</li>
                        <li><i class="fas fa-check-circle" style="color: #34a853; margin-right: 10px;"></i> Legacy data transfer (emails, contacts, calendars)</li>
                        <li><i class="fas fa-check-circle" style="color: #34a853; margin-right: 10px;"></i> DNS configuration and routing setup</li>
                        <li><i class="fas fa-check-circle" style="color: #34a853; margin-right: 10px;"></i> Change management and team training</li>
                    </ul>
                </div>
            </div>
        </div>

        <div class="animate-on-scroll" style="margin-top: 50px;">
            <div style="display: flex; justify-content: space-between; align-items: flex-end; margin-bottom: 30px;">
                <h3 style="color: var(--primary-dark); font-size: 2rem; margin: 0;">Google Workspace Pricing</h3>
                <span class="badge" style="background: rgba(34, 197, 94, 0.1); color: #16a34a; font-size: 0.9rem; border: 1px solid rgba(34, 197, 94, 0.2);">Estimated Pricing for India (INR)</span>
            </div>
            
            <div class="grid grid-cols-3" style="gap: 20px; margin-bottom: 40px;">
                
                <!-- Business Starter Plan -->
                <div class="card hover-lift" style="padding: 30px; border: 1px solid var(--glass-border); border-radius: 16px; background: var(--bg-surface); position: relative;">
                    <h4 style="font-size: 1.4rem; color: var(--primary-dark); margin-bottom: 10px; font-weight: 700;">Business Starter</h4>
                    <p style="color: var(--text-secondary); font-size: 0.9rem; margin-bottom: 20px; min-height: 40px;">Professional office suite with 30 GB storage per user.</p>
                    <div style="margin-bottom: 25px;">
                        <span style="font-size: 2.5rem; font-weight: 800; color: var(--primary);">₹270</span>
                        <span style="color: var(--text-secondary); font-size: 0.85rem;">/user/month (annual)</span>
                    </div>
                    <a href="/contact" class="btn btn-outline" style="width: 100%; text-align: center; margin-bottom: 25px;">Buy Now</a>
                    
                    <ul style="color: var(--text-secondary); font-size: 0.9rem; padding-left: 0; list-style-type: none; margin: 0; line-height: 1.8;">
                        <li><i class="fas fa-check" style="color: #34a853; margin-right: 8px;"></i> Custom and secure business email</li>
                        <li><i class="fas fa-check" style="color: #34a853; margin-right: 8px;"></i> 100-participant video meetings</li>
                        <li><i class="fas fa-check" style="color: #34a853; margin-right: 8px;"></i> 30 GB pooled storage per user</li>
                        <li><i class="fas fa-check" style="color: #34a853; margin-right: 8px;"></i> Security and management controls</li>
                        <li><i class="fas fa-check" style="color: #34a853; margin-right: 8px;"></i> Standard Support</li>
                    </ul>
                </div>

                <!-- Business Standard Plan -->
                <div class="card hover-lift" style="padding: 30px; border: 2px solid var(--primary); border-radius: 16px; background: var(--bg-surface); position: relative; box-shadow: 0 10px 30px rgba(10, 37, 64, 0.1);">
                    <div style="position: absolute; top: -15px; left: 50%; transform: translateX(-50%); background: var(--gradient-primary); color: white; padding: 5px 15px; border-radius: 20px; font-size: 0.8rem; font-weight: 700; letter-spacing: 1px; text-transform: uppercase;">Most Popular</div>
                    <h4 style="font-size: 1.4rem; color: var(--primary-dark); margin-bottom: 10px; font-weight: 700;">Business Standard</h4>
                    <p style="color: var(--text-secondary); font-size: 0.9rem; margin-bottom: 20px; min-height: 40px;">Enhanced office suite with 2 TB storage and recording.</p>
                    <div style="margin-bottom: 25px;">
                        <span style="font-size: 2.5rem; font-weight: 800; color: var(--primary);">₹860</span>
                        <span style="color: var(--text-secondary); font-size: 0.85rem;">/user/month (annual)</span>
                    </div>
                    <a href="/contact" class="btn btn-primary" style="width: 100%; text-align: center; margin-bottom: 25px;">Buy Now</a>
                    
                    <ul style="color: var(--text-secondary); font-size: 0.9rem; padding-left: 0; list-style-type: none; margin: 0; line-height: 1.8;">
                        <li><i class="fas fa-check" style="color: #34a853; margin-right: 8px;"></i> Custom and secure business email</li>
                        <li><i class="fas fa-check" style="color: #34a853; margin-right: 8px;"></i> 150-participant meetings + recording</li>
                        <li><i class="fas fa-check" style="color: #34a853; margin-right: 8px;"></i> <strong>2 TB pooled storage</strong> per user</li>
                        <li><i class="fas fa-check" style="color: #34a853; margin-right: 8px;"></i> Shared Drives for your team</li>
                        <li><i class="fas fa-check" style="color: #34a853; margin-right: 8px;"></i> Standard Support</li>
                    </ul>
                </div>

                <!-- Business Plus Plan -->
                <div class="card hover-lift" style="padding: 30px; border: 1px solid var(--glass-border); border-radius: 16px; background: #0a2540; position: relative;">
                    <h4 style="font-size: 1.4rem; color: white; margin-bottom: 10px; font-weight: 700;">Business Plus</h4>
                    <p style="color: rgba(255,255,255,0.7); font-size: 0.9rem; margin-bottom: 20px; min-height: 40px;">Advanced features, eDiscovery, and massive 5 TB storage.</p>
                    <div style="margin-bottom: 25px;">
                        <span style="font-size: 2.5rem; font-weight: 800; color: white;">₹1,700</span>
                        <span style="color: rgba(255,255,255,0.7); font-size: 0.85rem;">/user/month (annual)</span>
                    </div>
                    <a href="/contact" class="btn" style="background: white; color: #0a2540; width: 100%; text-align: center; margin-bottom: 25px; font-weight: 700;">Buy Now</a>
                    
                    <ul style="color: rgba(255,255,255,0.85); font-size: 0.9rem; padding-left: 0; list-style-type: none; margin: 0; line-height: 1.8;">
                        <li><i class="fas fa-shield-alt" style="color: #38bdf8; margin-right: 8px;"></i> Custom email + eDiscovery/Retention</li>
                        <li><i class="fas fa-shield-alt" style="color: #38bdf8; margin-right: 8px;"></i> 500-participant meetings + attendance</li>
                        <li><i class="fas fa-shield-alt" style="color: #38bdf8; margin-right: 8px;"></i> <strong>5 TB pooled storage</strong> per user</li>
                        <li><i class="fas fa-shield-alt" style="color: #38bdf8; margin-right: 8px;"></i> Enhanced security & management</li>
                        <li><i class="fas fa-shield-alt" style="color: #38bdf8; margin-right: 8px;"></i> Google Vault included</li>
                    </ul>
                </div>
                
            </div>
            <p style="font-size: 0.8rem; color: var(--text-secondary); text-align: center; font-style: italic;">* Note: Prices shown are estimates for the Indian market, billed annually, and are exclusive of applicable GST. Prices may vary based on Google's current regional pricing strategies and promotions.</p>
        </div>
        \`,
        benefits: [
            { title: 'Industry Leading Spam Protection', text: 'Gmail blocks 99.9% of spam, phishing, and malware from ever reaching your inbox.' },
            { title: 'Real-Time Collaboration', text: 'Multiple users can edit Docs, Sheets, and Slides simultaneously without version conflicts.' },
            { title: 'Mobile First', text: 'Powerful, native mobile apps for iOS and Android keep you productive on the go.' },
            { title: 'Google-Grade Security', text: 'Protect your business data with the same infrastructure that secures Google.' }
        ],
        features: ['Gmail for Business', 'Google Drive (Cloud Storage)', 'Google Meet (Video)', 'Google Docs/Sheets/Slides', 'Google Vault (eDiscovery)', 'Advanced Endpoint Management'],
        techStack: ['Google Cloud Platform', 'OAuth 2.0', 'SAML SSO', 'Gemini AI Integration', 'Cloud Search'],
        keywords: 'Google Workspace India, G Suite Pricing, Business Email Hosting, Google Partner, Gemini AI for Workspace'
    },`;

// Replace the old google-workspace block
const gsuiteRegex = /'google-workspace':\s*\{[\s\S]*?keywords:\s*'[^']*'\s*\},/g;
if(gsuiteRegex.test(fileContent)) {
    fileContent = fileContent.replace(gsuiteRegex, newGoogleContent);
    fs.writeFileSync('d:/primetroniqinnovations/data/servicesData.js', fileContent);
    console.log("Successfully rebuilt google-workspace page with massive 5x content and pricing.");
} else {
    console.log("Regex match failed for google-workspace.");
}
