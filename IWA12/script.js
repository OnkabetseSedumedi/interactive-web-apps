// scripts.js

const STATUS_MAP = {
    shelf: {
        color: 'green',
        canReserve: true,
        canCheckout: true,
        canCheckIn: false,
    },
    reserved: {
        color: 'blue',
        canReserve: false,
        canCheckout: true,
        canCheckIn: false,
    },
    overdue: {
        color: 'red',
        canReserve: false,
        canCheckout: false,
        canCheckIn: true,
    },
    checkedOut: {
        color: 'orange',
        canReserve: false,
        canCheckout: false,
        canCheckIn: true,
    }
}

// Edit below line 

const books=[
    {status: document.querySelector('#book1.status'),

    HTML: {
        status: document.querySelector('#book1.status'),
        reserve:document.querySelector('#book1.reserve'),
        checkOut:document.querySelector('#book1.checkOut'),
        checkin:document.querySelector('#book1.checkin'),
    },

    html:{
        status: document.querySelector('#book2.status'),
        reserve:document.querySelector('#book2.reserve'),
        checkOut:document.querySelector('#book2.checkOut'),
        checkin:document.querySelector('#book2.checkin'),
    },

    html:{
        status: document.querySelector('#book3.status'),
        reserve:document.querySelector('#book3.reserve'),
        checkOut:document.querySelector('#book3.checkOut'),
        checkin:document.querySelector('#book3.checkin'),
    },



    }
]
console.log(books)