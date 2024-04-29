 

 let ar1 = [2, 3, 22, 344, 34, 55, 11]

 let ar2 = ar1.filter((value, i) => {

    if( value % 2 === 0){
        return false
    }
    else {
        return true
    }
 })

 console.log(ar2)