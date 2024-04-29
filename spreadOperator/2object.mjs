let info1 = {
  name: "Momo",
  age: 2000,
};
let info2 = { isMarried: false };

let info3 = { ...info1, address: "Sifal", ...info2 };
// let info3 = {...info1,...info2}

console.log(info3);
