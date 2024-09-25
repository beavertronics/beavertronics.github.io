// yeah uh
// https://www.w3schools.com/howto/howto_js_slideshow.asp




////////////////// TO HAVE SLIDESHOW MOVE ON CLICK
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
var currentBody = "a"

function on_resize(){
  let current_screen_width = window.innerWidth;
  console.log(currentBody)
  if (current_screen_width <= OUTREACH_MINIMUM_WIDTH) {
    if(currentBody != "mobile") { $("#body").empty(); $("#body").load("/outreach/body/body_mobile.html"); currentBody = "mobile"; console.log("mobile") }
  } else {
    if(currentBody != "desktop") { $("#body").empty(); $("#body").load("/outreach/body/body_desktop.html"); currentBody = "desktop"; console.log("desktop") }
  }
}
window.addEventListener('load', function () {
  on_resize()
})

window.onresize = on_resize