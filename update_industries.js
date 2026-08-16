const fs = require('fs');

let fileContent = fs.readFileSync('d:/primetroniqinnovations/data/servicesData.js', 'utf8');

// The string to replace
const searchString = `<p>We serve diverse industries including:</p>
        <ul style="margin-bottom: 20px; color: var(--text-secondary); line-height: 1.7;">
            <li><strong>Healthcare & Hospitals:</strong> Medical Equipment AMC, Biomedical Services</li>
            <li><strong>IT & Networking:</strong> Server Support, Firewall, CCTV & Surveillance Maintenance</li>
            <li><strong>Manufacturing & Facility Management:</strong> Production Equipment, HVAC, Electrical Maintenance</li>
            <li><strong>Educational Institutions:</strong> Computer Labs, Campus Infrastructure</li>
        </ul>`;

// The exact detailed text the user wanted
const newIndustriesString = `<h3>Industries We Serve</h3>
        <ul style="margin-bottom: 20px; color: var(--text-secondary); line-height: 1.7;">
            <li><strong>Healthcare & Hospitals:</strong> Medical Equipment AMC, Biomedical Services, Healthcare Infrastructure Support</li>
            <li><strong>IT & Networking:</strong> Server Support, Network Infrastructure, Firewall & Security Devices</li>
            <li><strong>CCTV & Surveillance:</strong> CCTV Maintenance, Access Control Systems, Security Equipment</li>
            <li><strong>Manufacturing:</strong> Production Equipment Maintenance, Machine Service Tracking</li>
            <li><strong>Facility Management:</strong> HVAC Systems, Electrical Maintenance, Building Services</li>
            <li><strong>Educational Institutions:</strong> Computer Labs, Smart Classrooms, Campus Infrastructure</li>
        </ul>`;

if(fileContent.includes(searchString)) {
    fileContent = fileContent.replace(searchString, newIndustriesString);
    fs.writeFileSync('d:/primetroniqinnovations/data/servicesData.js', fileContent);
    console.log("Successfully updated Industries We Serve.");
} else {
    console.log("Could not find the search string to replace.");
}
