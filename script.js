function actualizarContador() {
    // Fecha objetivo (24 de abril)
    const fechaObjetivo = new Date("2024-04-24T10:50:00");

    // Fecha y hora actual
    const fechaActual = new Date();

    // Diferencia en milisegundos entre la fecha actual y la fecha objetivo
    const diferencia = fechaObjetivo - fechaActual;

    // Convertir la diferencia a días, horas, minutos y segundos
    const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
    const horas = Math.floor(
      (diferencia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutos = Math.floor(
      (diferencia % (1000 * 60 * 60)) / (1000 * 60)
    );
    const segundos = Math.floor((diferencia % (1000 * 60)) / 1000);

    // Mostrar el contador en el elemento HTML
    const contadorElement = document.getElementById("contador");
    contadorElement.innerHTML = `
    <span>Faltan:</span>
    <span class="valor">${dias}</span> días,
    <span class="valor">${horas}</span> horas,
    <span class="valor">${minutos}</span> minutos,
    <span class="valor">${segundos}</span> segundos
`;
}

// Actualizar el contador cada segundo
setInterval(actualizarContador, 1000);

// Inicializar el contador al cargar la página
actualizarContador();

function mostrarMensaje(opcion) {
    if (opcion === "eres mi novia") {
      alert("¡Eres mi novia! ¡Te amo!");
    } else if (opcion === "invitado") {
        window.open("invitado.png", "_blank");
        
    }
}

// Funciones para el modal
const modal = document.getElementById('myModal');
const modalContent = document.querySelector('.modal-content');

function abrirModal() {
    modal.style.display = 'block';
    document.getElementById('modalImagen').src = 'menu.png';

}

function cerrarModal() {
    modal.style.display = 'none';
}

// Cambio de fondo del modal
let contadorFondo = 0;
const fondos = ['#ff5733', '#33ff57', '#3333ff', '#ff33f9', '#f9ff33'];

function cambiarFondo() {
    contadorFondo = (contadorFondo + 1) % fondos.length;
    modalContent.style.backgroundColor = fondos[contadorFondo];
}

// Imágenes y textos para el modal
const motivos = [
    {
        imagen: 'imagen1.png',
        texto: 'Motivo 1: Creatividad y originalidad en tus proyectos.'
    },
    {
        imagen: 'imagen2.png',
        texto: 'Motivo 2: Sensibilidad y pasión por el arte y el diseño.'
    },
    {
        imagen: 'imagen3.png',
        texto: 'Motivo 3: Visión única para resolver problemas visuales.'
    },
    {
        imagen: 'imagen4.png',
        texto: 'Motivo 4: Capacidad de comunicar ideas de forma impactante.'
    },
    {
        imagen: 'imagen5.png',
        texto: 'Motivo 5: Aporta belleza y estética a cualquier proyecto.'
    }
];

const modalImagen = document.getElementById('modalImagen');
const modalTexto = document.getElementById('modalTexto');
const nextButton = document.getElementById('nextButton');

let contadorMotivos = 0;

function mostrarSiguienteMotivo() {
    contadorMotivos = (contadorMotivos + 1) % motivos.length;
    modalImagen.src = motivos[contadorMotivos].imagen;
    modalTexto.textContent = motivos[contadorMotivos].texto;
}

nextButton.addEventListener('click', mostrarSiguienteMotivo);


function mostrarImagen(imagen) {
    var nuevaVentana = window.open("", "_blank");
    nuevaVentana.document.write('<html><head><title>Imagen</title></head><body style="margin: 0; background-color: #000;"><img src="' + imagen + '" style="max-width: 100%; max-height: 100vh; display: block; margin: 0 auto;"></body></html>');
    nuevaVentana.document.close();
}