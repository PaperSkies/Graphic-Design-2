const cover = document.getElementById('black-cover')

let screenOn=false

function toggleScreen() {
    console.log("fuker")
    if (screenOn = true) {
        cover.style.opacity = 0
    }
    else if (screenOn = false) {
        cover.style.opacity = 1
    }
}

document.getElementById('onoffbutton').addEventListener('click', function() {toggleScreen()})