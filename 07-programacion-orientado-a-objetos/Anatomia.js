/*
Estructura de dato

key / value

objeto {
    propiedad: valor,
    propiedad2: valor2,
    propiedad3: valor3

    metodos()
}
*/

const persona = { // Objeto persona
    nombre: "Emmanuel", // Propiedad nombre
    edad: 30, // Propiedad edad
    direccion: { // Propiedad direccion que es un objeto
        calle: "washington",
        numero: 1234,
        ciudad: "Estados Unidos"
    },
    saludar() { // Método para saludar
        console.log(`Hola mi nombre es ${persona.nombre}`);
    },
};

console.log(persona);
persona.saludar();

persona.telefono = "123-456-7890"; // Agregar una nueva propiedad
console.log(persona.telefono); // Imprimir la nueva propiedad

persona.despedir = () => { // Agregar un nuevo método
    console.log(`Adios.`) 
};

persona.despedir(); // Llamar al nuevo método

delete persona.telefono; // Eliminar la propiedad telefono
console.log(persona.telefono); // Imprimir la propiedad eliminada (undefined)