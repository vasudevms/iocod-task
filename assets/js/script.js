// script.js

// Function to load an HTML file into a target container
function loadHTML(url, targetId) {
    fetch(url)
        .then(response => response.text())
        .then(data => {
            document.getElementById(targetId).innerHTML = data;
        })
        .catch(error => console.error('Error loading HTML:', error));
}

// Load header, banner, and footer
window.onload = function() {
    loadHTML('includes/header.html', 'header-container');
    loadHTML('includes/banner.html', 'banner-container');
    loadHTML('includes/main.html', 'main-container');
    loadHTML('includes/footer.html', 'footer-container');
};

document.addEventListener('DOMContentLoaded', function() {
    window.onscroll = function() {
        changeNavbarBackground();
    };

    function changeNavbarBackground() {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 50) {  // Adjust this value as needed
            navbar.classList.add('scrolled');
            navbar.classList.remove('transparent');
        } else {
            navbar.classList.remove('scrolled');
            navbar.classList.add('transparent');
        }
    }

    // Initialize on page load
    changeNavbarBackground();
});

const navbarToggler = document.getElementById('navbar-toggler');
const navbar = document.querySelector('.navbar');

navbarToggler.addEventListener('click', () => {
    navbar.classList.toggle('active'); // Toggle the active class to show/hide the menu
});