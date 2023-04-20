const date = 2050             //used : instead of =
let status1='parent'       //had to change to parent
let count= 0


//the date does not change, so you do not need the if.

	console.log("January", 'New Year’s Day')  //there was no closing bracket
	console.log("March", 'Human Rights Day')
	date = 'April'
	console.log(date, 'Family Day')
	console.log(date, 'Freedom Day')
	count = count + 4

	if (status1= "student") {
	  console.log('June', 'Youth Day')
		let count = count + 1
  }

	console.log('August', 'Women’s Day')
	console.log('September', 'Heritage Day')
	

	console.log('December', 'Day of Reconciliation')
	count = count + 3      //it had let in front

	if (status1 = "parent") {
	  console.log(date, 'Christmas Day')
	   count = count + 1
  }

	console.log('December', 'Day of Goodwill')
	count = count + 1


console.log('Your status is:', status1)
console.log('The year is:', date)
console.log('The total holidays is:', count)