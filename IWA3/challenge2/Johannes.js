// johannes.js
/**they used public and private instead of const
 * had to also put export
 */

export const firstnameI = "Johannes"

export const surnameI = "Potgieter"

export const roleI = "Intern"


display= firstnameI + " " + surnameI + " (" + roleI + ")"
document.querySelector('#johannes').innerText = display