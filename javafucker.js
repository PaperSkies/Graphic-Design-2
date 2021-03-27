// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// |       Screen Cover       |
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// Store reference to screen cover in a variable.
const cover = document.getElementById('black-cover')

function toggleScreen() {
    const screenOn = cover.style.opacity === "0"

    if (screenOn) {
        cover.style.opacity = "1"
        toggleappicons(screenOn)
    
    }
    else {
        cover.style.opacity = "0"
        toggleappicons(screenOn)
    }
}

// '<img class="musicapp app" src="images/musicapp.svg">'
// '<img class="notesapp app" src="images/notesapp.svg"></img>'

document.getElementById('onoffbutton').addEventListener('click', function() {toggleScreen()})



function html_to_object(html) {
    const template = document.createElement('template');
    template.innerHTML = html.trim();
    return template.content.firstChild;
}


// ~~~~~~~~~~~~~~~~~~~~~~~~
// |      App Icons       |
// ~~~~~~~~~~~~~~~~~~~~~~~~

// Store reference to app icon container to a variable.
const appContainer = document.getElementById('app-container')

const musicapp = html_to_object('<img class="musicapp app" src="images/musicapp.svg">')
const notesapp = html_to_object('<img class="notesapp app" src="images/notesapp.svg"></img>')

// const musicAppEl = document.createElement('img')
// musicAppEl.src = "images/musicapp.svg"
// musicAppEl.classList += 'musicapp app'

console.log(musicapp)

function toggleappicons(screen_on) {
    if (!screen_on && musicPage.style.opacity != "1"){
        appContainer.appendChild(musicapp)
        appContainer.appendChild(notesapp)
    }
    else {
        appContainer.removeChild(musicapp)
        appContainer.removeChild(notesapp)
    }
}

musicapp.addEventListener("click", function() {
    showMusicPage()
    toggleappicons(true)
} )

const musicPage = document.getElementById('musicplayer')

function showMusicPage() {
    musicPage.style.opacity = "1";
    musicPage.style.transform = "scale(1, 1)"
}

function hideMusicPage() {
    musicPage.style.opacity = "0";
    musicPage.style.transform = "scale(0, 1)"
    toggleappicons(cover.style.opacity != "0")
}

const homeButton = document.getElementById("homebutton")

homeButton.addEventListener("click", function() {
    hideMusicPage()

})