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



const numbers1 = [0, 3.14, 9.81, 37, 98.6, 100]

console.log(numbers1.length)


const webTechs = [
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'Redux',
  'Node',
  'MongoDB'
]

console.log(webTechs.length)
console.log(webTechs.push('Python'))
console.log(webTechs)
