// let data = [2,34,56,32,455,78,42222,45]

// let newData = data.slice(3)

// console.log(newData)

// let newData2 = data.slice(3, 6)
// console.log(newData2)

let names = ["Sagun", "Momo", 12, 2000, "Bun", 29];

// console.log(names.slice(1,3))

let slicedName = names.slice(1, 3); //returns the sliced values

/* array.slice(startIndex, endIndex)
startIndex: The index at which to begin extraction (inclusive).
endIndex (optional): The index at which to end extraction (exclusive).
    If omitted, the slice extends to the end of the array. */

console.log(slicedName);
