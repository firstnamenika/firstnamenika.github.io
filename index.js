window.onscroll = function() {
  // Add or remove the 'scrolled' class based on scroll position
  document.body.classList.toggle('scrolled', window.scrollY > 200);
};

// Smooth scroll to top when the anchor is clicked
document.getElementById("top-anchor").addEventListener("click", function() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE, and Opera
});