const leoName = 'Leo Musvaire'
const leoNumber = '2'
const leoStreet = 'Church St.'
const leoPostal = '3105'
const leoBalance = '-10'

const sarahName = 'Sarah    '
const sarahSurname = 'Kleinhans'
const sarahBalance = '-4582.21000111'
const sarahNumber = '13'
const sarahStreet = 'William Close'
const sarahPostal = '0310'

// Only change below this line
//access id was not supposed to assigned

const postalCode1 = sarahPostal
const leo = { 
    age: 24,
    name : leoName,
    balance : leoBalance,                       //Values were  assigned without = in the const
	address : address= {
		number : leoNumber,
		street : leoStreet,
		postalCode1 : leoPostal
	}                   //leoSurname removed
                                            //objects used = innstead of :

	
	
}
const postalCode2= sarahPostal
const sarah = {

	age : 62,
    name: sarahName+sarahSurname,
	balance : sarahBalance,
    address: address= {
		number : sarahNumber,
		street : sarahStreet,
		postalCode2 : sarahPostal
	}

}

console.log(leo, leo.address.postalCode1)
console.log(sarah, sarah.address.postalCode2)