// Extract a dom object from a template.
class HtmlUtility {
  static stringToHTML(string) {
    const template = document.createElement('template');
    template.innerHTML = string.trim();
    return template.content.firstChild;
  }
}


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





// ~~~~~~~~~~~~~~~~~~~~~~~~
// |      App Icons       |
// ~~~~~~~~~~~~~~~~~~~~~~~~

// Store reference to app icon container to a variable.
const appContainer = document.getElementById('app-container');

const musicApp = HtmlUtility.stringToHTML(`<img class="musicapp app" src="images/musicapp.svg"/>`)
const noteApp = HtmlUtility.stringToHTML(`<img class="notesapp app" src="images/notesapp.svg"/>`)

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