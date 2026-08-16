const fs = require('fs');

let fileContent = fs.readFileSync('d:/primetroniqinnovations/data/servicesData.js', 'utf8');

if(fileContent.includes("'cloud-signage': {")) {
    fileContent = fileContent.replace(/'cloud-signage': \{/g, "'signage-cloud': {");
    fs.writeFileSync('d:/primetroniqinnovations/data/servicesData.js', fileContent);
    console.log("Successfully renamed cloud-signage to signage-cloud.");
} else {
    console.log("Could not find cloud-signage key.");
}
