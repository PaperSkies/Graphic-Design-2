/**
 * Handy utility to convert a string to a DOM Node.
 * @param html {string} - The html string to convert into a DOM Node
 * @returns {object} A javascript object containing a new html DOM Node.
 * @example <caption>Returns a new h1 object:</caption>
 * string_to_html_node("<h1>Make me an object!</h1>")
**/ 
export default function html_to_object(html) {
    const template = document.createElement('template');
    template.innerHTML = html.trim();
    return template.content.firstChild;
}