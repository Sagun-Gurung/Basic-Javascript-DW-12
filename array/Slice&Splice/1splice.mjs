// it affects the original array

// let list = ["a", "b", "c", "d", "e", "asfs"]

// add more variable
// list.splice(1, 2, "aa", "aslfs")
// console.log(list)

// we can also save the cut part

// list.splice(1, 3)
// let list2 = list.splice(1, 3)

// console.log(list)
// console.log(list2)

// let names = ["Sagun", "Momo", 12, 2000, "Bun", 29]

// let newName = names.splice(1, 3)
// console.log(newName)
// console.log(names)

let arrData = [2333, "susu", 239, "guru", "chowmein", "butter", 2000000];

let newArray = arrData.splice(2, 3, "water", "juice");
console.log(newArray);
console.log(arrData);

/* array.splice(startIndex, deleteCount, item1, item2, ...)
startIndex: The index at which to start modifying the array.
deleteCount (optional): The number of elements to remove starting from the startIndex.
If set to 0, no elements are removed.
item1, item2, etc. (optional): Elements to add to the array at the startIndex.
 */

// You can also use splice() to add elements to an array. For example:

let fruits = ["apple", "banana", "cherry"];

// Insert 'date' and 'elderberry' starting from index 2, without removing any elements
fruits.splice(2, 0, "date", "elderberry");

console.log(fruits); // Output: ['apple', 'banana', 'date', 'elderberry', 'cherry']
