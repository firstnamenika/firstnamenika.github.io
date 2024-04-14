document.addEventListener("DOMContentLoaded", function() { // start project slider
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
  
 // top anchor logic 
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

//credentials click listener
function listenToCredentials() {
  const certContainer = document.querySelector('.cert-container');
  certContainer.addEventListener('click', function(event) { //use event delegation, listen to parent being clicked on
    const card = event.target.closest('.card'); //find the card
    if (card) {
      showCredential(card.id); //show clicked card
    } else {
      console.log('Couldn\'t access cards'); //console log if error occurs
    }
  });
}

//add close button to overlay
function addCloseButton(id) {
  const closeButton = document.querySelector('.close-button');
  closeButton.style.display = 'block';
// console.log(closeButton.style.display, ' inside addclosebutton');
  closeButton.addEventListener('click', function() { //add event listener, pass credential id
    closeCredential(id);
    console.log(id);
  })
}

//show credential function
function showCredential(id) {
  addCloseButton(id); //add close button to overlay

  const credential = document.getElementById(id).querySelector('.credential');
  const credentialDetails = document.getElementById(id).querySelector('.credential-details');
  // console.log(credentialDetails)

  const overlay = document.getElementById('overlay');
  
   // add transition
  credential.classList.add('credential-appear');
  credentialDetails.classList.add('details-appear');

  overlay.style.display = 'block';
  credential.style.display = 'block';
  credentialDetails.style.display = 'block';

  //remove transition
  setTimeout(function() {
    credential.classList.remove('credential-appear');
    credentialDetails.classList.remove('details-appear'); //remove transition
  }, 500)  
  }

//close credential overlay function
function closeCredential(id) {
  // console.log(`this is id of cred: ${id}`);
  const credential = document.getElementById(id).querySelector('.credential');
  const credentialDetails = document.getElementById(id).querySelector('.credential-details');
  const closeButton = document.querySelector('.close-button');
  const overlay = document.getElementById('overlay');

  credential.classList.add('credential-disappear');
  credentialDetails.classList.add('details-disappear');

  setTimeout(function() {
    credentialDetails.style.display = 'none';
    credential.style.display = 'none';
    closeButton.style.display = 'none';
    overlay.style.display = 'none';

    credentialDetails.classList.remove('details-disappear');
    credential.classList.remove('credential-disappear');
      }, 200)
  }



listenToCredentials();


    

  






