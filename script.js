const blinkingText = false

var mainBox = document.getElementById("main-box")
var scrollText = document.getElementById("scroll-text")

function onScrollUpdate() {
    var yPos = 0 - window.pageYOffset / 1.3 + (mainBox.clientHeight / 6)
    mainBox.style.top = -yPos + "%"

    if (window.pageYOffset > 0) {
        scrollText.style.visibility = "hidden"
    }
    else {
        scrollText.style.visibility = "visible"
    }
}

function showcaseTextScroll(item) {
    var yPos = 0 - window.pageYOffset / 2 + (mainBox.clientHeight / 1)
    item.style.top = -yPos + "%"
}

window.addEventListener("scroll", function(){onScrollUpdate()})

function updateScrollText() {
    if (scrollText.innerHTML == "▼ Scroll down ▼") {
        scrollText.innerHTML = "Scroll down"
    }
    else {
        scrollText.innerHTML = "▼ Scroll down ▼"
    }
}
if (blinkingText) {
    setInterval(updateScrollText, 1000)
}