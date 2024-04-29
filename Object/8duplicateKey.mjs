let info = {
  food: "Chowmein",
  price: 300,
  isSpicy: true,
  food: "Momo", //this value will overwrite the above values because duplicate/redundant key doesn't
  //  exist in Object
};

// in Object, duplicate key doesn't exist
// if exist, below code overwrite above code
console.log(info);
