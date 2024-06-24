window.addEventListener('load', function () {
    
    let generalResourcesText = document.getElementById("generalText");
    let mechanicalText = document.getElementById("mechanicalText")
    let electricalText = document.getElementById("electricalText")
    let softwareText = document.getElementById("softwareText")
    let designText = document.getElementById("designText")
    let leadershipText = document.getElementById("leadershipText")
    let businessText = document.getElementById("businessText")

    let lastShown = generalResourcesText

    document.getElementById("button2").addEventListener("click", showTextCreate(generalResourcesText));
    document.getElementById("button3").addEventListener("click", showTextCreate(mechanicalText));
    document.getElementById("button4").addEventListener("click", showTextCreate(electricalText));
    document.getElementById("button5").addEventListener("click", showTextCreate(softwareText));
    document.getElementById("button6").addEventListener("click", showTextCreate(designText));
    document.getElementById("button7").addEventListener("click", showTextCreate(leadershipText));
    document.getElementById("button8").addEventListener("click", showTextCreate(businessText));

    function showTextCreate(textToShow){
        return function() {
            lastShown.classList.toggle("hide", true);
            textToShow.classList.toggle("hide", false);
            lastShown = textToShow
        }
    }
})