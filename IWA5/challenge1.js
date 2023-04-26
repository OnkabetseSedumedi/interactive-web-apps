WARNING = 'Free shipping only applies to single customer orders'
BANNED_WARNING = 'Unfortunately we do not ship to your country of residence'
NONE_SELECTED = '0'


let customer = 2
let country = 'null'
let currency = 'null'
let shipping = 0


shipping = 600 
shipping = 800

let shoes = 300 * 1
let toys = 100 * 5
let shirts = 150 * 'NONE_SELECTED'
let batteries = 35 * 2
let pens = 5 * 'NONE_SELECTED'


let cart= shoes + batteries + pens + shirts + toys
console.log(cart)
country = 'B' 
currency = 'R'



if (country = 'RSA' && cart>=1000 && customer === 1) { shipping=0 }

if (customer>1) {
console.log(WARNING)}

if (country= 'RSA'&& 1000>cart) { 
    shipping =400
    
}

if (country = 'RSA' && 1000>=cart) { 
    shipping= 400
    
}

if (country = 'RSA' && 1000>=cart) { 
    shipping= 400
    
}

if (country==='B' && cart>=60 && customer===1) {
    shipping=0
    
}

if (country==='B' && cart>=60) {
    shipping=600
}
if (country==='B' && cart>=60 && customer>1) {
    shipping=600
}

if (country!== 'RSA' && country!=='B') { 
    shipping=800
    
}

country !== 'NK' ? console.log('price', currency, shoes +toys + batteries + pens + shirts + shipping):console.log(BANNED_WARNING)

