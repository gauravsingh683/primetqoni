const fs = require('fs');

let fileContent = fs.readFileSync('d:/primetroniqinnovations/data/servicesData.js', 'utf8');

// Replace the first generic image with the custom UI list image
fileContent = fileContent.replace(
    '<img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" alt="IT Asset Management Dashboard"',
    '<img src="/images/asset-list.png" alt="IT Asset Management Dashboard UI"'
);

// Replace the second generic image with the custom analytics image
fileContent = fileContent.replace(
    '<img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" alt="Data Analytics and Asset Monitoring"',
    '<img src="/images/asset-analytics.png" alt="IT Asset Analytics Dashboard"'
);

fs.writeFileSync('d:/primetroniqinnovations/data/servicesData.js', fileContent);
console.log("Replaced image URLs with authentic generated images.");
