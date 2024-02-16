document.addEventListener("DOMContentLoaded", function() {
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
    
    }
  
    slides[slideIndex - 1].style.display = "block"; // Show a slide

  }
  
function showTopAnchor() {
  const topAnchor = document.getElementById('top');
  
  if (window.scrollY > 200) {
    topAnchor.style.display = 'block'; // Show Top button
    topAnchor.classList.add('top-appear'); // Add an effect to Top button
  } else {
    topAnchor.style.display = 'none'; // Hide Top button if scrolled less than 200
    
  }
}

window.onscroll =  showTopAnchor; // Show Top button if window is scrolled 








