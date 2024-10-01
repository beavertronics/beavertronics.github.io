// this enables you to fullscren by double clicking on the screen
// pretty simple, but I wanted a JS file just for that
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