
let num = 1234
let strNum = String(num)//Conversion to string

console.log(strNum)
// console.log(String(num)) or this way

console.log(Number("1324"))//Conversion to Number

console.log(Boolean("akshf"))
console.log(Boolean("0"))
console.log(Boolean(""))//false
console.log(Boolean(0))//False
console.log(Boolean(1))
console.log(Boolean(" "))

/* 
all empty are falsy value
String 
    "" => Falsey
    all are thruthy including space " "

Number
    0=> falsey
    all are truthy
*/