const fs = require('fs');
let fileContent = fs.readFileSync('d:/primetroniqinnovations/data/servicesData.js', 'utf8');

const newHTMLBlock = `
        <div class="animate-on-scroll" style="margin-top: 50px;">
            <h3 style="color: var(--primary-dark); font-size: 1.8rem; margin-bottom: 20px;">Seamless System Integrations</h3>
            <p>To deploy and operate on-premise queue management effectively, our platform synchronizes effortlessly with your existing digital infrastructure.</p>
            
            <div class="grid grid-cols-2" style="gap: 30px; margin-top: 30px; margin-bottom: 50px;">
                <!-- Card 1: Restaurant/Hospitality Integration -->
                <div style="background: white; border-radius: 16px; overflow: hidden; box-shadow: var(--shadow-md); border: 1px solid var(--glass-border); display: flex; flex-direction: column;">
                    <div style="padding: 30px;">
                        <h4 style="font-size: 1.4rem; color: var(--primary-dark); margin-bottom: 15px; font-weight: 700;">Hospitality & Waitlist Integration</h4>
                        <p style="color: var(--text-secondary); font-size: 0.95rem; line-height: 1.6;">Improve guest experience and front-end efficiency for restaurants, cafes, and food courts. It offers dynamic waitlists, live order tracking, and real-time reservation updates—ensuring smoother operations, reduced walkaways, and happier guests.</p>
                    </div>
                    <div style="padding: 0 30px 30px 30px; margin-top: auto;">
                        <img src="/images/qms-restaurant.png" alt="Restaurant Queue Management" style="width: 100%; border-radius: 8px; box-shadow: var(--shadow-sm);" />
                    </div>
                </div>
                
                <!-- Card 2: Hospital Integration -->
                <div style="background: var(--primary-dark); border-radius: 16px; overflow: hidden; box-shadow: var(--shadow-md); display: flex; flex-direction: column;">
                    <div style="padding: 30px;">
                        <h4 style="font-size: 1.4rem; color: white; margin-bottom: 15px; font-weight: 700;">Hospital Information System (HIS)</h4>
                        <p style="color: rgba(255,255,255,0.85); font-size: 0.95rem; line-height: 1.6;">Primetroniq QMS integrates with leading HIS platforms for healthcare providers to create a unified patient experience. From registration to consultation and billing, patient flow is managed effortlessly while syncing with clinical schedules.</p>
                    </div>
                    <div style="padding: 0 30px 30px 30px; margin-top: auto;">
                        <img src="/images/qms-hospital.png" alt="Hospital Information System Integration" style="width: 100%; border-radius: 8px; box-shadow: var(--shadow-sm);" />
                    </div>
                </div>
            </div>
        </div>

        <div class="animate-on-scroll" style="margin-bottom: 50px;">
            <h3 style="color: var(--primary-dark); font-size: 1.8rem; margin-bottom: 20px;">Applications of QMS in Industry</h3>
            <p>Our digital queue and notice boards are highly versatile, making them suitable for multiple sectors:</p>
            <div style="display: flex; flex-wrap: wrap; gap: 15px; margin-top: 20px; margin-bottom: 40px;">
                <span class="badge" style="background: var(--bg-surface); color: var(--primary-dark); font-size: 1rem; padding: 10px 20px; border: 1px solid var(--glass-border); border-radius: 50px;"><i class="fas fa-utensils" style="margin-right:8px; color:var(--primary);"></i>Restaurants & Food Courts</span>
                <span class="badge" style="background: var(--bg-surface); color: var(--primary-dark); font-size: 1rem; padding: 10px 20px; border: 1px solid var(--glass-border); border-radius: 50px;"><i class="fas fa-headset" style="margin-right:8px; color:var(--primary);"></i>Corporate Helpdesks</span>
                <span class="badge" style="background: var(--bg-surface); color: var(--primary-dark); font-size: 1rem; padding: 10px 20px; border: 1px solid var(--glass-border); border-radius: 50px;"><i class="fas fa-plane-departure" style="margin-right:8px; color:var(--primary);"></i>Airport Lounges</span>
                <span class="badge" style="background: var(--bg-surface); color: var(--primary-dark); font-size: 1rem; padding: 10px 20px; border: 1px solid var(--glass-border); border-radius: 50px;"><i class="fas fa-hospital" style="margin-right:8px; color:var(--primary);"></i>Hospitals & Clinics</span>
                <span class="badge" style="background: var(--bg-surface); color: var(--primary-dark); font-size: 1rem; padding: 10px 20px; border: 1px solid var(--glass-border); border-radius: 50px;"><i class="fas fa-tools" style="margin-right:8px; color:var(--primary);"></i>Service Centres</span>
            </div>
        </div>

        <div class="animate-on-scroll" style="margin-bottom: 50px;">
            <h3 style="color: var(--primary-dark); font-size: 1.8rem; margin-bottom: 20px;">Advanced Key Features</h3>
            
            <h4 style="color: var(--primary); font-size: 1.3rem; margin-bottom: 10px; margin-top: 30px;">Multi-Venue Management</h4>
            <p><strong>Cross-Venue Integration:</strong> If you are managing multiple hospitality venues (e.g., a hotel with multiple restaurants), our QMS can synchronize queues and bookings across various locations, providing a seamless guest experience.</p>
            <p><strong>Unified Dashboard:</strong> A centralized dashboard allows you to manage and monitor queues across all venues in real time, ensuring efficient operations throughout your property.</p>

            <h4 style="color: var(--primary); font-size: 1.3rem; margin-bottom: 10px; margin-top: 30px;">Guest Engagement & Communication</h4>
            <p><strong>Interactive Kiosks:</strong> Allow guests to check themselves in or join a queue via interactive self-service kiosks, providing a more autonomous experience and reducing the need for staff intervention.</p>
            <p><strong>Feedback Collection:</strong> After the queue process, collect guest feedback automatically, helping you understand customer sentiment.</p>
            <p><strong>Real-Time Updates:</strong> Designed to deliver a live, seamless experience for both customers and staff. The system ensures everyone is informed and engaged at every stage of the service journey.</p>

            <h4 style="color: var(--primary); font-size: 1.3rem; margin-bottom: 10px; margin-top: 30px;">Queue Optimization</h4>
            <p><strong>Load Balancing:</strong> Intelligently manage queues to prevent bottlenecks by directing guests to less busy areas, optimizing wait times across the property.</p>
            <p><strong>Staff Allocation:</strong> Allocate staff dynamically to various queue points based on guest volume, ensuring the right number of staff is present at peak times.</p>
            <p><strong>Real-Time Analytics:</strong> Track guest flow in real time and get insights into queue lengths, wait times, and peak periods.</p>

            <h4 style="color: var(--primary); font-size: 1.3rem; margin-bottom: 10px; margin-top: 30px;">Reservation and Booking Integration</h4>
            <p><strong>Automatic Reservation Management:</strong> Integrates with your reservation system, automatically organizing incoming guests based on available time slots and capacity.</p>
            <p><strong>VIP Management:</strong> VIP guests or priority bookings can be assigned top priority in the queue, ensuring they are served quickly.</p>
        </div>

        <!-- Target for insertion is right before the CTA -->
`;

const insertTarget = `<div class="animate-on-scroll" style="background: var(--gradient-cta); padding: 40px; border-radius: var(--radius-lg); color: white; text-align: center; margin-top: 40px; box-shadow: var(--shadow-lg);">`;

if(fileContent.includes(insertTarget)) {
    // Only insert it for the queue-management service. 
    // We'll isolate the queue-management block first.
    const qmsStartIndex = fileContent.indexOf("'queue-management': {");
    const nextServiceIndex = fileContent.indexOf("    },", qmsStartIndex);
    
    let qmsBlock = fileContent.substring(qmsStartIndex, nextServiceIndex);
    qmsBlock = qmsBlock.replace(insertTarget, newHTMLBlock + "\n        " + insertTarget);
    
    fileContent = fileContent.substring(0, qmsStartIndex) + qmsBlock + fileContent.substring(nextServiceIndex);
    fs.writeFileSync('d:/primetroniqinnovations/data/servicesData.js', fileContent);
    console.log("Successfully appended new QMS features and integration cards.");
} else {
    console.log("Could not find CTA block for insertion.");
}
