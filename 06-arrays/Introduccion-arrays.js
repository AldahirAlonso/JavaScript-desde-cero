// 1. New Array() or Array()

const fruits = Array('apple', 'banana', 'cherry')
console.log(fruits)

const justOneNumber = Array(12)
console.log(justOneNumber)

const number = Array(1, 2, 3, 4, 5)
console.log(number)

// 2. Array literal syntax

const oneNumber = [4]
console.log(oneNumber)

const emptyArray = []
console.log(emptyArray)

const sports = ['soccer', 'basketball', 'tennis']
console.log(sports)

const recipeIngredientes = [
    'Flour',
    true,
    2,
    {
        ingredient: 'Milk', quantity: '1 cup'
    },
    false
]
console.log(recipeIngredientes)

// Accesing array elements

const firstFruit = fruits[0]
console.log(firstFruit)

const secondFruit = fruits[2]
console.log(secondFruit)

// Length property

const numberOfFruits = fruits.length
console.log(numberOfFruits)

// Mutability of arrays

fruits.push('watermelon')
console.log(fruits)

// Inmutability of arrays

const newFruits = fruits.concat(['grape', 'kiwi'])
console.log(newFruits)

// Checking arrays with Array.isArray()

const isArray = Array.isArray(fruits)
console.log(isArray) // true

// Practical exercise: sum all elements of an array

const numbersArray = [1, 2, 3, 4, 5]
let sum = 0

for(let i = 0; i < numbersArray.length; i++) {
    sum = numbersArray[i]
}

console.log(sum)