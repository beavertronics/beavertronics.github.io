const CALENDAR_MINIMUM_WIDTH = 850; // I found this number by shrinking the page until the calendar seemed too dificult to read
const ROBOTS_MINIMUM_WIDTH = 1120; // I found this number by shrinking the page until the robot image was squished enough to look weird
const OUTREACH_MINIMUM_WIDTH = 975; // You know how I found this at this point
const PAGE_URL = location.toString() // https://stackoverflow.com/questions/16611497/how-can-i-get-the-name-of-an-html-page-in-javascript
const WEB_URL = 'https://beavertronics.github.io/5970/';


// this access the things on the current file
// the #(x) is accessing that elements ID
// then it loads the content with the following path in the load function
// so load('/shared/dropdown-links.html') is loading the dropdown links
// from the html file in the shared folder
// it is then injected into the current file as the header
// this works in any file because this is accessing from the root directory
$(() => {
  $("#DropdownMenu").load("/shared/dropdown-links.html")
  $("#footer").load("/shared/footer.html")
  $("#header").load("/shared/header.html")
})

// when page is loading, force them into index.html to make things easier :3
// this is for more consistent URLs and whatnot, which makes checking cases easier
// instead of having to check for https://beavertronics.github.io/5970 AND
// https://beavertronics.github.io/5970/index.html, its simplified into the latter
// if (!(PAGE_URL.includes('index.html'))) {
//   if (PAGE_URL == WEB_URL) { window.location.href = "./index.html" }
// }
if (PAGE_URL.slice(-1) == "/" && !PAGE_URL.includes('resources')) {
  console.log(window.history)
  window.history.replaceState('page2', 'Title', PAGE_URL.substring(0, PAGE_URL.length - 1))
  
  //window.location.href = PAGE_URL.substring(0, PAGE_URL.length - 1);
  //window.location.href = PAGE_URL.substring(0, PAGE_URL.length - 1);
  //console.log(PAGE_URL.substring(0, PAGE_URL.length - 1))
  //window.location.href = PAGE_URL
}

// runs on load of webpage
// manages calling indexOnLoad(), robotsOnLoad(), and outreachOnLoad()
// these manage manipulating certain things about the page
window.addEventListener('load', function () {
  if (PAGE_URL == WEB_URL) { indexOnLoad() } // run loading function for the index page
  else {
    if (PAGE_URL.includes('robots.html')) { robotsOnLoad() } // run loading function for the robots page
    if (PAGE_URL.includes('outreach.html')) { outreachOnLoad() } // run the loading function for the outreach page
  }
})  





// formatting for the index page
// if the pages width is too small, then it removes the calendar
// instead it displays some text 
function indexOnLoad() {
  if (window.innerWidth <= CALENDAR_MINIMUM_WIDTH) {
    document.getElementById("google calendar").remove()
    document.getElementById("alt calendar text").classList.toggle("visible");
  }
}

// formatting for the robots page
// if the pages width is too small, then it redirects you
// instead onto the mobile page for robots
function robotsOnLoad() {
  let current_screen_width = window.innerWidth; // https://www.w3schools.com/howto/howto_js_get_current_window.asp
  if (current_screen_width <= ROBOTS_MINIMUM_WIDTH) {
    window.location.href = "./mobile pages/robots-mobile.html";
  }
}

// formatting for the outreach page
// if the pages width is too small, then it redirects you
// instead onto the mobile page for outreach
// function outreachOnLoad() {
//   let current_screen_width = window.innerWidth;
//   if (current_screen_width <= OUTREACH_MINIMUM_WIDTH) {
//     window.location.href = "./mobile pages/outreach-mobile.html";
//   } 
// }





// runs on page open, fills the empty header, 
// dropdown menu div, and footer with the contents of their respective html files
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

// toggles dropdown menu
// when hamburger icon in top left is clicked,
// this either shows or hides the dropdown menu
function toggleDropdownMenu() {
  downMenu = document.getElementById("DropdownMenu");
  downMenu.classList.toggle("hidden");
}