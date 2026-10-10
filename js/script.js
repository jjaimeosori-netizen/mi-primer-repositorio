const boton = document.getElementById("btn-saludar");
const mensaje = document.getElementById("mensaje");

let contador = 0;

boton.addEventListener("click", function() {
    contador++;

    mensaje.textContent = "¡Hola Jair! Te han saludado " + contador + " veces.";
});


