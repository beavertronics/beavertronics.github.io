// all constants
const PAGE_URL = location.toString() // https://stackoverflow.com/questions/16611497/how-can-i-get-the-name-of-an-html-page-in-javascript

// waits until an element is loaded and returns it
//https://www.nikitakazakov.com/js-wait-until-loaded-dom-element
const isElementLoaded = async selector => {
  while ( document.querySelector(selector) === null) {
    await new Promise( resolve =>  requestAnimationFrame(resolve) )
  }
  return document.querySelector(selector);
};

/**
 * Toggles the dropdown menu on mobile.
 * @returns null
 */
function toggleDropdownMenu() {
  downMenu = document.getElementById("DropdownMenu")
  downMenu.classList.toggle("hidden")
}

// loads header, dropdown-links, and footer from template html files
$(() => {
  $("#header").load("/shared/html/header.html")
  $("#DropdownMenu").load("/shared/html/dropdown-links.html")
  $("#footer").load("/shared/html/footer.html")
})

window.addEventListener('load', function () {

  // once the dropdown menu is loaded, we add an event listener that toggles the dropdown menu
  // being visible whenever the icon is clicked
  isElementLoaded('#DropdownMenuButton').then((selector) => {
    document.getElementById("DropdownMenuButton").addEventListener("click", toggleDropdownMenu)
  })
})
