const PAGE_MINIMUM_WIDTH = 1120; // I found this number by shrinking the page until the robot image was squished enough to look weird
const DESKTOP = 'desktop'
const MOBILE = 'mobile'

// whether the page is mobile or desktop
var currentBody = ""

// loads the robot data
async function fetchData(url) {
  const resp = await fetch(url)
  return await resp.json()
}

// builds the page based off of it being mobile or desktop
function buildPage(body) {
  // go through each robot entry and build page
  const robots = fetchData("https://static.team5970.org/root/data/robots.json")

  alert(Object.keys(robots))

  for (let robot in Object.keys(robots)) {
    let entry = robots[robot]
  }
}

// everytime the window resizes, this will run
function on_resize() {
  // if the screen size is small enough to change to the mobile page
  if (window.innerWidth <= PAGE_MINIMUM_WIDTH && currentBody != MOBILE) {
    buildPage()
    currentBody = MOBILE
  } 
  
  // if the page size is fine for desktop
  else {
    // create desktop page
    if (currentBody != DESKTOP) {
      buildPage()
      currentBody = DESKTOP
    }

    // just adjust text
    else { 
      fit_text()
    }
  }
}

/*
fits the text to its associated image
 */
function fit_text() {
  let descriptions = document.querySelectorAll(".robot-description")

  for (const description of descriptions) {
    let img = description.querySelector("img")
    let text = description.querySelector(".robot-description-text")

    const adjust = () => {
      text.style.fontSize = ""
      let fontSize = parseFloat(window.getComputedStyle(text).fontSize)
      /* -8 is because some characters extend below the image otherwise, like "g" and "j" */
      while (text.clientHeight > img.clientHeight-8 && fontSize > 8) {
        fontSize -= 0.5
        text.style.fontSize = fontSize + "px"
      }
    }

    if (img.complete) adjust()
    else img.addEventListener('load', adjust)
  }
}

// add an event listener for when the page is done loading, which will call on_resize
window.addEventListener('load', function () {
  on_resize()
})

// set the default window.onresize function to our custom one, 
// so when the default one gets called it will use our function instead
window.onresize = on_resize