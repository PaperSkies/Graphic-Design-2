// Helper function. Let's us use $() instead of document.getElementById()
function $(id) { return document.getElementById(id); }



// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// |       Screen Cover       |
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~

let screenIsOn = false

const cover = $('black-cover')

function toggleScreen() {
    screenIsOn
        ? turnOffScreen()
        : turnOnScreen()
}

function turnOnScreen() {
    cover.style.opacity = "0" // hide cover
    screenIsOn = true
    showAppIcons()
}
function turnOffScreen() {
    cover.style.opacity = "1" // show cover
    screenIsOn = false
    hideAppIcons()
    hideMusicPage()
}



// ~~~~~~~~~~~~~~~~~~~~~~~~
// |       Buttons        |
// ~~~~~~~~~~~~~~~~~~~~~~~~

$('power-button').addEventListener('click', toggleScreen)
$('home-button').addEventListener("click", hideMusicPage);




// ~~~~~~~~~~~~~~~~~~~~~~~~
// |      App Icons       |
// ~~~~~~~~~~~~~~~~~~~~~~~~

const musicApp = $('music-app')
const notesApp = $('notes-app')

function showAppIcons() {
    musicApp.classList.add('pop')
    notesApp.classList.add('pop')
}

function hideAppIcons() {
    musicApp.classList.remove('pop')
    notesApp.classList.remove('pop')
}

musicApp.addEventListener("click", () => {
    showMusicPage()
    hideAppIcons()
})





// ~~~~~~~~~~~~~~~~~~~~~~~~
// |      Music Page      |
// ~~~~~~~~~~~~~~~~~~~~~~~~

const musicPage = $('music-page')

function showMusicPage() {
    musicPage.style.opacity = "1";
    musicPage.style.transform = "scale(1, 1)"
    hideAppIcons()
}

function hideMusicPage() {
    musicPage.style.opacity = "0";
    musicPage.style.transform = "scale(0, 1)"
    if (screenIsOn) {
        showAppIcons()
    }
}
