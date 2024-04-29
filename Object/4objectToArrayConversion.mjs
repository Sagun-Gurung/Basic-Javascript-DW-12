// conversion of Object into Array

let info = {
  name: "Mkaf",
  age: 22222222,
  isMarried: true,
};
// here we make of keys and array of values

// let keyArr = Object.keys(info);
// let valArr = Object.values(info);

// console.log(keyArr)
// console.log(valArr)

// there is another way -
//  i.e. [[name: "Mkaf"], [age: 222222], [isMarried: true]] aka property/entries

let propertiesArr = Object.entries(info);

console.log(propertiesArr);
