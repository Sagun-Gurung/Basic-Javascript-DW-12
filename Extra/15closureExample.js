// closure function along with its lexical scope (scope of its parent)

let fun1 = () => {
  let name = "Momo";

  let fun2 = () => {
    console.log(name);
  };
  return fun2;
};

let _fun1 = fun1(); //fun2

_fun1();

// when a function is return,
// it also returns the lexical scope of that returned function
