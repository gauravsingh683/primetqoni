const fs = require('fs');

// 1. UPDATE service-detail.ejs
let ejsPath = 'd:/primetroniqinnovations/views/pages/services/service-detail.ejs';
let ejsContent = fs.readFileSync(ejsPath, 'utf8');

// Update width logic
const oldWidthStr = `width: <%= service.imageUrl ? '55%' : '100%' %>;`;
const newWidthStr = `width: <%= (service.imageUrl || service.customHeroHTML) ? '55%' : '100%' %>;`;
ejsContent = ejsContent.replace(oldWidthStr, newWidthStr);

// Add customHeroHTML logic
const oldImgBlock = `            <% if (service.imageUrl) { %>
            <div class="service-hero-image animate-on-scroll delay-200" style="position: absolute; right: 0; top: 50%; transform: translateY(-50%); width: 40%; z-index: 1; display: flex; justify-content: flex-end;">
                <img src="<%= service.imageUrl %>" alt="<%= service.title %>" style="max-width: 100%; max-height: 380px; object-fit: contain; filter: drop-shadow(0 15px 25px rgba(0,0,0,0.1)); transition: transform 0.5s ease;" onmouseover="this.style.transform='scale(1.05)'" onmouseout="this.style.transform='scale(1)'">
            </div>
            <% } %>`;
const newImgBlock = `            <% if (service.customHeroHTML) { %>
            <div class="service-hero-custom animate-on-scroll delay-200" style="position: absolute; right: 0; top: 50%; transform: translateY(-50%); width: 40%; z-index: 1; display: flex; justify-content: center; align-items: center;">
                <%- service.customHeroHTML %>
            </div>
            <% } else if (service.imageUrl) { %>
            <div class="service-hero-image animate-on-scroll delay-200" style="position: absolute; right: 0; top: 50%; transform: translateY(-50%); width: 40%; z-index: 1; display: flex; justify-content: flex-end;">
                <img src="<%= service.imageUrl %>" alt="<%= service.title %>" style="max-width: 100%; max-height: 380px; object-fit: contain; filter: drop-shadow(0 15px 25px rgba(0,0,0,0.1)); transition: transform 0.5s ease;" onmouseover="this.style.transform='scale(1.05)'" onmouseout="this.style.transform='scale(1)'">
            </div>
            <% } %>`;
ejsContent = ejsContent.replace(oldImgBlock, newImgBlock);
fs.writeFileSync(ejsPath, ejsContent);

// 2. UPDATE servicesData.js
let dataPath = 'd:/primetroniqinnovations/data/servicesData.js';
let dataContent = fs.readFileSync(dataPath, 'utf8');

// We need to extract the TV HTML from the description and move it to customHeroHTML
const tvHtmlBlockToExtract = `<style>
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
</div>`;

const newTvHtmlForHero = `customHeroHTML: \`
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
\`,`;

if (dataContent.includes(tvHtmlBlockToExtract)) {
    // Remove it from description
    dataContent = dataContent.replace(tvHtmlBlockToExtract, "");
    
    // Add customHeroHTML right before description
    const descriptionMarker = "description: `";
    dataContent = dataContent.replace(descriptionMarker, newTvHtmlForHero + "\n        " + descriptionMarker);
    
    fs.writeFileSync(dataPath, dataContent);
    console.log("Successfully moved TV to Hero Banner.");
} else {
    console.log("Could not find TV HTML in description.");
}
