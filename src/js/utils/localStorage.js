/**
 * Get from localStorage
 * @param {string} key
 */
function getItem(key) {
  return JSON.parse(localStorage.getItem(key));
}

/**
 * Set in localStorage
 * @param {string} key
 */
function setItem(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

export default { setItem, getItem };
