/*
Promise() - Es un constructor que crea una nueva promesa.

Estados:
pending - pending: La promesa está en espera de ser completada.
fullfilled - fullfilled: La promesa se ha completado exitosamente.
Rejected - rejected: La promesa ha fallado.

callbacks:
resolve - Se llama cuando la promesa se completa exitosamente.
reject - Se llama cuando la promesa falla.

then() - Se usa para manejar el resultado exitoso de la promesa.
catch() - Se usa para manejar el error de la promesa. 
*/

const promise = new Promise((resolve, reject) => { // Crea una nueva promesa
    setTimeout(() => { // Simula una operación asíncrona
        let operationSuccessful = true; // Simula el resultado de la operación
        if(operationSuccessful) { // Si la operación fue exitosa
        resolve('Operation completed successfully');
    } else {
        reject('Operation failed'); // Si la operación falló
    }
  }, 2000); // Espera 2 segundos 
})