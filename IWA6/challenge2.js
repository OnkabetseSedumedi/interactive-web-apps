const rent = 400;
const tax = '8%';
const food = 51.7501;
const salary = 800;
const transport = 10.2;
const hourOfDay = 00;
const minuteOfDay = 00;

// Only change below this line
 hourOfDay && (minuteOfDay !== null) && (hourOfDay == '00') && (minuteOfDay == '00')

	let taxAsDecimal = tax // let used because the number can change
    taxAsDecimal= parseInt(taxAsDecimal)
    taxAsDecimal= tax/100

    console.log(taxAsDecimal)


  let startingAfterTax = salary - salary * taxAsDecimal  // 1 was used as a string 
  let balace = startingAfterTax - transport - food - rent

  if (hourOfDay===undefined && minuteOfDay=== undefined) {
    balace = 0
    
  }
  else if (hourOfDay === undefined && minuteOfDay===undefined) {
    balace=startingAfterTax - transport - food - rent
    
  }

	
console.log(balance.toFixed(2))   //to fixed had to be 2 not 3
