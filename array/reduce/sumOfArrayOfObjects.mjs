
// here we have array of objects

let products = [
    {name: "earphone", price: 600},
    {name: "phone", price: 2000},
    {name: "charger", price: 300},
]

// let cost = Object.values(products) => this wouldnt work

/* So we have array of length 3 and we need another array of length 3 consisting only price
    hence we use map() to store the price into different variable
*/

let priceArray = products.map((value, i) => {
    return value.price
})

// console.log(priceArray)

let sumPrice = priceArray.reduce((pre, cur)=> {
    return pre + cur
}, 0)

console.log(sumPrice)