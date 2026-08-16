const fs = require('fs');

let fileContent = fs.readFileSync('d:/primetroniqinnovations/data/servicesData.js', 'utf8');

const newSignageContent = `'cloud-signage': { 
        title: 'Cloud Signage Web Application', 
        category: 'Products', 
        imageUrl: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
        description: \`
        <p><strong>Transform Every Screen Into a Powerful Communication Platform</strong></p>
        <p>Manage, schedule, and display content on multiple screens from anywhere using Primetroniq Innovations' Cloud-Based Digital Signage Solution. Deliver engaging announcements, advertisements, videos, dashboards, emergency alerts, and real-time information across your organization with ease.</p>

        <h3>Modern Digital Signage for Every Industry</h3>
        <p>Our Cloud Digital Signage Platform allows businesses, hospitals, educational institutions, retail stores, corporate offices, and government organizations to centrally manage and control digital displays from a single web-based dashboard.</p>
        <p>Whether you have one screen or thousands of displays across multiple locations, our platform makes content management simple, secure, and scalable.</p>

        <h3>Key Features</h3>
        <ul style="margin-bottom: 20px; color: var(--text-secondary); line-height: 1.7;">
            <li><strong>Cloud-Based Management:</strong> Manage all screens remotely through a centralized cloud dashboard. Includes a web-based admin panel, remote management, and multi-location support.</li>
            <li><strong>Content Management System (CMS):</strong> Easily create, upload, and organize Images, Videos, PDFs, Web Pages, Live Dashboards, and Emergency Alerts.</li>
            <li><strong>Playlist & Scheduling:</strong> Display the right content at the right time with date, time, day, and event-based scheduling, plus auto content rotation.</li>
            <li><strong>Multi-Screen Management:</strong> Manage hundreds or thousands of displays through screen grouping, location-based management, and zone-based distribution.</li>
            <li><strong>Real-Time Updates & Emergency Alerts:</strong> Push content instantly to any connected screen, including fire alerts, medical emergencies, and disaster notifications.</li>
            <li><strong>Role-Based Access Control:</strong> Super Admin, Content Manager, Department Admin, and Viewer roles.</li>
        </ul>

        <h3>Industry-Specific Solutions</h3>
        <ul style="margin-bottom: 20px; color: var(--text-secondary); line-height: 1.7;">
            <li><strong>Hospitals & Healthcare:</strong> Display Patient Information, Health Awareness Campaigns, Doctor Schedules, and Queue Information.</li>
            <li><strong>Educational Institutions:</strong> Ideal for displaying Notices, Exam Schedules, Event Updates, and Campus Announcements.</li>
            <li><strong>Corporate Offices:</strong> Improve internal communication with KPI Dashboards, Company News, and Meeting Schedules.</li>
            <li><strong>Retail Stores:</strong> Increase sales with Promotions, Product Advertisements, Special Offers, and Seasonal Campaigns.</li>
            <li><strong>Manufacturing:</strong> Enhance operational visibility with Production Metrics, Safety Alerts, and Operational Dashboards.</li>
        </ul>

        <h3>Advantages Over Traditional Signage</h3>
        <div style="overflow-x:auto;">
            <table style="width:100%; border-collapse: collapse; margin-bottom: 20px; color: var(--text-secondary);">
                <thead>
                    <tr style="background-color: var(--bg-surface); text-align: left;">
                        <th style="padding: 10px; border: 1px solid var(--glass-border);">Traditional Signage</th>
                        <th style="padding: 10px; border: 1px solid var(--glass-border);">Cloud Digital Signage</th>
                    </tr>
                </thead>
                <tbody>
                    <tr><td style="padding: 10px; border: 1px solid var(--glass-border);">Manual Updates</td><td style="padding: 10px; border: 1px solid var(--glass-border);">Remote Updates</td></tr>
                    <tr><td style="padding: 10px; border: 1px solid var(--glass-border);">Printing Cost</td><td style="padding: 10px; border: 1px solid var(--glass-border);">Zero Printing Cost</td></tr>
                    <tr><td style="padding: 10px; border: 1px solid var(--glass-border);">Limited Reach</td><td style="padding: 10px; border: 1px solid var(--glass-border);">Unlimited Locations</td></tr>
                    <tr><td style="padding: 10px; border: 1px solid var(--glass-border);">Static Content</td><td style="padding: 10px; border: 1px solid var(--glass-border);">Dynamic Content</td></tr>
                    <tr><td style="padding: 10px; border: 1px solid var(--glass-border);">Time Consuming</td><td style="padding: 10px; border: 1px solid var(--glass-border);">Instant Publishing</td></tr>
                    <tr><td style="padding: 10px; border: 1px solid var(--glass-border);">No Analytics</td><td style="padding: 10px; border: 1px solid var(--glass-border);">Real-Time Analytics</td></tr>
                </tbody>
            </table>
        </div>

        <h3>Advanced Features & Future Roadmap</h3>
        <p>Our platform includes a Multi-Tenant Architecture perfect for resellers, White Label solutions, Android TV support, offline playback, and secure HTTPS cloud synchronization. Upcoming features include AI-Based Content Scheduling, WhatsApp Alert Integration, Audience Analytics, and IoT Integration.</p>

        <h4 style="margin-top:20px; margin-bottom:10px; color:var(--primary-dark);">Why Choose Primetroniq Innovations?</h4>
        <ul style="margin-bottom: 20px; color: var(--text-secondary); line-height: 1.7;">
            <li>Cloud-Based Platform with Easy Deployment</li>
            <li>Enterprise-Grade Security & Secure Cloud Infrastructure</li>
            <li>Multi-Location Support & Unlimited Screen Scalability</li>
            <li>Affordable Pricing & Dedicated Technical Support</li>
            <li>Custom Development & White Label Ready</li>
        </ul>

        <p><strong>Ready to Transform Your Digital Communication?</strong><br/>
        Manage all your displays from anywhere, engage your audience effectively, and deliver real-time information.</p>
        <p><strong>Request Free Demo | Schedule a Live Presentation | Contact Sales</strong><br/>
        📧 info@primetroniqinnovations.com<br/>
        📞 Contact Us For Live Demonstration</p>
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

const regex = /'cloud-signage':\s*\{[\s\S]*?keywords:\s*'[^']*'\s*\},/g;
if(regex.test(fileContent)) {
    fileContent = fileContent.replace(regex, newSignageContent);
    fs.writeFileSync('d:/primetroniqinnovations/data/servicesData.js', fileContent);
    console.log("Successfully replaced cloud-signage content.");
} else {
    console.log("Regex match failed.");
}
