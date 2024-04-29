
let products = [
    {
      id: 1,
      title: "Product 1",
      category: "electronics",
      price: 5000,
      description: "This is description and Product 1",
      discount: {
        type: "0 positive",
      },
    },
    {
      id: 2,
      title: "Product 2",
      category: "cloths",
      price: 2000,
      description: "This is description and Product 2",
      discount: {
        type: "AB Positive",
      },
    },
    {
      id: 3,
      title: "Product 3",
      category: "electronics",
      price: 3000,
      description: "This is description and Product 3",
      discount: {
        type: "AB Negative",
      },
    },
  ];

  // find the array of id ie  output must be [1,2,3]
  let ids = products.map((value, i) => {
    return value.id
  })

  console.log(ids)

// find the array of title 

  let valueArr1 = products.map((value, i) => {
    return value.title
  })

  console.log(valueArr1)


//   array of category

let categories = products.map((value, i) => {
    return value.category
})

console.log(categories)

let types = products.map((value, i) => {
    return value.discount.type
})

console.log(types)
// find the array of price where each price is multiplied by 3  output must be [ 15000,6000,9000]
let prices = products.map((value, i) => {
    return (value.price*3) //bracket rakheko ramro
})

console.log(prices)

