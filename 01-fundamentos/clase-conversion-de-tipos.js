// Explicit type Casting

const string = '42'
const integer = parseInt(string)
console.log("------Conversion de string a entero------")
console.log(integer)
console.log(typeof integer)

const stringDecimal = '3.14'
const float = parseFloat(stringDecimal)
console.log("------Conversion de string a decimal------")
console.log(float)
console.log(typeof float)

const binary = '1010'
const decimal = parseInt(binary, 2)
console.log("------Conversion de binario a decimal------")
console.log(decimal)
console.log(typeof decimal)

// Implicit Type Casting
console.log("------5 concatena a 3 los junta------")
const sum = '5' + 3;
console.log(sum)

// Estas operaciones dependen de la conversion por el primer tipo de dato insertado.
// Si primero se inserta un String lo demas es String.
console.log("------Convierte el op boolean a String------")
const sumWithBoolean = '3' + true
console.log(sumWithBoolean)

// Si primero se inserta un Entero lo demas sera Entero.
console.log("------Numero entero: 2 es aumentado por 1 por el op boolean true------")
const sumWithNumber = 2 + true
console.log(sumWithNumber)

console.log("------QUIZ de la clase 9 APROBADO fue opcion A------")