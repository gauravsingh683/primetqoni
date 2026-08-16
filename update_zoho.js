const fs = require('fs');

let fileContent = fs.readFileSync('d:/primetroniqinnovations/data/servicesData.js', 'utf8');

const newZohoContent = `'zoho-crm': { 
        title: 'Zoho CRM Implementation & Licensing', 
        category: 'Business Email & CRM', 
        imageUrl: 'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
        actionButton: { text: 'Book Demo', url: '/book-demo' },
        description: \`
        <div class="animate-on-scroll">
            <p style="font-size: 1.2rem; color: var(--primary); font-weight: 700; text-transform: uppercase; letter-spacing: 1px;">The Ultimate Customer Relationship Management Platform</p>
            <p style="font-size: 1.1rem; color: var(--text-primary); font-weight: 500;"><strong>Transform your sales, marketing, and customer support with Zoho CRM.</strong></p>
            <p>Zoho CRM empowers a global network of over 250,000 businesses in 180 countries to convert more leads, engage with customers, and grow their revenue. Primetroniq Innovations is your trusted partner for Zoho CRM licensing, implementation, customization, and ongoing support. We ensure that your CRM is perfectly tailored to your unique business workflows.</p>
        </div>

        <div class="animate-on-scroll" style="margin-top: 50px;">
            <h3 style="color: var(--primary-dark); font-size: 2rem; margin-bottom: 20px; text-align: center;">Comprehensive CRM Capabilities</h3>
            <p style="text-align: center; max-width: 800px; margin: 0 auto 40px auto; color: var(--text-secondary);">Stop relying on disconnected spreadsheets and fragmented communication. Zoho CRM brings your entire customer journey into a single, unified, and highly intelligent platform.</p>
            
            <div class="grid grid-cols-2" style="gap: 30px; margin-bottom: 50px;">
                <!-- Module 1 -->
                <div class="card hover-lift" style="padding: 30px; border: 1px solid var(--glass-border); border-radius: 16px; background: var(--bg-surface);">
                    <i class="fas fa-funnel-dollar" style="font-size: 2.5rem; color: var(--primary); margin-bottom: 15px;"></i>
                    <h4 style="font-size: 1.4rem; color: var(--primary-dark); margin-bottom: 15px; font-weight: 700;">Sales Force Automation (SFA)</h4>
                    <p style="color: var(--text-secondary); font-size: 0.95rem; margin-bottom: 15px;">Automate routine sales, marketing, and support functions that take up valuable work time.</p>
                    <ul style="color: var(--text-secondary); font-size: 0.9rem; padding-left: 20px;">
                        <li><strong>Lead Management:</strong> Capture leads, automate lead scoring, identify leads that will convert, and follow up with detailed contact information.</li>
                        <li><strong>Deal Management:</strong> Track your pipeline, identify bottlenecks, and close more deals faster with visual sales pipelines.</li>
                        <li><strong>Contact Management:</strong> Maintain a real-time log of customer communications across all channels.</li>
                        <li><strong>Workflow Automation:</strong> Trigger instant actions, assign tasks, and send automated emails when conditions are met.</li>
                    </ul>
                </div>

                <!-- Module 2 -->
                <div class="card hover-lift" style="padding: 30px; border: 1px solid var(--glass-border); border-radius: 16px; background: var(--bg-surface);">
                    <i class="fas fa-headset" style="font-size: 2.5rem; color: var(--accent); margin-bottom: 15px;"></i>
                    <h4 style="font-size: 1.4rem; color: var(--primary-dark); margin-bottom: 15px; font-weight: 700;">Omnichannel Communication</h4>
                    <p style="color: var(--text-secondary); font-size: 0.95rem; margin-bottom: 15px;">Engage with your customers seamlessly, no matter what channel they prefer to use.</p>
                    <ul style="color: var(--text-secondary); font-size: 0.9rem; padding-left: 20px;">
                        <li><strong>Email Integration:</strong> Sync Gmail, Office 365, or Outlook to track email opens and clicks natively inside the CRM.</li>
                        <li><strong>Telephony:</strong> Integrate with 50+ telephony partners to make calls directly from Zoho with automated call logging.</li>
                        <li><strong>Live Chat:</strong> Connect your website live chat directly to CRM to convert visitors into leads instantly.</li>
                        <li><strong>Social Media:</strong> Monitor Twitter, Facebook, and LinkedIn to track brand mentions and engage with prospects.</li>
                    </ul>
                </div>

                <!-- Module 3 -->
                <div class="card hover-lift" style="padding: 30px; border: 1px solid var(--glass-border); border-radius: 16px; background: var(--bg-surface);">
                    <i class="fas fa-robot" style="font-size: 2.5rem; color: #8b5cf6; margin-bottom: 15px;"></i>
                    <h4 style="font-size: 1.4rem; color: var(--primary-dark); margin-bottom: 15px; font-weight: 700;">Zia: Your AI Sales Assistant</h4>
                    <p style="color: var(--text-secondary); font-size: 0.95rem; margin-bottom: 15px;">Leverage Artificial Intelligence to predict trends, suggest next steps, and automate data entry.</p>
                    <ul style="color: var(--text-secondary); font-size: 0.9rem; padding-left: 20px;">
                        <li><strong>Predictive Sales:</strong> Zia analyzes your past deals to predict the probability of a new lead converting.</li>
                        <li><strong>Anomaly Detection:</strong> Get instant alerts if sales drop unexpectedly or if leads surge abnormally.</li>
                        <li><strong>Best Time to Contact:</strong> Zia learns when your prospects are most likely to answer the phone or read an email.</li>
                        <li><strong>Data Enrichment:</strong> Automatically pull company size, revenue, and contact data from the internet to enrich your CRM records.</li>
                    </ul>
                </div>

                <!-- Module 4 -->
                <div class="card hover-lift" style="padding: 30px; border: 1px solid var(--glass-border); border-radius: 16px; background: var(--bg-surface);">
                    <i class="fas fa-chart-line" style="font-size: 2.5rem; color: #10b981; margin-bottom: 15px;"></i>
                    <h4 style="font-size: 1.4rem; color: var(--primary-dark); margin-bottom: 15px; font-weight: 700;">Advanced Analytics & BI</h4>
                    <p style="color: var(--text-secondary); font-size: 0.95rem; margin-bottom: 15px;">Make data-driven decisions with real-time reporting and interactive dashboards.</p>
                    <ul style="color: var(--text-secondary); font-size: 0.9rem; padding-left: 20px;">
                        <li><strong>Standard Reports:</strong> Over 40+ pre-built reports for sales, marketing, and support out of the box.</li>
                        <li><strong>Custom Dashboards:</strong> Build analytical widgets, charts, target meters, and funnels visually.</li>
                        <li><strong>Sales Forecasting:</strong> Create accurate forecasts based on historical data and current pipeline velocity.</li>
                        <li><strong>Cohort Analysis:</strong> Track customer retention over time to identify drop-off points.</li>
                    </ul>
                </div>
            </div>
        </div>

        <div class="animate-on-scroll" style="background: var(--primary-dark); padding: 50px; border-radius: 24px; color: white; margin-bottom: 60px; box-shadow: var(--shadow-deep);">
            <h3 style="color: white; font-size: 2rem; margin-bottom: 20px; text-align: center;">Unmatched Customization with Canvas</h3>
            <p style="text-align: center; max-width: 800px; margin: 0 auto 30px auto; color: rgba(255,255,255,0.8);">Zoho CRM features the industry's first CRM design studio. With Canvas, you can completely redesign the look and feel of your CRM interface without writing a single line of code. Create a minimalist view for sales reps, and a data-heavy view for managers.</p>
            <div class="grid grid-cols-3" style="gap: 20px; text-align: center;">
                <div>
                    <i class="fas fa-palette" style="font-size: 2rem; color: var(--primary); margin-bottom: 15px;"></i>
                    <h5 style="font-weight: 700; margin-bottom: 10px;">Drag-and-Drop Editor</h5>
                    <p style="font-size: 0.85rem; color: rgba(255,255,255,0.7);">Visually arrange fields, add background colors, and adjust spacing.</p>
                </div>
                <div>
                    <i class="fas fa-user-cog" style="font-size: 2rem; color: var(--primary); margin-bottom: 15px;"></i>
                    <h5 style="font-weight: 700; margin-bottom: 10px;">Role-Based Views</h5>
                    <p style="font-size: 0.85rem; color: rgba(255,255,255,0.7);">Assign different custom layouts to different departments automatically.</p>
                </div>
                <div>
                    <i class="fas fa-puzzle-piece" style="font-size: 2rem; color: var(--primary); margin-bottom: 15px;"></i>
                    <h5 style="font-weight: 700; margin-bottom: 10px;">Custom Modules</h5>
                    <p style="font-size: 0.85rem; color: rgba(255,255,255,0.7);">Build completely new modules specific to your industry logic.</p>
                </div>
            </div>
        </div>

        <div class="animate-on-scroll" style="margin-top: 50px;">
            <div style="display: flex; justify-content: space-between; align-items: flex-end; margin-bottom: 30px;">
                <h3 style="color: var(--primary-dark); font-size: 2rem; margin: 0;">Zoho CRM Pricing Plans</h3>
                <span class="badge" style="background: rgba(34, 197, 94, 0.1); color: #16a34a; font-size: 0.9rem; border: 1px solid rgba(34, 197, 94, 0.2);">Estimated Pricing for India (INR)</span>
            </div>
            
            <div class="grid grid-cols-4" style="gap: 15px; margin-bottom: 40px;">
                
                <!-- Standard Plan -->
                <div class="card hover-lift" style="padding: 25px; border: 1px solid var(--glass-border); border-radius: 16px; background: var(--bg-surface);">
                    <h4 style="font-size: 1.2rem; color: var(--primary-dark); margin-bottom: 10px; font-weight: 700;">Standard</h4>
                    <p style="color: var(--text-secondary); font-size: 0.85rem; margin-bottom: 15px; min-height: 50px;">Essential sales automation for growing small teams.</p>
                    <div style="margin-bottom: 20px;">
                        <span style="font-size: 2rem; font-weight: 800; color: var(--primary);">₹1,300</span>
                        <span style="color: var(--text-secondary); font-size: 0.75rem; display: block;">/user/month (annual)</span>
                    </div>
                    <a href="/contact" class="btn btn-outline" style="width: 100%; text-align: center; margin-bottom: 20px; padding: 10px;">Buy Now</a>
                    
                    <ul style="color: var(--text-secondary); font-size: 0.85rem; padding-left: 0; list-style-type: none; margin: 0; line-height: 1.6;">
                        <li><i class="fas fa-check" style="color: #10b981; margin-right: 6px;"></i> Workflows & Multiple Pipelines</li>
                        <li><i class="fas fa-check" style="color: #10b981; margin-right: 6px;"></i> Mass Emailing</li>
                        <li><i class="fas fa-check" style="color: #10b981; margin-right: 6px;"></i> Custom Dashboards</li>
                        <li><i class="fas fa-check" style="color: #10b981; margin-right: 6px;"></i> 100,000 Records limit</li>
                    </ul>
                </div>

                <!-- Professional Plan -->
                <div class="card hover-lift" style="padding: 25px; border: 1px solid var(--glass-border); border-radius: 16px; background: var(--bg-surface);">
                    <h4 style="font-size: 1.2rem; color: var(--primary-dark); margin-bottom: 10px; font-weight: 700;">Professional</h4>
                    <p style="color: var(--text-secondary); font-size: 0.85rem; margin-bottom: 15px; min-height: 50px;">A comprehensive CRM for businesses scaling their sales.</p>
                    <div style="margin-bottom: 20px;">
                        <span style="font-size: 2rem; font-weight: 800; color: var(--primary);">₹2,100</span>
                        <span style="color: var(--text-secondary); font-size: 0.75rem; display: block;">/user/month (annual)</span>
                    </div>
                    <a href="/contact" class="btn btn-outline" style="width: 100%; text-align: center; margin-bottom: 20px; padding: 10px;">Buy Now</a>
                    
                    <ul style="color: var(--text-secondary); font-size: 0.85rem; padding-left: 0; list-style-type: none; margin: 0; line-height: 1.6;">
                        <li><i class="fas fa-check" style="color: #10b981; margin-right: 6px;"></i> Blueprint (Process Management)</li>
                        <li><i class="fas fa-check" style="color: #10b981; margin-right: 6px;"></i> SalesSignals</li>
                        <li><i class="fas fa-check" style="color: #10b981; margin-right: 6px;"></i> Inventory Management</li>
                        <li><i class="fas fa-check" style="color: #10b981; margin-right: 6px;"></i> Google Ads Integration</li>
                    </ul>
                </div>

                <!-- Enterprise Plan -->
                <div class="card hover-lift" style="padding: 25px; border: 2px solid var(--primary); border-radius: 16px; background: var(--bg-surface); position: relative; box-shadow: 0 10px 30px rgba(10, 37, 64, 0.1);">
                    <div style="position: absolute; top: -12px; left: 50%; transform: translateX(-50%); background: var(--gradient-primary); color: white; padding: 4px 12px; border-radius: 20px; font-size: 0.7rem; font-weight: 700; text-transform: uppercase;">Most Popular</div>
                    <h4 style="font-size: 1.2rem; color: var(--primary-dark); margin-bottom: 10px; font-weight: 700;">Enterprise</h4>
                    <p style="color: var(--text-secondary); font-size: 0.85rem; margin-bottom: 15px; min-height: 50px;">Advanced CRM for large-scale, customized global operations.</p>
                    <div style="margin-bottom: 20px;">
                        <span style="font-size: 2rem; font-weight: 800; color: var(--primary);">₹3,000</span>
                        <span style="color: var(--text-secondary); font-size: 0.75rem; display: block;">/user/month (annual)</span>
                    </div>
                    <a href="/contact" class="btn btn-primary" style="width: 100%; text-align: center; margin-bottom: 20px; padding: 10px;">Buy Now</a>
                    
                    <ul style="color: var(--text-secondary); font-size: 0.85rem; padding-left: 0; list-style-type: none; margin: 0; line-height: 1.6;">
                        <li><i class="fas fa-check" style="color: #10b981; margin-right: 6px;"></i> <strong>Zia AI capabilities</strong></li>
                        <li><i class="fas fa-check" style="color: #10b981; margin-right: 6px;"></i> Canvas Customization</li>
                        <li><i class="fas fa-check" style="color: #10b981; margin-right: 6px;"></i> Multi-user Portals</li>
                        <li><i class="fas fa-check" style="color: #10b981; margin-right: 6px;"></i> Advanced Analytics</li>
                    </ul>
                </div>

                <!-- Ultimate Plan -->
                <div class="card hover-lift" style="padding: 25px; border: 1px solid var(--glass-border); border-radius: 16px; background: #0a2540;">
                    <h4 style="font-size: 1.2rem; color: white; margin-bottom: 10px; font-weight: 700;">Ultimate</h4>
                    <p style="color: rgba(255,255,255,0.7); font-size: 0.85rem; margin-bottom: 15px; min-height: 50px;">The absolute maximum capability, limits, and dedicated support.</p>
                    <div style="margin-bottom: 20px;">
                        <span style="font-size: 2rem; font-weight: 800; color: white;">₹3,800</span>
                        <span style="color: rgba(255,255,255,0.7); font-size: 0.75rem; display: block;">/user/month (annual)</span>
                    </div>
                    <a href="/contact" class="btn" style="background: white; color: #0a2540; width: 100%; text-align: center; margin-bottom: 20px; padding: 10px; font-weight: 700;">Buy Now</a>
                    
                    <ul style="color: rgba(255,255,255,0.85); font-size: 0.85rem; padding-left: 0; list-style-type: none; margin: 0; line-height: 1.6;">
                        <li><i class="fas fa-check" style="color: #38bdf8; margin-right: 6px;"></i> Advanced BI bundled</li>
                        <li><i class="fas fa-check" style="color: #38bdf8; margin-right: 6px;"></i> Enhanced Storage Limits</li>
                        <li><i class="fas fa-check" style="color: #38bdf8; margin-right: 6px;"></i> Premium Support</li>
                        <li><i class="fas fa-check" style="color: #38bdf8; margin-right: 6px;"></i> Ultimate Feature Limits</li>
                    </ul>
                </div>
            </div>
            <p style="font-size: 0.8rem; color: var(--text-secondary); text-align: center; font-style: italic;">* Note: Prices shown are estimates for the Indian market, billed annually, and are exclusive of applicable GST. Prices may vary based on Zoho's current regional pricing strategies and promotions.</p>
        </div>
        \`,
        benefits: [
            { title: 'Increase Sales by 29%', text: 'Companies using Zoho CRM report an average 29% increase in overall sales.' },
            { title: 'Automate Workflows', text: 'Reduce manual data entry so your team can spend more time actually selling.' },
            { title: 'Seamless Integration', text: 'Integrates perfectly with Google Workspace, Office 365, and 500+ other apps.' },
            { title: 'AI-Powered Insights', text: 'Zia helps you predict the future and tells you exactly when to contact your leads.' }
        ],
        features: ['Lead Management', 'Workflow Automation (Blueprint)', 'Zia Artificial Intelligence', 'Canvas Design Studio', 'Omnichannel Communication', 'Advanced Analytics'],
        techStack: ['Zoho Cloud Infrastructure', 'REST API', 'Webhooks', 'Mobile SDKs', 'Deluge Scripting'],
        keywords: 'Zoho CRM India, Zoho Partner, Zoho One Pricing, Zoho CRM Enterprise, Sales Automation Software, CRM Integration'
    },`;

// Replace the old zoho-crm block
const zohoRegex = /'zoho-crm':\s*\{[\s\S]*?keywords:\s*'[^']*'\s*\},/g;
if(zohoRegex.test(fileContent)) {
    fileContent = fileContent.replace(zohoRegex, newZohoContent);
    fs.writeFileSync('d:/primetroniqinnovations/data/servicesData.js', fileContent);
    console.log("Successfully rebuilt zoho-crm page with massive content and pricing.");
} else {
    console.log("Regex match failed for zoho-crm.");
}
