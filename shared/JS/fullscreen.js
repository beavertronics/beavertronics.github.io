// will make the document able to be full-screened when dbl click 
// no calls, just needs to be imported in the html file
document.addEventListener('dblclick', () => {
    if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen()
    } 
    else {
        if (document.exitFullscreen) {
            document.exitFullscreen()
        }
    }
})