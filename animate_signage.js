const fs = require('fs');

let fileContent = fs.readFileSync('d:/primetroniqinnovations/data/servicesData.js', 'utf8');

const newSignageContent = `'signage-cloud': { 
        title: 'Cloud Signage Web Application', 
        category: 'Products', 
        imageUrl: '/images/signage-banner.png',
        description: \`
        <div class="animate-on-scroll">
            <p style="font-size: 1.1rem; color: var(--text-primary); font-weight: 500;"><strong>Transform Every Screen Into a Powerful Communication Platform</strong></p>
            <p>Manage, schedule, and display content on multiple screens from anywhere using Primetroniq Innovations' Cloud-Based Digital Signage Solution. Deliver engaging announcements, advertisements, videos, dashboards, emergency alerts, and real-time information across your organization with ease.</p>
            <p>Whether you have one screen or thousands of displays across multiple locations, our platform makes content management simple, secure, and scalable.</p>
        </div>

        <div class="animate-on-scroll" style="margin-top: 40px; margin-bottom: 40px;">
            <img src="/images/signage-content.png" alt="Cloud Signage Content Dashboard" style="width:100%; border-radius:12px; box-shadow: var(--shadow-deep); transition: transform 0.3s ease;" class="hover-scale" />
        </div>

        <div class="animate-on-scroll">
            <h3 style="color: var(--primary-dark); font-size: 1.8rem; margin-bottom: 20px;">Modern Digital Signage for Every Industry</h3>
            <p>Our Cloud Digital Signage Platform allows businesses, hospitals, educational institutions, retail stores, corporate offices, and government organizations to centrally manage and control digital displays from a single web-based dashboard.</p>
        </div>

        <div class="grid grid-cols-2 animate-on-scroll" style="gap: 20px; margin-top: 30px; margin-bottom: 40px;">
            <div class="card hover-lift" style="padding: 24px; border: 1px solid var(--glass-border); border-radius: var(--radius-md); background: var(--bg-surface);">
                <i class="fas fa-cloud" style="font-size: 2rem; color: var(--primary); margin-bottom: 15px;"></i>
                <h4 style="margin-bottom: 10px; font-weight: 700;">Cloud-Based Management</h4>
                <p style="font-size: 0.9rem; color: var(--text-secondary);">Manage all screens remotely through a centralized cloud dashboard. Includes a web-based admin panel, remote management, and multi-location support.</p>
            </div>
            <div class="card hover-lift" style="padding: 24px; border: 1px solid var(--glass-border); border-radius: var(--radius-md); background: var(--bg-surface);">
                <i class="fas fa-calendar-alt" style="font-size: 2rem; color: var(--accent); margin-bottom: 15px;"></i>
                <h4 style="margin-bottom: 10px; font-weight: 700;">Playlist & Scheduling</h4>
                <p style="font-size: 0.9rem; color: var(--text-secondary);">Display the right content at the right time with date, time, day, and event-based scheduling, plus auto content rotation.</p>
            </div>
            <div class="card hover-lift" style="padding: 24px; border: 1px solid var(--glass-border); border-radius: var(--radius-md); background: var(--bg-surface);">
                <i class="fas fa-exclamation-triangle" style="font-size: 2rem; color: #ef4444; margin-bottom: 15px;"></i>
                <h4 style="margin-bottom: 10px; font-weight: 700;">Real-Time Emergency Alerts</h4>
                <p style="font-size: 0.9rem; color: var(--text-secondary);">Push content instantly to any connected screen, including fire alerts, medical emergencies, and disaster notifications.</p>
            </div>
            <div class="card hover-lift" style="padding: 24px; border: 1px solid var(--glass-border); border-radius: var(--radius-md); background: var(--bg-surface);">
                <i class="fas fa-mobile-alt" style="font-size: 2rem; color: var(--primary-light); margin-bottom: 15px;"></i>
                <h4 style="margin-bottom: 10px; font-weight: 700;">Mobile App Management</h4>
                <p style="font-size: 0.9rem; color: var(--text-secondary);">Control your displays on the go. Super Admin, Content Manager, and Viewer roles fully supported on our mobile ecosystem.</p>
            </div>
        </div>

        <div class="animate-on-scroll" style="margin-top: 40px; margin-bottom: 40px; text-align: center;">
            <img src="/images/signage-mobile.png" alt="Cloud Signage Mobile Application" style="max-width:350px; width:100%; border-radius:24px; box-shadow: var(--shadow-deep); transition: transform 0.3s ease;" class="hover-scale" />
            <p style="margin-top: 15px; font-style: italic; color: var(--text-secondary);">Manage your entire fleet of screens directly from your smartphone.</p>
        </div>

        <div class="animate-on-scroll">
            <h3 style="color: var(--primary-dark); font-size: 1.5rem;">Industry-Specific Solutions</h3>
            <ul style="margin-bottom: 30px; color: var(--text-secondary); line-height: 1.7;">
                <li><strong>Hospitals & Healthcare:</strong> Display Patient Information, Health Awareness Campaigns, Doctor Schedules, and Queue Information.</li>
                <li><strong>Educational Institutions:</strong> Ideal for displaying Notices, Exam Schedules, Event Updates, and Campus Announcements.</li>
                <li><strong>Corporate Offices:</strong> Improve internal communication with KPI Dashboards, Company News, and Meeting Schedules.</li>
                <li><strong>Retail Stores:</strong> Increase sales with Promotions, Product Advertisements, Special Offers, and Seasonal Campaigns.</li>
                <li><strong>Manufacturing:</strong> Enhance operational visibility with Production Metrics, Safety Alerts, and Operational Dashboards.</li>
            </ul>
        </div>

        <div class="animate-on-scroll">
            <h3 style="color: var(--primary-dark); font-size: 1.5rem;">Advantages Over Traditional Signage</h3>
            <div style="overflow-x:auto;">
                <table style="width:100%; border-collapse: collapse; margin-bottom: 30px; color: var(--text-secondary); background: white; border-radius: 8px; overflow: hidden; box-shadow: var(--shadow-sm);">
                    <thead>
                        <tr style="background-color: var(--primary); color: white; text-align: left;">
                            <th style="padding: 15px; border: 1px solid var(--glass-border);">Traditional Signage</th>
                            <th style="padding: 15px; border: 1px solid var(--glass-border);">Cloud Digital Signage</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr><td style="padding: 15px; border: 1px solid var(--glass-border);">Manual Updates</td><td style="padding: 15px; border: 1px solid var(--glass-border); font-weight: 600; color: var(--primary-dark);">Remote Updates instantly from anywhere</td></tr>
                        <tr><td style="padding: 15px; border: 1px solid var(--glass-border);">Expensive Printing Costs</td><td style="padding: 15px; border: 1px solid var(--glass-border); font-weight: 600; color: var(--primary-dark);">Zero Printing Cost</td></tr>
                        <tr><td style="padding: 15px; border: 1px solid var(--glass-border);">Limited Reach (One Location)</td><td style="padding: 15px; border: 1px solid var(--glass-border); font-weight: 600; color: var(--primary-dark);">Unlimited Locations managed centrally</td></tr>
                        <tr><td style="padding: 15px; border: 1px solid var(--glass-border);">Static Content Only</td><td style="padding: 15px; border: 1px solid var(--glass-border); font-weight: 600; color: var(--primary-dark);">Dynamic Multimedia Content (Video, HTML)</td></tr>
                    </tbody>
                </table>
            </div>
        </div>

        <div class="animate-on-scroll" style="background: var(--gradient-cta); padding: 40px; border-radius: var(--radius-lg); color: white; text-align: center; margin-top: 40px; box-shadow: var(--shadow-lg);">
            <h2 style="color: white; margin-bottom: 15px; font-size: 2rem;">Ready to Transform Your Digital Communication?</h2>
            <p style="margin-bottom: 25px; opacity: 0.9; max-width: 600px; margin-left: auto; margin-right: auto;">Manage all your displays from anywhere, engage your audience effectively, and deliver real-time information with Primetroniq Cloud Digital Signage.</p>
            <div style="display: flex; gap: 15px; justify-content: center; flex-wrap: wrap;">
                <a href="/book-demo" class="btn" style="background: white; color: var(--primary-dark); font-weight: 700; padding: 12px 30px; border-radius: 50px;">Request Free Demo</a>
                <a href="/contact" class="btn btn-outline" style="border-color: white; color: white; font-weight: 700; padding: 12px 30px; border-radius: 50px;">Contact Sales</a>
            </div>
        </div>
        \`,
        benefits: [
            { title: 'Increase Engagement', text: 'Capture attention using dynamic multimedia content and live dashboards.' },
            { title: 'Centralized Control', text: 'Manage all displays across unlimited locations from a single dashboard.' },
            { title: 'Zero Printing Cost', text: 'Replace traditional posters and printed notices, saving money and time.' },
            { title: 'Faster Delivery', text: 'Broadcast emergency alerts and important updates to all screens in seconds.' }
        ],
        features: ['Cloud-Based Remote Management', 'Multi-Screen Grouping & Scheduling', 'Live Dashboards & RSS Feeds', 'Emergency Alert System', 'Android TV Support', 'Offline Content Playback'],
        techStack: ['Node.js', 'React', 'WebSockets', 'Android SDK', 'AWS Cloud'],
        keywords: 'Cloud Digital Signage Software, Digital Signage Solution India, Android TV Signage Software, Digital Display Management System'
    },`;

const regex = /'signage-cloud':\s*\{[\s\S]*?keywords:\s*'[^']*'\s*\},/g;
if(regex.test(fileContent)) {
    fileContent = fileContent.replace(regex, newSignageContent);
    fs.writeFileSync('d:/primetroniqinnovations/data/servicesData.js', fileContent);
    console.log("Successfully added animations and features to signage-cloud.");
} else {
    console.log("Regex match failed.");
}
