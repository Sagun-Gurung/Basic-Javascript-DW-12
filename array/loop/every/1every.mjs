// checks if every value is greater than 18
let ar1 = [2, 5, 23, 88, 18, 9];

let check = ar1.every((value, i) => {
  if (value > 18) {
    return true;
  } else {
    return false;
  }
});

console.log(check);

// check if every number is even or not

let checkAllEven = ar1.every((value, i) => {
  if (value % 2 === 0) {
    return true;
  } //by default false so no need for else{} part
});

console.log(checkAllEven);

// Check whether the students got pass marks

let marks = [40, 30, 80];

let checkAllPass = marks.every((value, i) => {
  if (value >= 40) {
    return true;
  }
});

console.log(checkAllPass);

const year = [2000, 2302, 1293, 9292];

console.log(
  year.every((value) => {
    if (value < 1900) return true;
    else return false;
  })
);
