
// Check if object is empty or not

let obj1 = {name: "Moooo"}

// since we cannot check if an objest is empty or not, we convert it into array
// array of key ot array of values whichever works!

let abjArr = Object.keys(obj1)

if(abjArr.length === 0){
    console.log("Object is empty")
}
else{
    console.log("Object is not empty")
}