// all constants
const CALENDAR_MINIMUM_WIDTH = 850; // I found this number by shrinking the page until the calendar seemed too dificult to read

// runs when the page is done loading
// calls on the on_resize function for loading page
window.addEventListener('load', function () {
  let current_screen_width = window.innerWidth

  // if the windows width is less then the minimum calender width,
  // remove the calendar and display alternate text that the page is too small
  // and redirect them to the calendar externally 
  if (current_screen_width <= CALENDAR_MINIMUM_WIDTH) {
    document.getElementById("google calendar").remove()
    document.getElementById("alt calendar text").classList.toggle("hidden")
  } 
})