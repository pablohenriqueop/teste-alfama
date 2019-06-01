// When the user scrolls the page, execute myFunction 
window.onscroll = function() { myFunction() };

// Get the navbar
var navbar = document.getElementById("header");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
    if (window.pageYOffset >= 10) {
        navbar.classList.add("sticky")
    } else {
        navbar.classList.remove("sticky");
    }
}

jQuery(document).ready(function($) {
    var lazyLoadInstance = new LazyLoad({
        elements_selector: ".lazy"
            // ... more custom settings?
    });
    $('.parallax').paroller({
        factor: 0.3, // multiplier for scrolling speed and offset
        factorXs: 0.1, // multiplier for scrolling speed and offset
        type: 'background', // background, foreground
        direction: 'vertical', // vertical, horizontal
        transition: 'transform 0.2s ease-in' // CSS transition
    });
});