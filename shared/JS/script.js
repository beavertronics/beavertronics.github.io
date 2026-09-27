// all constants
const PAGE_URL = location.toString() // https://stackoverflow.com/questions/16611497/how-can-i-get-the-name-of-an-html-page-in-javascript
const parser = new DOMParser()

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

window.addEventListener('load', function () {
  // insert elements
  // https://stackoverflow.com/questions/36631762/returning-html-with-fetch
  elems = [
    ['/shared/html/header.html', 'header'],
    ['/shared/html/dropdown-links.html', 'DropdownMenu'],
    ['/shared/html/footer.html', 'footer']
  ]
  for (const elem of elems) {
    fetch(elem[0]).then(response => {
      return response.text()
    }).then(html => {
      document.getElementById(elem[1]).innerHTML = html
    })
  }

  // once the dropdown menu is loaded, we add an event listener that toggles the dropdown menu
  // being visible whenever the icon is clicked
  isElementLoaded('#DropdownMenuButton').then((selector) => {
    document.getElementById("DropdownMenuButton").addEventListener("click", toggleDropdownMenu)
  })
})
