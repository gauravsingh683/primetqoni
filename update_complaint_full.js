const fs = require('fs');

let fileContent = fs.readFileSync('d:/primetroniqinnovations/data/servicesData.js', 'utf8');

const missingContentHTML = `
        <div class="animate-on-scroll" style="margin-top: 50px;">
            <h3 style="color: var(--primary-dark); font-size: 1.8rem; margin-bottom: 20px;">Core Modules</h3>
            <p>Our Complaint Management System (CMS) is built with powerful core modules to handle every aspect of service operations.</p>
            
            <div class="grid grid-cols-3" style="gap: 20px; margin-top: 30px; margin-bottom: 40px;">
                <div class="card hover-lift" style="padding: 24px; border: 1px solid var(--glass-border); border-radius: var(--radius-md); background: var(--bg-surface);">
                    <i class="fas fa-ticket-alt" style="font-size: 1.8rem; color: var(--primary); margin-bottom: 15px;"></i>
                    <h4 style="margin-bottom: 10px; font-weight: 700; font-size: 1.1rem;">Complaint Management</h4>
                    <ul style="color: var(--text-secondary); font-size: 0.9rem; padding-left: 20px; margin: 0;">
                        <li>Auto Ticket Number Generation</li>
                        <li>Complaint Categorization & Priority</li>
                        <li>Complaint Escalation Management</li>
                        <li>Internal Notes & Comments</li>
                    </ul>
                </div>

                <div class="card hover-lift" style="padding: 24px; border: 1px solid var(--glass-border); border-radius: var(--radius-md); background: var(--bg-surface);">
                    <i class="fas fa-file-contract" style="font-size: 1.8rem; color: var(--accent); margin-bottom: 15px;"></i>
                    <h4 style="margin-bottom: 10px; font-weight: 700; font-size: 1.1rem;">AMC Management</h4>
                    <ul style="color: var(--text-secondary); font-size: 0.9rem; padding-left: 20px; margin: 0;">
                        <li>AMC Contract Creation & Renewal</li>
                        <li>Preventive Maintenance Scheduling</li>
                        <li>Customer-wise AMC Records</li>
                        <li>Service Visit Monitoring</li>
                    </ul>
                </div>

                <div class="card hover-lift" style="padding: 24px; border: 1px solid var(--glass-border); border-radius: var(--radius-md); background: var(--bg-surface);">
                    <i class="fas fa-users" style="font-size: 1.8rem; color: #f59e0b; margin-bottom: 15px;"></i>
                    <h4 style="margin-bottom: 10px; font-weight: 700; font-size: 1.1rem;">Customer Management</h4>
                    <ul style="color: var(--text-secondary); font-size: 0.9rem; padding-left: 20px; margin: 0;">
                        <li>Customer Master Database</li>
                        <li>Multiple Site Management</li>
                        <li>Customer Service History</li>
                        <li>Self-Service Portal Access</li>
                    </ul>
                </div>
                
                <div class="card hover-lift" style="padding: 24px; border: 1px solid var(--glass-border); border-radius: var(--radius-md); background: var(--bg-surface);">
                    <i class="fas fa-user-cog" style="font-size: 1.8rem; color: var(--primary-light); margin-bottom: 15px;"></i>
                    <h4 style="margin-bottom: 10px; font-weight: 700; font-size: 1.1rem;">Technician Management</h4>
                    <ul style="color: var(--text-secondary); font-size: 0.9rem; padding-left: 20px; margin: 0;">
                        <li>Field Staff Allocation</li>
                        <li>Real-Time Status Tracking</li>
                        <li>Performance Monitoring</li>
                        <li>Mobile App Access for Techs</li>
                    </ul>
                </div>

                <div class="card hover-lift" style="padding: 24px; border: 1px solid var(--glass-border); border-radius: var(--radius-md); background: var(--bg-surface);">
                    <i class="fas fa-boxes" style="font-size: 1.8rem; color: #8b5cf6; margin-bottom: 15px;"></i>
                    <h4 style="margin-bottom: 10px; font-weight: 700; font-size: 1.1rem;">Inventory & Spares</h4>
                    <ul style="color: var(--text-secondary); font-size: 0.9rem; padding-left: 20px; margin: 0;">
                        <li>Spare Parts Tracking</li>
                        <li>Vendor Management</li>
                        <li>Stock Consumption Logs</li>
                        <li>Low Stock Alerts</li>
                    </ul>
                </div>

                <div class="card hover-lift" style="padding: 24px; border: 1px solid var(--glass-border); border-radius: var(--radius-md); background: var(--bg-surface);">
                    <i class="fas fa-chart-pie" style="font-size: 1.8rem; color: #10b981; margin-bottom: 15px;"></i>
                    <h4 style="margin-bottom: 10px; font-weight: 700; font-size: 1.1rem;">Reports & Analytics</h4>
                    <ul style="color: var(--text-secondary); font-size: 0.9rem; padding-left: 20px; margin: 0;">
                        <li>SLA Violation Reports</li>
                        <li>Technician Productivity</li>
                        <li>Custom Data Export (CSV/PDF)</li>
                        <li>Business Intelligence Dashboard</li>
                    </ul>
                </div>
            </div>
        </div>

        <div class="grid grid-cols-2 animate-on-scroll" style="gap: 40px; margin-bottom: 50px;">
            <div>
                <h3 style="color: var(--primary-dark); font-size: 1.5rem; margin-bottom: 20px;">Why Choose Primetroniq CMS?</h3>
                <ul style="color: var(--text-secondary); font-size: 1rem; line-height: 1.8; list-style-type: none; padding: 0;">
                    <li><i class="fas fa-check-circle" style="color: var(--primary); margin-right: 10px;"></i><strong>User-Friendly Interface</strong> designed for rapid adoption.</li>
                    <li><i class="fas fa-check-circle" style="color: var(--primary); margin-right: 10px;"></i><strong>Fast Deployment</strong> on Cloud or On-Premise architecture.</li>
                    <li><i class="fas fa-check-circle" style="color: var(--primary); margin-right: 10px;"></i><strong>Customizable Workflow</strong> to match your exact service operations.</li>
                    <li><i class="fas fa-check-circle" style="color: var(--primary); margin-right: 10px;"></i><strong>Scalable Architecture</strong> ready to handle thousands of tickets.</li>
                    <li><i class="fas fa-check-circle" style="color: var(--primary); margin-right: 10px;"></i><strong>Secure Data Management</strong> with Role-Based Access Controls.</li>
                </ul>
            </div>
            <div style="background: var(--bg-surface); padding: 30px; border-radius: 12px; border: 1px dashed var(--primary-light);">
                <h3 style="color: var(--primary-dark); font-size: 1.5rem; margin-bottom: 20px;"><i class="fas fa-rocket" style="color: var(--accent); margin-right: 10px;"></i>Future Roadmap</h3>
                <p style="color: var(--text-secondary); margin-bottom: 15px;">Upcoming Enhancements currently in development:</p>
                <div style="display: flex; flex-wrap: wrap; gap: 10px;">
                    <span class="badge" style="background: white; color: var(--primary-dark); border: 1px solid #e2e8f0;">Mobile App (Android & iOS)</span>
                    <span class="badge" style="background: white; color: var(--primary-dark); border: 1px solid #e2e8f0;">WhatsApp Integration</span>
                    <span class="badge" style="background: white; color: var(--primary-dark); border: 1px solid #e2e8f0;">AI Complaint Classification</span>
                    <span class="badge" style="background: white; color: var(--primary-dark); border: 1px solid #e2e8f0;">QR Code Asset Tracking</span>
                    <span class="badge" style="background: white; color: var(--primary-dark); border: 1px solid #e2e8f0;">GPS Technician Tracking</span>
                    <span class="badge" style="background: white; color: var(--primary-dark); border: 1px solid #e2e8f0;">Predictive Maintenance</span>
                </div>
            </div>
        </div>
`;

// Insert right before the CTA block or at the end of the description
// Wait, I don't remember if complaint-management has a specific CTA block inside its description. 
// I'll append it right before the backtick closing the description string for 'complaint-management'.
const regex = /('complaint-management':\s*\{[\s\S]*?description:\s*`[\s\S]*?)(\s*`,\s*benefits:)/g;

if (regex.test(fileContent)) {
    fileContent = fileContent.replace(regex, `$1${missingContentHTML}$2`);
    fs.writeFileSync('d:/primetroniqinnovations/data/servicesData.js', fileContent);
    console.log("Successfully appended complete content to complaint-management.");
} else {
    console.log("Regex match failed for complaint-management.");
}
