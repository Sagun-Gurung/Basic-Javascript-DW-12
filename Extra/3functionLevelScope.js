// functional level scope (var)
// inside the functional block only or functions
// a variable will known within its functional block only
// it is related to functions only

function sum() {
  //
  //
  console.log(a); //undefined because variable isn't defined yet but it isn't considered
  //
  //
  //
  var a = 20;

  //
  //
  //
  console.log(a);
}

// console.log(a)

sum();
