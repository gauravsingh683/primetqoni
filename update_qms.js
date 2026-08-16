const fs = require('fs');
let fileContent = fs.readFileSync('d:/primetroniqinnovations/data/servicesData.js', 'utf8');

const newQmsContent = `'queue-management': { 
        title: 'Queue Management System (QMS)', 
        category: 'Products', 
        imageUrl: '',
        customHeroHTML: \`
<style>
.gif-slider-frame {
    position: relative;
    width: 100%;
    background: #fff;
    border-radius: 12px;
    box-shadow: 0 20px 50px rgba(0,0,0,0.2), 0 0 0 1px rgba(0,0,0,0.05);
    aspect-ratio: 16/9;
    overflow: hidden;
}
.gif-screen-slider {
    width: 100%;
    height: 100%;
    position: relative;
}
.gif-screen-slider img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0;
    animation: gifSlide 2s infinite;
}
.gif-screen-slider img:nth-child(1) { animation-delay: 0s; }
.gif-screen-slider img:nth-child(2) { animation-delay: 1s; }

@keyframes gifSlide {
    0%, 45% { opacity: 1; }
    50%, 100% { opacity: 0; }
}
</style>
<div style="width:100%; max-width: 500px;">
    <div class="gif-slider-frame">
        <div class="gif-screen-slider">
            <img src="/images/qms-dash-1.png" alt="QMS Dashboard Frame 1" />
            <img src="/images/qms-dash-2.png" alt="QMS Dashboard Frame 2" />
        </div>
    </div>
    <div style="text-align: center; margin-top: 10px;">
        <span class="badge" style="background: rgba(34, 197, 94, 0.1); color: #16a34a;"><i class="fas fa-circle" style="font-size:8px; margin-right:5px; animation: pulse 2s infinite;"></i>Live Application Preview</span>
    </div>
</div>
        \`,
        description: \`
        <div class="animate-on-scroll">
            <p style="font-size: 1.1rem; color: var(--text-primary); font-weight: 500;"><strong>Smart Customer & Patient Flow Management Solution</strong></p>
            <p>Primetroniq Innovations Queue Management System (QMS) is a powerful cloud-based platform designed to streamline customer, patient, and visitor flow across organizations. The system reduces waiting times, improves service efficiency, enhances customer satisfaction, and provides complete visibility into queue operations.</p>
            <p>Whether you manage a hospital, clinic, bank, government office, service center, educational institution, or corporate helpdesk, our QMS helps deliver a seamless and organized service experience.</p>
        </div>

        <div class="animate-on-scroll" style="margin-top: 40px; margin-bottom: 40px;">
            <img src="/images/qms-tv.png" alt="Hospital Waiting Area QMS Display" style="width:100%; border-radius:12px; box-shadow: var(--shadow-deep); transition: transform 0.3s ease;" class="hover-scale" />
            <p style="text-align:center; font-style:italic; color: var(--text-secondary); margin-top:15px;">Transform your waiting areas with Digital Signage Integration.</p>
        </div>

        <div class="animate-on-scroll">
            <h3 style="color: var(--primary-dark); font-size: 1.8rem; margin-bottom: 20px;">Complete Queue Management Ecosystem</h3>
            <p>Our solution combines digital token management, real-time queue monitoring, appointment scheduling, digital signage integration, reporting, and staff management into a single centralized platform.</p>
        </div>

        <div class="grid grid-cols-2 animate-on-scroll" style="gap: 20px; margin-top: 30px; margin-bottom: 40px;">
            <div class="card hover-lift" style="padding: 24px; border: 1px solid var(--glass-border); border-radius: var(--radius-md); background: var(--bg-surface);">
                <i class="fas fa-ticket-alt" style="font-size: 2rem; color: var(--primary); margin-bottom: 15px;"></i>
                <h4 style="margin-bottom: 10px; font-weight: 700;">Digital Token Generation</h4>
                <p style="font-size: 0.9rem; color: var(--text-secondary);">Virtual queues, priority token handling, VIP management, and counter-based assignments.</p>
            </div>
            <div class="card hover-lift" style="padding: 24px; border: 1px solid var(--glass-border); border-radius: var(--radius-md); background: var(--bg-surface);">
                <i class="fas fa-calendar-check" style="font-size: 2rem; color: var(--accent); margin-bottom: 15px;"></i>
                <h4 style="margin-bottom: 10px; font-weight: 700;">Appointment Scheduling</h4>
                <p style="font-size: 0.9rem; color: var(--text-secondary);">Online booking, doctor scheduling, department-wise booking, and automated appointment reminders.</p>
            </div>
            <div class="card hover-lift" style="padding: 24px; border: 1px solid var(--glass-border); border-radius: var(--radius-md); background: var(--bg-surface);">
                <i class="fas fa-volume-up" style="font-size: 2rem; color: #f59e0b; margin-bottom: 15px;"></i>
                <h4 style="margin-bottom: 10px; font-weight: 700;">Audio Announcement System</h4>
                <p style="font-size: 0.9rem; color: var(--text-secondary);">Multi-language automated token calling, custom voice messages, and priority customer alerts.</p>
            </div>
            <div class="card hover-lift" style="padding: 24px; border: 1px solid var(--glass-border); border-radius: var(--radius-md); background: var(--bg-surface);">
                <i class="fas fa-chart-line" style="font-size: 2rem; color: var(--primary-light); margin-bottom: 15px;"></i>
                <h4 style="margin-bottom: 10px; font-weight: 700;">Real-Time Reporting</h4>
                <p style="font-size: 0.9rem; color: var(--text-secondary);">Average wait time analysis, staff performance reports, customer flow reporting, and branch analytics.</p>
            </div>
        </div>

        <div class="animate-on-scroll" style="margin-top: 40px; margin-bottom: 40px; text-align: center;">
            <img src="/images/qms-mobile.png" alt="Queue Management Mobile Application" style="max-width:350px; width:100%; border-radius:24px; box-shadow: var(--shadow-deep); transition: transform 0.3s ease;" class="hover-scale" />
            <p style="margin-top: 15px; font-style: italic; color: var(--text-secondary);">Give your customers real-time mobile queue access so they can wait anywhere.</p>
        </div>

        <div class="animate-on-scroll">
            <h3 style="color: var(--primary-dark); font-size: 1.5rem;">Hospital Queue Management System</h3>
            <p>Perfect for hospitals, clinics, diagnostic centers, and healthcare facilities. Our specialized hospital module handles OPD Registration Queues, Doctor Consultation Queues, Laboratory Queues, Pharmacy Queues, and Emergency Priority Handling.</p>
        </div>

        <div class="animate-on-scroll" style="margin-top: 30px;">
            <h3 style="color: var(--primary-dark); font-size: 1.5rem;">Industries We Serve</h3>
            <ul style="margin-bottom: 30px; color: var(--text-secondary); line-height: 1.7; display: grid; grid-template-columns: 1fr 1fr; gap: 10px;">
                <li><i class="fas fa-hospital" style="color:var(--primary); margin-right:8px;"></i>Hospitals & Healthcare</li>
                <li><i class="fas fa-university" style="color:var(--primary); margin-right:8px;"></i>Banks & Financial Institutions</li>
                <li><i class="fas fa-building" style="color:var(--primary); margin-right:8px;"></i>Government Offices</li>
                <li><i class="fas fa-graduation-cap" style="color:var(--primary); margin-right:8px;"></i>Educational Institutions</li>
                <li><i class="fas fa-tools" style="color:var(--primary); margin-right:8px;"></i>Service Centers</li>
                <li><i class="fas fa-shopping-cart" style="color:var(--primary); margin-right:8px;"></i>Retail Stores</li>
            </ul>
        </div>

        <div class="animate-on-scroll" style="background: var(--gradient-cta); padding: 40px; border-radius: var(--radius-lg); color: white; text-align: center; margin-top: 40px; box-shadow: var(--shadow-lg);">
            <h2 style="color: white; margin-bottom: 15px; font-size: 2rem;">Ready to Transform Customer Experience?</h2>
            <p style="margin-bottom: 25px; opacity: 0.9; max-width: 600px; margin-left: auto; margin-right: auto;">Reduce waiting times, improve service efficiency, and deliver exceptional customer experiences with Primetroniq Queue Management System.</p>
            <div style="display: flex; gap: 15px; justify-content: center; flex-wrap: wrap;">
                <a href="/book-demo" class="btn" style="background: white; color: var(--primary-dark); font-weight: 700; padding: 12px 30px; border-radius: 50px;">Request Free Demo</a>
                <a href="/contact" class="btn btn-outline" style="border-color: white; color: white; font-weight: 700; padding: 12px 30px; border-radius: 50px;">Contact Sales</a>
            </div>
        </div>
        \`,
        benefits: [
            { title: 'Improve Customer Experience', text: 'Provide a structured and transparent waiting experience.' },
            { title: 'Increase Operational Efficiency', text: 'Optimize staff allocation and reduce service bottlenecks.' },
            { title: 'Reduce Waiting Time', text: 'Smart queue routing minimizes customer waiting periods.' },
            { title: 'Real-Time Visibility', text: 'Monitor queue operations from anywhere using our analytics dashboard.' }
        ],
        features: ['Digital Token Generation', 'Real-Time Queue Updates', 'VIP & Priority Queue Handling', 'Service Category Routing', 'Mobile & Web Queue Access', 'Multi-Language Audio Announcements'],
        techStack: ['Node.js', 'React', 'WebSockets', 'Digital Signage Integration', 'Cloud Database'],
        keywords: 'Queue Management System, Hospital Queue Management Software, Patient Queue Management System, Digital Token Management System'
    },`;

// Replace the old 'qms' block
const qmsRegex = /'qms':\s*\{[\s\S]*?keywords:\s*'[^']*'\s*\},/g;
if(qmsRegex.test(fileContent)) {
    fileContent = fileContent.replace(qmsRegex, newQmsContent);
    fs.writeFileSync('d:/primetroniqinnovations/data/servicesData.js', fileContent);
    console.log("Successfully updated queue-management content.");
} else {
    console.log("Regex match failed for qms.");
}
