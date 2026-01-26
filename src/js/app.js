const modal = document.querySelector('#modal');
const btnDescargar = document.querySelector('#descargar');


const descargaLink = "./src/pdf/Luis_Elias_Guardado_Junior_Web_Developer_Resume.pdf";

// addEventListeners
btnDescargar.addEventListener('click', descargarCurriculum);

function descargarCurriculum() {
    alerta('Descargando...');

    const link = document.createElement("a");
    link.style.display = "none";
    link.href = descargaLink;
    link.setAttribute("download", "");
    document.body.appendChild(link);
    link.click();
    document.removeChild(link);
}

function alerta(texto) {
    const existeAlerta = document.querySelector('#alerta')

    limpiarHTML(existeAlerta);

    const alerta = document.createElement('P');
    alerta.classList.add('text-center', 'text-danger');
    alerta.textContent = texto;

    existeAlerta.appendChild(alerta);

    setTimeout(() => {
        alerta.remove();
    }, 3000);
}

function limpiarHTML(limpiar) {
    while (limpiar.firstChild) {
        limpiar.removeChild(limpiar.firstChild);
    }
}