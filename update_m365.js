const fs = require('fs');

let fileContent = fs.readFileSync('d:/primetroniqinnovations/data/servicesData.js', 'utf8');

const newM365Content = `'microsoft-365': { 
        title: 'Microsoft 365 for Business', 
        category: 'Business Email & CRM', 
        imageUrl: 'https://images.unsplash.com/photo-1633419461186-7d40a38105ec?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
        actionButton: { text: 'Book Demo', url: '/book-demo' },
        description: \`
        <div class="animate-on-scroll">
            <p style="font-size: 1.1rem; color: var(--text-primary); font-weight: 500;"><strong>Empower your workforce with the ultimate cloud productivity suite.</strong></p>
            <p>Microsoft 365 brings together best-in-class productivity apps with powerful cloud services, device management, and advanced security in one, connected experience. Whether you're working remotely or on-site, Primetroniq Innovations helps you deploy, manage, and scale Microsoft 365 to fit your organization's unique needs.</p>
        </div>

        <div class="animate-on-scroll" style="margin-top: 50px;">
            <h3 style="color: var(--primary-dark); font-size: 1.8rem; margin-bottom: 20px;">Everything You Need to Get Work Done</h3>
            <p>Microsoft 365 includes industry-leading applications that are constantly updated with the latest features, including powerful new AI capabilities with Microsoft Copilot.</p>
            
            <div class="grid grid-cols-4" style="gap: 15px; margin-top: 30px; margin-bottom: 50px; text-align: center;">
                <div style="background: var(--bg-surface); padding: 20px; border-radius: 12px; border: 1px solid var(--glass-border);"><i class="fas fa-file-word" style="font-size: 2.5rem; color: #2b579a; margin-bottom: 10px;"></i><h5 style="font-weight: 700;">Word</h5></div>
                <div style="background: var(--bg-surface); padding: 20px; border-radius: 12px; border: 1px solid var(--glass-border);"><i class="fas fa-file-excel" style="font-size: 2.5rem; color: #217346; margin-bottom: 10px;"></i><h5 style="font-weight: 700;">Excel</h5></div>
                <div style="background: var(--bg-surface); padding: 20px; border-radius: 12px; border: 1px solid var(--glass-border);"><i class="fas fa-file-powerpoint" style="font-size: 2.5rem; color: #b7472a; margin-bottom: 10px;"></i><h5 style="font-weight: 700;">PowerPoint</h5></div>
                <div style="background: var(--bg-surface); padding: 20px; border-radius: 12px; border: 1px solid var(--glass-border);"><i class="fas fa-envelope" style="font-size: 2.5rem; color: #0078d4; margin-bottom: 10px;"></i><h5 style="font-weight: 700;">Outlook</h5></div>
                <div style="background: var(--bg-surface); padding: 20px; border-radius: 12px; border: 1px solid var(--glass-border);"><i class="fas fa-users" style="font-size: 2.5rem; color: #6264a7; margin-bottom: 10px;"></i><h5 style="font-weight: 700;">Teams</h5></div>
                <div style="background: var(--bg-surface); padding: 20px; border-radius: 12px; border: 1px solid var(--glass-border);"><i class="fas fa-cloud" style="font-size: 2.5rem; color: #0078d4; margin-bottom: 10px;"></i><h5 style="font-weight: 700;">OneDrive</h5></div>
                <div style="background: var(--bg-surface); padding: 20px; border-radius: 12px; border: 1px solid var(--glass-border);"><i class="fas fa-share-alt" style="font-size: 2.5rem; color: #0078d4; margin-bottom: 10px;"></i><h5 style="font-weight: 700;">SharePoint</h5></div>
                <div style="background: var(--bg-surface); padding: 20px; border-radius: 12px; border: 1px solid var(--glass-border);"><i class="fas fa-shield-alt" style="font-size: 2.5rem; color: #434343; margin-bottom: 10px;"></i><h5 style="font-weight: 700;">Defender</h5></div>
            </div>
        </div>

        <div class="animate-on-scroll" style="margin-top: 50px;">
            <div style="display: flex; justify-content: space-between; align-items: flex-end; margin-bottom: 30px;">
                <h3 style="color: var(--primary-dark); font-size: 1.8rem; margin: 0;">Microsoft 365 Business Pricing Plans</h3>
                <span class="badge" style="background: rgba(34, 197, 94, 0.1); color: #16a34a; font-size: 0.9rem; border: 1px solid rgba(34, 197, 94, 0.2);">Estimated Pricing for India (INR)</span>
            </div>
            
            <div class="grid grid-cols-3" style="gap: 20px; margin-bottom: 40px;">
                
                <!-- Basic Plan -->
                <div class="card hover-lift" style="padding: 30px; border: 1px solid var(--glass-border); border-radius: 16px; background: var(--bg-surface); position: relative;">
                    <h4 style="font-size: 1.4rem; color: var(--primary-dark); margin-bottom: 10px; font-weight: 700;">Business Basic</h4>
                    <p style="color: var(--text-secondary); font-size: 0.9rem; margin-bottom: 20px; min-height: 40px;">Best for businesses that need easy remote solutions, with Microsoft Teams, secure cloud storage, and web/mobile apps.</p>
                    <div style="margin-bottom: 25px;">
                        <span style="font-size: 2.5rem; font-weight: 800; color: var(--primary);">₹145</span>
                        <span style="color: var(--text-secondary); font-size: 0.85rem;">/user/month (annual)</span>
                    </div>
                    <a href="/contact" class="btn btn-outline" style="width: 100%; text-align: center; margin-bottom: 25px;">Get Started</a>
                    
                    <h5 style="font-size: 0.95rem; font-weight: 700; margin-bottom: 15px; color: var(--text-primary);">Includes:</h5>
                    <ul style="color: var(--text-secondary); font-size: 0.9rem; padding-left: 0; list-style-type: none; margin: 0; line-height: 1.8;">
                        <li><i class="fas fa-check" style="color: #10b981; margin-right: 8px;"></i> Web & Mobile versions of Word, Excel, PowerPoint</li>
                        <li><i class="fas fa-check" style="color: #10b981; margin-right: 8px;"></i> 50 GB Exchange Business Email</li>
                        <li><i class="fas fa-check" style="color: #10b981; margin-right: 8px;"></i> 1 TB OneDrive Cloud Storage</li>
                        <li><i class="fas fa-check" style="color: #10b981; margin-right: 8px;"></i> Microsoft Teams (Up to 300 users)</li>
                        <li><i class="fas fa-check" style="color: #10b981; margin-right: 8px;"></i> Standard Security</li>
                    </ul>
                </div>

                <!-- Standard Plan -->
                <div class="card hover-lift" style="padding: 30px; border: 2px solid var(--primary); border-radius: 16px; background: var(--bg-surface); position: relative; box-shadow: 0 10px 30px rgba(10, 37, 64, 0.1);">
                    <div style="position: absolute; top: -15px; left: 50%; transform: translateX(-50%); background: var(--gradient-primary); color: white; padding: 5px 15px; border-radius: 20px; font-size: 0.8rem; font-weight: 700; letter-spacing: 1px; text-transform: uppercase;">Most Popular</div>
                    <h4 style="font-size: 1.4rem; color: var(--primary-dark); margin-bottom: 10px; font-weight: 700;">Business Standard</h4>
                    <p style="color: var(--text-secondary); font-size: 0.9rem; margin-bottom: 20px; min-height: 40px;">Best for businesses that need full desktop apps plus remote collaboration tools.</p>
                    <div style="margin-bottom: 25px;">
                        <span style="font-size: 2.5rem; font-weight: 800; color: var(--primary);">₹770</span>
                        <span style="color: var(--text-secondary); font-size: 0.85rem;">/user/month (annual)</span>
                    </div>
                    <a href="/contact" class="btn btn-primary" style="width: 100%; text-align: center; margin-bottom: 25px;">Get Started</a>
                    
                    <h5 style="font-size: 0.95rem; font-weight: 700; margin-bottom: 15px; color: var(--text-primary);">Everything in Basic, plus:</h5>
                    <ul style="color: var(--text-secondary); font-size: 0.9rem; padding-left: 0; list-style-type: none; margin: 0; line-height: 1.8;">
                        <li><i class="fas fa-check" style="color: #10b981; margin-right: 8px;"></i> <strong>Desktop versions</strong> of Office apps with premium features</li>
                        <li><i class="fas fa-check" style="color: #10b981; margin-right: 8px;"></i> Easily host webinars</li>
                        <li><i class="fas fa-check" style="color: #10b981; margin-right: 8px;"></i> Attendee registration and reporting tools</li>
                        <li><i class="fas fa-check" style="color: #10b981; margin-right: 8px;"></i> Manage customer appointments (Bookings)</li>
                    </ul>
                </div>

                <!-- Premium Plan -->
                <div class="card hover-lift" style="padding: 30px; border: 1px solid var(--glass-border); border-radius: 16px; background: #0a2540; position: relative;">
                    <h4 style="font-size: 1.4rem; color: white; margin-bottom: 10px; font-weight: 700;">Business Premium</h4>
                    <p style="color: rgba(255,255,255,0.7); font-size: 0.9rem; margin-bottom: 20px; min-height: 40px;">Best for businesses that require secure, remote work solutions with advanced cyberthreat protection.</p>
                    <div style="margin-bottom: 25px;">
                        <span style="font-size: 2.5rem; font-weight: 800; color: white;">₹1,830</span>
                        <span style="color: rgba(255,255,255,0.7); font-size: 0.85rem;">/user/month (annual)</span>
                    </div>
                    <a href="/contact" class="btn" style="background: white; color: #0a2540; width: 100%; text-align: center; margin-bottom: 25px; font-weight: 700;">Get Started</a>
                    
                    <h5 style="font-size: 0.95rem; font-weight: 700; margin-bottom: 15px; color: white;">Everything in Standard, plus:</h5>
                    <ul style="color: rgba(255,255,255,0.85); font-size: 0.9rem; padding-left: 0; list-style-type: none; margin: 0; line-height: 1.8;">
                        <li><i class="fas fa-shield-alt" style="color: #38bdf8; margin-right: 8px;"></i> Advanced Cyberthreat Protection (Defender)</li>
                        <li><i class="fas fa-mobile-alt" style="color: #38bdf8; margin-right: 8px;"></i> Advanced Device Management (Intune)</li>
                        <li><i class="fas fa-lock" style="color: #38bdf8; margin-right: 8px;"></i> Information Protection (Azure AIP)</li>
                        <li><i class="fas fa-server" style="color: #38bdf8; margin-right: 8px;"></i> Enterprise-Grade IT Controls</li>
                    </ul>
                </div>
                
            </div>
            <p style="font-size: 0.8rem; color: var(--text-secondary); text-align: center; font-style: italic;">* Note: Prices shown are estimates for the Indian market, billed annually, and are exclusive of applicable GST. Prices may vary based on Microsoft's current regional pricing strategies and promotions.</p>
        </div>

        <div class="animate-on-scroll" style="background: var(--bg-surface); padding: 40px; border-radius: 16px; border: 1px solid var(--glass-border); margin-top: 50px;">
            <div style="display: flex; gap: 30px; align-items: center; flex-wrap: wrap;">
                <div style="flex: 1; min-width: 300px;">
                    <h3 style="color: var(--primary-dark); font-size: 1.8rem; margin-bottom: 15px;">Supercharge Productivity with Microsoft 365 Copilot</h3>
                    <p style="color: var(--text-secondary); margin-bottom: 20px; line-height: 1.7;">Combine the power of large language models (LLMs) with your data in the Microsoft Graph and Microsoft 365 apps to turn your words into the most powerful productivity tool on the planet. Available as an add-on for eligible Business Standard and Premium plans.</p>
                    <ul style="color: var(--text-secondary); font-size: 0.95rem; padding-left: 0; list-style-type: none; margin: 0; line-height: 1.8;">
                        <li><i class="fas fa-bolt" style="color: #eab308; margin-right: 10px;"></i> Draft documents and emails instantly</li>
                        <li><i class="fas fa-bolt" style="color: #eab308; margin-right: 10px;"></i> Summarize long Teams meeting transcripts</li>
                        <li><i class="fas fa-bolt" style="color: #eab308; margin-right: 10px;"></i> Analyze complex Excel data with natural language</li>
                    </ul>
                </div>
            </div>
        </div>
        \`,
        benefits: [
            { title: 'Anywhere Access', text: 'Work securely from any device, anywhere in the world with cloud-synced files.' },
            { title: 'Enterprise Security', text: 'Protect against malware, spam, and phishing with Microsoft Defender.' },
            { title: 'Simplified IT', text: 'Manage users, devices, and data easily from a single admin console.' },
            { title: '99.9% Uptime', text: 'Guaranteed reliability with financially backed SLAs from Microsoft.' }
        ],
        features: ['Exchange Online Email', '1TB OneDrive Storage', 'Microsoft Teams Chat & Video', 'SharePoint Intranet', 'Advanced Threat Protection', 'Device Management (Intune)'],
        techStack: ['Microsoft Azure', 'Exchange Online', 'SharePoint Online', 'Copilot AI'],
        keywords: 'Microsoft 365 India, Office 365 Pricing, Business Premium, Exchange Online, Microsoft Teams Partner'
    },`;

// Replace the old microsoft-365 block
const m365Regex = /'microsoft-365':\s*\{[\s\S]*?keywords:\s*'[^']*'\s*\},/g;
if(m365Regex.test(fileContent)) {
    fileContent = fileContent.replace(m365Regex, newM365Content);
    fs.writeFileSync('d:/primetroniqinnovations/data/servicesData.js', fileContent);
    console.log("Successfully completely rebuilt the microsoft-365 page with pricing.");
} else {
    console.log("Regex match failed for microsoft-365.");
}
