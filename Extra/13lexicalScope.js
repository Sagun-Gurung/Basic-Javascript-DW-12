let fun1 = () => {
  let a = 10;

  let fun2 = () => {
    let b = 15;

    let fun3 = () => {
      let c = 18;
    };

    fun3();
  };
  fun2();
};

fun1();

// lexical scope is a scope of oneself and parent not grandparent
// fun3 parent scope or fun3 lexical scope b, fun3
// lexical scope is the scope of parent not (it is not scope of grandparents)

/* Lexical scope means that the scope of a variable is defined by its location within the code's structure.
Variables declared inside a function are scoped to that function, meaning they are accessible only
within that function (unless explicitly returned or captured in a closure).
Variables declared outside any function (at the global scope) are accessible globally,
throughout the entire script. */
