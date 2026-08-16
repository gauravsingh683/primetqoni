require('dotenv').config();
const express = require('express');
const path = require('path');
const session = require('express-session');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

// ─── Middleware ───────────────────────────────────────────────
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(session({
    secret: process.env.SESSION_SECRET || 'primetroniq-secret',
    resave: false,
    saveUninitialized: false,
    cookie: { maxAge: 24 * 60 * 60 * 1000 } // 24 hours
}));

// ─── Helper: Page Data ───────────────────────────────────────
const siteData = {
    siteName: 'Primetroniq Innovations',
    siteUrl: 'https://primetroniqinnovations.com',
    phone: '+91 9608069813',
    email: 'info@primetroniqinnovations.com',
    whatsapp: '919608069813',
    facebook: 'https://www.facebook.com/primetroniqinnovations/',
    instagram: 'https://www.instagram.com/primetroniqinnovations/',
    linkedin: '#',
    twitter: '#',
    year: new Date().getFullYear()
};

// ─── Page Routes ─────────────────────────────────────────────
// Homepage
app.get('/', (req, res) => {
    res.render('pages/index', {
        ...siteData,
        title: 'Primetroniq Innovations | Web & App Development | Digital Solutions',
        description: 'Pioneering IT solutions, custom software development, web design & digital marketing in India. Boost your business with scalable technology today.',
        keywords: 'web development, app development, software company, digital marketing, SEO, WhatsApp API, cloud hosting, Delhi NCR',
        canonicalUrl: siteData.siteUrl + '/',
        ogImage: siteData.siteUrl + '/assets/images/logo.png',
        currentPage: 'home',
        pageCss: 'home'
    });
});

// About Us
app.get('/about', (req, res) => {
    res.render('pages/about', {
        ...siteData,
        title: 'About Us | Primetroniq Innovations - Your Trusted Technology Partner',
        description: 'Learn about Primetroniq Innovations - a creative software development & web designing company delivering end-to-end IT solutions for businesses across India.',
        keywords: 'about primetroniq, software company India, web development company, IT solutions provider',
        canonicalUrl: siteData.siteUrl + '/about',
        ogImage: siteData.siteUrl + '/assets/images/logo.png',
        currentPage: 'about',
        pageCss: 'about'
    });
});

// Services Overview
app.get('/services', (req, res) => {
    res.render('pages/services', {
        ...siteData,
        title: 'Our Services | Primetroniq Innovations - Complete IT Solutions',
        description: 'Explore our comprehensive IT services - Web Development, App Development, Digital Marketing, Cloud Hosting, Communication APIs, CRM Solutions & more.',
        keywords: 'IT services, web development services, digital marketing, cloud hosting, WhatsApp API, CRM solutions',
        canonicalUrl: siteData.siteUrl + '/services',
        ogImage: siteData.siteUrl + '/assets/images/logo.png',
        currentPage: 'services',
        pageCss: 'services'
    });
});

// Contact Us
app.get('/contact', (req, res) => {
    res.render('pages/contact', {
        ...siteData,
        title: 'Contact Us | Primetroniq Innovations - Get in Touch',
        description: 'Contact Primetroniq Innovations for web development, software solutions, digital marketing & IT services. Call +91 9608069813 or email us today.',
        keywords: 'contact primetroniq, web development company contact, IT services inquiry',
        canonicalUrl: siteData.siteUrl + '/contact',
        ogImage: siteData.siteUrl + '/assets/images/logo.png',
        currentPage: 'contact',
        pageCss: 'contact'
    });
});

// Blog
app.get('/blog', (req, res) => {
    res.render('pages/blog', {
        ...siteData,
        title: 'Blog | Primetroniq Innovations - Tech Insights & Industry Updates',
        description: 'Read the latest insights on web development, digital marketing, cloud solutions, and technology trends from Primetroniq Innovations.',
        keywords: 'tech blog, web development blog, digital marketing insights, IT industry updates',
        canonicalUrl: siteData.siteUrl + '/blog',
        ogImage: siteData.siteUrl + '/assets/images/logo.png',
        currentPage: 'blog',
        pageCss: 'blog'
    });
});

// Book Demo
app.get('/book-demo', (req, res) => {
    res.render('pages/book-demo', {
        ...siteData,
        title: 'Book a Demo | Primetroniq Innovations - See Our Solutions in Action',
        description: 'Schedule a free demo to explore our web development, software, and digital marketing solutions. See how Primetroniq Innovations can transform your business.',
        keywords: 'book demo, free consultation, IT solutions demo, software demo',
        canonicalUrl: siteData.siteUrl + '/book-demo',
        ogImage: siteData.siteUrl + '/assets/images/logo.png',
        currentPage: 'book-demo',
        pageCss: 'contact'
    });
});

// ─── Service Sub-Pages ───────────────────────────────────────
const servicePages = require('./data/servicesData.js');

// Dynamic service page routes
Object.keys(servicePages).forEach(slug => {
    app.get(`/services/${slug}`, (req, res) => {
        const service = servicePages[slug];
        res.render('pages/services/service-detail', {
            ...siteData,
            title: `${service.title} | Primetroniq Innovations`,
            description: service.description,
            keywords: service.keywords,
            canonicalUrl: `${siteData.siteUrl}/services/${slug}`,
            ogImage: siteData.siteUrl + '/assets/images/logo.png',
            currentPage: 'services',
            pageCss: 'service-detail',
            service: service,
            slug: slug,
            allServices: servicePages
        });
    });
});

// ─── Pricing Pages ───────────────────────────────────────────
app.get('/pricing/sms', (req, res) => {
    res.render('pages/pricing/sms', {
        ...siteData,
        title: 'SMS Pricing | Primetroniq Innovations',
        description: 'Affordable bulk SMS pricing plans for businesses. Transactional and promotional SMS at competitive rates.',
        keywords: 'SMS pricing, bulk SMS plans, SMS rates',
        canonicalUrl: siteData.siteUrl + '/pricing/sms',
        ogImage: siteData.siteUrl + '/assets/images/logo.png',
        currentPage: 'pricing',
        pageCss: 'pricing'
    });
});

app.get('/pricing/whatsapp', (req, res) => {
    let pricingData = [];
    try {
        const fs = require('fs');
        const path = require('path');
        pricingData = JSON.parse(fs.readFileSync(path.join(__dirname, 'pricing.json'), 'utf8'));
    } catch (e) {
        console.error("Could not load pricing.json");
    }
    res.render('pages/pricing/whatsapp', {
        ...siteData,
        title: 'WhatsApp API Pricing | Primetroniq Innovations',
        description: 'WhatsApp Business API pricing plans. Automate customer communication with affordable messaging solutions.',
        keywords: 'WhatsApp API pricing, WhatsApp Business pricing, messaging pricing',
        canonicalUrl: siteData.siteUrl + '/pricing/whatsapp',
        ogImage: siteData.siteUrl + '/assets/images/logo.png',
        currentPage: 'pricing',
        pageCss: 'pricing',
        pricingData: pricingData
    });
});

app.get('/pricing/rcs', (req, res) => {
    let pricingData = [];
    try {
        const fs = require('fs');
        const path = require('path');
        pricingData = JSON.parse(fs.readFileSync(path.join(__dirname, 'rcs-pricing.json'), 'utf8'));
    } catch (e) {
        console.error("Could not load rcs-pricing.json");
    }
    res.render('pages/pricing/rcs', {
        ...siteData,
        title: 'RCS Messaging Pricing | Primetroniq Innovations',
        description: 'RCS Messaging API pricing plans. Automate customer communication with affordable messaging solutions.',
        keywords: 'RCS API pricing, RCS Business pricing, messaging pricing',
        canonicalUrl: siteData.siteUrl + '/pricing/rcs',
        ogImage: siteData.siteUrl + '/assets/images/logo.png',
        currentPage: 'pricing',
        pageCss: 'pricing',
        pricingData: pricingData
    });
});

app.get('/pricing/sms', (req, res) => {
    res.render('pages/pricing/sms', {
        ...siteData,
        title: 'Bulk SMS Pricing | Primetroniq Innovations',
        description: 'Bulk SMS and SMS API pricing plans. High delivery rates at affordable prices.',
        keywords: 'SMS API pricing, Bulk SMS pricing, messaging pricing',
        canonicalUrl: siteData.siteUrl + '/pricing/sms',
        ogImage: siteData.siteUrl + '/assets/images/logo.png',
        currentPage: 'pricing',
        pageCss: 'pricing'
    });
});

// ─── Legal Pages ─────────────────────────────────────────────
app.get('/terms', (req, res) => {
    res.render('pages/legal/terms', {
        ...siteData,
        title: 'Terms & Conditions | Primetroniq Innovations',
        description: 'Terms and conditions for using Primetroniq Innovations services.',
        keywords: 'terms and conditions, terms of service',
        canonicalUrl: siteData.siteUrl + '/terms',
        ogImage: siteData.siteUrl + '/assets/images/logo.png',
        currentPage: '',
        pageCss: 'legal'
    });
});

app.get('/privacy-policy', (req, res) => {
    res.render('pages/legal/privacy', {
        ...siteData,
        title: 'Privacy Policy | Primetroniq Innovations',
        description: 'Privacy policy for Primetroniq Innovations. Learn how we handle and protect your data.',
        keywords: 'privacy policy, data protection',
        canonicalUrl: siteData.siteUrl + '/privacy-policy',
        ogImage: siteData.siteUrl + '/assets/images/logo.png',
        currentPage: '',
        pageCss: 'legal'
    });
});

app.get('/cookie-policy', (req, res) => {
    res.render('pages/legal/cookie', {
        ...siteData,
        title: 'Cookie Policy | Primetroniq Innovations',
        description: 'Cookie policy for Primetroniq Innovations website.',
        keywords: 'cookie policy, cookies',
        canonicalUrl: siteData.siteUrl + '/cookie-policy',
        ogImage: siteData.siteUrl + '/assets/images/logo.png',
        currentPage: '',
        pageCss: 'legal'
    });
});

// ─── API Routes ──────────────────────────────────────────────
const apiRoutes = require('./routes/api');
app.use('/api', apiRoutes);

// ─── Admin Routes ────────────────────────────────────────────
const adminRoutes = require('./routes/admin');
app.use('/admin', adminRoutes);

// ─── 404 Page ────────────────────────────────────────────────
app.use((req, res) => {
    res.status(404).render('pages/404', {
        ...siteData,
        title: '404 - Page Not Found | Primetroniq Innovations',
        description: 'The page you are looking for does not exist.',
        keywords: '',
        canonicalUrl: siteData.siteUrl,
        ogImage: siteData.siteUrl + '/assets/images/logo.png',
        currentPage: '',
        pageCss: ''
    });
});

// ─── Start Server ────────────────────────────────────────────
app.listen(PORT, '0.0.0.0', () => {
    console.log(`
    ╔══════════════════════════════════════════════════════════════╗
    ║   🚀 Primetroniq Innovations Server Running                 ║
    ║   📍 Local:   http://localhost:${PORT}                           ║
    ║   📍 Network: http://192.168.1.4:${PORT}                        ║
    ║   📍 Admin:   http://localhost:${PORT}/admin                     ║
    ╚══════════════════════════════════════════════════════════════╝
    `);
});

