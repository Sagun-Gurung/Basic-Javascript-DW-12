if (true) {
  let a = 1;

  if (true) {
    let b = 0;
    if (true) {
      console.log(a);
    }
  }
}

//p1
// a=1

// p2
// b=0

// p3

/* 
Scope chaining refers to how variable lookup occurs in nested functions or blocks.
When a variable is referenced within a function or block, JavaScript first looks for that variable
within the current scope. If the variable is not found, it then looks in the outer (enclosing) scope,
and this process continues until the variable is found or until the global scope is reached.
*/

// scope chaining is the scope of variables in a block, if the variable isn't mentioned in a child or
// grandchild block
// then it search on its parents block and so on
