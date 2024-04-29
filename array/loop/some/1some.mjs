/* 
Syntax
Execution
Uses

-Some Function
    it is also similar to filter() as it returns true or false and its by default false 
    However, it doesn't return array value as filter()/rather only checks
    output will be true if one of the input return is true
 */

let ar1 = ["ram", "hari", "shyam"];

let unknown = ar1.some((value, i) => {
  if (value === "hari") {
    return true;
  } else {
    false;
  }
});

console.log(unknown);

// check whether a person has smoking habit

let habit = ["smoking", "drinking", "biting nails"];

let checkSmoking = habit.some((value, i) => {
  if (value === "smoking") {
    return true;
  }
});

console.log(checkSmoking);

// check whether we have smoking "smoking drinking gajadi"

let _habit = "smoking drinking gajadi";

// let _habit2 = _habit.split(" ")


let checkHabit2 = _habit.split(" ").some((value, i) => {
  if (value === "smoking") {
    return true;
  }
});

console.log(checkHabit2);
