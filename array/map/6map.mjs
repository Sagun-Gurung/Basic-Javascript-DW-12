
let ar1 = ["my", "name", "is"]

let ar2 = ar1.map((value, i) => {

    // return `${value.toUpperCase()}` + i //the preferred way
    return `${value.toUpperCase()}${i}` //do one operation/ call only one value inside a curly braces
    // return value.toUpperCase() + i
})
console.log(ar2)