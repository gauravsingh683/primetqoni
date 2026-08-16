const fs = require('fs');

let fileContent = fs.readFileSync('d:/primetroniqinnovations/data/servicesData.js', 'utf8');

const textToAppend = `
        <h3>Grow Your Business with Primetroniq Innovations</h3>
        <p>At Primetroniq Innovations, we build technology solutions that move your business forward. Our custom software development services are designed to give your organization a competitive edge through innovation, efficiency, and digital transformation.</p>
        <p>Partner with a trusted Custom Software Development Company in Delhi and let us help you turn your ideas into powerful digital solutions.</p>
        \`,`;

// We replace the specific string at the end of the custom-software description
// "This enables your business to grow independently without worrying about licensing hikes or vendor lock-in.</p>\n        `,"
const searchString = "This enables your business to grow independently without worrying about licensing hikes or vendor lock-in.</p>\n        `,";
const replaceString = "This enables your business to grow independently without worrying about licensing hikes or vendor lock-in.</p>\n" + textToAppend;

if (fileContent.includes(searchString)) {
    fileContent = fileContent.replace(searchString, replaceString);
    fs.writeFileSync('d:/primetroniqinnovations/data/servicesData.js', fileContent);
    console.log("Successfully appended new section to custom-software.");
} else {
    // try a more generic regex if the exact string match fails
    const fallbackRegex = /(This enables your business to grow independently without worrying about licensing hikes or vendor lock-in\.<\/p>\s*)\`,/;
    if (fallbackRegex.test(fileContent)) {
        fileContent = fileContent.replace(fallbackRegex, `$1${textToAppend}`);
        fs.writeFileSync('d:/primetroniqinnovations/data/servicesData.js', fileContent);
        console.log("Successfully appended new section to custom-software using fallback regex.");
    } else {
        console.log("Failed to find the insertion point.");
    }
}
