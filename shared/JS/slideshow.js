let last = 0
let slideIndex = 0
let overide = false
let canChange = false

window.addEventListener('load', function () {
    // set slides to the first slide
    setSlide(slideIndex);
  })  

/**
 * Set the current slide to slide n
 * @param {Number} n the index of the slide to set as current
 * @returns null
 */
function currentSlide(n) { setSlide(n) }

/**
 * Automatically scroll slides
 * @returns null
 */
function auto() {
    setTimeout(function(){
        // console.log("Bonana")
        if(!overide) nextSlide()
        else overide = false
        auto()
    }, 5000);
}

/**
 * Goes to the next slide
 * @param {Number} n how many slides forwards to go 
 * @returns null
 */
function nextSlide(n = 1) {
    // prevents conflicting requests / JS
    if(!canChange) return;
    canChange = false;
    overide = true;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    slideIndex += n;
    if (slideIndex >= slides.length) {slideIndex = 0}
    if (slideIndex < 0) { slideIndex = slides.length-1}
    textLeft()

    // get the last and next slide
    let lastSlide = slides[last]
    let thisSlide = slides[slideIndex]

    // configure styles
    lastSlide.classList.add("slideOutRight")
    thisSlide.classList.add("slideInLeft")
    thisSlide.style.display = "block"

    // when animation is over, remove designs
    thisSlide.addEventListener("animationend", () => {
        thisSlide.classList.remove("slideInLeft")
        lastSlide.classList.remove("slideOutRight")
        lastSlide.style.display = "none";
        canChange = true;
    }, { once: true });
    uptDot()
    last = slideIndex
} 

/**
 * The same as nextSlide(), but goes back a slide.
 * @param {Number} n how many slides backwards to go (negative!)
 * @returns null
 */
function prevSlides(n = -1) {
    if(!canChange) return;
    canChange = false;
    overide = true;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    slideIndex += n;
    if (slideIndex >= slides.length) {slideIndex = 0}
    if (slideIndex < 0) { slideIndex = slides.length-1}
    textRight()

    let lastSlide = slides[last]
    let thisSlide = slides[slideIndex]

    lastSlide.classList.add("slideOutLeft")

    thisSlide.classList.add("slideInRight")
    thisSlide.style.display = "block"

    thisSlide.addEventListener("animationend", () => {
        thisSlide.classList.remove("slideInRight")
        lastSlide.classList.remove("slideOutLeft")
        lastSlide.style.display = "none";
        canChange = true;
    }, { once: true });
    uptDot()
    last = slideIndex
} 

/**
 * Sets a slide to slide n
 * @param {Number} n the slide index to go to
 * @returns null
 */
function setSlide(n) {
    if(!canChange) return
    overide = true;
    let slides = document.getElementsByClassName("mySlides");
    if (n >= slides.length) {slideIndex = 0}
    if (n < 0) { slideIndex = slides.length-1}

    slideIndex = n
    uptDot()

    if(slideIndex == last){
        slides[last].style.display = "none"
        slides[slideIndex].style.display = "block"
        return
    }
    if(slideIndex > last){
        nextSlide(0)
        return
    }
    prevSlides(0)
} 

/**
 * Move the text to the left
 * @returns null
 */
function textLeft() {
    let top1 = document.getElementById("top1");
    let top2 = document.getElementById("top2");
    let bot1 = document.getElementById("bot1");
    let bot2 = document.getElementById("bot2");

    top1.classList.add("slideOutRight")
    bot1.classList.add("slideOutRight")

    top2.style.display = "block"
    bot2.style.display = "block"


    top2.classList.add("slideInLeft")
    bot2.classList.add("slideInLeft")

    top1.addEventListener("animationend", () => {
        top2.classList.remove("slideInLeft")
        bot2.classList.remove("slideInLeft")
        top2.style.display = "none";
        bot2.style.display = "none";

        top1.classList.remove("slideOutRight")
        bot1.classList.remove("slideOutRight")
    }, { once: true });
} 

/**
 * Moves the text to the right
 * @returns null
 */
function textRight() {
    let top1 = document.getElementById("top1");
    let top2 = document.getElementById("top2");
    let bot1 = document.getElementById("bot1");
    let bot2 = document.getElementById("bot2");

    top1.classList.add("slideOutLeft")
    bot1.classList.add("slideOutLeft")

    top2.style.display = "block"
    bot2.style.display = "block"


    top2.classList.add("slideInRight")
    bot2.classList.add("slideInRight")

    top1.addEventListener("animationend", () => {
        top2.classList.remove("slideInRight")
        bot2.classList.remove("slideInRight")
        top2.style.display = "none";
        bot2.style.display = "none";

        top1.classList.remove("slideOutLeft")
        bot1.classList.remove("slideOutLeft")
    }, { once: true });
} 

/**
 * Makes the current dot active on the page (for which slide is currently shown)
 * @returns null
 */
function uptDot(){
    let dots = document.getElementsByClassName("dot");
    dots[last].classList.remove("active")
    dots[slideIndex].classList.add("active")
}

// call initial logic once everything is ready
canChange = true
auto()