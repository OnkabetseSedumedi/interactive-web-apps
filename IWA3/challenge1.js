
 

// scripts.js

/*the import did not have any curly brackets*/

import {
    company,year } from "./configuration";


const message = '© ' + company + ' (' + year + ')'
document.querySelector('footer').innerText = message