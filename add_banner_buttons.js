const fs = require('fs');
let fileContent = fs.readFileSync('d:/primetroniqinnovations/data/servicesData.js', 'utf8');

const servicesToUpdate = ['queue-management', 'signage-cloud', 'complaint-management'];
const actionButtonString = `\n        actionButton: { text: 'Book Now', url: '/book-demo' },`;

servicesToUpdate.forEach(service => {
    // We look for the declaration line: 'service-name': { ... category: 'Products',
    // It could be 'Software & Web Development' for complaint-management maybe?
    // Let's just use a regex to find the category line within the specific service block.
    
    // Pattern: capture 'service-name': { up to category: '...', and insert after that line
    const regex = new RegExp(\`('\${service}':\\s*\\{[\\s\\S]*?category:\\s*'[^']*',)\`, 'g');
    
    if (regex.test(fileContent)) {
        fileContent = fileContent.replace(regex, \`$1\${actionButtonString}\`);
        console.log(\`Successfully added Book Now button to \${service}\`);
    } else {
        console.log(\`Failed to find category line for \${service}\`);
    }
});

fs.writeFileSync('d:/primetroniqinnovations/data/servicesData.js', fileContent);
