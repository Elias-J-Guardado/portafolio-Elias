# portafolio - Elías Guardado

Portafolio personal desarrollado con **HTML, Bootstrap y JavaScript vanilla**, con soporte multilenguaje (ES/EN) e integración con EmailJS para el formulario de contacto.

## Demo
 - [Deploy en Netlify](https://portafolio-elias-guardado.netlify.app/)

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
## Instalación y uso local

### Prerequisitos

- Node.js >= 18
- npm

### Pasos

```bash
# Clona el repositorio
git clone https://github.com/Elias-J-Guardado/portafolio.git

# Entra al directorio
cd portafolio

# Instala las dependencias
npm install

# Inicia el servidor de desarrollo
npm run dev
```

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

## Scrpits disponibles

```bash
npm run dev      # Servidor de desarrollo con Vite
npm run build    # Build de producción
npm run preview  # Vista previa del build
```

---

## Internacinalización (i18n)

Este portafolio soporta cambio dinámico de idioma entre **Español** e **Inglés** mediante botones en la navbar. La lógica está en `src/js/i18n.js`, usando atributos `data-i18n` en el HTML.

---

## Proyectos destacados

### [Globos&FloresAR](https://github.com/Elias-J-Guardado/globosyfloresAR)
Landing page para negocio local. Construida con HTML, Tailwind CSS y JavaScript, con integración de EmailJS.

### [FlightOnTime](https://github.com/javigt1971/flightontime)
Frontend para sistema de predicción de vuelos retrasados. Incluye EDA (Análisis Exploratorio de Datos) e integración con API de machine learning. Stack: HTML, Tailwind, Vite.

### [Sys-Inventario](https://github.com/Elias-J-Guardado/Sys-Inventario)
Sistema de gestión de inventario construido con React + Vite. Base de datos en tiempo real con Supabase. Arquitectura component-based organizada por feature/funcionalidad.

---

## Licencia

Este proyecto es de uso personal. Siéntete libre de usarlo como referencia o inspiración.

---

## Contacto
- LinkedIn: [elias-jimenez-guardado](https://www.linkedin.com/in/elias-jimenez-guardado)
- GitHub: [Elias-J-Guardado](https://github.com/Elias-J-Guardado)
- X: [@eliasGuarDev](https://x.com/eliasGuarDev)

