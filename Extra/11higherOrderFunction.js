let fun2 = () => {};

fun1(fun2);

let fun3 = () => {
  return () => {};
};

/* HOF 
HIgher order function
fun which takes argument as function fun1 is hof
fun which return another function fun3
*/
