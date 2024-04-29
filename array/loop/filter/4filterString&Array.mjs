

let data = ["a", 22, 788,22, "sagun", "989", "momo", 899, 282]

let dataString = data.filter((value, i) => {

    if(typeof(value) === "string"){
        return true
    }
})

console.log(dataString)

// Another Example

let name = ["Sagun", "Momo", "Mooo"]

let filtName = name.filter((value, i)=> {
    if(value.length > 4){
        return true
    }
})

console.log(filtName)