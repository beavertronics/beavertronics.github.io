
// Switches the body between the mobile and desktop versions of the page
var currentBody = "a"

function on_resize(){
  let current_screen_width = window.innerWidth;
  if (current_screen_width <= OUTREACH_MINIMUM_WIDTH) {
    if(currentBody != "mobile") { $("#body").empty(); $("#body").load("/robots/body/mobile.html"); currentBody = "mobile"; console.log("mobile") }
  } else {
    if(currentBody != "desktop") { $("#body").empty(); $("#body").load("/robots/body/desktop.html"); currentBody = "desktop"; console.log("sigma") }
  }
}
window.addEventListener('load', function () {
  on_resize()
})

window.onresize = on_resize