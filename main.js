// Add this script to your HTML file before the closing </body> tag

document.addEventListener('DOMContentLoaded', function() {
    // Get hamburger menu and nav links
    const hamburger = document.createElement('div');
    hamburger.className = 'hamburger';
    hamburger.innerHTML = '<span></span><span></span><span></span>';
    
    const navbar = document.querySelector('.navbar');
    const navLinks = document.querySelector('.nav-links');
    
    // Insert hamburger into navbar
    navbar.insertBefore(hamburger, navLinks);
    
    // Toggle mobile menu
    hamburger.addEventListener('click', function() {
        this.classList.toggle('active');
        navLinks.classList.toggle('active');
    });
    
    // Close menu when a link is clicked
    const menuLinks = document.querySelectorAll('.nav-links a');
    menuLinks.forEach(link => {
        link.addEventListener('click', function() {
            hamburger.classList.remove('active');
            navLinks.classList.remove('active');
        });
    });
    
    // Close menu when clicking outside
    document.addEventListener('click', function(event) {
        if (!event.target.closest('.navbar')) {
            hamburger.classList.remove('active');
            navLinks.classList.remove('active');
        }
    });
});
