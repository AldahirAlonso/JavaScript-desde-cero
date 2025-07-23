// const persona = {
//     nombre: 'Aldahir',
//     apellido: 'Alonso',
// }

function Persona(nombre, apellido, edad) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;
}

const persona1 = new Persona('Aldahir', 'Alonso', 22)
console.log(persona1);

const persona2 = new Persona('Karla', 'Montes', 21)
console.log(persona2);

Persona.prototype.telefono = '555-555-5555';

persona1.nacionalidad = 'Mexicana';

Persona.prototype.saludar = function() {
    console.log(`Hola mi nombre es ${this.nombre} ${this.apellido}`)
}

persona1.saludar();
persona2.saludar();