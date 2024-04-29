// Converting array into Object

// let info =["name", 38. true] => this array cannot be turned into Object because it doesn't have key

let info = [
  ["name", "Mkaf"],
  ["age", 22222222],
  ["isMarried", true],
];

let infoObject = Object.fromEntries(info);

console.log(infoObject);
