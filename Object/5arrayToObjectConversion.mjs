
// Array to Object Conversion
// First array should be in a specific format with keys and values to be able to 
// convert into object otherwise it wouldn't work

let ar1 = [
    ["name", "ajsda"],
    ["age", 23],
    ["isMarried", false],
]

let arrObj = Object.fromEntries(ar1)

console.log(arrObj)