class Animal {
    constructor(nombre, especie) {
        this.nombre = nombre;
        this.especie = especie;
    }
    emitirSonido() {
        console.log(`El animal emite un sonido`)
    }
}

class Gato extends Animal{
    constructor(nombre, tipo, raza) {
        super(nombre, tipo);
        this.raza = raza;
    }
    emitirSonido() {
        console.log(`${this.nombre} maulla felizmente`);
    }
    correr() {
        console.log(`${this.nombre} corre felizmente`);
    }
}

const gato1 = new Gato('Gato Gris', 'Gato', 'Siames');
console.log(gato1);
gato1.correr();
gato1.emitirSonido();

gato1.nuevoMetodo = function() {
    console.log("Este es un nuevo método agregado al gato");
}

gato1.prototype.segundoMetodo = function() {
    console.log("Este es un segundo método agregado al gato");
}