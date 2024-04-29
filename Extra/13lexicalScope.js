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
