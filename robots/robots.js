// constants
const ROBOTS_MINIMUM_WIDTH = 1120; // I found this number by shrinking the page until the robot image was squished enough to look weird

// Switches the body between the mobile and desktop versions of the page
var currentBody = ""

// everytime the window resizes, this will run
function on_resize() {
  let current_screen_width = window.innerWidth
  if (current_screen_width <= ROBOTS_MINIMUM_WIDTH) {

    // if the current page is not the mobile page,
    // empty the body tag then load the mobile page HTML into it
    // then set the "currentBody" to mobile 
    if(currentBody != "mobile") { 
      $("#body").empty()
      $("#body").load("/robots/body/mobile.html")
      currentBody = "mobile"
    }
  } 
  
  // if the page size is not too small
  else {

    // if the current body is not the desktop,
    // empty the body tag then load the desktop page HTML into it
    // then set "currentBody" to desktop
    if(currentBody != "desktop") {
      $("#body").empty()
      $("#body").load("/robots/body/desktop.html",fit_text)
      currentBody = "desktop"
    } else {
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