let state = 'idle'
let user = null
let calculated = '1'
// Only allowed to change below


const logCalc = () => {
  const isString = typeof calculated === 'string' //removed numerical
  const calculatedAsNumber = isString ? parseInt(calculated) : calculated
  calculated = calculatedAsNumber + 2 //changed from 1 to 2,they used === instead of =
  return calculated; // had no return
}


const calcUser = () => { //
  logCalc()
  if (calculated >= 2) user = 'John'
  if (calculated >= 2) state = 'requesting'
  if (calculated >= 3) state = 'idle'
  return calculated;
}
const checkUser = () => {
  if (user && state !== 'requesting') {
    console.log(`User: ${user} (${calculated})`)
  }
}