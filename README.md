# portafolio - Elías Guardado

Portafolio personal desarrollado con **HTML, Bootstrap y JavaScript vanilla**, con soporte multilenguaje (ES/EN) e integración con EmailJS para el formulario de contacto.

## Demo
 > [https://portafolio-elias-guardado.netlify.app/](Deploy en Netlify)

 ## Estrucctura del proyecto

 ---

 ```
PORTAFOLIO/
├── dist/
├── node_modules/
├── src/
│   ├── css/
│   │   └── main.css
│   ├── img/
│   ├── js/
│   │   ├── app.js
│   │   └── i18n.js
│   └── pdf/
│       └── Luis_Elias_Guardado_Junior_Web_Developer_Resume.pdf
├── favicon.ico
├── index.html
├── main.js
├── package.json
├── package-lock.json
└── README.md
```

---

## Funcionalidades
- **Hero section** con presentación personal y foto de perfil.
- **Sección de educación** con tarjetas informativas.
- **Proyectos** con enlaces directos a GitHub.
- **Habilidades técnicas** con íconos de tecnologías.
- **Redes sociales** con links a LinkeIn, GitHun y x (Twitter).
- **Formulario de contacto** integrado con EmailJS.
- **Modal del Curriculum** con vista previa del PDF y botón de descarga.
- **Soporte i18n** cambio dinámico entre Español e Inglés.

---

## Tecnologías usadas

| Tecnología | Uso |
|---|---|
| HTML5 | Estructura del sitio |
| Bootstrap 5 | Layout y componentes UI |
| JavaScript (ES Modules) | Lógica e interactividad |
| EmailJS | Envío del formulario de contacto |
| Vite | Bundler / herramienta de desarrollo |

---

## Configuración de EmailJS

El formulario de contacto usa [EmailJS](https://www.emailjs.com/)-
Para que funcione en tu propia instancia:

1. Crea una cuenta en EmailJS
2. Crea un **Service** y un **Template**
3. Reemplaza las siguientes variables en `index.html` y `main.js`:

```js
// index.html
emailjs.init('TU_PUBLIC_KEY')

// main.js
const serviceID = 'TU_SERVICE_ID';
const templateID = 'TU_TEMPLATE_ID';
```