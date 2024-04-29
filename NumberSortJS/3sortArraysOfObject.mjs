
// sorting the array in the ascending order of price 

// this is array of objects
let products = [
    {name: "Mountain Bike", price: 200000},
    {name: "car", price: 2000897879},
    {name: "charger", price: 30},
    {name: "earphone", price: 300},
    {name: "battery", price: 20},
]

// Here a = one object i.e. {name: "charger", price: 30}
// and b is another object i.e. {name: "earphone", price: 300}

// Sorting according to product price
let productPrice= products.sort((a, b)=> { 
    return a.price - b.price
})

// sorting according to array length
// let productName= products.sort((a, b)=> { 
//     return a.name.length - b.name.length
// })

console.log(productPrice)
// console.log(productName)