
// find the element with highest length

let dataList = ["sagun", "momo", "chowmein", "butter"]


let highLength = dataList.reduce((pre, cur) => {
    if(pre.length > cur.length){
        return pre
    }else{
        return cur
    }
}, " ")

console.log(highLength)


// find the element with lowest length

let lowLength = dataList.reduce((pre, cur) => {
    if(pre.length < cur.length){
        return pre
    }else{
        return cur
    }
}, 100)

console.log(lowLength)