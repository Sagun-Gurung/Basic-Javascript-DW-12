/* -Filter function - It returns true or false
        - True - adds the value into variable
        -False - doesn't add the value
    -By default the filter function returns False
 */

 let ar1 = [1, 2, 3, 4]

 let ar2 = ar1.filter((value, i) => {

    if(value % 2 ===0) {
        return true
    }
    else {
        return false
    }
 })

 console.log(ar2)