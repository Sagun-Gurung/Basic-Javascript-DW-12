// this always points itself


let info ={
    name: "Sag",
    surname: "Gg",
    age: 29,
    // fullName: function(){
    //     console.log("Hello")
    // }
    // Js variable also stores function

    // fullName: () =>{
    //     console.log(`My name is ${info.name} ${info.surname}`)
    // }, // Arrow function does not support this

    fullName: function(){
        console.log(`My name is ${this.name} ${this.surname}`)
    }
}

console.log(info.name)

info.fullName();