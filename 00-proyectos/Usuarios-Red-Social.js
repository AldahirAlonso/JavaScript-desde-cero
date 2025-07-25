/* 
Requerimientos del reto:

1. El usuario debe poder ingresar su usuario y contraseÃ±a
2. El sistema debe ser capaz de validar si el usuario y contraseÃ±a ingresados por el usuario existen en la base de datos
3. Si el usuario y contraseÃ±a son correctos, el sistema debe mostrar un mensaje de bienvenida y mostrar el timeline del usuario.
4. Si el usuario y contraseÃ±a son incorrectos, el sistema debe mostrar un mensaje de error y no mostrar ningun timeline.

*/

const usersDatabase = [
    {
        username: "usuario1",
        password: "contrasena1",
    },
    {
        username: "usuario2",
        password: "contrasena2",
    },
    {
        username: "usuario3",
        password: "contrasena3",
    }
]

const usersTimeline = [
    {
        username: "Mariana",
        timeline: "Hoy es un gran dia para aprender a programar.",
    },
    {
        username: "Carlos",
        timeline: "Me encanta la programacion, cada dia aprendo algo nuevo.",
    },
    {
        username: "Ana",
        timeline: "La tecnologia es el futuro, estoy emocionada por lo que viene.",
    },
]

const username = prompt("Ingrese su usuario:");
const password = prompt("Ingrese su contrasena:");

function usuarioExistente(username, password) {
    for(let i = 0; i < usersDatabase.length; i++) {
        if(
            usersDatabase[i].username === username && usersDatabase[i].password === password
        )
        {
            return true;
        }
    }
    return false;
}

function signIn(username, password) {
    if (usuarioExistente(username, password)) {
        alert(`Bienvenido ${username}`);
        console.log(usersTimeline)
    } else {
        alert("Usuario o contrasena incorrectos. Intente de nuevo.");
    }
}