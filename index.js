// all constants
const CALENDAR_MINIMUM_WIDTH = 850; // I found this number by shrinking the page until the calendar seemed too dificult to read

// runs when the page is done loading
// this means loading all elements and whatnot
window.addEventListener('load', function () {

  // if the windows width is less then the minimum calender width,
  // remove the calendar and display alternate text that the page is too small
  // and redirect them to the calendar externally 
  if (window.innerWidth <= CALENDAR_MINIMUM_WIDTH) {
    document.getElementById("google calendar").remove()
    document.getElementById("alt calendar text").classList.toggle("visible");
  } 
})  