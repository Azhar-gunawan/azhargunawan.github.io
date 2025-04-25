// Add a scroll event listener to the window
window.addEventListener("scroll", function() {
    // Get the navbar element
    var navbar = document.querySelector(".navbar");
    
    // Check if the user has scrolled down more than 50 pixels
    if (window.scrollY > 50) {
        // Add the 'scrolled' class to the navbar
        navbar.classList.add("scrolled");
    } else {
        // Remove the 'scrolled' class from the navbar
        navbar.classList.remove("scrolled");
    }
});
