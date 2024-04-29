// sum of all element

let dollar = [2, 3, 7];

let total = dollar.reduce((previous, current) => {
  return previous + current;
}, 0);

console.log(total);

// Multiplication

let mult = dollar.reduce((prev, cur) => {
  return prev * cur;
}, 1);

console.log(mult);
