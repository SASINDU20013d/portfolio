// DOM Elements
const navbar = document.getElementById('navbar');
const navToggle = document.getElementById('nav-toggle');
const navMenu = document.getElementById('nav-menu');
const navLinks = document.querySelectorAll('.nav-link');
const contactForm = document.getElementById('contact-form');
const filterBtns = document.querySelectorAll('.filter-btn');
const portfolioItems = document.querySelectorAll('.portfolio-item');
const serviceCards = document.querySelectorAll('.service-card');
const statNumbers = document.querySelectorAll('.stat-number');

// Loading Animation
window.addEventListener('load', () => {
    const loading = document.querySelector('.loading');
    if (loading) {
        setTimeout(() => {
            loading.classList.add('hidden');
        }, 1500);
    }
});

// Smooth Scrolling for Navigation Links
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        
        if (targetSection) {
            const offsetTop = targetSection.offsetTop - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
        
        // Close mobile menu
        navMenu.classList.remove('active');
        navToggle.classList.remove('active');
        
        // Update active link
        navLinks.forEach(navLink => navLink.classList.remove('active'));
        link.classList.add('active');
    });
});

// Mobile-optimized animations and interactions
let isMobile = window.innerWidth <= 768;
let isTouch = 'ontouchstart' in window;

// Update mobile status on resize
window.addEventListener('resize', () => {
    isMobile = window.innerWidth <= 768;
    updateMobileOptimizations();
});

// Mobile optimizations
function updateMobileOptimizations() {
    const geometricShapes = document.querySelector('.geometric-shapes');
    
    if (isMobile) {
        // Disable heavy animations on mobile
        if (geometricShapes) {
            geometricShapes.style.display = 'none';
        }
        
        // Add mobile-specific classes
        document.body.classList.add('mobile-device');
        
        // Optimize scroll performance
        document.addEventListener('scroll', throttledScrollHandler, { passive: true });
    } else {
        if (geometricShapes) {
            geometricShapes.style.display = 'block';
        }
        document.body.classList.remove('mobile-device');
    }
}

// Throttled scroll handler for better mobile performance
let scrollTimeout;
function throttledScrollHandler() {
    if (scrollTimeout) return;
    
    scrollTimeout = setTimeout(() => {
        if (window.scrollY > 100) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
        
        updateActiveNavLink();
        
        if (!isMobile) {
            handleScrollAnimations();
            parallaxEffect();
        } else {
            handleMobileScrollAnimations();
        }
        
        scrollTimeout = null;
    }, 16); // ~60fps
}

// Mobile-optimized scroll animations
function handleMobileScrollAnimations() {
    const animatedElements = document.querySelectorAll('.fade-in, .slide-in-left, .slide-in-right, .scale-in');
    
    animatedElements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 100; // Reduced threshold for mobile
        
        if (elementTop < window.innerHeight - elementVisible) {
            element.classList.add('visible', 'mobile-animate');
        }
    });
}

// Touch-friendly service cards
serviceCards.forEach(card => {
    if (isTouch) {
        // Add tap behavior for touch devices
        card.addEventListener('touchstart', (e) => {
            card.classList.add('touched');
        });
        
        card.addEventListener('touchend', (e) => {
            setTimeout(() => {
                card.classList.remove('touched');
            }, 200);
        });
    } else {
        // Keep hover effects for non-touch devices
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-15px) rotateX(5deg)';
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0) rotateX(0)';
        });
    }
});

// Mobile-friendly portfolio interactions
portfolioItems.forEach(item => {
    if (isTouch) {
        let touchStartTime = 0;
        
        item.addEventListener('touchstart', (e) => {
            touchStartTime = Date.now();
            item.classList.add('touch-active');
        });
        
        item.addEventListener('touchend', (e) => {
            const touchDuration = Date.now() - touchStartTime;
            
            // If quick tap, show overlay
            if (touchDuration < 200) {
                const overlay = item.querySelector('.portfolio-overlay');
                if (overlay) {
                    overlay.style.opacity = overlay.style.opacity === '1' ? '0' : '1';
                }
            }
            
            setTimeout(() => {
                item.classList.remove('touch-active');
            }, 100);
        });
    }
});

// Enhanced mobile navigation
function enhanceMobileNav() {
    const navItems = document.querySelectorAll('.nav-item');
    
    navItems.forEach((item, index) => {
        item.style.animationDelay = `${index * 0.1}s`;
    });
    
    // Close menu when clicking on a link
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (isMobile) {
                navMenu.classList.remove('active');
                navToggle.classList.remove('active');
            }
        });
    });
    
    // Add swipe to close functionality
    let startY = 0;
    let currentY = 0;
    
    navMenu.addEventListener('touchstart', (e) => {
        startY = e.touches[0].clientY;
    });
    
    navMenu.addEventListener('touchmove', (e) => {
        currentY = e.touches[0].clientY;
        const diff = startY - currentY;
        
        if (diff > 50) { // Swipe up to close
            navMenu.classList.remove('active');
            navToggle.classList.remove('active');
        }
    });
}

// Mobile-optimized form interactions
function enhanceMobileForm() {
    const formInputs = document.querySelectorAll('.form-group input, .form-group textarea');
    
    formInputs.forEach(input => {
        // Better mobile focus handling
        input.addEventListener('focus', () => {
            input.parentElement.classList.add('focused');
            
            // Scroll input into view on mobile
            if (isMobile) {
                setTimeout(() => {
                    input.scrollIntoView({ 
                        behavior: 'smooth', 
                        block: 'center' 
                    });
                }, 300);
            }
        });
        
        input.addEventListener('blur', () => {
            if (!input.value.trim()) {
                input.parentElement.classList.remove('focused');
            }
        });
    });
}

// Swipe gestures for portfolio
function addSwipeGestures() {
    if (!isTouch) return;
    
    const portfolioGrid = document.querySelector('.portfolio-grid');
    let startX = 0;
    let startY = 0;
    
    portfolioGrid.addEventListener('touchstart', (e) => {
        startX = e.touches[0].clientX;
        startY = e.touches[0].clientY;
    });
    
    portfolioGrid.addEventListener('touchend', (e) => {
        const endX = e.changedTouches[0].clientX;
        const endY = e.changedTouches[0].clientY;
        const diffX = startX - endX;
        const diffY = startY - endY;
        
        // Horizontal swipe
        if (Math.abs(diffX) > Math.abs(diffY) && Math.abs(diffX) > 50) {
            if (diffX > 0) {
                // Swipe left - could trigger next filter
                console.log('Swiped left');
            } else {
                // Swipe right - could trigger previous filter
                console.log('Swiped right');
            }
        }
    });
}

// Optimize animations for mobile
function optimizeForMobile() {
    if (isMobile) {
        // Reduce animation complexity
        const style = document.createElement('style');
        style.innerHTML = `
            .mobile-device .shape {
                animation: none !important;
            }
            
            .mobile-device .floating-card {
                animation: none !important;
            }
            
            .mobile-device .service-card.touched {
                transform: translateY(-5px) !important;
                transition: transform 0.2s ease !important;
            }
            
            .mobile-device .portfolio-item.touch-active {
                transform: scale(0.98) !important;
                transition: transform 0.1s ease !important;
            }
            
            .mobile-device .nav-menu.active .nav-item {
                animation: slideInLeft 0.3s ease forwards;
            }
            
            @keyframes slideInLeft {
                from {
                    opacity: 0;
                    transform: translateX(-30px);
                }
                to {
                    opacity: 1;
                    transform: translateX(0);
                }
            }
        `;
        document.head.appendChild(style);
    }
}

// Intersection Observer for mobile performance
const mobileObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            if (isMobile) {
                entry.target.classList.add('mobile-animate');
            }
        }
    });
}, {
    threshold: isMobile ? 0.1 : 0.3,
    rootMargin: isMobile ? '50px' : '100px'
});

// Performance monitoring
function monitorPerformance() {
    let fps = 0;
    let lastTime = performance.now();
    
    function calculateFPS() {
        const currentTime = performance.now();
        fps = 1000 / (currentTime - lastTime);
        lastTime = currentTime;
        
        // If FPS drops below 30 on mobile, disable heavy animations
        if (isMobile && fps < 30) {
            document.body.classList.add('low-performance');
        }
        
        requestAnimationFrame(calculateFPS);
    }
    
    if (isMobile) {
        calculateFPS();
    }
}

// Initialize mobile optimizations
document.addEventListener('DOMContentLoaded', () => {
    updateMobileOptimizations();
    enhanceMobileNav();
    enhanceMobileForm();
    addSwipeGestures();
    optimizeForMobile();
    monitorPerformance();
    
    // Observe elements for mobile animations
    const elementsToObserve = document.querySelectorAll('.fade-in, .slide-in-left, .slide-in-right, .scale-in');
    elementsToObserve.forEach(el => {
        mobileObserver.observe(el);
    });
});

// Viewport height fix for mobile browsers
function fixMobileViewport() {
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
}

window.addEventListener('resize', fixMobileViewport);
window.addEventListener('orientationchange', () => {
    setTimeout(fixMobileViewport, 100);
});

fixMobileViewport();

// Navbar Scroll Effect
window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
    
    updateActiveNavLink();
    handleScrollAnimations();
    parallaxEffect();
});

// Update Active Navigation Link Based on Scroll Position
function updateActiveNavLink() {
    const sections = document.querySelectorAll('section[id]');
    const scrollPos = window.scrollY + 150;
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');
        
        if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${sectionId}`) {
                    link.classList.add('active');
                }
            });
        }
    });
}

// Scroll Animations
function handleScrollAnimations() {
    const animatedElements = document.querySelectorAll('.fade-in, .slide-in-left, .slide-in-right, .scale-in');
    
    animatedElements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < window.innerHeight - elementVisible) {
            element.classList.add('visible');
        }
    });
}

// Parallax Effect for Background Elements
function parallaxEffect() {
    const parallaxElements = document.querySelectorAll('.parallax-element');
    const scrolled = window.pageYOffset;
    
    parallaxElements.forEach(element => {
        const rate = scrolled * -0.5;
        element.style.transform = `translateY(${rate}px)`;
    });
    
    // Geometric shapes parallax
    const shapes = document.querySelectorAll('.shape');
    shapes.forEach((shape, index) => {
        const rate = scrolled * (0.1 + index * 0.05);
        shape.style.transform = `translateY(${rate}px) rotate(${rate * 0.5}deg)`;
    });
}

// Portfolio Filter System
filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        // Remove active class from all buttons
        filterBtns.forEach(filterBtn => filterBtn.classList.remove('active'));
        // Add active class to clicked button
        btn.classList.add('active');
        
        const filterValue = btn.getAttribute('data-filter');
        
        portfolioItems.forEach(item => {
            if (filterValue === 'all' || item.getAttribute('data-category') === filterValue) {
                item.style.display = 'block';
                setTimeout(() => {
                    item.style.opacity = '1';
                    item.style.transform = 'scale(1) translateY(0)';
                }, 100);
            } else {
                item.style.opacity = '0';
                item.style.transform = 'scale(0.8) translateY(20px)';
                setTimeout(() => {
                    item.style.display = 'none';
                }, 300);
            }
        });
    });
});

// Service Cards Hover Effects
serviceCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-15px) rotateX(5deg)';
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0) rotateX(0)';
    });
});

// Animated Counter for Statistics
function animateCounters() {
    statNumbers.forEach(counter => {
        const target = parseInt(counter.getAttribute('data-count'));
        const count = +counter.innerText;
        const increment = target / 200;
        
        if (count < target) {
            counter.innerText = Math.ceil(count + increment);
            setTimeout(() => animateCounters(), 1);
        } else {
            counter.innerText = target;
        }
    });
}

// Intersection Observer for Counter Animation
const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            animateCounters();
            counterObserver.unobserve(entry.target);
        }
    });
});

// Observe stat numbers
statNumbers.forEach(counter => {
    counterObserver.observe(counter);
});

// Contact Form Handling with EmailJS
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Get form data
    const formData = new FormData(contactForm);
    const name = formData.get('name');
    const mobile = formData.get('mobile');
    const message = formData.get('message');
    
    // Enhanced validation
    if (!name || name.trim().length < 2) {
        showNotification('Please enter a valid name (at least 2 characters)', 'error');
        return;
    }
    
    if (!mobile || mobile.trim().length < 10) {
        showNotification('Please enter a valid mobile number', 'error');
        return;
    }
    
    if (!message || message.trim().length < 2) {
        showNotification('Please enter a message (at least 2 characters)', 'error');
        return;
    }
    
    // Show loading state with animation
    const submitBtn = contactForm.querySelector('button[type="submit"]');
    const originalText = submitBtn.innerHTML;
    
    submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
    submitBtn.disabled = true;
    submitBtn.style.transform = 'scale(0.98)';
    
    // EmailJS Integration
    // Your actual EmailJS credentials
    const serviceID = 'service_0khwsub'; // Your Gmail service ID
    const templateID = 'template_i86xhlg'; // Your email template ID
    const publicKey = '_d_cHJHp9X7IMQdlU'; // Your public key
    
    const templateParams = {
        from_name: name.trim(),
        mobile_number: mobile.trim(),
        message: message.trim(),
        reply_to: `${name.trim()} <noreply@sasindu.tech>`,
        to_email: 'sasindumudawagedara@gmail.com' // Your Gmail address
    };
    
    // Check if EmailJS is loaded
    if (typeof emailjs !== 'undefined') {
        emailjs.send(serviceID, templateID, templateParams, publicKey)
            .then((response) => {
                console.log('Email sent successfully!', response.status, response.text);
                submitBtn.innerHTML = '<i class="fas fa-check"></i> Sent!';
                submitBtn.style.transform = 'scale(1)';
                submitBtn.style.background = 'var(--neon-green)';
                
                setTimeout(() => {
                    submitBtn.innerHTML = originalText;
                    submitBtn.disabled = false;
                    submitBtn.style.background = '';
                    submitBtn.style.transform = '';
                }, 2000);
                
                contactForm.reset();
                // Clear labels animation and placeholders
                document.querySelectorAll('.form-group label').forEach(label => {
                    label.style.transform = '';
                    label.style.color = '';
                });
                
                // Clear placeholders after reset
                formInputs.forEach(input => {
                    input.placeholder = '';
                });
                
                showNotification('Message sent successfully! I\'ll get back to you soon. 🚀', 'success');
            })
            .catch((error) => {
                console.error('Email sending failed:', error);
                submitBtn.innerHTML = originalText;
                submitBtn.disabled = false;
                submitBtn.style.transform = '';
                showNotification('Failed to send message. Please try again or contact me directly via WhatsApp.', 'error');
            });
    } else {
        // Fallback - simulate sending (remove this in production)
        setTimeout(() => {
            submitBtn.innerHTML = originalText;
            submitBtn.disabled = false;
            submitBtn.style.transform = '';
            contactForm.reset();
            showNotification('Message sent successfully! I\'ll get back to you soon. 🚀', 'success');
        }, 2000);
    }
});

// Mobile keyboard handling
if (isMobile) {
    const inputs = contactForm.querySelectorAll('input, textarea');
    
    inputs.forEach(input => {
        input.addEventListener('focus', () => {
            contactForm.classList.add('keyboard-active');
            // Scroll to input on mobile
            setTimeout(() => {
                input.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }, 300);
        });
        
        input.addEventListener('blur', () => {
            setTimeout(() => {
                contactForm.classList.remove('keyboard-active');
            }, 100);
        });
    });
}

// Dynamic placeholder functionality
const formInputs = contactForm.querySelectorAll('input[data-placeholder], textarea[data-placeholder]');

formInputs.forEach(input => {
    const exampleText = input.getAttribute('data-placeholder');
    const label = input.nextElementSibling; // Get the label element
    
    // Show example on focus with smooth transition
    input.addEventListener('focus', () => {
        if (!input.value) {
            setTimeout(() => {
                input.placeholder = exampleText;
            }, 150); // Small delay for smooth appearance
        }
        
        // Add enhanced focus effect to label
        if (label && label.tagName === 'LABEL') {
            label.style.animation = 'labelFocusGlow 0.6s ease-out';
        }
    });
    
    // Hide example on blur if no text entered
    input.addEventListener('blur', () => {
        if (!input.value) {
            setTimeout(() => {
                input.placeholder = '';
            }, 200); // Delay to allow transition
        }
        
        // Reset label animation
        if (label && label.tagName === 'LABEL') {
            label.style.animation = '';
        }
    });
    
    // Clear placeholder when typing starts
    input.addEventListener('input', () => {
        if (input.value) {
            input.placeholder = '';
        } else if (document.activeElement === input) {
            // Show placeholder again if user deletes all text while focused
            setTimeout(() => {
                if (!input.value && document.activeElement === input) {
                    input.placeholder = exampleText;
                }
            }, 100);
        }
    });
    
    // Add visual feedback on click
    input.addEventListener('click', () => {
        input.style.transform = 'scale(1.01)';
        setTimeout(() => {
            input.style.transform = '';
        }, 150);
        
        // Trigger label glance effect on click
        if (label && label.tagName === 'LABEL') {
            label.style.animation = 'labelClickGlow 0.4s ease-out';
            setTimeout(() => {
                label.style.animation = '';
            }, 400);
        }
    });
    
    // Add periodic glance effect for empty fields
    setInterval(() => {
        if (!input.value && document.activeElement !== input && label && label.tagName === 'LABEL') {
            // Random glance effect every 8-12 seconds
            if (Math.random() < 0.1) { // 10% chance every interval
                label.style.animation = 'labelIdleGlance 1s ease-in-out';
                setTimeout(() => {
                    label.style.animation = '';
                }, 1000);
            }
        }
    }, 1000); // Check every second
});

// Email Validation (no longer needed but keeping for compatibility)
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Notification System
function showNotification(message, type) {
    // Remove existing notification
    const existingNotification = document.querySelector('.notification');
    if (existingNotification) {
        existingNotification.remove();
    }
    
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <i class="fas ${type === 'success' ? 'fa-check-circle' : 'fa-exclamation-circle'}"></i>
            <span>${message}</span>
            <button class="notification-close">
                <i class="fas fa-times"></i>
            </button>
        </div>
    `;
    
    // Add styles
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: ${type === 'success' ? 'linear-gradient(135deg, #00ff88, #00d4ff)' : 'linear-gradient(135deg, #ff0080, #ff6b6b)'};
        color: white;
        padding: 20px;
        border-radius: 15px;
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
        z-index: 10000;
        transform: translateX(400px);
        transition: transform 0.3s ease;
        max-width: 350px;
    `;
    
    notification.querySelector('.notification-content').style.cssText = `
        display: flex;
        align-items: center;
        gap: 15px;
    `;
    
    notification.querySelector('.notification-close').style.cssText = `
        background: none;
        border: none;
        color: white;
        font-size: 1.2rem;
        cursor: pointer;
        margin-left: auto;
    `;
    
    // Add to DOM
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Close button functionality
    notification.querySelector('.notification-close').addEventListener('click', () => {
        notification.style.transform = 'translateX(400px)';
        setTimeout(() => notification.remove(), 300);
    });
    
    // Auto remove after 5 seconds
    setTimeout(() => {
        if (notification.parentNode) {
            notification.style.transform = 'translateX(400px)';
            setTimeout(() => notification.remove(), 300);
        }
    }, 5000);
}

// Floating Animation for Hero Card
function floatingAnimation() {
    const floatingCard = document.querySelector('.floating-card');
    if (floatingCard) {
        let start = null;
        
        function animate(timestamp) {
            if (!start) start = timestamp;
            const progress = (timestamp - start) % 4000 / 4000;
            const yOffset = Math.sin(progress * Math.PI * 2) * 10;
            
            floatingCard.style.transform = `translateY(${yOffset}px)`;
            requestAnimationFrame(animate);
        }
        
        requestAnimationFrame(animate);
    }
}

// Typing Effect for Hero Title
function typingEffect() {
    const titleLines = document.querySelectorAll('.title-line');
    
    titleLines.forEach((line, index) => {
        const text = line.textContent;
        line.textContent = '';
        line.style.opacity = '1';
        
        let charIndex = 0;
        const timer = setInterval(() => {
            line.textContent += text[charIndex];
            charIndex++;
            
            if (charIndex >= text.length) {
                clearInterval(timer);
            }
        }, 100 + (index * 500));
    });
}

// Glitch Effect for Special Elements
function glitchEffect(element) {
    const glitchData = element.textContent;
    const glitchChars = '!@#$%^&*()_+-=[]{}|;:,.<>?';
    
    let iteration = 0;
    const timer = setInterval(() => {
        element.textContent = glitchData
            .split('')
            .map((char, index) => {
                if (index < iteration) {
                    return glitchData[index];
                }
                return glitchChars[Math.floor(Math.random() * glitchChars.length)];
            })
            .join('');
        
        iteration += 1 / 3;
        
        if (iteration >= glitchData.length) {
            clearInterval(timer);
            element.textContent = glitchData;
        }
    }, 30);
}

// Matrix Rain Effect for Background
function createMatrixRain() {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    
    canvas.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: -10;
        opacity: 0.1;
        pointer-events: none;
    `;
    
    document.body.appendChild(canvas);
    
    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }
    
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    
    const columns = Math.floor(canvas.width / 20);
    const drops = Array(columns).fill(1);
    const chars = '01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン';
    
    function draw() {
        ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        
        ctx.fillStyle = '#00ff88';
        ctx.font = '15px monospace';
        
        for (let i = 0; i < drops.length; i++) {
            const text = chars[Math.floor(Math.random() * chars.length)];
            ctx.fillText(text, i * 20, drops[i] * 20);
            
            if (drops[i] * 20 > canvas.height && Math.random() > 0.975) {
                drops[i] = 0;
            }
            drops[i]++;
        }
    }
    
    setInterval(draw, 50);
}

// Particle System
class ParticleSystem {
    constructor(canvas) {
        this.canvas = canvas;
        this.ctx = canvas.getContext('2d');
        this.particles = [];
        this.mouse = { x: 0, y: 0 };
        
        this.init();
        this.bindEvents();
        this.animate();
    }
    
    init() {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
        
        for (let i = 0; i < 50; i++) {
            this.particles.push({
                x: Math.random() * this.canvas.width,
                y: Math.random() * this.canvas.height,
                vx: (Math.random() - 0.5) * 0.5,
                vy: (Math.random() - 0.5) * 0.5,
                size: Math.random() * 2 + 1,
                opacity: Math.random() * 0.5 + 0.2
            });
        }
    }
    
    bindEvents() {
        window.addEventListener('resize', () => {
            this.canvas.width = window.innerWidth;
            this.canvas.height = window.innerHeight;
        });
        
        window.addEventListener('mousemove', (e) => {
            this.mouse.x = e.clientX;
            this.mouse.y = e.clientY;
        });
    }
    
    animate() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        
        this.particles.forEach((particle, index) => {
            // Update position
            particle.x += particle.vx;
            particle.y += particle.vy;
            
            // Wrap around screen
            if (particle.x < 0) particle.x = this.canvas.width;
            if (particle.x > this.canvas.width) particle.x = 0;
            if (particle.y < 0) particle.y = this.canvas.height;
            if (particle.y > this.canvas.height) particle.y = 0;
            
            // Mouse interaction
            const dx = this.mouse.x - particle.x;
            const dy = this.mouse.y - particle.y;
            const distance = Math.sqrt(dx * dx + dy * dy);
            
            if (distance < 100) {
                particle.vx += dx * 0.0001;
                particle.vy += dy * 0.0001;
            }
            
            // Draw particle
            this.ctx.beginPath();
            this.ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
            this.ctx.fillStyle = `rgba(0, 212, 255, ${particle.opacity})`;
            this.ctx.fill();
            
            // Draw connections
            this.particles.slice(index + 1).forEach(otherParticle => {
                const dx = particle.x - otherParticle.x;
                const dy = particle.y - otherParticle.y;
                const distance = Math.sqrt(dx * dx + dy * dy);
                
                if (distance < 100) {
                    this.ctx.beginPath();
                    this.ctx.moveTo(particle.x, particle.y);
                    this.ctx.lineTo(otherParticle.x, otherParticle.y);
                    this.ctx.strokeStyle = `rgba(0, 212, 255, ${0.1 * (1 - distance / 100)})`;
                    this.ctx.stroke();
                }
            });
        });
        
        requestAnimationFrame(() => this.animate());
    }
}

// Cursor Trail Effect
function createCursorTrail() {
    const trail = [];
    const trailLength = 20;
    
    document.addEventListener('mousemove', (e) => {
        trail.push({ x: e.clientX, y: e.clientY });
        
        if (trail.length > trailLength) {
            trail.shift();
        }
        
        updateTrail();
    });
    
    function updateTrail() {
        // Remove existing trail elements
        document.querySelectorAll('.cursor-trail').forEach(el => el.remove());
        
        trail.forEach((point, index) => {
            const trailElement = document.createElement('div');
            trailElement.className = 'cursor-trail';
            trailElement.style.cssText = `
                position: fixed;
                top: ${point.y}px;
                left: ${point.x}px;
                width: ${6 - (index * 0.3)}px;
                height: ${6 - (index * 0.3)}px;
                background: radial-gradient(circle, #00d4ff, transparent);
                border-radius: 50%;
                pointer-events: none;
                z-index: 9999;
                opacity: ${(index / trailLength) * 0.8};
                transform: translate(-50%, -50%);
            `;
            document.body.appendChild(trailElement);
            
            // Remove after animation
            setTimeout(() => trailElement.remove(), 500);
        });
    }
}

// Initialize all effects when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    // Initialize scroll animations
    handleScrollAnimations();
    
    // Start floating animation
    floatingAnimation();
    
    // Create matrix rain effect
    createMatrixRain();
    
    // Create cursor trail
    createCursorTrail();
    
    // Initialize particle system for hero section
    const heroCanvas = document.createElement('canvas');
    heroCanvas.style.cssText = `
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: -1;
        pointer-events: none;
    `;
    
    const heroSection = document.querySelector('.hero');
    if (heroSection) {
        heroSection.appendChild(heroCanvas);
        new ParticleSystem(heroCanvas);
    }
    
    // Add animation classes to elements
    const fadeElements = document.querySelectorAll('.section-title, .section-subtitle, .glass-card, .service-card, .portfolio-item, .stat-card');
    fadeElements.forEach((element, index) => {
        element.classList.add('fade-in');
        element.style.animationDelay = `${index * 0.1}s`;
    });
    
    // Add glitch effect to logo on hover
    const logo = document.querySelector('.logo-text');
    if (logo) {
        logo.addEventListener('mouseenter', () => glitchEffect(logo));
    }
});

// Performance optimization
let ticking = false;

function optimizedScrollHandler() {
    if (!ticking) {
        requestAnimationFrame(() => {
            updateActiveNavLink();
            handleScrollAnimations();
            parallaxEffect();
            ticking = false;
        });
        ticking = true;
    }
}

// Replace the scroll event listener with optimized version
window.removeEventListener('scroll', () => {});
window.addEventListener('scroll', optimizedScrollHandler, { passive: true });

// Lazy loading for images (if any are added later)
const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const img = entry.target;
            img.src = img.dataset.src;
            img.classList.remove('lazy');
            observer.unobserve(img);
        }
    });
});

// Theme switcher (optional enhancement)
function createThemeSwitcher() {
    const themeSwitcher = document.createElement('button');
    themeSwitcher.innerHTML = '<i class="fas fa-palette"></i>';
    themeSwitcher.className = 'theme-switcher';
    themeSwitcher.style.cssText = `
        position: fixed;
        bottom: 30px;
        right: 30px;
        width: 60px;
        height: 60px;
        background: var(--gradient-primary);
        border: none;
        border-radius: 50%;
        color: white;
        font-size: 1.2rem;
        cursor: pointer;
        box-shadow: 0 5px 20px rgba(0, 212, 255, 0.3);
        transition: var(--transition-fast);
        z-index: 1000;
    `;
    
    themeSwitcher.addEventListener('click', () => {
        document.body.classList.toggle('light-theme');
        themeSwitcher.style.transform = 'scale(0.9)';
        setTimeout(() => {
            themeSwitcher.style.transform = 'scale(1)';
        }, 100);
    });
    
    document.body.appendChild(themeSwitcher);
}

// Initialize theme switcher
createThemeSwitcher();

// Easter egg: Konami code
let konamiCode = [];
const konamiSequence = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'KeyB', 'KeyA'];

document.addEventListener('keydown', (e) => {
    konamiCode.push(e.code);
    
    if (konamiCode.length > konamiSequence.length) {
        konamiCode.shift();
    }
    
    if (konamiCode.join(',') === konamiSequence.join(',')) {
        // Activate special effect
        document.body.style.animation = 'rainbow 2s infinite';
        showNotification('🎉 Konami code activated! You found the easter egg!', 'success');
        
        setTimeout(() => {
            document.body.style.animation = '';
        }, 5000);
    }
});

// Rainbow animation for easter egg
const style = document.createElement('style');
style.textContent = `
    @keyframes rainbow {
        0% { filter: hue-rotate(0deg); }
        100% { filter: hue-rotate(360deg); }
    }
`;
document.head.appendChild(style);
