const leoName = 'Leo'
const leoSurname = 'Musvaire     '
const leoBalance = '-9394'

const sarahName = 'Sarah    '
const sarahSurname = 'Kleinhans'
const sarahBalance = '-4582.21000111'

const divider = '----------------------------------'

// Only change below this line
//$ sign to evaluate the value and put it as a string

let owed = parseFloat(leoBalance) + parseFloat(sarahBalance)              //used parsefloat to show the decimals and to convert to number
owed = (owed*-1).toFixed(2)             //owed is a negative value ,had to multiply -1 to make it a positve


const leo = `${` ${leoName} + ${leoSurname}  (owed: R  ${parseFlaot(leoBalance).toFixed(2)})` }`
const sarah = `${` ${sarahName} + ${sarahSurname} + (Owed: R ${-1* parseFloat(sarahBalance).toFixed(2)}`}`
const total = `${` ${divider} ${'Total amount owed: R'} ${owed} ${divider} `}`
const result = `${leo} ${sarah}

${total}`

console.log(result)