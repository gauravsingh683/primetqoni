const fs = require('fs');
let fileContent = fs.readFileSync('d:/primetroniqinnovations/data/servicesData.js', 'utf8');

const servicesToUpdate = ['queue-management', 'signage-cloud', 'complaint-management'];
const actionButtonString = "\n        actionButton: { text: 'Book Now', url: '/book-demo' },";

servicesToUpdate.forEach(service => {
    // We look for the exact category line for each service
    // For 'queue-management', category: 'Products'
    // For 'signage-cloud', category: 'Products'
    // For 'complaint-management', category: 'Software & Web Development'
    
    const regexPattern = "('" + service + "':\\s*\\{[\\s\\S]*?category:\\s*'[^']*',)";
    const regex = new RegExp(regexPattern, 'g');
    
    if (regex.test(fileContent)) {
        fileContent = fileContent.replace(regex, "$1" + actionButtonString);
        console.log("Successfully added Book Now button to " + service);
    } else {
        console.log("Failed to find category line for " + service);
    }
});

fs.writeFileSync('d:/primetroniqinnovations/data/servicesData.js', fileContent);
