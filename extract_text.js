const fs = require('fs');
const html = fs.readFileSync('C:/Users/DELL 5400/.gemini/antigravity/brain/4c904af8-23c9-40fc-a301-fa417d2d8f52/.system_generated/steps/1208/content.md', 'utf8');

// A very basic HTML to text extractor
const text = html.replace(/<style[^>]*>[\s\S]*?<\/style>/gi, '')
                 .replace(/<script[^>]*>[\s\S]*?<\/script>/gi, '')
                 .replace(/<[^>]+>/g, ' ')
                 .replace(/\s+/g, ' ')
                 .trim();

fs.writeFileSync('C:/Users/DELL 5400/.gemini/antigravity/brain/4c904af8-23c9-40fc-a301-fa417d2d8f52/extracted_web_app.txt', text);
