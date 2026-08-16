const fs = require('fs');

let fileContent = fs.readFileSync('d:/primetroniqinnovations/data/servicesData.js', 'utf8');

const newWebDevContent = `'web-development': { 
        title: 'Website Development Company in Delhi', 
        category: 'Software & Web Development', 
        imageUrl: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
        description: \`
        <p><strong>Website Development Company in Delhi</strong></p>
        <p>Primetroniq Innovations is a reliable and growth-driven Website Development Company in Delhi, delivering modern, scalable, and result-oriented web solutions for businesses of all sizes. We specialize in crafting visually appealing, high-performing websites that not only represent your brand but also convert visitors into customers.</p>
        <p>With years of hands-on industry experience, our team combines creativity, technology, and strategy to develop websites that align perfectly with your business goals. We focus on quality, affordability, and long-term value, making our web development services a smart investment for your business.</p>

        <h3>Professional Website Designing & Development Solutions</h3>
        <p>At Primetroniq Innovations, we believe a website is more than just an online presence—it is your digital identity. Our expert designers and developers work collaboratively to create websites that are user-friendly, responsive, and performance-optimized.</p>
        <p>We ensure your business gains a strong multi-channel web presence, allowing customers to interact with your products and services seamlessly across devices. Our solutions are designed to improve engagement, enhance brand credibility, and maximize commercial growth.</p>

        <h3>Services We Offer</h3>
        <p>Our website designing and development services are built to help your business stand out in today's competitive digital landscape. We do not believe in one-size-fits-all designs—every website we create is customized to match your unique business requirements.</p>

        <h4 style="margin-top:20px; margin-bottom:10px; color:var(--primary-dark);">Website Designing Services</h4>
        <p>Our creative designers deliver elegant, modern, and functional designs that provide an exceptional user experience.</p>
        <ul style="margin-bottom: 20px; color: var(--text-secondary); line-height: 1.7;">
            <li>Static Website Designing</li>
            <li>Dynamic Website Designing</li>
            <li>Mobile-Friendly Website Designing</li>
            <li>Custom Website Designing</li>
            <li>Landing Page Designing</li>
            <li>Brand Identity & UI Design</li>
        </ul>
        <p>Each design is carefully structured to be visually attractive, easy to navigate, and aligned with your brand identity.</p>

        <h4 style="margin-top:20px; margin-bottom:10px; color:var(--primary-dark);">Website Development Services</h4>
        <p>Our skilled website developers build secure, scalable, and high-performance websites using the latest technologies and best practices.</p>
        <ul style="margin-bottom: 20px; color: var(--text-secondary); line-height: 1.7;">
            <li>Custom website development</li>
            <li>CMS-based websites (WordPress, etc.)</li>
            <li>Business and corporate websites</li>
            <li>E-commerce website development</li>
            <li>API and database integration</li>
            <li>Performance optimization & security implementation</li>
        </ul>
        <p>We develop websites that are fast, functional, and ready to grow with your business.</p>

        <h4 style="margin-top:20px; margin-bottom:10px; color:var(--primary-dark);">Website Redesign Services</h4>
        <p>Is your website outdated or underperforming?</p>
        <p>Our Website Redesign Services help you transform your existing website into a modern, engaging, and conversion-focused platform. We upgrade:</p>
        <ul style="margin-bottom: 20px; color: var(--text-secondary); line-height: 1.7;">
            <li>Design aesthetics</li>
            <li>User Experience (UX)</li>
            <li>User Interface (UI)</li>
            <li>Mobile responsiveness</li>
            <li>Performance and loading speed</li>
        </ul>
        <p>A redesigned website improves credibility, increases engagement, and delivers better results.</p>

        <h3>Why Choose Primetroniq Innovations?</h3>
        <p>Still searching for the right website designing company in Delhi? Here's why businesses trust Primetroniq Innovations:</p>
        <ul style="margin-bottom: 20px; color: var(--text-secondary); line-height: 1.7;">
            <li>Experienced and professional designers & developers</li>
            <li>Custom, innovative, and business-focused solutions</li>
            <li>Dedicated support and client satisfaction</li>
        </ul>

        <h3>We'll Make Web Development More Efficient for you!</h3>
        <p>We believe in building powerful software backed by innovative technology that reflects your business style, that's why we plan carefully and ensure that every feature connects with your users in a meaningful way. We focus on high-end designs and latest technologies, so that your ideas can be turned into advanced software solutions.</p>

        <h3>Why Primetroniq Innovations Stands Out</h3>
        <p>Primetroniq Innovations is recognized for delivering high-quality web design and development services at competitive prices without compromising on performance or creativity.</p>
        <ul style="margin-bottom: 20px; color: var(--text-secondary); line-height: 1.7;">
            <li>Modern and attractive website designs</li>
            <li>SEO-optimized structure to boost rankings and traffic</li>
            <li>Responsive designs for desktop, tablet, and mobile</li>
            <li>Latest tools, technologies, and frameworks</li>
            <li>Client-focused approach and timely delivery</li>
            <li>Cost-effective pricing with premium quality</li>
        </ul>
        \`,
        benefits: [
            { title: 'Brand Credibility', text: 'Enhance your brand credibility with a modern, professional digital identity.' },
            { title: 'Responsive Design', text: 'Seamless multi-channel web presence perfectly optimized for desktop, tablet, and mobile.' },
            { title: 'SEO Optimized', text: 'SEO-optimized structure to boost search engine rankings and increase organic traffic.' },
            { title: 'Cost-Effective', text: 'High-quality web development services delivered at highly competitive prices.' }
        ],
        features: ['Custom Website Design', 'CMS Integration (WordPress)', 'API & Database Integration', 'Performance Optimization', 'Responsive & Mobile Friendly'],
        techStack: ['HTML5', 'CSS3', 'JavaScript', 'React', 'WordPress', 'PHP'],
        keywords: 'website development company Delhi, website designing company, custom website development, website redesign services'
    },`;

const regex = /'web-development':\s*\{[\s\S]*?keywords:\s*'[^']*'\s*\},/g;
if(regex.test(fileContent)) {
    fileContent = fileContent.replace(regex, newWebDevContent);
    fs.writeFileSync('d:/primetroniqinnovations/data/servicesData.js', fileContent);
    console.log("Successfully replaced web-development content.");
} else {
    console.log("Regex match failed.");
}
