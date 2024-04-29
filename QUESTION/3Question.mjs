// find those array of title whose price is >= 3000

let info = [
  {
    id: 1,
    title: "Product 1",
    category: "electronics",
    price: 5000,
    description: "This is description and Product 1",
    discount: {
      type: "other",
    },
  },
  {
    id: 2,
    title: "Product 2",
    category: "cloths",
    price: 2000,
    description: "This is description and Product 2",
    discount: {
      type: "other",
    },
},
  {
    id: 3,
    title: "Product 3",
    category: "electronics",
    price: 3000,
    description: "This is description and Product 3",
    discount: {
      type: "a2",
    },
  },
];

//   let filteredInfo = info.filter((value, i) => {
//     if(value.price >= 3000) return true //euta matra process garnu xa vane curly braces no need
//   })

//   console.log(filteredInfo)

// //   find those array of  title whose price is >= 3000=>["product 1",product 3]

//   let titles = filteredInfo.map((value, i) => {
//     return value.title
//   })

//   console.log(titles)

// if filter and map are used simultaneously, filter is always used first

let product3000 = info
  .filter((value, i) => {
    if (value.price >= 3000) return true;
  })
  .map((value, i) => {
    return value.title;
  });

console.log(product3000);

//find those array of title whose price does not equal to 5000 ==> ["product 2","product 3"]

let filteredTitles = info
.filter((value, i) => {
    if(value.price !== 5000) return true
})
.map((value, i) => {
    return value.title
})
console.log(filteredTitles)

// price equal to 3000

let price3000 = info
.filter((value, i) => {
    if(value.price === 3000) return true
})
.map((value, i) => {
    return value.category
})
console.log(price3000)
