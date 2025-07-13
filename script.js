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
            
            // Show success message (in a real application, you would send this to a server)
            alert('Thank you for your message! We will get back to you soon.');
            
            // Reset form
            this.reset();
        });
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