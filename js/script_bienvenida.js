// Revisar si ya hay un nombre guardado
let nombreUsuario = localStorage.getItem("nombreUsuario");

if (nombreUsuario) {
    mostrarNombre(nombreUsuario);
    document.getElementById("entradaNombre").style.display = "none";
} else {
    // Esperar a que el usuario ingrese su nombre
    document.getElementById("guardarNombre").addEventListener("click", () => {
        const input = document.getElementById("nombreUsuarioInput").value.trim();
        const nombre = input ? input : "Usuario Invitado";

        localStorage.setItem("nombreUsuario", nombre);
        mostrarNombre(nombre);

        // Ocultar la entrada de nombre
        document.getElementById("entradaNombre").style.display = "none";

        // Mensaje final
        alert("¡Qué gusto tenerte aquí, " + nombre + "!");
    });
}

function mostrarNombre(nombre) {
    document.getElementById("usuarioNombre").textContent = "Bienvenido/a, " + nombre + ".";
}
