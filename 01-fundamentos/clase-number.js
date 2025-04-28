// 1. Tipo entero y decimal
const entero = 42
const decimal = 3.14
console.log("------Entero y decimal------")
console.log(entero, decimal)
console.log(typeof entero, typeof decimal)

// 2. Notacion cientifica
const cientifico = 5e3
console.log("------Notacion cientifica------")
console.log(cientifico)

// 3. Infinitos y NaN
const infinito = Infinity
const noEsUnNumero = NaN
console.log("------Infinitos y NaN------")
console.log(infinito)
console.log(noEsUnNumero)

// Operaciones aritmeticas

// 1. Suma, Resta, Multiplicacion y Division
const suma = 3 + 4
const resta = 4 - 4
const multiplicacion = 4 * 7
const division = 16 / 2

// 2. Modulo y Explonenciacion
const modulo = 15 % 8
const exponenciacion = 2 ** 3
console.log("------Modulo y exponenciacion------")
console.log(modulo)
console.log(exponenciacion)

// Precision
const resultado = 0.1 + 0.2
console.log("------Precision------")
console.log(resultado)
console.log(resultado.toFixed(1))
console.log(resultado === 0.3)

// Operaciones Avanzadas
const raizCuadrada = Math.sqrt(16)
const valorAboluto = Math.abs(-7)
const aleatorio = Math.random()
console.log("------Operaciones Matematicas------")
console.log(raizCuadrada)
console.log(valorAboluto)
console.log(aleatorio)