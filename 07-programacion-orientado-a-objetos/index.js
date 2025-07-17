/* 

estructura de datos

key / value

objeto {
    propiedad: valor,
    propiedad: valor,
    propiedad: valor
}

*/

const persona = {
    nombre: 'Jhon',
    edad: 30,
    direccion: {
        calle: 'Prol Independencia',
        numero: 123,
        ciudad: 'Guadalajara',
        pais: 'Mexico'
    },
    saludar() {
        console.log(`Hola, mi nombre es ${this.nombre} y tengo ${this.edad} años.`);
    }
}