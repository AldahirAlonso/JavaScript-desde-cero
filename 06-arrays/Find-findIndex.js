// Métodos de búsqueda en arreglos: find() y findIndex()
// Métodos que iteran sobre un arreglo.
// Estos métodos permiten buscar elementos en un arreglo de manera eficiente.

// find() y findIndex() son métodos que permiten encontrar el primer elemento que cumple con una condición específica.
// Estos métodos no modifican el arreglo original, lo que es una característica importante de la inmutabilidad.

// find()

const multipleOf5 = [5, 10, 15, 20]

const firstNumberGreaterThan10 = multipleOf5.find(number => number > 10)

console.log("Arreglo original:")
console.log(multipleOf5) // [5, 10, 15, 20]
console.log("Primer número mayor que 10:")
console.log(firstNumberGreaterThan10) // 15

// findIndex()

const randomNumbers = [6, 14, 27, 56, 40]
const indexNumber = randomNumbers.findIndex(number => number > 50)

console.log("Arreglo original:")
console.log(randomNumbers) // [6, 14, 27, 56, 40]
console.log("Índice del primer número mayor que 50:")
console.log(indexNumber) // 3