// Variables globales simples
var modal = document.getElementById('miModal');
var titulo = document.getElementById('tituloModal');
var desc = document.getElementById('descModal');
var link = document.getElementById('linkDescarga');

// Funcion para abrir el modal (llamada desde el HTML onclick)
function abrirModal(nombreJuego, descripcion, rutaJar) {
    titulo.innerText = nombreJuego;
    desc.innerText = descripcion;
    link.href = rutaJar; // Pone el link al jar

    modal.style.display = 'flex'; // Muestra la caja
}

// Funcion para cerrar
function cerrarModal() {
    modal.style.display = 'none';
}

// Cerrar si clic afuera de la caja
window.onclick = function (event) {
    if (event.target == modal) {
        cerrarModal();
    }
}