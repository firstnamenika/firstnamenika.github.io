document.addEventListener("DOMContentLoaded", function() {
  // Add slides
  const slideIndex = 1;
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
    // let images = document.getElementsByClassName("project-image");
    console.log("Number of slides:", slides.length);

    // if n > 0 
  
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
  
  if (window.scrollY > 200) {// if scrolled over 200 pixels
    topAnchor.style.display = 'block'; // Show Top button
    topAnchor.classList.add('top-appear'); // Add an effect to Top button
  } else {
    topAnchor.style.display = 'none'; // Hide Top button if scrolled less than 200
    
  }
}

//once #certifications reach middle of the screen move 'click to see' div to the left
function moveLeft() {
  const clickToSee = document.getElementById('click-to-see');

  if (window.scrollY > 1500) {
    clickToSee.classList.add('move-left'); // Add an effect to click-to-see div    
  }

}

window.addEventListener('scroll', () => { showTopAnchor(); moveLeft(); });// listen to scrolling

function listenToCredentials() {
  const certContainer = document.querySelector('.cert-container');
  certContainer.addEventListener('click', function(event) {
    const card = event.target.closest('.card');
    if (card) {
      showCredential(card.id);
    } else {
      console.log('Couldn\'t access cards');
    }
  });
}

function addCloseButton(id) {
  const closeButton = document.querySelector('.close-button');
  closeButton.style.display = 'block';
console.log(closeButton.style.display, ' inside addclosebutton');
  closeButton.addEventListener('click', function() {
    closeCredential(id);
  })
}

function showCredential(id) {
  addCloseButton(id);

  const credential = document.getElementById(id).querySelector('.credential');
  
  let overlay = document.getElementById('overlay');
  overlay.style.display = 'block';
  credential.style.display = 'block';
  credential.classList.add('credential-appear');
  

  setTimeout(function() {
    credential.classList.remove('credential-appear');
  }, 500)  
  }

function closeCredential(id) {
  // console.log(`this is id of cred: ${id}`);
  const credential = document.getElementById(id).querySelector('.credential');
  let closeButton = document.querySelector('.close-button');
  let overlay = document.getElementById('overlay');

  credential.classList.add('credential-disappear');

  setTimeout(function() {
    credential.style.display = 'none';
    closeButton.style.display = 'none';
    overlay.style.display = 'none';

    credential.classList.remove('credential-disappear');
      }, 200)
    }



listenToCredentials();


    

  






