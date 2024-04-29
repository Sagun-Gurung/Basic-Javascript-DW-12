/* - Ascending Array Sort
        -ascending Sort - [9,10] => [10,9] because the first digit i.e. 1 is smaller than 9
        -["c", "a"] => ["a", "c"] 
        -["ac", "aa", "ab"] => ["aa", "ab", "ac"]
        -["d", "c" "E", "C", 4] => [4,"C", "E", "c", "d"] - first capital then smaller letters
        -It gives priority to number then Capital letter => Small Letter => symbols may go anywhere in between or latter

        There is no descending sort in JS hence we use reverse()
        */

let ar2 = ["b", "z", "c"]

console.log(ar2.sort())