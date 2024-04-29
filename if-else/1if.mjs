/* 
() Parenthesis
{} Curly Braces or Block
[] Array
*/

// Block gets executed if condition is true
if(true){
    console.log("I am IF")
}

let name = "Sagun"
if(name === "Sag"){
    console.log("Hello I am Sag")
}

if(name){//considered true due to Boolean Truthy and Falsey Rule
    console.log("Hello I am True")
}

let a="0"
if(a){//considered true due to Boolean Truthy and Falsey Rule
    console.log("Hello I am True")
}