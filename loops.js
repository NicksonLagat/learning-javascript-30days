const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'Iceland']
let new_arr = []

for(let i=0; i<countries.length;i++){
    new_arr.push(countries[i])
}
console.log(new_arr)

const numbers = [1, 2, 3, 4, 5]

for (const num of numbers) {
  console.log(num**2)
}


const countriess = ['Finland', 'Sweden', 'Norway', 'Denmark', 'Iceland']
const newArr = []
for(const country of countriess){
  newArr.push(country.toUpperCase())
}

console.log(newArr)