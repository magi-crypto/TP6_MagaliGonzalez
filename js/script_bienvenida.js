// Mensaje inicial
alert("¡Bienvenido al proyecto!");

// Pedir SIEMPRE el nombre y apellido
let nombreCompleto = prompt("Por favor, ingresa tu nombre y apellido:");


// Guardar en localStorage por si querés usarlo después
localStorage.setItem("nombreUsuario", nombreCompleto);

// Mostrar el nombre en la página
document.getElementById("usuarioNombre").textContent =
    "Bienvenido/a, " + nombreCompleto + ".";

// Mensaje final
alert("¡Qué gusto tenerte aquí, " + nombreCompleto + "!");
