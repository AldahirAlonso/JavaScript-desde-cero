// Funciones Puras

// Side Effects
// 1. Modificar variables globales
// 2. Modificar parámetros
// 3. Solicitudes a HTTP
// 4. Imprimir en consola
// 5. Manipulacion del DOM

function sum (a, b) {
    return a + b
}

// Funciones Impuras

function sum(a, b) {
    console.log('A: ', a)
    return a + b
}

let total = 0

function sumWithSideEffect (a) {
    total += a
    return total
}

// Funcion Pura

function square (x) {
    return x * x
}

function addTen (y) {
    return y + 10
}

const number = 5
const finalResult = addTen(square(number))
console.log(finalResult) // 35