
/* In case of primitive 
    - a new memory space is created if let keyword is used

let a=1
    b=a
    c=1
    a=10
    console.log(a) => 10
    console.log(b) => 1
    console.log(c) => 1

     (===) =>In primitive, the equal to produce True if the value are same

----------------------------------------------------------------
    In case of Non-Primitive
    - A new memory space is created if a variable is not copy of another variable
    - if a variable is a copy of another variable, the variable share the memory
    - e.g:- a(1, 2)
            b=a  => copy of another variable hence they share same memory
    
    let a = [1, 2]
    let b=1
    let c=[1,2]
    a.push(3)

    console.log(a) => [1, 2, 3]
    console.log(b) => [1,2,3] =>changes in a, changes the b
    console.log(c) => [1,2]

    (===) => In Non-primitive, the equal to produce True if they share same memory location
    
*/
