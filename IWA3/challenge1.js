
 

// scripts.js

/*the import did not have any curly brackets*/

import {
    company} from "./configuration.js";
import {
    year} from  "./configuration.js" ;

const message = '© ' + company + ' (' + year + ')'
document.querySelector('footer').innerText = message