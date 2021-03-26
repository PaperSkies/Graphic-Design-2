// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// |       Screen Cover       |
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// Store reference to screen cover in a variable.
const cover = document.getElementById('black-cover')

// Add fade transition to cover
cover.style.transition = "0.5s"

function toggleScreen() {
    const screenOn = cover.style.opacity === "0"

    if (screenOn) {
        cover.style.opacity = "1";
    } else {
        cover.style.opacity = "0";
    }
    
    toggleAppIcons(screenOn)
}

// Add "click" event listener to button
document.getElementById('onoffbutton').addEventListener('click', function () {
    toggleScreen();
})




// Handy utility to convert a string to a DOM Node.
function string_to_html_node(string) {
    const template = document.createElement('template');
    template.innerHTML = string.trim();
    return template.content.firstChild;
}

// ~~~~~~~~~~~~~~~~~~~~~~~~
// |      App Icons       |
// ~~~~~~~~~~~~~~~~~~~~~~~~

// Store reference to app icon container to a variable.
const appContainer = document.getElementById('app-container');

const musicApp = string_to_html_node(`<img class="musicapp app" src="images/musicapp.svg"/>`)
const noteApp = string_to_html_node(`<img class="notesapp app" src="images/notesapp.svg"/>`)

appContainer.appendChild(musicApp)
appContainer.appendChild(noteApp)


let timer = null;
function toggleAppIcons(screen_on) {
    // Wait 1 second, then add app-icons to the app-container
    if (timer) clearTimeout(timer)
    timer = setTimeout(() => {
        if (screen_on) {
            musicApp.classList.remove('app-animation')
            noteApp.classList.remove('app-animation')
        } else {
            musicApp.classList.add('app-animation')
            noteApp.classList.add('app-animation')
        }
    }, 200);
}