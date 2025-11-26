// Mensaje inicial
alert("¡Bienvenido al proyecto!");

// Pedir SIEMPRE el nombre y apellido
let nombreCompleto = prompt("Por favor, ingresa tu nombre y apellido:");

// Si el usuario no escribe nada, usamos un valor por defecto
if (!nombreCompleto || nombreCompleto.trim() === "") {
    nombreCompleto = "Usuario Invitado";
}

// Guardar en localStorage por si querés usarlo después
localStorage.setItem("nombreUsuario", nombreCompleto);

// Mostrar el nombre en la página
document.getElementById("usuarioNombre").textContent =
    "Bienvenido/a, " + nombreCompleto + ".";

// Mensaje final
alert("¡Qué gusto tenerte aquí, " + nombreCompleto + "!");



/* a seguir esperando jajaja que loco dolor de culo jajjajaja tarda porque son muchos arcivis?, por los cambios que le hice fue que no mostraba bien ahhh que temboooo porque pio sale asi ahora no idea */
/* que tembo justo se rompe mi zapatilla ajajajajja */