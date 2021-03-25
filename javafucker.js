const cover = document.getElementById('black-cover')

function toggleScreen() {
    let screenOn = cover.style.opacity === "0"
    if (screenOn) {
        cover.style.opacity = "1";
    } else {
        cover.style.opacity = "0";
    }
}

const onOffButton = document.getElementById('onoffbutton')

onOffButton.addEventListener('click', function () {
    toggleScreen();
})