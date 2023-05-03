const order1 = document.querySelector('[data-key="order1"]');
const biscuits1 = order1.querySelector('.biscuits .count');
const donuts1 = order1.querySelector('.donuts .count');
const pancakes1 = order1.querySelector('.pancakes .count');
const status1 = order1.querySelector('.status dd');


const order2 = document.querySelector('[data-key="order2"]');
const biscuits2 = order2.querySelector('.biscuits .count');
const donuts2 = order2.querySelector('.donuts .count');
const pancakes2 = order2.querySelector('.pancakes .count');
const status2 = order2.querySelector('.status dd');


const order3 = document.querySelector('[data-key="order3"]');
const biscuits3 = order3.querySelector('.biscuits .count');
const donuts3 = order3.querySelector('.donuts .count');
const pancakes3 = order3.querySelector('.pancakes .count');
const status3 = order3.querySelector('.status dd');



biscuits1.innerText = order1.dataset.biscuits
donuts1.innerText = order1.dataset.donuts
pancakes1.innerText = order1.dataset.pancakes
status1.innerText = order1.dataset.status = false ? "Delivered" : "Pending";

biscuits2.innerText = order2.dataset.biscuits
donuts2.innerText = order2.dataset.donuts
pancakes2.innerText = order2.dataset.pancakes
status2.innerText = order2.dataset.status = false ? "Delivered" : "Pending";

biscuits3.innerText = order3.dataset.biscuits
donuts3.innerText = order3.dataset.donuts
pancakes3.innerText = order3.dataset.pancakes
status3.innerText = order3.dataset.status = true ? "Delivered" : "Pending";