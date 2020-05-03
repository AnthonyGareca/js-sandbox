// to check performance in the code;

let calculateFactorial = (root) => {
  let result = 1;
  for(let i = 1; i <= root; i++) {
    result *= i;
  }
  return result;
}

let timerLabel = 'calculate';

console.time(timerLabel);
console.log(calculateFactorial(10));
console.timeEnd(timerLabel);

console.time(timerLabel);
console.log(calculateFactorial(20));
console.timeEnd(timerLabel);

console.log(Math.PI.toFixed(8));

console.log(Math.round(Math.PI));

console.log(Math.ceil(Math.PI));

console.log(Math.floor(Math.PI));

// IIFE auto invoke functions

(function(name = 'my darling') {
  console.log(`Hi ${name}`);
})();

// property functions

const player = {
  play: function(name = 'unknow') {
    console.log(`Play song ${name}`);
  },
  pause: () => {
    console.log(`Pause song`)
  },
}

player.next = () => {
  console.log('Next song');
}

player.play('Patience');
player.pause();
player.next();

const objectPC = {
  cpu: 'Ryzen 5 3600',
  ram: 16,
  gpu: 'nvidia 1660 ti',
  motherboard: 'msi 4ax',
}

for (key in objectPC) {
  console.log(`${key}: ${objectPC[key]}`);
}

// node types
// 1: Elements
// 2: Attributes
// 3: TextNode
// 8: comments
// 9: documents
// 10: doctype

// In traversing use
// .children to get children nodes
// .childNodes to get html elements includes break lines between tags
// .parentElement to get parent
// .previousElementSibling to get previous brother element in the document
// .nextElementSibling to get next brother element in the document

// .querySelector allows use selectors like CSS3
let currentButton = document.querySelector('#button');
// click dblclick mouseenter mouseleave mouseover mouseout mousedown mouseup mousemove 
currentButton.addEventListener('click', getEvent);

let currentInput = document.querySelector('.input');
// keydown keyup keypress focus blur cut copy paste input change
currentInput.addEventListener('keydown', getEvent);

// if using variables the order is important
function getEvent (e) {
  // prevent default action
  e.preventDefault();
  console.log(`Event: ${e.type}`);
  // prevent event bubbling
  e.stopPropagation();
}

// Delegations in js
// create a general event listener
// then from the target of the event filter them
// to perform an action or another.

