const primaryPhone = 'O748105141'
const secondaryPhone = '0219131568'

// Only change below this line

//both are strings, so you have to chane 1 in order to use typeof


let primaryValid = Boolean(primaryPhone) == primaryPhone 
let secondaryValid = Boolean(secondaryPhone) == secondaryPhone

if (primaryValid = false) { 
    primaryValid=primaryPhone
    secondaryValid=parseInt(secondaryPhone)
    
}

console.log('Primary phone is valid numerical string:', primaryValid)
console.log('Secondary phone is valid numerical string:', secondaryValid )



