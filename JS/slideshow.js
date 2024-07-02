let last = 0
let slideIndex = 0;
let overide = false;
window.addEventListener('load', function () {
    setSlide(slideIndex);
  })  

// Thumbnail image controls
function currentSlide(n) {
    setSlide(n);
}
canChange = true
function auto() {
    setTimeout(function(){
        console.log("Bonana")
        if(!overide) nextSlide()
        else overide = false
        auto()
    }, 5000);
}
auto()

function nextSlide(n = 1) {
    if(!canChange) return;
    canChange = false;
    overide = true;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    slideIndex += n;
    if (slideIndex >= slides.length) {slideIndex = 0}
    if (slideIndex < 0) { slideIndex = slides.length-1}
    textLeft()

    let lastSlide = slides[last]
    let thisSlide = slides[slideIndex]

    lastSlide.classList.add("slideOutRight")

    thisSlide.classList.add("slideInLeft")
    thisSlide.style.display = "block"

    thisSlide.addEventListener("animationend", () => {
        thisSlide.classList.remove("slideInLeft")
        lastSlide.classList.remove("slideOutRight")
        lastSlide.style.display = "none";
        canChange = true;
    }, { once: true });
    uptDot()
    last = slideIndex
} 
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
function uptDot(){
    let dots = document.getElementsByClassName("dot");
    dots[last].classList.remove("active")
    dots[slideIndex].classList.add("active")
}
