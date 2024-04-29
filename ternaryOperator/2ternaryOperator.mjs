/* 0-17 => underage
18-50 => Adult
51-100 => old */

let age = 60;

let category =
  age >= 0 && age <= 17 ? "Underage" : age >= 18 && age <= 50 ? "Adult" : "Old";

console.log(category);

/* num is less than or equal 39   fail
  num [40-59]  third division
   num [ 60-79]  First division
   num [80-100]  distinction */

let num = 79;

let percentage =
  num <= 39
    ? "Fail"
    : num >= 40 && num <= 59
    ? "Third DIvision"
    : num >= 60 && num <= 79
    ? "First Division"
    : null;

console.log(percentage);
