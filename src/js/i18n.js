const translations = {
    es: {
        // Nav
        "nav.home": "Inicio",
        "nav.about": "Sobre mi",
        "nav.education": "Educación",
        "nav.projects": "Proyectos",
        "nav.social_media": "Redes Sociales",
        "nav.contact": "Contacto",

        // Hero
        "hero.subtitle": "Desarrollador web junior, con mucho entusiasmo por aprender y mejorar",
        "hero.cta": "Contactame",
        
        // Estudios
        "skills.education": "Educación",

        "education.itcha": "Tecnico en computación (2020)",
        "education.alura": "Data Scientist (2026)",

        // Proyectos
        "project.title": "Projectos",

        // Globos&FloresAR
        "globos&floresar.description": "Landing page creada con HTML.",
        "globos&floresar.tecnology": "Tailwind y javascript.",
        "globos&floresar.api": "Con manejo de API de Emailjs.",

        // FlightOnTime
        "flightontime.tecnology": "Programación de Frontend usando html, tailwind y vite.",
        "flightontime.eda": "Analisis exploratirio de datos EDA.",
        "flightontime.api": "Integración de frontend con API de predicción de vuelos retrasados.",

        // Sys-Inventario
        "sys_inventory.description": "Sistema de manejo de inventario contruido sobre React + Vite.",
        "sys_inventory.database": "Base de datos en tiempo real con Supabase.",
        "sys_inventory.architecture": "Arquitectura component-based organizada por caracteristica/funcionaliad.",
    
        // Habilidades
        "skills.title": "Habilidades Técnicas",

        // Redes sociales
        "social.title": "Redes sociales",

        // Contacto
        "contact.title": "Contacto",
        "contact.name": "Nombre",
        "contact.subject": "Asunto",
        "contact.email": "Correo Electronico",
        "contact.message": "Mensaje",
        "contact.send": "Enviar",

        // Modal
        "resume.title": "Curriculum",
        "resume.close": "Cerrar",
        "resume.download": "Descargar Curriculum",
    },

    en: {
        // Nav
        "nav.home": "Home",
        "nav.about": "About me",
        "nav.education": "Education",
        "nav.projects": "Projects",
        "nav.social_media": "Social media",
        "nav.contact": "Contact",

        // Hero
        "hero.subtitle": "Junior web developer, enthusiastic about learning and growing every day",
        "hero.cta": "Contact me",
        
        // Estudios
        "skills.education": "Education",

        "education.itcha": "Computer technician (2020)",
        "education.alura": "Data Scientist (2026)",

        // Proyectos
        "project.title": "Projects",

        // Globos&FloresAR
        "globos&floresar.description": "Landing page built with HTML.",
        "globos&floresar.tecnology": "Tailwind CSS and JavaScript.",
        "globos&floresar.api": "EmailJS API integration.",

        // FlightOnTime
        "flightontime.tecnology": "Frontend development using HTML, Tailwind and Vite.",
        "flightontime.eda": "Exploratory Data Analysis (EDA).",
        "flightontime.api": "Frontend integration with a flight delay prediction API.",

        // Sys-Inventario
        "sys_inventory.description": "Inventory management system built with React + Vite.",
        "sys_inventory.database": "Real-time database with Supabase.",
        "sys_inventory.architecture": "Component-based architecture organized by feature/functionality.",
    
        // Habilidades
        "skills.title": "Tecnical Skills",

        // Redes sociales
        "social.title": "Social media",

        // Contacto
        "contact.title": "Contact",
        "contact.name": "Name",
        "contact.subject": "Subject",
        "contact.email": "Email address",
        "contact.message": "Message",
        "contact.send": "Enviar",

        // Modal
        "resume.title": "Resume",
        "resume.close": "Close",
        "resume.download": "Download resume",
    }
}

let idiomaActual = localStorage.getItem("lang") ?? "es";

// selectores
const idioma = document.querySelectorAll("[data-i18n]");
const btnLang = document.querySelectorAll(".lang-btn");

function aplicarTraduccion(lang) {
    console.log("Aplicando idioma: ", lang);
    console.log("Elementos: ", idioma.length);

    idioma.forEach(item => {
        const llave = item.dataset.i18n;
        const valor = translations[lang][llave];
        console.log("Clave: ", llave, "| Valor: ", valor);
        if (valor) {
            item.textContent = valor;
        }
    });

    document.documentElement.lang = lang;

    btnLang.forEach(btn => {
        btn.classList.toggle("active", btn.dataset.lang === lang);
    })
}

export function setidioma(lang) {
    if (!translations[lang]) return;
    idiomaActual = lang;
    localStorage.setItem("lang", lang);
    aplicarTraduccion(lang);
}

export function iniciarIdioma() {
    aplicarTraduccion(idiomaActual);
}