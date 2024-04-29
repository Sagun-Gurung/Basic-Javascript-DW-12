// This is number sort not a string sort

let num = [1, 343, 12, 30, 0, 55, 9];

// console.log(num.sort()); //this gives string sort result but we need number sort

// ascending Sort
let numAscSort = num.sort((a, b) => {
  return a - b;
});
console.log(numAscSort);

// descending sort
let numDesSort = num.sort((a, b) => {
  return b - a;
});
console.log(numDesSort);
// else you can also use reverse() after ascending sort
// e.g. - console.log(numAscSort.reverse())
