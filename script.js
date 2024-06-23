const calendar_lower_width_limit = 850; // I found this number by shrinking the page until the calendar seemed too dificult to read
const robots_lower_width_limit = 1120; // I found this number by shrinking the page until the robot image was squished enough to look weird
const outreach_lower_width_limit = 975; // You know how I found this at this point
const web_url = 'https://beavertronics.github.io/5970/';
// const web_url = 'http://127.0.0.1:5501/' // for testing purposes 
const PAGE_URL = location.toString() // https://stackoverflow.com/questions/16611497/how-can-i-get-the-name-of-an-html-page-in-javascript

console.log(PAGE_URL)

if ((PAGE_URL.includes('mobile%20pages'))) {
  $(function() {
    $("#header").load("../shared/header_mobile.html")
    $("#DropdownMenu").load("../shared/dropdown-links_mobile.html")
    $("#footer").load("../shared/footer_mobile.html")
    console.log("MOBILE")
  })
}
else {
  $(function() {
    $("#header").load("./shared/header.html")
    $("#DropdownMenu").load("./shared/dropdown-links.html")
    $("#footer").load("./shared/footer.html")
    console.log("NORMAL")
  })
}



if ((PAGE_URL.includes('index.html')) === false) {
  if (PAGE_URL === web_url) {
    window.location.href = "./index.html"; // force them into index.html for properly reading urlyou
  }
  if (PAGE_URL.includes('robots.html')) {
    robotsOnLoad();
  }
  else if (PAGE_URL.includes('outreach.html')) {
    outreachOnLoad();
  }
}
// runs on page open, fills the empty header, dropdown menu div, and footer with the contents of their respective html files

//https://www.nikitakazakov.com/js-wait-until-loaded-dom-element
const isElementLoaded = async selector => {
  while ( document.querySelector(selector) === null) {
    await new Promise( resolve =>  requestAnimationFrame(resolve) )
  }
  return document.querySelector(selector);
};
  // Code here waits to run until the DOM is loaded.
isElementLoaded('#DropdownMenuButton').then((selector) => {
  let dropdownMenuButton = document.getElementById("DropdownMenuButton");
  dropdownMenuButton.addEventListener("click", toggleDropdownMenu);
});


// runs on load of webpage
window.addEventListener('load', function () {
  if (PAGE_URL.includes('index.html')) {
    indexOnLoad();
  }
})  


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
