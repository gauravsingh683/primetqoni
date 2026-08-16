const fs = require('fs');

let fileContent = fs.readFileSync('d:/primetroniqinnovations/data/servicesData.js', 'utf8');

const tvHtmlToExtract = `customHeroHTML: \`
<style>
.hero-tv-frame {
    position: relative;
    width: 100%;
    background: #000;
    border: 8px solid #222;
    border-radius: 12px;
    box-shadow: 0 20px 50px rgba(0,0,0,0.5), inset 0 0 15px rgba(255,255,255,0.1);
    aspect-ratio: 16/9;
    overflow: hidden;
}
.hero-tv-stand {
    width: 60px;
    height: 15px;
    background: #333;
    margin: 0 auto;
    position: relative;
}
.hero-tv-base {
    width: 140px;
    height: 8px;
    background: #222;
    margin: 0 auto;
    border-radius: 4px;
}
.hero-screen-slider {
    width: 100%;
    height: 100%;
    position: relative;
}
.hero-screen-slider img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0;
    animation: heroTvSlide 12s infinite;
}
.hero-screen-slider img:nth-child(1) { animation-delay: 0s; }
.hero-screen-slider img:nth-child(2) { animation-delay: 4s; }
.hero-screen-slider img:nth-child(3) { animation-delay: 8s; }

@keyframes heroTvSlide {
    0%, 25% { opacity: 1; }
    33.33%, 100% { opacity: 0; }
}
</style>
<div style="width:100%; max-width: 450px;">
    <div class="hero-tv-frame">
        <div class="hero-screen-slider">
            <img src="/images/ad-1.png" alt="Pizza Signage Ad" />
            <img src="/images/ad-2.png" alt="Burger Signage Ad" />
            <img src="/images/ad-3.png" alt="Drinks Signage Ad" />
        </div>
    </div>
    <div class="hero-tv-stand"></div>
    <div class="hero-tv-base"></div>
</div>
\`,
        `;

// First remove it from wherever it is currently
if (fileContent.includes(tvHtmlToExtract)) {
    fileContent = fileContent.replace(tvHtmlToExtract, "");
    console.log("Removed errant customHeroHTML.");
}

const largeTVHTML = `<style>
.tv-frame {
    position: relative;
    width: 100%;
    max-width: 800px;
    margin: 40px auto 0 auto;
    background: #000;
    border: 12px solid #222;
    border-radius: 16px;
    box-shadow: 0 20px 50px rgba(0,0,0,0.5), inset 0 0 15px rgba(255,255,255,0.1);
    aspect-ratio: 16/9;
    overflow: hidden;
}
.tv-stand {
    width: 120px;
    height: 25px;
    background: #333;
    margin: 0 auto;
    position: relative;
}
.tv-base {
    width: 250px;
    height: 10px;
    background: #222;
    margin: 0 auto 30px auto;
    border-radius: 5px;
}
.screen-slider {
    width: 100%;
    height: 100%;
    position: relative;
}
.screen-slider img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0;
    animation: tvSlide 12s infinite;
}
.screen-slider img:nth-child(1) { animation-delay: 0s; }
.screen-slider img:nth-child(2) { animation-delay: 4s; }
.screen-slider img:nth-child(3) { animation-delay: 8s; }

@keyframes tvSlide {
    0%, 25% { opacity: 1; }
    33.33%, 100% { opacity: 0; }
}
</style>

<div class="animate-on-scroll">
    <div class="tv-frame hover-scale">
        <div class="screen-slider">
            <img src="/images/ad-1.png" alt="Pizza Signage Ad" />
            <img src="/images/ad-2.png" alt="Burger Signage Ad" />
            <img src="/images/ad-3.png" alt="Drinks Signage Ad" />
        </div>
    </div>
    <div class="tv-stand hover-scale"></div>
    <div class="tv-base hover-scale"></div>
    <p style="text-align:center; font-style:italic; color: var(--text-secondary); margin-bottom:40px;">* Live Demo: A simulated digital menu board cross-fading through 3 different promotional campaigns.</p>
</div>

        `;

// Add the large TV back to the description
const signageTitleRegex = /'signage-cloud': \{\s*title: 'Cloud Signage Web Application',\s*category: 'Products',\s*imageUrl: '',\s*description: `/g;

if (signageTitleRegex.test(fileContent)) {
    // Reset the regex index just in case
    signageTitleRegex.lastIndex = 0;
    
    // Replace the exact match with itself plus the largeTVHTML and the customHeroHTML
    fileContent = fileContent.replace(signageTitleRegex, `'signage-cloud': { 
        title: 'Cloud Signage Web Application', 
        category: 'Products', 
        imageUrl: '',
        ` + tvHtmlToExtract + `description: \`
        ` + largeTVHTML);
    fs.writeFileSync('d:/primetroniqinnovations/data/servicesData.js', fileContent);
    console.log("Successfully fixed the TV HTML injections for signage-cloud.");
} else {
    console.log("Could not find the signage-cloud signature block. Make sure imageUrl is empty.");
}
