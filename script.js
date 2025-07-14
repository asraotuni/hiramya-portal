// Tab switching functionality
document.addEventListener('DOMContentLoaded', function() {
    // Initialize Lucide icons
    lucide.createIcons();
    
    // Get all tab buttons and content sections
    const navTabs = document.querySelectorAll('.nav-tab');
    const mobileNavTabs = document.querySelectorAll('.mobile-nav-tab');
    const tabContents = document.querySelectorAll('.tab-content');
    
    // Function to switch tabs
    function switchTab(targetTab) {
        // Hide all tab contents
        tabContents.forEach(content => {
            content.classList.add('hidden');
        });
        
        // Show target tab content
        const targetContent = document.getElementById(targetTab + '-content');
        if (targetContent) {
            targetContent.classList.remove('hidden');
        }
        
        // Update nav tab styles (desktop)
        navTabs.forEach(tab => {
            tab.classList.remove('bg-blue-100', 'text-blue-700');
            tab.classList.add('text-gray-600', 'hover:text-gray-900', 'hover:bg-gray-100');
        });
        
        // Update mobile nav tab styles
        mobileNavTabs.forEach(tab => {
            tab.classList.remove('bg-blue-100', 'text-blue-700');
            tab.classList.add('text-gray-600', 'hover:text-gray-900', 'hover:bg-gray-100');
        });
        
        // Set active tab styles (desktop)
        const activeNavTab = document.querySelector(`.nav-tab[data-tab="${targetTab}"]`);
        if (activeNavTab) {
            activeNavTab.classList.remove('text-gray-600', 'hover:text-gray-900', 'hover:bg-gray-100');
            activeNavTab.classList.add('bg-blue-100', 'text-blue-700');
        }
        
        // Set active tab styles (mobile)
        const activeMobileNavTab = document.querySelector(`.mobile-nav-tab[data-tab="${targetTab}"]`);
        if (activeMobileNavTab) {
            activeMobileNavTab.classList.remove('text-gray-600', 'hover:text-gray-900', 'hover:bg-gray-100');
            activeMobileNavTab.classList.add('bg-blue-100', 'text-blue-700');
        }
    }
    
    // Add click event listeners to desktop nav tabs
    navTabs.forEach(tab => {
        tab.addEventListener('click', function() {
            const targetTab = this.getAttribute('data-tab');
            switchTab(targetTab);
        });
    });
    
    // Add click event listeners to mobile nav tabs
    mobileNavTabs.forEach(tab => {
        tab.addEventListener('click', function() {
            const targetTab = this.getAttribute('data-tab');
            switchTab(targetTab);
        });
    });
    
    // Contact form handling
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(this);
            const firstName = formData.get('firstName');
            const lastName = formData.get('lastName');
            const email = formData.get('email');
            const company = formData.get('company');
            const message = formData.get('message');
            
            // Simple validation
            if (!firstName || !lastName || !email || !message) {
                alert('Please fill in all required fields.');
                return;
            }
            
            // Email validation
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                alert('Please enter a valid email address.');
                return;
            }
            
            // Option 1: EmailJS Integration (Recommended for static sites)
            sendEmailViaEmailJS(firstName, lastName, email, company, message);
            
            // Option 2: Mailto fallback (uncomment if EmailJS is not set up)
            // sendEmailViaMailto(firstName, lastName, email, company, message);
        });
    }
    
    // EmailJS Integration Function
    function sendEmailViaEmailJS(firstName, lastName, email, company, message) {
        // You'll need to sign up at https://www.emailjs.com/ and get your keys
        const serviceID = 'service_02phu3v'; // Replace with your EmailJS service ID
        const templateID = 'YOUR_TEMPLATE_ID'; // Replace with your EmailJS template ID
        const userID = 'qPhAqGf11kpfdBK9N'; // Replace with your EmailJS user ID
        
        const templateParams = {
            from_name: `${firstName} ${lastName}`,
            from_email: email,
            company: company || 'Not specified',
            message: message,
            to_email: 'srinivas@hiramyatech.com'
        };
        
        // Show loading state
        const submitButton = document.querySelector('#contact-form button[type="submit"]');
        const originalText = submitButton.textContent;
        submitButton.textContent = 'Sending...';
        submitButton.disabled = true;
        
        emailjs.send(serviceID, templateID, templateParams, userID)
            .then(function(response) {
                alert('Thank you for your message! We will get back to you soon.');
                document.getElementById('contact-form').reset();
            })
            .catch(function(error) {
                alert('Sorry, there was an error sending your message. Please try again or contact us directly at srinivas@hiramyatech.com');
                console.error('EmailJS error:', error);
            })
            .finally(function() {
                submitButton.textContent = originalText;
                submitButton.disabled = false;
            });
    }
    
    // Mailto Fallback Function
    function sendEmailViaMailto(firstName, lastName, email, company, message) {
        const subject = `Contact Form Submission from ${firstName} ${lastName}`;
        const body = `
Name: ${firstName} ${lastName}
Email: ${email}
Company: ${company || 'Not specified'}

Message:
${message}
        `.trim();
        
        const mailtoLink = `mailto:srinivas@hiramyatech.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        window.location.href = mailtoLink;
        
        // Show success message after a brief delay
        setTimeout(() => {
            alert('Your email client should have opened. If not, please send your message directly to srinivas@hiramyatech.com');
            document.getElementById('contact-form').reset();
        }, 1000);
    }
    
    // Smooth scrolling for anchor links (if any are added later)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // Add hover effects for service cards
    const serviceCards = document.querySelectorAll('.bg-white.p-6.rounded-xl.shadow-lg');
    serviceCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-2px)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
    
    // Add click effects for technology tags
    const techTags = document.querySelectorAll('.bg-gray-100.text-gray-700.px-3.py-1.rounded-full');
    techTags.forEach(tag => {
        tag.addEventListener('click', function() {
            // Add a subtle click effect
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = 'scale(1)';
            }, 150);
        });
    });
    
    // Initialize with 'about' tab active
    switchTab('about');
});