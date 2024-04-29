let ar1 = ["sag", "sagun", "sagu", "sa", "sagun gurung"];

let ar2 = ar1.filter((value, i) => {

  if (value.length >= 4) {
    return true;
  }
});

console.log(ar2);
