// all constants
const CALENDAR_MINIMUM_WIDTH = 850; // I found this number by shrinking the page until the calendar seemed too dificult to read

const sponsors = [
  { name: "Autodesk", url: "https://www.autodesk.com/", logo: "/assets/main/sponsors/autodesk-logo.png" },
  { name: "TE Connectivity", url: "https://www.te.com/", logo: "/assets/main/sponsors/te-connectivity-logo.svg" },
  { name: "Intel", url: "https://www.intel.com/", logo: "/assets/main/sponsors/intel-logo.svg" },
  { name: "Lam Research", url: "https://www.lamresearch.com/", logo: "/assets/main/sponsors/lam-research-logo.svg" },
  { name: "West3D", url: "https://west3d.com/", logo: "/assets/main/sponsors/west3d-logo.png" },
  { name: "Oregon Robotics Tournament & Outreach Program", url: "https://ortop.org/", logo: "/assets/main/sponsors/ortop-logo.png" },
  { name: "FIRST Washington", url: "https://firstwa.org/", logo: "/assets/main/sponsors/firstwa-logo.png" },
]

function showhide() {
  let current_screen_width = window.innerWidth

  // if the windows width is less then the minimum calendar width,
  // remove the calendar and display alternate text that the page is too small
  // and redirect them to the calendar externally 
  if (current_screen_width <= CALENDAR_MINIMUM_WIDTH) {
    document.getElementById("google calendar").classList.add("hidden")
    document.getElementById("alt calendar text").classList.remove("hidden")
  } else {
    document.getElementById("google calendar").classList.remove("hidden")
    document.getElementById("alt calendar text").classList.add("hidden")
  }
}

function donateClick() {
  document.getElementById("donate-instructions").classList.remove("hidden")
  document.getElementById("donate-instructions").style.display = ""
}

function loadSponsors() {
  sponsors.sort(() => Math.random() - 0.5)
  const set1 = $("#sponsors-set-1")
  const set2 = $("#sponsors-set-2")
  const imageLoads = []

  for (const sponsor of sponsors) {
    const logo = $(`
            <a href="${sponsor.url}" target="_blank" class="sponsor-logo">
                <img class="sponsor-logo" src="${sponsor.logo}" alt="${sponsor.name}">
            </a>
        `)

    set1.append(logo)
    set2.append(logo.clone())

    const img = logo.find("img")[0]
    imageLoads.push(new Promise(resolve => {
      if (img.complete) resolve()
      else img.addEventListener("load", resolve)
    }))
  }

  Promise.all(imageLoads).then(setSponsorsAnimation)
}

function setSponsorsAnimation() {
  let existing = document.getElementById("sponsors-animation-style")
  if (existing) existing.remove()  // do YOU ever just wanna remove existing? no? ok

  let style = document.createElement("style")
  style.id = "sponsors-animation-style"
  style.innerHTML = `@keyframes sponsors-slider {
        0% { transform: translateX(0); }
        100% { transform: translateX(-${(document.querySelector("#sponsors-set-1").offsetWidth / document.querySelector(".sponsors-slide").offsetWidth) * 100}%); }
    }`
  document.head.appendChild(style)
}


// runs when the page is done loading
// calls on the on_resize function for loading page
// calls loading of sponsors and sets the animation of sponsor logos
window.addEventListener("load", function() {
  showhide()
  loadSponsors()
  //setSponsorsAnimation()
})
window.addEventListener("resize", function() {
  showhide()
  setSponsorsAnimation()
})