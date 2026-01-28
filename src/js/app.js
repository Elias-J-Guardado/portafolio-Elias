const modal = document.querySelector('#modal');
const btnDescargar = document.querySelector('#descargar');

// api rest de correo
    const btnEnviar = document.querySelector('#btn-enviar');

    const formulario = document.querySelector('#formulario')


    formulario.addEventListener('submit', llamarApi);

const descargaLink = "./src/pdf/Luis_Elias_Guardado_Junior_Web_Developer_Resume.pdf";

// addEventListeners
btnDescargar.addEventListener('click', descargarCurriculum);

function descargarCurriculum() {
    alerta('Descargando...', 'alerta-modal');

    const link = document.createElement("a");
    link.style.display = "none";
    link.href = descargaLink;
    link.setAttribute("download", "");
    document.body.appendChild(link);
    link.click();
    // document.removeChild(link);
}

function alerta(texto, contenedorId, estilo) {
    const existeAlerta = document.querySelector(`#${contenedorId}`);

    limpiarHTML(existeAlerta);

    const alerta = document.createElement('P');
    alerta.classList.add('text-center', estilo);
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


function llamarApi(e) {
 const nombre = document.querySelector('#name').value;
 const asunto = document.querySelector('#asunto').value;
 const email = document.querySelector('#email').value;
 const mensaje = document.querySelector('#message').value;

 if (!nombre || !asunto || !email || !mensaje) {
    e.preventDefault();
    alerta('Todos los espacios son obligatorios', 'alerta-formulario', 'text-danger');
    return;
 }

    e.preventDefault();

        btnEnviar.value = "Enviando...";

        const serviceID = 'default_service';
        const templateID =  'template_4d9qcag';

        emailjs.sendForm(serviceID, templateID, this)
        .then(() => {
            btnEnviar.value = 'Send Email';
            alerta('Correo Enviado!!!', 'alerta-formulario', 'text-success');
        },(err) => {
            btnEnviar.value = 'Send Email';
            alerta(JSON.stringify(err), 'alerta-formulario', 'text-danger');
        });
}

