document.addEventListener("DOMContentLoaded", function () {
  // Add slides
  var slideIndex = 1;
  showSlides(slideIndex);
  return slideIndex
});

// Next/previous controls
function plusSlides(n) {
    showSlides((slideIndex += n));
  }

  // Thumbnail image controls
function currentSlide(n) {
    showSlides((slideIndex = n));
  }

function showSlides(n) {
    let slides = document.getElementsByClassName("project-card");
    let images = document.getElementsByClassName("project-image");
    console.log("Number of slides:", slides.length);
  
    if (slides.length === 0) {
      console.log("No cards in this array");
      return; // Exit the function to avoid further errors
    }
  
    slideIndex = (n > slides.length) ? 1 : (n < 1) ? slides.length : n;
  
    console.log("Setting display to block for slide:", slideIndex);
    for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
      images[i].classList.remove('fade-in'); // Remove the fade-in class from all slides
    }
  
    slides[slideIndex - 1].style.display = "block";
    images[slideIndex - 1].classList.add('fade-in'); // Add the fade-in class to the current slide
  }
  




window.onscroll = function() {
  // Add or remove the 'scrolled' class based on scroll position
  document.body.classList.toggle('scrolled', window.scrollY > 200);
};

// Smooth scroll to top when the anchor is clicked
document.getElementById("top-anchor").addEventListener("click", function() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE, and Opera
});


