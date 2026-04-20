# Portfolio - Elías Guardado

Personal portfolio built with **HTML, Bootstrap and vanilla JavaScript**, with multilanguage support (ES/EN) and EmailJS integration for the contact form.

## Demo
- [Live on Netlify](https://portafolio-elias-guardado.netlify.app/)

## Project structure

---

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

---

## Features
- **Hero section** with personal introduction and profile photo.
- **Education section** with info cards.
- **Projects** with direct links to GitHub.
- **Technical skills** with technology icons.
- **Social media** links to LinkedIn, GitHub and X (Twitter).
- **Contact form** integrated with EmailJS.
- **Resume modal** with PDF preview and download button.
- **i18n support** — dynamic switch between Spanish and English.

---

## Tech stack

| Technology | Usage |
|---|---|
| HTML5 | Site structure |
| Bootstrap 5 | Layout and UI components |
| JavaScript (ES Modules) | Logic and interactivity |
| EmailJS | Contact form delivery |
| Vite | Bundler / dev tooling |

---

## Local setup

### Prerequisites

- Node.js >= 18
- npm

### Steps

```bash
# Clone the repository
git clone https://github.com/Elias-J-Guardado/portafolio.git

# Enter the directory
cd portafolio

# Install dependencies
npm install

# Start the dev server
npm run dev
```

---

## EmailJS configuration

The contact form uses [EmailJS](https://www.emailjs.com/).
To make it work on your own instance:

1. Create an EmailJS account
2. Create a **Service** and a **Template**
3. Replace the following variables in `index.html` and `main.js`:

```js
// index.html
emailjs.init('YOUR_PUBLIC_KEY')

// main.js
const serviceID = 'YOUR_SERVICE_ID';
const templateID = 'YOUR_TEMPLATE_ID';
```

## Available scripts

```bash
npm run dev      # Dev server with Vite
npm run build    # Production build
npm run preview  # Preview the build
```

---

## Internationalization (i18n)

This portfolio supports dynamic language switching between **Spanish** and **English** via navbar buttons. The logic lives in `src/js/i18n.js`, using `data-i18n` attributes in the HTML.

---

## Featured projects

### [Globos&FloresAR](https://github.com/Elias-J-Guardado/globosyfloresAR)
Landing page for a local business. Built with HTML, Tailwind CSS and JavaScript, with EmailJS integration.

### [FlightOnTime](https://github.com/javigt1971/flightontime)
Frontend for a delayed flight prediction system. Includes EDA (Exploratory Data Analysis) and machine learning API integration. Stack: HTML, Tailwind, Vite.

### [Sys-Inventario](https://github.com/Elias-J-Guardado/Sys-Inventario)
Inventory management system built with React + Vite. Real-time database with Supabase. Component-based architecture organized by feature/functionality.

---

## License

This project is for personal use. Feel free to use it as reference or inspiration.

---

## Contact
- LinkedIn: [elias-jimenez-guardado](https://www.linkedin.com/in/elias-jimenez-guardado)
- GitHub: [Elias-J-Guardado](https://github.com/Elias-J-Guardado)
- X: [@eliasGuarDev](https://x.com/eliasGuarDev)