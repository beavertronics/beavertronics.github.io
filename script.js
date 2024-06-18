const calendar_lower_width_limit = 850; // I found this number by shrinking the page until the calendar seemed too dificult to read
const robots_lower_width_limit = 1120; // I found this number by shrinking the page until the robot image was squished enough to look weird
const outreach_lower_width_limit = 975; // You know how I found this at this point
const web_url = 'https://beavertronics.github.io/5970';
// const web_url = 'http://127.0.0.1:5501/' // for testing purposes 

// runs on load of webpage
window.addEventListener('load', function () {
  // get page name for general use
  let page_name = location.toString(); // https://stackoverflow.com/questions/16611497/how-can-i-get-the-name-of-an-html-page-in-javascript

  // set dropdown menu 
  let dropdownMenuButton = document.getElementById("DropdownMenuButton");
  dropdownMenuButton.addEventListener("click", toggleDropdownMenu);

  // identify what page user is on, and run function to format that page
  if (page_name.includes('index.html')) {
    indexOnLoad();
  }
  else if (page_name === web_url) { // other test case
    indexOnLoad();
  }
  else if (page_name.includes('robots.html')) {
    robotsOnLoad();
  }
  else if (page_name.includes('outreach.html')) {
    outreachOnLoad();
  }
}
)


// toggles dropdown menu, is a listener-called function on the drop down menu hamburger button
function toggleDropdownMenu() {
  let dropdownMenu = document.getElementById("DropdownMenu");
    dropdownMenu.classList.toggle("hidden");
}


// formatting for index page
function indexOnLoad() {
  let current_screen_width = window.innerWidth;
  if (current_screen_width <= calendar_lower_width_limit) {
    calendar = document.getElementById("google calendar");
    // calendar.classList.toggle("hidden");
    calendar.remove();
    alt_text = document.getElementById("alt calendar text");
    alt_text.classList.toggle("visible");
  }
}


// formatting for robots page
function robotsOnLoad() {
  let current_screen_width = window.innerWidth; // https://www.w3schools.com/howto/howto_js_get_current_window.asp
  if (current_screen_width <= robots_lower_width_limit) {
    window.location.href = "./mobile pages/robots-mobile.html";
  }
}


// formatting for outreach page
function outreachOnLoad() {
  let current_screen_width = window.innerWidth;
  if (current_screen_width <= outreach_lower_width_limit) {
    window.location.href = "./mobile pages/outreach-mobile.html";
  } 
}