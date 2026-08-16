const fs = require('fs');

let fileContent = fs.readFileSync('d:/primetroniqinnovations/data/servicesData.js', 'utf8');

const newCustomSoftwareContent = `'custom-software': { 
        title: 'Custom Software Development Services', 
        category: 'Software & Web Development', 
        imageUrl: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
        description: \`
        <p><strong>Primetroniq Innovations is one of the leading custom software development companies in Delhi</strong>, delivering tailor-made software solutions designed to meet your unique business needs. We specialize in building high-quality custom applications that help businesses grow, streamline operations, and stay competitive in today's fast-changing digital environment.</p>
        <p>With strong industry expertise and years of hands-on experience, we are committed to delivering scalable, secure, and performance-driven software solutions that drive business success.</p>

        <h3>Trusted Custom Software Development Company in Delhi</h3>
        <p>At Primetroniq Innovations, we develop customized software solutions that perfectly align with your business processes and objectives. Our focus is on delivering value-driven solutions that enhance productivity, improve efficiency, and support long-term growth.</p>

        <p>We serve multiple industries including:</p>
        <ul style="margin-bottom: 20px; color: var(--text-secondary); line-height: 1.7;">
            <li>Healthcare</li>
            <li>Information Technology</li>
            <li>Manufacturing</li>
            <li>Retail</li>
            <li>Education</li>
            <li>Finance</li>
        </ul>
        <p>Whether you need a custom business application, enterprise software, or a mobile application, we are the right technology partner for your organization.</p>

        <h3>Our Expertise in Custom Software Development</h3>
        <p>Our expert development team uses the latest technologies and best practices to build future-ready software solutions.</p>
        <p>We specialize in:</p>
        <ul style="margin-bottom: 20px; color: var(--text-secondary); line-height: 1.7;">
            <li>Custom Web Application Development</li>
            <li>Enterprise Software Development</li>
            <li>Mobile Application Development</li>
            <li>CRM & ERP Solutions</li>
            <li>Cloud-Based Applications</li>
            <li>API Integration & Automation</li>
        </ul>
        <p>Every solution is designed to solve real business challenges and deliver measurable results.</p>

        <h3>Our Agile Development Approach</h3>
        <p>We follow an agile software development model that focuses on continuous improvement, transparency, and collaboration.</p>
        <p>Our approach includes:</p>
        <ul style="margin-bottom: 20px; color: var(--text-secondary); line-height: 1.7;">
            <li>Business discovery and requirement analysis</li>
            <li>Solution architecture and roadmap planning</li>
            <li>Agile development with cross-functional teams</li>
            <li>Regular testing and quality assurance</li>
            <li>Deployment, monitoring, and optimization</li>
        </ul>
        <p>We prioritize your business goals by analyzing existing systems and creating a structured software delivery roadmap.</p>

        <h3>Personalized IT & Software Solutions</h3>
        <p>Our team conducts personalized IT and software development workshops to understand your business challenges and deliver precise solutions. We develop custom mobile applications that enhance user experience by connecting mobile platforms with real-time business data.</p>
        <p>Our software solutions empower your organization with:</p>
        <ul style="margin-bottom: 20px; color: var(--text-secondary); line-height: 1.7;">
            <li>Full ownership and independence</li>
            <li>Scalable and flexible architecture</li>
            <li>No dependency on commercial licensing models</li>
            <li>Freedom from recurring software vendor costs</li>
        </ul>
        <p>This enables your business to grow independently without worrying about licensing hikes or vendor lock-in.</p>
        \`,
        benefits: [
            { title: 'Full Ownership', text: 'Full ownership and independence without worrying about vendor lock-in.' },
            { title: 'No Licensing Costs', text: 'Freedom from recurring commercial software vendor costs and licensing hikes.' },
            { title: 'Scalable Architecture', text: 'Scalable and flexible architecture tailored specifically to your business growth.' }
        ],
        features: ['Custom Web & Mobile Apps', 'CRM & ERP Solutions', 'Cloud-Based Applications', 'API Integration & Automation'],
        techStack: ['.NET Core', 'C#', 'Java', 'Python', 'SQL Server', 'Cloud Computing'],
        keywords: 'custom software development company Delhi, enterprise software, tailored software solutions, CRM ERP solutions'
    },`;

const regex = /'custom-software':\s*\{[\s\S]*?keywords:\s*'[^']*'\s*\},/g;
if(regex.test(fileContent)) {
    fileContent = fileContent.replace(regex, newCustomSoftwareContent);
    fs.writeFileSync('d:/primetroniqinnovations/data/servicesData.js', fileContent);
    console.log("Successfully replaced custom-software content.");
} else {
    console.log("Regex match failed.");
}
