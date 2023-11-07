// initialization
// - find relevant section
import { showView } from "./dom.js";


// - detach section from Dom
const section = document.getElementById('add-movie');
section.remove();

// display logic
export function showEdit() {
    showView(section)
}
