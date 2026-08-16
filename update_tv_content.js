const fs = require('fs');

let fileContent = fs.readFileSync('d:/primetroniqinnovations/data/servicesData.js', 'utf8');

// 1. Update the banner TV to use the new banner-ad images
fileContent = fileContent.replace('src="/images/ad-1.png" alt="Pizza Signage Ad" />', 'src="/images/banner-ad-1.png" alt="Corporate Signage Ad" />');
fileContent = fileContent.replace('src="/images/ad-2.png" alt="Burger Signage Ad" />', 'src="/images/banner-ad-2.png" alt="Transit Signage Ad" />');
fileContent = fileContent.replace('src="/images/ad-3.png" alt="Drinks Signage Ad" />', 'src="/images/banner-ad-3.png" alt="Retail Signage Ad" />');

// 2. Ensure the large TV in the description is right BEFORE the "Modern Digital Signage" heading.
// First, extract the large TV from wherever it currently is (I put it at the very top of description in my last script).
// The TV block starts with <style>\n.tv-frame and ends with * Live Demo...</p>\n</div>
const largeTVRegex = /<style>\s*\.tv-frame[\s\S]*?\* Live Demo[\s\S]*?<\/div>/g;
let extractedTV = "";
if (largeTVRegex.test(fileContent)) {
    largeTVRegex.lastIndex = 0;
    const match = fileContent.match(largeTVRegex);
    if (match) {
        extractedTV = match[0];
        // Remove it from current location
        fileContent = fileContent.replace(extractedTV, "");
    }
}

if (extractedTV) {
    // Insert it exactly before the "Modern Digital Signage" heading
    const insertionPointRegex = /(<div class="animate-on-scroll">\s*<h3[^>]*>Modern Digital Signage for Every Industry<\/h3>)/g;
    
    if (insertionPointRegex.test(fileContent)) {
        fileContent = fileContent.replace(insertionPointRegex, extractedTV + "\n\n        $1");
        fs.writeFileSync('d:/primetroniqinnovations/data/servicesData.js', fileContent);
        console.log("Successfully updated banner images and moved the large TV.");
    } else {
        console.log("Could not find insertion point.");
    }
} else {
    console.log("Could not find the large TV block to move.");
}

