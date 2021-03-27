/**
 * A nice helper function that lets us use  $()  instead of  document.getElementById()
 * @param  {string} id - The id of the element you want to select.
 * @returns  {HTMLElement} - The HTML Element with the corresponding id
 */
function $(id) {
	return document.getElementById(id);
}

module.exports = { $ }