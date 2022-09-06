const arrayz = ["hey", "text", "Height"];

function toUpper(param) {
  arrayz.forEach((element) => console.log(element.toUpperCase()));
}

const xy = toUpper(arrayz);

console.log(xy);

let numbers = [1, 2, 3];
let total = 0;

function arraySum(param) {
  numbers.forEach((element) => console.log((total = total + element)));
}

arraySum(numbers);
