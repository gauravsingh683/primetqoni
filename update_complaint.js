const fs = require('fs');

let fileContent = fs.readFileSync('d:/primetroniqinnovations/data/servicesData.js', 'utf8');

const newCMSContent = `'complaint-management': { 
        title: 'Online Complaint Management System', 
        category: 'Products', 
        imageUrl: '/images/cms-dashboard.png',
        description: \`
        <p><strong>Streamline Service Requests, AMC Tracking & Customer Support</strong></p>
        <p>The Complaint Management System (CMS) by Primetroniq Innovations is a comprehensive web-based solution designed to manage customer complaints, service requests, Annual Maintenance Contracts (AMC), technician assignments, service reports, and customer communication from a single platform.</p>
        <p>Whether you are managing IT services, medical equipment, CCTV systems, networking infrastructure, HVAC systems, electrical equipment, printers, or any service-based business, our Complaint Management System helps you improve response times, increase customer satisfaction, and maintain complete visibility over service operations.</p>

        <img src="/images/cms-dashboard.png" alt="Complaint Management System Dashboard" style="width:100%; border-radius:12px; margin: 30px 0; box-shadow: var(--shadow-deep);" />

        <h3>Key Benefits</h3>
        <ul style="margin-bottom: 20px; color: var(--text-secondary); line-height: 1.7;">
            <li>Centralized Complaint Tracking & AMC Contract Management</li>
            <li>Real-Time Service Status Updates & Technician Monitoring</li>
            <li>SLA Monitoring, Escalation, & Service Visit Scheduling</li>
            <li>Customer Portal Access with Automated Email & SMS Notifications</li>
            <li>Detailed Reports, Analytics, & Multi-Location Support</li>
            <li>Mobile Friendly Interface with Secure Role-Based Access Control</li>
        </ul>

        <h3>Core Modules</h3>
        <ul style="margin-bottom: 20px; color: var(--text-secondary); line-height: 1.7;">
            <li><strong>Complaint Management:</strong> Efficiently record, track, and resolve customer complaints with auto ticket generation, priority management, and escalation handling.</li>
            <li><strong>AMC Management:</strong> Manage Annual Maintenance Contracts with complete lifecycle tracking, renewal alerts, and preventive maintenance scheduling.</li>
            <li><strong>Customer & Asset Management:</strong> Maintain a complete database of customers, track their assets, equipment, serial numbers, and warranty details.</li>
            <li><strong>Technician & Service Visit Management:</strong> Manage field engineers, allocate work, track attendance, and schedule service visits with customer sign-offs.</li>
            <li><strong>SLA Management & Notifications:</strong> Ensure timely service delivery through SLA tracking and keep customers informed via SMS/Email alerts.</li>
            <li><strong>Dashboard & Analytics:</strong> Gain complete visibility into open complaints, pending visits, SLA compliance, and technician performance.</li>
        </ul>

        <h3>Advanced Features & Industries Served</h3>
        <p>Our system offers multi-branch management, role-based access control, comprehensive audit logs, and document management for quotations and invoices.</p>
        <p>We serve diverse industries including:</p>
        <ul style="margin-bottom: 20px; color: var(--text-secondary); line-height: 1.7;">
            <li><strong>Healthcare & Hospitals:</strong> Medical Equipment AMC, Biomedical Services</li>
            <li><strong>IT & Networking:</strong> Server Support, Firewall, CCTV & Surveillance Maintenance</li>
            <li><strong>Manufacturing & Facility Management:</strong> Production Equipment, HVAC, Electrical Maintenance</li>
            <li><strong>Educational Institutions:</strong> Computer Labs, Campus Infrastructure</li>
        </ul>

        <h4 style="margin-top:20px; margin-bottom:10px; color:var(--primary-dark);">Why Choose Primetroniq Complaint Management System?</h4>
        <ul style="margin-bottom: 20px; color: var(--text-secondary); line-height: 1.7;">
            <li>User-Friendly Interface with Fast Deployment</li>
            <li>Fully Web-Based Solution (Cloud or On-Premise)</li>
            <li>Customizable Workflow with Scalable Architecture</li>
            <li>Secure Data Management & Dedicated Technical Support</li>
            <li>Affordable Pricing for Businesses of All Sizes</li>
        </ul>

        <h3>Transform Your Service Operations Today</h3>
        <p>Reduce response time, improve customer satisfaction, automate AMC management, and gain complete control over your service operations with the Primetroniq Complaint Management System.</p>
        <p><strong>Request a Free Demo Today:</strong><br/>
        📧 info@primetroniqinnovations.com<br/>
        📞 Contact Us For Live Demonstration</p>
        \`,
        benefits: [
            { title: 'Accountability', text: 'Every ticket has an owner and a strict deadline for resolution via SLA monitoring.' },
            { title: 'Customer Satisfaction', text: 'Faster resolution times and automated updates lead directly to happier, loyal customers.' },
            { title: 'AMC Revenue', text: 'Automated AMC renewal reminders ensure you never miss contract revenue.' },
            { title: 'Performance Metrics', text: 'Identify which support agents are performing and which need training through detailed analytics.' }
        ],
        features: ['Complaint Ticket Creation', 'AMC Contract Management', 'Asset & Warranty Tracking', 'Technician Assignment', 'SLA Escalation Matrix', 'Automated SMS/Email Alerts'],
        techStack: ['PHP', 'Laravel', 'Vue.js', 'MySQL', 'Cloud Hosting'],
        keywords: 'Complaint Management Software, AMC Management Software, Service Ticket Management, Field Service Management, Customer Complaint Software'
    },`;

const regex = /'complaint-management':\s*\{[\s\S]*?keywords:\s*'[^']*'\s*\},/g;
if(regex.test(fileContent)) {
    fileContent = fileContent.replace(regex, newCMSContent);
    fs.writeFileSync('d:/primetroniqinnovations/data/servicesData.js', fileContent);
    console.log("Successfully replaced complaint-management content.");
} else {
    console.log("Regex match failed.");
}
