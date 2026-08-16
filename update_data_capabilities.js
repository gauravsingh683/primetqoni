const fs = require('fs');

let fileContent = fs.readFileSync('d:/primetroniqinnovations/data/servicesData.js', 'utf8');

// 1. Remove Zimbra Email block completely
// Using a regex to match from 'zimbra-email': to the next '},'
const zimbraRegex = /'zimbra-email':\s*\{[\s\S]*?keywords:\s*'[^']*'\s*\},/g;
fileContent = fileContent.replace(zimbraRegex, '');

// 2. Add Capability variables to Microsoft 365
const m365Regex = /('microsoft-365':\s*\{[\s\S]*?)(actionButton:.*?,)/;
if (m365Regex.test(fileContent)) {
    fileContent = fileContent.replace(m365Regex, `$1$2
        capabilityTitle: 'Copilot AI Integration',
        capabilityText: 'Transform your workflow with Microsoft Copilot. Automatically draft documents, summarize long email threads, and generate data insights directly within your familiar Office apps.',`);
}

// 3. Add Capability variables to Zoho CRM
const zohoCrmRegex = /('zoho-crm':\s*\{[\s\S]*?)(actionButton:.*?,)/;
if (zohoCrmRegex.test(fileContent)) {
    fileContent = fileContent.replace(zohoCrmRegex, `$1$2
        capabilityTitle: 'Canvas Design Studio',
        capabilityText: 'Zoho CRM features the industry\\'s first CRM design studio. Completely redesign the look and feel of your CRM interface without writing a single line of code, ensuring high adoption rates.',`);
}

// 4. Add Capability variables to Zoho Email
const zohoEmailRegex = /('zoho-email':\s*\{[\s\S]*?)(actionButton:.*?,)/;
if (zohoEmailRegex.test(fileContent)) {
    fileContent = fileContent.replace(zohoEmailRegex, `$1$2
        capabilityTitle: 'Secure Unified Workspace',
        capabilityText: 'Zoho Workplace goes beyond ad-free email by providing an encrypted, unified ecosystem where your team can chat, meet, and co-author documents without ever switching tabs.',`);
}

// 5. Add Capability variables to Google Workspace
const gsuiteRegex = /('google-workspace':\s*\{[\s\S]*?)(actionButton:.*?,)/;
if (gsuiteRegex.test(fileContent)) {
    fileContent = fileContent.replace(gsuiteRegex, `$1$2
        capabilityTitle: 'Gemini AI & Cloud Native',
        capabilityText: 'Built for the cloud from day one. Google Workspace empowers real-time collaboration with zero version conflicts, now supercharged with Gemini AI to help you write, organize, and visualize.',`);
}

fs.writeFileSync('d:/primetroniqinnovations/data/servicesData.js', fileContent);
console.log("Successfully removed Zimbra and added unique capabilities to the 4 services.");
