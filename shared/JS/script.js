// all constants
const PAGE_URL = location.toString() // https://stackoverflow.com/questions/16611497/how-can-i-get-the-name-of-an-html-page-in-javascript
const WEB_URL = 'https://beavertronics.github.io/5970/';

// this just waits until an element is loaded
// it is not commented much about here as there is more information at the link below
// where the code is originally from
//https://www.nikitakazakov.com/js-wait-until-loaded-dom-element
const isElementLoaded = async selector => {
  while ( document.querySelector(selector) === null) {
    await new Promise( resolve =>  requestAnimationFrame(resolve) )
  }
  return document.querySelector(selector);
};

// a function that simply, toggles the dropdown menu when 
// the hamburger icon is clicked on
// its just that shrimple
function toggleDropdownMenu() {
  downMenu = document.getElementById("DropdownMenu")
  downMenu.classList.toggle("hidden")
}

  // the dollar sign is used to select elements
  // so in the case of below, we are selecting the dropdown menu, footer, and header by their ids
  // then loading the HTML from the files that are inputted into the .load() function
$(()=> {
  $("#DropdownMenu").load("/shared/dropdown-links.html")
  $("#footer").load("/shared/footer.html")
  $("#header").load("/shared/header.html")
})

// a function that runs when the webpage is done loading
window.addEventListener('load', function () {


  // once the dropdown menu is loaded, we add an event listener that toggles the dropdown menu
  // being visible whenever the icon is clicked
  isElementLoaded('#DropdownMenuButton').then((selector) => {
    document.getElementById("DropdownMenuButton").addEventListener("click", toggleDropdownMenu)
  })

  // if there if a slash at the end of the url, this basically removes it
  // its black magic in my opinion
  // it also matters whether or not the current page is the resources page because
  // if it tries to remove the last character, that can break it
  // there is seperate logic in resources.js that handles that, for this reason
  if (PAGE_URL.slice(-1) == "/" && !PAGE_URL.includes('resources')) {
    window.history.replaceState('page2', 'Title', PAGE_URL.substring(0, PAGE_URL.length - 1))
  }
})