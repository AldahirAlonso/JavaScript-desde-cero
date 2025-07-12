// Metodos de Array: filter() y reduce()
// Métodos que iteran sobre un arreglo.

// filter() y reduce() son métodos que permiten trabajar con arreglos de manera funcional.
// Estos métodos no modifican el arreglo original, lo que es una característica importante de la inmutabilidad.


// filter()

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const evenNumbers = numbers.filter(number => number % 2 === 0)

console.log("Números originales:")
console.log(numbers) // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log("Números pares:")
console.log(evenNumbers) // [2, 4, 6, 8, 10]

// reduce()

const numbersReduce = [1, 2, 3, 4, 5]
const sum = numbersReduce.reduce((accumulator, currentValue) => accumulator + currentValue, 0)

console.log("Números originales:")
console.log(numbersReduce) // [1, 2, 3, 4, 5]
console.log("Resultado de la suma:")
console.log(sum) // 15

// reduce() . caso 2

const words = ['Hello', 'world', 'this', 'is', 'JavaScript', 'Hello', 'JavaScript', 'JavaScript']
const wordFrecuency = words.reduce((accumulator, currentValue) => {
    if (accumulator[currentValue]) {
        accumulator[currentValue]++

    } else {
        accumulator[currentValue] = 1
    }
    return accumulator
}, {})

console.log("Palabras originales:")
console.log(words) // ['Hello', 'world', 'this', 'is', 'JavaScript', 'Hello', 'JavaScript', 'JavaScript']
console.log("Frecuencia de palabras:")
console.log(wordFrecuency)