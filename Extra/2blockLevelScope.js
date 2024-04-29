// block level scope (let, const) {} eg, try catch, if else, function
// block = try catch, if else, map, functions, etc

{
  //
  // the zone before the declaration of variable within the block is called temporal dead zone
  //
  let a = 12;

  console.log(a);
  // the zone after the declaration of variable within the block is called accessible zone
  //
}

// console.log(a); isn't accessible outside the block
// block level scope = temporal dead zone + accessible zone
