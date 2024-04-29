// rest operator takes rest of value

let sum = (a, ...other) => {
    console.log(a)
    console.log(other) //other variable(rest operator) takes the remaining value sent when function call into array
}

sum(1, 2, 3, 4)

// rest operator are used at receiver section