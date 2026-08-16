const fs = require('fs');

let fileContent = fs.readFileSync('d:/primetroniqinnovations/data/servicesData.js', 'utf8');

const searchStr = "actionButton: { text: 'Book Now', url: '/book-demo' }";
const replaceStr = "actionButton: { text: 'Book Demo', url: '/book-demo' }";

if(fileContent.includes(searchStr)) {
    // Replace all instances
    fileContent = fileContent.split(searchStr).join(replaceStr);
    fs.writeFileSync('d:/primetroniqinnovations/data/servicesData.js', fileContent);
    console.log("Successfully changed button text to 'Book Demo'.");
} else {
    console.log("Could not find the 'Book Now' string to replace.");
}
