const fs = require('fs');

let fileContent = fs.readFileSync('d:/primetroniqinnovations/data/servicesData.js', 'utf8');

const oldImageLine = "imageUrl: '/images/signage-banner.png',";
const newImageLine = "imageUrl: '',"; // Set to empty so service-detail.ejs won't render the banner image

if(fileContent.includes(oldImageLine)) {
    fileContent = fileContent.replace(oldImageLine, newImageLine);
    fs.writeFileSync('d:/primetroniqinnovations/data/servicesData.js', fileContent);
    console.log("Successfully removed banner image.");
} else {
    console.log("Could not find the banner image line.");
}
