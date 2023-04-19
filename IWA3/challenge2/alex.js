// alex.js
/**they used public and private instead of const
 * had to also put export
 */

export const firstnameA = "Alex"
export const surnameA = "Naidoo"
export const roleA = "Head of Marketing"

const display= firstnameA + " " + surnameA + " (" + roleA + ")"
document.querySelector('#alex').innerText = display