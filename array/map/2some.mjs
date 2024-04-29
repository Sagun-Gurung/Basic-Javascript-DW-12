// first letter capital

// let value = "my"

// let valArray = value.split("")

// let _value = valArray.map((value, i) => {
//     if(i === 0) {
//         return value.toUpperCase()
//     }
//     else {
//         return value
//     }
// })

// let valArray2 = _value.join("")

// console.log(valArray2)

// try to take less variable as possible

let firstLetterCapital = (value) => {
  let _value = value.split("").map((value, i) => {
    if (i === 0) {
      return value.toUpperCase();
    } else {
      return value.toLowerCase();
    }
  });

  let valArray2 = _value.join("");
  return valArray2;
};

let _firstLetterCapital = firstLetterCapital("josIan")

console.log(_firstLetterCapital)
