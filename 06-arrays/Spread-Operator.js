// 1. Copying an array

const originalArray = [1, 2, 3, 4, 5]
const copyOfAnArray = [...originalArray]

console.log("Copying an Array:")
console.log("Original Array:")
console.log(originalArray) // [1, 2, 3, 4, 5]
console.log("Copy of Array:")
console.log(copyOfAnArray) // [1, 2, 3, 4, 5]

// 2. Merging arrays

const array1 = [1, 2, 3]
const array2 = [4, 5, 6]
const mergedArray = [...array1, ...array2]

console.log("Merged Array:")
console.log("Array 1:")
console.log(array1) // [1, 2, 3]
console.log("Array 2:")
console.log(array2) // [4, 5, 6]
console.log("Merged Result:")
console.log(mergedArray) // [1, 2, 3, 4, 5, 6]

// 3. Adding elements to an array

const initialArray = [1, 2, 3]
const extendedArray = [...initialArray, 4, 5, 6]

console.log("Adding Elements to an Array:")
console.log("Initial Array:")
console.log(initialArray) // [1, 2, 3]
console.log("Extended Array:")
console.log(extendedArray) // [1, 2, 3, 4, 5, 6]

// 4. Pass elements to a function

function sum(a, b, c) {
    return a + b + c
}

const numbers = [1, 2, 3]
const result = sum(...numbers)

console.log("Passing Elements to a Function:")
console.log("Numbers Array:")
console.log(numbers) // [1, 2, 3]
console.log("Sum Result:")
console.log(result) // 6