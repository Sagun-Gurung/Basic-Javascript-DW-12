// Anything that push its task to background(node) are called asynchronous function
// During code execution, the background code will execute when all synchronous code gets executed
// Call stack - call stack run the code inside it once the code gets executed, the code is popped off 
// Event Loop is a mediater which continously monitor call stack and memory queue

console.log("1")

setTimeout(() =>{
    console.log("Hello")
}, 0)

console.log("2") // Output = 1, 2, Hello


