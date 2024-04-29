

let ar1 = [1, 2, 3, 4]

/* -Map function - it is similar to forEach but it always returns Array
        -use map(), if input and output are Array
        -input and output length are same
        eg: [1, 2, 3, 4] = [2, 4, 6, 7] use map()
            [1, 2, 3, 4] = [2, 3,] not okay
 */


                let ar2 = ar1.map((value, i) => {
                    return value *2
                })


                console.log(ar2)
