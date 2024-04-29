
let info ={
    name: "Mkaf",
    age: 22222222,
    isMarried: true,
}

/* 
    ["name", "age", "isMarried"] => Key
    ["Mkaf", 2222222, true] => Value
    [["name", "Mkaf"], ["age", 22222222], ["isMarried", true]] => Properties/Entries
 */ 

// to find keys from info
let keyArray = Object.keys(info)

// to find the values of info
let valueArray = Object.values(info)

// to find the entries of info 
let entArray = Object.entries(info)

console.log(keyArray)
console.log(valueArray)
console.log(entArray)

