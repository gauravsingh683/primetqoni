const fs = require('fs');

let fileContent = fs.readFileSync('d:/primetroniqinnovations/data/servicesData.js', 'utf8');

const newAssetContent = `'asset-management': { 
        title: 'IT Asset Management Software', 
        category: 'Products', 
        imageUrl: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
        description: \`
        <p><strong>What is IT Asset Management?</strong></p>
        <p>IT Asset Management (ITAM) is a structured approach to managing an organization's technology assets throughout their entire lifecycle — from procurement and deployment to maintenance, upgrades, and final disposal.</p>
        <p>It enables businesses to track, monitor, and analyze how their IT assets support business operations and customers. IT Asset Management covers both:</p>
        <ul style="margin-bottom: 20px; color: var(--text-secondary); line-height: 1.7;">
            <li><strong>Tangible Assets</strong> – Hardware, servers, laptops, networking devices</li>
            <li><strong>Intangible Assets</strong> – Software licenses, subscriptions, purchase orders</li>
        </ul>
        <p>Manual tracking of assets is time-consuming and error-prone. With IT Asset Management Software, businesses can manage the complete asset lifecycle in a centralized, automated, and professional manner.</p>

        <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" alt="IT Asset Management Dashboard" style="width:100%; border-radius:12px; margin: 30px 0; box-shadow: var(--shadow-deep);" />

        <h3>Why IT Asset Management Software Is Important</h3>
        <p>IT Asset Management Software helps organizations gain complete visibility into their IT infrastructure. It allows businesses to analyze unused or underutilized assets and optimize their usage to reduce unnecessary operational costs.</p>
        <p>With intelligent asset tracking and reporting, organizations can:</p>
        <ul style="margin-bottom: 20px; color: var(--text-secondary); line-height: 1.7;">
            <li>Identify aging assets and plan replacements</li>
            <li>Avoid unnecessary purchases and maintenance expenses</li>
            <li>Detect lost or stolen assets quickly</li>
            <li>Improve accountability across departments</li>
            <li>Control IT infrastructure within a defined budget</li>
        </ul>
        <p>The software also helps in analyzing business risks caused by incidents, changes, or system failures and provides quick access to asset information to resolve issues faster. IT Asset Management Software enables better decision-making for future purchases, repairs, and retirements while ensuring business continuity and cost control.</p>

        <h4 style="margin-top:20px; margin-bottom:10px; color:var(--primary-dark);">Benefits of IT Asset Management Software:</h4>
        <ul style="margin-bottom: 20px; color: var(--text-secondary); line-height: 1.7;">
            <li>Complete visibility of all IT assets</li>
            <li>Reduced maintenance and operational costs</li>
            <li>Improved asset utilization</li>
            <li>Theft and loss detection</li>
            <li>License compliance management</li>
            <li>Contract and renewal tracking</li>
            <li>Depreciation and aging asset analysis</li>
            <li>Improved budgeting and planning</li>
            <li>Reduced business risk</li>
        </ul>
        <p>IT Asset Management ensures your IT infrastructure is secure, optimized, and aligned with business growth.</p>

        <h3>Why Choose Primetroniq Innovations?</h3>
        <p>Primetroniq Innovations is a trusted IT Asset Management Software provider in Delhi NCR, delivering powerful and intelligent asset tracking solutions for modern organizations.</p>
        <p>Our IT Asset Management Software helps you track and manage all your hardware and software assets throughout their complete lifecycle with ease and accuracy.</p>

        <h4 style="margin-top:20px; margin-bottom:10px; color:var(--primary-dark);">Our IT Asset Management Solution Features</h4>
        <p>Our asset management solution is built with advanced automation and smart tracking features, including:</p>
        <ul style="margin-bottom: 20px; color: var(--text-secondary); line-height: 1.7;">
            <li>Asset scanning and discovery</li>
            <li>Barcode and QR code scanning</li>
            <li>Network-based asset discovery</li>
            <li>Hardware and software inventory tracking</li>
            <li>Real-time asset status monitoring</li>
            <li>Software license and compliance management</li>
            <li>Contract and renewal management</li>
            <li>Vendor and purchase order tracking</li>
        </ul>
        <p>We help you build a centralized asset database using network scanning and automated discovery to capture every asset connected to your IT environment.</p>

        <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" alt="Data Analytics and Asset Monitoring" style="width:100%; border-radius:12px; margin: 30px 0; box-shadow: var(--shadow-deep);" />

        <h3>Secure, Compliant & Cost-Effective Asset Management</h3>
        <p>We monitor your software usage, license compliance, and authorization status to reduce compliance risks. You can easily identify unauthorized software installations and maintain audit-ready records.</p>
        <p>Our solution also helps you:</p>
        <ul style="margin-bottom: 20px; color: var(--text-secondary); line-height: 1.7;">
            <li>Maintain a complete asset catalogue</li>
            <li>Track purchase orders and vendors</li>
            <li>Compare vendor pricing</li>
            <li>Monitor contract expiry dates</li>
            <li>Plan IT budgets effectively</li>
        </ul>
        <p>With proactive contract alerts, you are always informed in advance about renewals and expirations.</p>

        <h3>Build a Smarter IT Infrastructure with Primetroniq Innovations</h3>
        <p>At Primetroniq Innovations, we help organizations build a secure, optimized, and future-ready IT ecosystem. Our IT Asset Management Software empowers businesses to manage assets intelligently, reduce costs, and improve operational efficiency.</p>
        <p>Partner with a trusted IT Asset Management Software Company in Delhi NCR and take complete control of your IT infrastructure.</p>
        \`,
        benefits: [
            { title: 'Reduced Maintenance', text: 'Significantly reduce maintenance and operational costs through better visibility.' },
            { title: 'Theft & Loss Detection', text: 'Detect lost or stolen assets quickly with real-time status monitoring.' },
            { title: 'License Compliance', text: 'Monitor software usage and maintain audit-ready records to avoid penalties.' },
            { title: 'Improved Budgeting', text: 'Plan IT budgets effectively and compare vendor pricing easily.' }
        ],
        features: ['Asset Scanning & Discovery', 'Barcode/QR Scanning', 'Hardware & Software Inventory', 'License Compliance Management', 'Vendor & PO Tracking'],
        techStack: ['Node.js', 'React', 'MongoDB', 'Network Scanners', 'Cloud Hosted'],
        keywords: 'IT Asset Management Software Delhi NCR, ITAM software, hardware tracking, software license management, asset lifecycle'
    },`;

const regex = /'asset-management':\s*\{[\s\S]*?keywords:\s*'[^']*'\s*\},/g;
if(regex.test(fileContent)) {
    fileContent = fileContent.replace(regex, newAssetContent);
    fs.writeFileSync('d:/primetroniqinnovations/data/servicesData.js', fileContent);
    console.log("Successfully replaced asset-management content.");
} else {
    console.log("Regex match failed.");
}
