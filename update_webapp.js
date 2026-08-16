const fs = require('fs');

let fileContent = fs.readFileSync('d:/primetroniqinnovations/data/servicesData.js', 'utf8');

const newWebAppContent = `'web-application': { 
        title: 'Software (Web App) Development', 
        category: 'Software & Web Development', 
        imageUrl: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
        description: \`
        <p><strong>Building Scalable, Secure & Business-Driven Web Applications</strong></p>
        <p>In today's digital era, a powerful web application is the backbone of business efficiency and growth. We specialize in custom Software and Web Application Development that helps organizations automate operations, improve decision-making, and deliver seamless digital experiences.</p>
        <p>Our solutions are secure, scalable, performance-driven, and tailored to your business needs, ensuring long-term value and measurable results.</p>

        <h3>Our Web Application Development Services</h3>
        <ul style="margin-bottom: 20px; color: var(--text-secondary); line-height: 1.7;">
            <li><strong>Custom Web Application Development:</strong> We design and develop fully customized web applications that align precisely with your business processes, workflows, and goals. Whether it's an internal management system or a customer-facing platform, our applications are built for reliability and scalability.</li>
            <li><strong>Enterprise Application Development:</strong> We develop enterprise-grade applications for medium to large organizations, including: CRM & Customer Management Systems, Incident & Service Management Systems, ERP & Operations Management Portals, Sales, AMC & Subscription Management Systems. These systems ensure data accuracy, operational efficiency, and seamless collaboration across departments.</li>
            <li><strong>Business Process Automation:</strong> We help businesses eliminate manual work by automating: Data entry & reporting, Approval workflows, Notifications & alerts, Role-based access control. Automation improves productivity, reduces errors, and saves operational costs.</li>
            <li><strong>Database-Driven Applications:</strong> Our web applications are powered by robust, secure databases, ensuring: Structured and normalized data, High performance and reliability, Easy reporting and analytics, Long-term maintainability.</li>
        </ul>

        <h3>Technologies We Use</h3>
        <p>We leverage modern, proven technologies to build high-quality web solutions including Backend Technologies, Frontend Technologies, Database Technologies, and Hosting & Deployment. Key technologies include ASP, AWS, Azure, C#, CSS, Flutter, JS, and MongoDB.</p>

        <h3>What Software Development Services We Offer</h3>
        <ul style="margin-bottom: 20px; color: var(--text-secondary); line-height: 1.7;">
            <li><strong>Custom Software Development:</strong> Custom Software Development is the process of developing software as per requirements and needs. We provide custom software development services considering the needs of the customers.</li>
            <li><strong>E-commerce Software Development:</strong> E-commerce refers to buying and selling on the web. We provide SaaS based e-commerce software development services.</li>
            <li><strong>CRM Software Development:</strong> CRM (Customer Relationship Management) is a software program that is used for maintaining a company's relationship with the customer.</li>
            <li><strong>Online Complaint Management Software:</strong> Online Complaint Management System is an online portal that helps to manage online customer complaints with ease.</li>
            <li><strong>Stock Management Software:</strong> The inventory management system is software that organizes inventory records. It is Easy to use, Quick process, Simple interface, and is Time-saving.</li>
            <li><strong>Web Application Development:</strong> Web app development services help develop web-based solutions that foster impeccable user experience (Static, Dynamic, E-Commerce, SPA, Portals).</li>
        </ul>

        <h3>Why PrimeTroniq Innovations is Different</h3>
        <p>Developing a reliable, scalable, and high-performance web application requires deep technical expertise, industry experience, and a clear understanding of business needs. At PrimeTroniq Innovations, we combine all these elements to deliver web applications that truly add value to your organization.</p>
        <p>We understand that every business has unique challenges. That's why we have built a team of highly skilled and experienced web application developers who are capable of transforming complex requirements into simple, secure, and efficient digital solutions.</p>

        <h4 style="margin-top:20px; margin-bottom:10px; color:var(--primary-dark);">What Sets Us Apart</h4>
        <ul style="margin-bottom: 20px; color: var(--text-secondary); line-height: 1.7;">
            <li><strong>Experienced Development Team:</strong> Our team consists of seasoned professionals with extensive experience in designing and developing enterprise-grade web applications.</li>
            <li><strong>Latest Tools & Modern Technologies:</strong> We use modern frameworks, updated development tools, and best coding practices to ensure that every web application we deliver is robust, scalable, and future-ready.</li>
            <li><strong>Quality-Driven Development Approach:</strong> We strongly believe that quality is non-negotiable. Each project goes through rigorous testing and quality checks.</li>
            <li><strong>Client-Centric Solutions:</strong> Customer satisfaction is at the core of our development process. We carefully analyze client requirements and deliver web applications that exceed expectations.</li>
            <li><strong>Industry-Independent Expertise:</strong> We have successfully delivered web application solutions across domains including Healthcare, Education, Banking & Finance, Retail & E-commerce, Manufacturing, Travel & Hospitality, and Service-Based Enterprises.</li>
        </ul>

        <h3>Delivering Business Value Through Web Applications</h3>
        <p>Our web applications help organizations:</p>
        <ul style="margin-bottom: 20px; color: var(--text-secondary); line-height: 1.7;">
            <li>Improve operational efficiency</li>
            <li>Reduce manual efforts and errors</li>
            <li>Enhance productivity</li>
            <li>Optimize costs</li>
            <li>Enable better decision-making through data</li>
        </ul>
        <p>We take pride in the fact that our clients highly appreciate our services as our solutions directly contribute to business growth and operational excellence.</p>
        \`,
        benefits: [
            { title: 'Operational Efficiency', text: 'Improve your business operational efficiency and reduce manual efforts.' },
            { title: 'High Performance', text: 'Secure, scalable, and performance-driven solutions tailored to your needs.' },
            { title: 'Business Growth', text: 'Solutions that directly contribute to business growth and operational excellence.' }
        ],
        features: ['Custom Web Application Development', 'Enterprise Application Development', 'Business Process Automation', 'Database-Driven Applications'],
        techStack: ['ASP.NET', 'AWS', 'Azure', 'C#', 'CSS', 'Flutter', 'JS', 'MongoDB'],
        keywords: 'custom software development, web app development, enterprise applications, business process automation, CRM, stock management'
    },`;

// Replace the block using regex
// We match 'web-application': { ... } up to the next key (e.g. 'custom-software': { )
const regex = /'web-application':\s*\{[\s\S]*?keywords:\s*'[^']*'\s*\},/g;
if(regex.test(fileContent)) {
    fileContent = fileContent.replace(regex, newWebAppContent);
    fs.writeFileSync('d:/primetroniqinnovations/data/servicesData.js', fileContent);
    console.log("Successfully replaced web-application content.");
} else {
    console.log("Regex match failed.");
}
