const PAGE_MINIMUM_WIDTH = 1120; // I found this number by shrinking the page until the robot image was squished enough to look weird
const DESKTOP = 'desktop'
const MOBILE = 'mobile'

// whether the page is mobile or desktop
var currentBody = ""

// builds the page based off of it being mobile or desktop
async function buildPage(body) {
  // load the robots and anything else
  const robots = await ((await fetch("https://static.team5970.org/root/data/robots.json")).json())
  const robotBody = document.getElementById('body')

  // build our final container for desktop, and mobile
  let finalDesktopContainer = document.createElement('div')
  let finalMobileContainer = document.createElement('div')
  finalDesktopContainer.classList.add('robot-images')

  // go through each robot
  for (let robot of Object.keys(robots)) {
    let entry = robots[robot]

    // create all of our elements
    let robotTitleContainer = document.createElement('div')
    let robotTitle = document.createElement('a')
    let robotDescriptionContainer = document.createElement('div')
    let robotImage = document.createElement('img')
    let robotDescription = document.createElement('div')

    // configure title
    robotTitle.href = entry['tba']
    robotTitle.textContent = robot
    robotTitle.target = '_blank'
    // configure robot image
    robotImage.src = entry['img']
    // configure description
    robotDescription.innerHTML = entry['description']
    
    // do desktop-specific configuration
    if (body == DESKTOP) {
      // configure title
      robotTitleContainer.classList.add('robot-title')
      robotTitleContainer.style.textAlign = 'left'
      robotTitle.classList.add('robot-title-link')
      // configure description
      robotDescriptionContainer.classList.add('robot-description')
      robotDescription.classList.add('robot-description-text')
    }

    // do mobile-specific configuration
    else {
      // configure title
      robotTitleContainer.classList.add('robot-title-mobile')
      // configure robot description
      robotDescription.classList.add('robot-description-text-mobile')
    }

    // construct desktop page and append it
    if (body == DESKTOP) {
      // put img + description in right order
      if (entry['image on left']) {
        robotDescriptionContainer.append(robotImage)
        robotDescriptionContainer.append(robotDescription)
      }
      else {
        robotDescriptionContainer.append(robotDescription)
        robotDescriptionContainer.append(robotImage)
      }
      // put title + link together
      robotTitleContainer.append(robotTitle)
      // append everything
      finalDesktopContainer.append(robotTitleContainer)
      finalDesktopContainer.append(robotDescriptionContainer)
    }

    // construct mobile page and append it
    else {
      // create the div specific for the mobile image, and the container
      let mobileImageContainer = document.createElement('div')
      let mobileRobotContainer = document.createElement('div')
      mobileImageContainer.classList.add('robot-images-mobile')
      // put title + link together
      robotTitleContainer.append(robotTitle)
      // put robot image together
      mobileImageContainer.append(robotImage)
      // put everything together
      mobileRobotContainer.append(robotTitleContainer)
      mobileRobotContainer.append(mobileImageContainer)
      mobileRobotContainer.append(robotDescription)
      finalMobileContainer.append(mobileRobotContainer)
    }
  }

  // append the final result!
  if (body == DESKTOP) { robotBody.replaceChildren(finalDesktopContainer) }
  else { robotBody.replaceChildren(finalMobileContainer) }

  currentBody = body
}

// everytime the window resizes, this will run
async function on_resize() {
  // if the screen size is small enough to change to the mobile page
  if (window.innerWidth <= PAGE_MINIMUM_WIDTH) {
    if (currentBody != MOBILE) { await buildPage(MOBILE) }
  } 
  
  // if the page size is fine for desktop
  else {
    // create desktop page
    if (currentBody != DESKTOP) {
      await buildPage(DESKTOP)
    }
  }

  fit_text()
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
window.addEventListener('load', async () => {
  await on_resize()
})

// set the default window.onresize function to our custom one, 
// so when the default one gets called it will use our function instead
window.addEventListener('resize', async () => {
  await on_resize()
})