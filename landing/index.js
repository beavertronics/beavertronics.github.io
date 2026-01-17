// all constants
const CALENDAR_MINIMUM_WIDTH = 850; // I found this number by shrinking the page until the calendar seemed too dificult to read

// runs when the page is done loading
// calls on the on_resize function for loading page
window.addEventListener('resize', showhide);
window.addEventListener('load', showhide);

function showhide() {
  let current_screen_width = window.innerWidth

  // if the windows width is less then the minimum calender width,
  // remove the calendar and display alternate text that the page is too small
  // and redirect them to the calendar externally 
  if (current_screen_width <= CALENDAR_MINIMUM_WIDTH) {
    document.getElementById("google calendar").classList.add("hidden")
    document.getElementById("alt calendar text").classList.remove("hidden")
  } else {
    document.getElementById("google calendar").classList.remove("hidden")
    document.getElementById("alt calendar text").classList.add("hidden")
  }
}