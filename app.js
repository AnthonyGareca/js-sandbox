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

const pc = {
  cpu: 'Rayzen 5 3600',
  ram: 16,
  gpu: 'nvidia 1660 ti',
  motherboard: 'msi 4ax',
}

for (key in pc) {
  console.log(`${key}: ${pc[key]}`);
}