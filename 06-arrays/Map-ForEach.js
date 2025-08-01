// Methods that iterate over an array.
// Methods that DO NOT modify the original array (immutability).

// map()

const numbers = [1, 2, 3, 4, 5]
const squaredNumbers = numbers.map(num => num * num)

console.log(numbers) // [1, 2, 3, 4, 5]
console.log(squaredNumbers) // [1, 4, 9, 16, 25]

// forEach()

const colors = ['red', 'pink', 'blue']
const iteratedColors = colors.forEach(color => console.log(color))

console.log(colors) // ['red', 'pink', 'blue']
console.log(iteratedColors) // undefined (forEach returns undefined)

// Excercise: Fahrenheit to Celsius conversion

const temperaturesInFahrenheit = [32, 68, 95, 104, 212]

const temperaturesInCelsius = temperaturesInFahrenheit.map(fahrenheit => (5/9) * (fahrenheit - 32))

console.log('Temperatures in Fahrenheit: ' , temperaturesInFahrenheit)
console.log('Temperatures in Celsius: ', temperaturesInCelsius) // [0, 20, 35, 40, 100]

// Exercise: Sum of Elements in an Array

const newNumbers = [1, 2, 3, 4, 5]

let sum = 0

newNumbers.forEach(number =>{
    sum += number
})

console.log('Sum of elements in the array:', newNumbers) // 15
console.log('Sum:', sum) // 15