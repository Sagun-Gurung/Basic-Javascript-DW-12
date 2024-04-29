
let ar1 = ["my", "name", "is"]

let ar2 = ar1.map((value, i) => {

    return `${value}N`.toUpperCase() //the preferred way

    // return value.toUpperCase() + "N"
})

console.log(ar2)