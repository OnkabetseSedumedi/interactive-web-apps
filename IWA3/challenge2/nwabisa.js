// nwabisa.js
/**they used public and private instead of const
 * had to also put export
 */

export const firstname = "Nwabisa"
export const surname = "Gabe"
export const role = "CEO"

display= firstname + " " + surname + " (" + role + ")"
document.querySelector('#nwabisa').innerText = display