const fs = require('fs');

let fileContent = fs.readFileSync('d:/primetroniqinnovations/data/servicesData.js', 'utf8');

const tvHTML = `<style>
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

        <div class="animate-on-scroll">
            <h3 style="color: var(--primary-dark); font-size: 1.8rem; margin-bottom: 20px;">Modern Digital Signage for Every Industry</h3>`;

// We target the Modern Digital Signage heading block
const searchString = `<div class="animate-on-scroll">
            <h3 style="color: var(--primary-dark); font-size: 1.8rem; margin-bottom: 20px;">Modern Digital Signage for Every Industry</h3>`;

if(fileContent.includes(searchString)) {
    fileContent = fileContent.replace(searchString, tvHTML);
    fs.writeFileSync('d:/primetroniqinnovations/data/servicesData.js', fileContent);
    console.log("Successfully injected animated TV screen slider.");
} else {
    console.log("Could not find insertion point.");
}
