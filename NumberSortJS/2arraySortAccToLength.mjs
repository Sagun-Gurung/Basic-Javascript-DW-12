
// Sort array according to its length 

// ascending Sort

let arr = ["asds", "aa", "aejrheja", "a"]

let arrSort = arr.sort((a,b)=> {
    return a.length - b.length
})

console.log(arrSort)

// descending Sort

let arrDesSort = arr.sort((a, b) => {
    return b.length - a.length
})

console.log(arrDesSort)