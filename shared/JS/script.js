// all constants
const PAGE_URL = location.toString() // https://stackoverflow.com/questions/16611497/how-can-i-get-the-name-of-an-html-page-in-javascript
const WEB_URL = 'https://beavertronics.github.io/5970/';


$(() => {
  $("#DropdownMenu").load("/shared/dropdown-links.html")
  $("#footer").load("/shared/footer.html")
  $("#header").load("/shared/header.html")
})


if (PAGE_URL.slice(-1) == "/" && !PAGE_URL.includes('resources')) {
  // console.log(window.history)
  window.history.replaceState('page2', 'Title', PAGE_URL.substring(0, PAGE_URL.length - 1))
  
  //window.location.href = PAGE_URL.substring(0, PAGE_URL.length - 1);
  //window.location.href = PAGE_URL.substring(0, PAGE_URL.length - 1);
  //console.log(PAGE_URL.substring(0, PAGE_URL.length - 1))
  //window.location.href = PAGE_URL
}


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


function toggleDropdownMenu() {
  downMenu = document.getElementById("DropdownMenu");
  downMenu.classList.toggle("hidden");
}