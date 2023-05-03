// script.js

const root_1 = document.querySelector("[data-key=order1]");
root_1.dataset.biscuits;
root_1.dataset.donuts;
root_1.dataset.pancakes;
root_1.dataset.Delivered;

const root_2 = document.querySelector("[data-key=order2]");
root_2.dataset.biscuits;
root_2.dataset.donuts;
root_2.dataset.pancakes
root_2.dataset.Delivered;

const root_3= document.querySelector("[data-key=order3]");
root_3.dataset.biscuits;
root_3.dataset.donuts;
root_3.dataset.pancakes;
root_3.dataset.Delivered;

const order1biscuits=document.querySelector('#biscuits');
order1biscuits.innerText=root_1.dataset.biscuits;

const order1Donuts=document.querySelector('#donuts');
order1Donuts.innerText=root_1.dataset.donuts;

const order1Pancakes=document.querySelector('#pancakes');
order1Pancakes.innerText=root_1.dataset.pancakes;

const order1Status=document.querySelector('#status');
order1Status.innerText=root_1.dataset.Delivered==='true'? 'Deliverd': 'pending';


const order2biscuits=document.querySelector('biscuits');
order2biscuits.innerText=root_2.dataset.biscuits;

const order2Donuts=document.querySelector('donuts');
order2Donuts.innerText=root_2.dataset.donuts;

const order2Pancakes=document.querySelector('pancakes');
order2Pancakes.innerText=root_2.dataset.pancakes;

const order2Status=document.querySelector('status');
order2Status.innerText=root_2.dataset.Delivered==='true'? 'Deliverd': 'pending';


const order3biscuits=document.querySelector('biscuits');
order3biscuits.innerText=root_3.dataset.biscuits;

const order3Donuts=document.querySelector('donut');
order3Donuts.innerHTML=root_3.dataset.donuts;

const order3Pancakes=document.querySelector('pancakes');
order3Pancakes.innerText=root_3.dataset.pancakes;

const order3Status=document.querySelector('status');
order3Status.innerText=root_3.dataset.Delivered==='false'? 'Deliverd': 'deliverd';




