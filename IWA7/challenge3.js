const leoName = 'Leo'
const leoSurname = 'Musvaire     '
const leoBalance = '-9394'

const sarahName = 'Sarah    '
const sarahSurname = 'Kleinhans'
const sarahBalance = '-4582.21000111'

const divider = '----------------------------------'

// Only change below this line


let owed = parseFloat(leoBalance) + parseFloat(sarahBalance)              //used parsefloat to show the decimals and to convert to number
owed= (owed*1).toFixed          //owed was a negative value
owed1=owed.split('2').join(between)            //the number was not split
owed2=owed.split('13').join(between)
owed= owed1 + `${owed2}`            // joined the two to create the space


const leo = `${` ${leoName} + ${leoSurname} + (Owed: R ${-1*parsefloat(leoBalance).toFixed(2)})` }`
const sarah = `${` ${sarahName} + ${sarahSurname} + (Owed: R ${-1*parseFloat(sarahBalance).toFixed(2)})`}`
const total = `${` ${divider} ${'Total amount owed: R'} ${owed} ${divider} `}`
const result = `${leo} ${sarah}

${total}`

console.log(result)