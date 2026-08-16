const fs = require('fs');

// 1. Update service-detail.ejs
let ejsPath = 'd:/primetroniqinnovations/views/pages/services/service-detail.ejs';
let ejsContent = fs.readFileSync(ejsPath, 'utf8');

const oldCapability = `<h4>Enterprise Capability</h4>
                                        <p>Our solutions are designed to scale with your business, providing robust security, seamless integration capabilities, and 24/7 reliability for mission-critical operations.</p>`;

const newCapability = `<h4><%= service.capabilityTitle || 'Enterprise Capability' %></h4>
                                        <p><%= service.capabilityText || 'Our solutions are designed to scale with your business, providing robust security, seamless integration capabilities, and 24/7 reliability for mission-critical operations.' %></p>`;

ejsContent = ejsContent.replace(oldCapability, newCapability);
fs.writeFileSync(ejsPath, ejsContent);

// 2. Remove Zimbra from header.ejs
let headerPath = 'd:/primetroniqinnovations/views/partials/header.ejs';
let headerContent = fs.readFileSync(headerPath, 'utf8');

// Find the line containing zimbra-email and remove it
const lines = headerContent.split('\\n');
const newLines = lines.filter(line => !line.includes('zimbra-email'));
fs.writeFileSync(headerPath, newLines.join('\\n'));

console.log("Updated service-detail.ejs and header.ejs successfully.");
