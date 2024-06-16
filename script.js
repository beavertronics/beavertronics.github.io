// runs on load of webpage
window.addEventListener('load', function () {
  // get page name for general use
  let page_name = location.toString(); // https://stackoverflow.com/questions/16611497/how-can-i-get-the-name-of-an-html-page-in-javascript

  // set dropdown menu 
  var dropdownMenuButton = document.getElementById("DropdownMenuButton");
  dropdownMenuButton.addEventListener("click", toggleDropdownMenu);

  // if page is robots, run formatting for that page
  if (page_name.includes('robots.html')) {
    scaleRobotsOnLoad();
  }
}
)

// toggles dropdown menu, is a listener-called function on the drop down menu hamburger button
function toggleDropdownMenu() {
    var dropdownMenu = document.getElementById("DropdownMenu");
    dropdownMenu.classList.toggle("hidden");
}

// re-organizes the robots page depending on screen size
function scaleRobotsOnLoad() {
  let current_screen_width = window.innerWidth; // https://www.w3schools.com/howto/howto_js_get_current_window.asp
  let lower_width_limit = 1120 // I found this number by shrinking the page until the robot image was squished enough to look weird
  if (current_screen_width <= lower_width_limit) {

    // SOMETHING GOES HERE EVENTUALLY TO POSITION ROBOT IMAGES AND TEXT VERTICALLY INSTEAD OF HORIZONTALLY

  }
}