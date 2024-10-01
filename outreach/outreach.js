// constants
const OUTREACH_MINIMUM_WIDTH = 975; // You know how I found this at this point

// https://www.w3schools.com/howto/howto_js_slideshow.asp
let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  console.log(slides)
  if(slides.length == 0) return
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}







// Switches the body between the mobile and desktop versions of the page
var currentBody = ""

// everytime the window resizes, this will run
function on_resize() {
  let current_screen_width = window.innerWidth;
  if (current_screen_width <= OUTREACH_MINIMUM_WIDTH) {
    
    // if the current page is not the mobile page,
    // empty the body tag then load the mobile page HTML into it
    // then set the "currentBody" to mobile
    if(currentBody != "mobile") {
      $("#body").empty()
      $("#body").load("/outreach/body/mobile.html")
      currentBody = "mobile"
    }
  } 
  
  // if the page size is not too small
  else {

    // if the current body is not the desktop,
    // empty the body tag then load the deskto page HTML into it
    // then set "currentBody" to desktop
    if(currentBody != "desktop") { 
      $("#body").empty()
      $("#body").load("/outreach/body/desktop.html")
      currentBody = "desktop"
      console.log("desktop")
    }
  }
}

// add an event listener for when the page is done loading, which will call on on_resize
window.addEventListener('load', function () {
  on_resize()
})

// set the default window.onresize function to our custom one,
// so when the default one gets called it will use our function instead
window.onresize = on_resize