
//  find sum of all even number of array

let list = [20, 23, 11, 200, 77, 53, 400, 2390]

// first we filter the even numbers in array

let filtList = list.filter((value, i) => {
    if(value % 2 === 0){
        return value
    }
})

// and add them through reduce method

let sumList = filtList.reduce((pre, cur) =>{
    return pre + cur
}, 0)

console.log(sumList)