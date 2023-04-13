/**
 * Render HTML.
 * @param {Object} parent
 * @param {Object} item
 */

export default function render(parent, item) {
  parent.insertAdjacentHTML('beforeend', item);
}
