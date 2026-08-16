/**
 * Primetroniq Innovations - Main JavaScript
 * Handles: Navigation, scroll animations, counters, form validation, smooth scroll
 */

document.addEventListener('DOMContentLoaded', () => {
    initHeader();
    initMobileNav();
    initScrollAnimations();
    initCounters();
    initSmoothScroll();
    initBackToTop();
    initContactForm();
    initWhatsAppWidget();
    initTypewriter();
});

/* ═══════════════════════════════════════════════════════════════
   HEADER - Sticky + Scroll Effect
   ═══════════════════════════════════════════════════════════════ */
function initHeader() {
    const header = document.querySelector('.site-header');
    if (!header) return;

    let lastScroll = 0;

    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;

        // Add/remove scrolled class for background change
        if (currentScroll > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }

        // Hide/show header on scroll direction
        if (currentScroll > 300) {
            if (currentScroll > lastScroll) {
                header.classList.add('header-hidden');
            } else {
                header.classList.remove('header-hidden');
            }
        }

        lastScroll = currentScroll;
    });

    // Mega menu hover
    const megaMenuTriggers = document.querySelectorAll('.has-mega-menu');
    megaMenuTriggers.forEach(trigger => {
        let timeout;
        trigger.addEventListener('mouseenter', () => {
            clearTimeout(timeout);
            trigger.classList.add('mega-open');
        });
        trigger.addEventListener('mouseleave', () => {
            timeout = setTimeout(() => {
                trigger.classList.remove('mega-open');
            }, 200);
        });
    });
}

/* ═══════════════════════════════════════════════════════════════
   MOBILE NAVIGATION
   ═══════════════════════════════════════════════════════════════ */
function initMobileNav() {
    const hamburger = document.querySelector('.hamburger');
    const mobileNav = document.querySelector('.mobile-nav');
    const mobileOverlay = document.querySelector('.mobile-nav-overlay');
    const body = document.body;

    if (!hamburger || !mobileNav) return;

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        mobileNav.classList.toggle('open');
        if (mobileOverlay) mobileOverlay.classList.toggle('active');
        body.classList.toggle('nav-open');
    });

    if (mobileOverlay) {
        mobileOverlay.addEventListener('click', () => {
            hamburger.classList.remove('active');
            mobileNav.classList.remove('open');
            mobileOverlay.classList.remove('active');
            body.classList.remove('nav-open');
        });
    }

    // Mobile dropdown toggles
    const mobileDropdowns = document.querySelectorAll('.mobile-nav .dropdown-toggle');
    mobileDropdowns.forEach(toggle => {
        toggle.addEventListener('click', (e) => {
            e.preventDefault();
            const parent = toggle.parentElement;
            parent.classList.toggle('open');
        });
    });
}

/* ═══════════════════════════════════════════════════════════════
   SCROLL ANIMATIONS - Intersection Observer
   ═══════════════════════════════════════════════════════════════ */
function initScrollAnimations() {
    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    if (animatedElements.length === 0) return;

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const el = entry.target;
                const delay = el.dataset.delay || 0;
                setTimeout(() => {
                    el.classList.add('animated');
                }, delay);
                observer.unobserve(el);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });

    animatedElements.forEach(el => observer.observe(el));
}

/* ═══════════════════════════════════════════════════════════════
   ANIMATED COUNTERS
   ═══════════════════════════════════════════════════════════════ */
function initCounters() {
    const counters = document.querySelectorAll('.counter-value');
    if (counters.length === 0) return;

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCounter(entry.target);
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    counters.forEach(counter => observer.observe(counter));
}

function animateCounter(element) {
    const target = parseInt(element.dataset.target);
    const suffix = element.dataset.suffix || '';
    const duration = 2000;
    const start = 0;
    const startTime = performance.now();

    function update(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3); // easeOutCubic
        const current = Math.floor(start + (target - start) * eased);

        element.textContent = current + suffix;

        if (progress < 1) {
            requestAnimationFrame(update);
        }
    }

    requestAnimationFrame(update);
}

/* ═══════════════════════════════════════════════════════════════
   SMOOTH SCROLL
   ═══════════════════════════════════════════════════════════════ */
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const headerOffset = 80;
                const elementPosition = target.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

/* ═══════════════════════════════════════════════════════════════
   BACK TO TOP BUTTON
   ═══════════════════════════════════════════════════════════════ */
function initBackToTop() {
    const btn = document.querySelector('.back-to-top');
    if (!btn) return;

    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 400) {
            btn.classList.add('visible');
        } else {
            btn.classList.remove('visible');
        }
    });

    btn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

/* ═══════════════════════════════════════════════════════════════
   CONTACT FORM - Validation + AJAX Submit
   ═══════════════════════════════════════════════════════════════ */
function initContactForm() {
    const forms = document.querySelectorAll('.ajax-form');
    forms.forEach(form => {
        form.addEventListener('submit', async (e) => {
            e.preventDefault();

            const submitBtn = form.querySelector('button[type="submit"]');
            const btnText = submitBtn.querySelector('.btn-text');
            const btnLoader = submitBtn.querySelector('.btn-loader');
            const statusMsg = form.querySelector('.form-status');

            // Disable button
            submitBtn.disabled = true;
            if (btnText) btnText.style.display = 'none';
            if (btnLoader) btnLoader.style.display = 'inline-block';

            const formData = new FormData(form);
            const data = Object.fromEntries(formData.entries());

            try {
                const response = await fetch(form.action, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(data)
                });

                const result = await response.json();

                if (statusMsg) {
                    statusMsg.textContent = result.message;
                    statusMsg.className = 'form-status ' + (result.success ? 'success' : 'error');
                    statusMsg.style.display = 'block';
                }

                if (result.success) {
                    form.reset();
                    // Auto-hide success message
                    setTimeout(() => {
                        if (statusMsg) statusMsg.style.display = 'none';
                    }, 5000);
                }

            } catch (err) {
                if (statusMsg) {
                    statusMsg.textContent = 'Network error. Please try again.';
                    statusMsg.className = 'form-status error';
                    statusMsg.style.display = 'block';
                }
            } finally {
                submitBtn.disabled = false;
                if (btnText) btnText.style.display = 'inline';
                if (btnLoader) btnLoader.style.display = 'none';
            }
        });
    });
}

/* ═══════════════════════════════════════════════════════════════
   WHATSAPP WIDGET
   ═══════════════════════════════════════════════════════════════ */
function initWhatsAppWidget() {
    const widget = document.querySelector('.whatsapp-widget');
    if (!widget) return;

    // Show widget after delay
    setTimeout(() => {
        widget.classList.add('visible');
    }, 3000);

    // Toggle chat popup
    const trigger = widget.querySelector('.whatsapp-trigger');
    const popup = widget.querySelector('.whatsapp-popup');
    const closeBtn = widget.querySelector('.whatsapp-close');

    if (trigger && popup) {
        trigger.addEventListener('click', (e) => {
            if (!popup.classList.contains('open')) {
                e.preventDefault();
                popup.classList.toggle('open');
            }
        });
    }

    if (closeBtn && popup) {
        closeBtn.addEventListener('click', () => {
            popup.classList.remove('open');
        });
    }
}

/* ═══════════════════════════════════════════════════════════════
   TYPEWRITER EFFECT
   ═══════════════════════════════════════════════════════════════ */
function initTypewriter() {
    const typewriters = document.querySelectorAll('.typewriter');
    typewriters.forEach(el => {
        const words = JSON.parse(el.dataset.words || '[]');
        if (words.length === 0) return;

        let wordIndex = 0;
        let charIndex = 0;
        let isDeleting = false;

        function type() {
            const currentWord = words[wordIndex];

            if (isDeleting) {
                el.textContent = currentWord.substring(0, charIndex - 1);
                charIndex--;
            } else {
                el.textContent = currentWord.substring(0, charIndex + 1);
                charIndex++;
            }

            let speed = isDeleting ? 50 : 100;

            if (!isDeleting && charIndex === currentWord.length) {
                speed = 2000; // Pause at end
                isDeleting = true;
            } else if (isDeleting && charIndex === 0) {
                isDeleting = false;
                wordIndex = (wordIndex + 1) % words.length;
                speed = 500;
            }

            setTimeout(type, speed);
        }

        type();
    });
}

/* ═══════════════════════════════════════════════════════════════
   UTILITY: Parallax Effect for Hero
   ═══════════════════════════════════════════════════════════════ */
window.addEventListener('scroll', () => {
    const parallaxElements = document.querySelectorAll('.parallax');
    parallaxElements.forEach(el => {
        const speed = el.dataset.speed || 0.5;
        const yPos = -(window.pageYOffset * speed);
        el.style.transform = `translateY(${yPos}px)`;
    });
});

/* ═══════════════════════════════════════════════════════════════
   UTILITY: Active Nav Link
   ═══════════════════════════════════════════════════════════════ */
(function setActiveNavLink() {
    const currentPage = document.body.dataset.page;
    if (!currentPage) return;

    document.querySelectorAll('.nav-link').forEach(link => {
        if (link.dataset.page === currentPage) {
            link.classList.add('active');
        }
    });
})();
