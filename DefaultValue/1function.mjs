
// default value which is a parameter in the function doesnot takes priority over the given 

let sum = (a=10, b=12, c=22)=>{
    console.log(a)
    console.log(b)
    console.log(c)
}

console.log(sum(1, 2, 3))