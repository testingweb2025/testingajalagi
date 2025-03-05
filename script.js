// script.js
document.getElementById('hamburger-icon').addEventListener('click', function() {
    const navLinks = document.getElementById('nav-links');
    // Toggle the display property of nav links
    navLinks.style.display = (navLinks.style.display === 'block') ? 'none' : 'block';
});

document.addEventListener("scroll", function() {
    let navbar = document.querySelector(".navbar");
    if (window.scrollY > 50) {
        navbar.classList.add("shrink");
    } else {
        navbar.classList.remove("shrink");
    }
});
