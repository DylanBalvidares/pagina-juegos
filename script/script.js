var modal = document.getElementById('miModal');
var titulo = document.getElementById('tituloModal');
var desc = document.getElementById('descModal');
var link = document.getElementById('linkDescarga');
var img = document.getElementById('imgModal');

function abrirModal(nombreJuego, descripcion, rutaJuego, rutaImagen) {
    titulo.innerText = nombreJuego;
    desc.innerText = descripcion;
    link.href = rutaJuego;

    if (rutaImagen) {
        img.src = rutaImagen;
        img.style.display = 'block';
    } else {
        img.style.display = 'none';
    }

    modal.style.display = 'flex';
}

function cerrarModal() {
    modal.style.display = 'none';
    img.src = ''; // limpiar para que no parpadee la anterior
}

window.onclick = function (event) {
    if (event.target == modal) {
        cerrarModal();
    }
}