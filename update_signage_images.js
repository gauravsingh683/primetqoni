const fs = require('fs');

let fileContent = fs.readFileSync('d:/primetroniqinnovations/data/servicesData.js', 'utf8');

// The block to replace:
// 1. Change imageUrl from the unsplash link to /images/signage-banner.png
// 2. Inject <img src="/images/signage-content.png" ... /> right after the introductory paragraphs

const oldImageLine = "imageUrl: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',";
const newImageLine = "imageUrl: '/images/signage-banner.png',";

fileContent = fileContent.replace(oldImageLine, newImageLine);

const insertPoint = "<p>Whether you have one screen or thousands of displays across multiple locations, our platform makes content management simple, secure, and scalable.</p>";
const insertContent = `<p>Whether you have one screen or thousands of displays across multiple locations, our platform makes content management simple, secure, and scalable.</p>

        <img src="/images/signage-content.png" alt="Cloud Signage Content Dashboard" style="width:100%; border-radius:12px; margin: 30px 0; box-shadow: var(--shadow-deep);" />`;

fileContent = fileContent.replace(insertPoint, insertContent);

fs.writeFileSync('d:/primetroniqinnovations/data/servicesData.js', fileContent);
console.log("Successfully added banner and content images to signage-cloud.");
