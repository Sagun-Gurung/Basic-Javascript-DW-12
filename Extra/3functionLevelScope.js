// functional level scope (var)
// inside the functional block only or functions
// a variable will known within its functional block only
// it is related to functions only

function sum() {
  //
  //
  console.log(a); //undefined because variable isnt defined yet but it isnt considered
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
