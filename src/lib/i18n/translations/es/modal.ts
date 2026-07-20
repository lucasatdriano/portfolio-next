export const modal = {
    featuresTitle: 'Características Principales',
    challengesTitle: 'Desafíos',
    learningsTitle: 'Aprendizajes',

    fullDescription: {
        lemnos: {
            introduction:
                '<span class="spanColor">Lemnos</span> es una plataforma de e-commerce diseñada para simular un entorno real de producción, abarcando tanto la experiencia del usuario como la gestión administrativa.',

            development:
                'La aplicación fue desarrollada con <span class="spanColor">React</span>, utilizando <span class="spanColor">Redux</span> para el estado global y <span class="spanColor">Firebase</span> para autenticación y persistencia de datos. Incluye <span class="spanColor">búsqueda en tiempo real</span>, <span class="spanColor">filtros avanzados</span> e <span class="spanColor">infinite scroll</span>, garantizando una experiencia fluida.',

            architecture:
                'La arquitectura sigue principios de <span class="spanColor">componentización</span> y separación de responsabilidades, con organización modular enfocada en escalabilidad.',

            conclusion:
                'El proyecto demuestra la construcción de una aplicación completa, abordando autenticación, gestión de estado, rendimiento y experiencia de usuario en un entorno real.',
        },

        lembraMed: {
            introduction:
                '<span class="spanColor">LembraMed</span> es una aplicación diseñada para ayudar en la gestión de medicamentos, facilitando el seguimiento de horarios y dosis de forma simple y eficiente.',

            development:
                'La aplicación fue desarrollada con <span class="spanColor">Next.js</span>, <span class="spanColor">TypeScript</span> y <span class="spanColor">Tailwind CSS</span>, garantizando organización, escalabilidad y estilización eficiente. Fue construida como <span class="spanColor">PWA (Progressive Web App)</span>, permitiendo que el usuario la instale directamente en su dispositivo con una experiencia similar a una app nativa. Permite registrar medicamentos con horarios definidos y generar <span class="spanColor">notificaciones en el dispositivo</span> en el momento correcto. También cuenta con soporte para <span class="spanColor">múltiples cuentas</span>, permitiendo gestionar diferentes perfiles en el mismo dispositivo.',

            architecture:
                'El sistema está estructurado con un <span class="spanColor">flujo completo de usuario</span>, incluyendo registro de medicamentos, seguimiento de dosis e historial. Implementarla como <span class="spanColor">PWA</span> requirió configurar un service worker, manifest y estrategia de caché para garantizar una instalación confiable y un comportamiento consistente en el dispositivo. La estructura basada en componentes y tipado estático facilita el mantenimiento y la evolución del proyecto.',

            conclusion:
                'El proyecto resuelve un problema real del día a día, demostrando la capacidad de desarrollar aplicaciones con <span class="spanColor">lógica de negocio</span>, enfoque en usabilidad, impacto práctico y una experiencia instalable como aplicación.',
        },

        lembraMedServer: {
            introduction:
                '<span class="spanColor">LembraMed-Server</span> es la API backend encargada de sostener la aplicación LembraMed, gestionando la autenticación, la persistencia de datos y la lógica de negocio detrás del control de medicamentos.',

            development:
                'El servidor fue desarrollado con <span class="spanColor">Node.js</span> y <span class="spanColor">JavaScript</span>, utilizando <span class="spanColor">PostgreSQL</span> como base de datos relacional para almacenar usuarios, medicamentos e historial de dosis. La aplicación fue <span class="spanColor">containerizada con Docker</span>, facilitando la consistencia del entorno y el proceso de despliegue.',

            architecture:
                'La arquitectura sigue un patrón de <span class="spanColor">API REST</span>, con una separación clara entre rutas, controladores y la capa de acceso a datos. El uso de <span class="spanColor">Docker</span> permite aislar dependencias y garantizar que la aplicación se comporte de manera consistente en distintos entornos.',

            conclusion:
                'El proyecto refuerza la construcción de una API robusta y escalable, capaz de dar soporte a múltiples cuentas y sincronizar datos de forma segura con la aplicación LembraMed.',
        },

        alphaSpeed: {
            introduction:
                '<span class="spanColor">Alpha Speed</span> es un sitio institucional para concesionaria de vehículos, diseñado para presentar un catálogo moderno y facilitar la navegación del usuario.',

            development:
                'El proyecto fue desarrollado con <span class="spanColor">JavaScript puro</span>, <span class="spanColor">HTML</span> y <span class="spanColor">CSS</span>, sin frameworks, priorizando control total y rendimiento. Incluye <span class="spanColor">filtros dinámicos</span>, renderización con <span class="spanColor">datos mockados</span> y un sistema de <span class="spanColor">login persistente</span> usando <span class="spanColor">LocalStorage</span>.',

            architecture:
                'La arquitectura sigue un enfoque simple y eficiente, con manipulación directa del DOM y organización modular. Se prioriza <span class="spanColor">baja complejidad</span>, carga rápida y compatibilidad.',

            conclusion:
                'El resultado es una aplicación ligera y funcional que demuestra dominio de fundamentos frontend, enfocada en rendimiento, interactividad y experiencia de usuario.',
        },

        landingPsychology: {
            introduction:
                'Esta <span class="spanColor">Landing Page</span> fue desarrollada con el objetivo de presentar servicios psicológicos de forma profesional, moderna y accesible, enfocándose en la <span class="spanColor">captación de clientes</span>.',

            development:
                'La aplicación fue construida con <span class="spanColor">Next.js</span>, utilizando renderizado optimizado y buenas prácticas de desarrollo frontend. Se implementaron integraciones reales como <span class="spanColor">envío de formularios por correo</span> y redirección a <span class="spanColor">WhatsApp</span> con mensaje automático.',

            architecture:
                'El proyecto sigue una arquitectura basada en <span class="spanColor">componentes reutilizables</span>, facilitando mantenimiento y escalabilidad. También utiliza optimizaciones de Next.js para <span class="spanColor">imágenes</span>, rendimiento y SEO.',

            conclusion:
                'El resultado es una aplicación ligera, responsiva y funcional que resuelve un problema real al facilitar el contacto entre cliente y profesional.',
        },
    },

    features: {
        lemnos: [
            'Autenticación de usuarios con <span class="spanColor">Firebase</span>',
            'Gestión de estado global con <span class="spanColor">Redux</span>',
            'Catálogo dinámico con filtros avanzados',
            'Búsqueda en tiempo real',
            'Infinite scroll para carga eficiente',
            'Página de detalles de productos',
            'Panel administrativo para gestión',
            'Interfaz responsiva y moderna',
        ],

        lembraMed: [
            'Registro de medicamentos con horarios personalizados',
            '<span class="spanColor">Notificaciones en el dispositivo</span>',
            'Soporte para <span class="spanColor">múltiples cuentas</span>',
            'Historial de dosis',
            'Registro de dosis perdidas',
            'Sistema de <span class="spanColor">llamada de emergencia</span> con acceso rápido',
            'Instalable en el dispositivo como <span class="spanColor">PWA</span>',
            'Interfaz simple y accesible',
        ],

        lembraMedServer: [
            'API REST desarrollada con <span class="spanColor">Node.js</span>',
            'Base de datos relacional con <span class="spanColor">PostgreSQL</span>',
            'Autenticación y gestión de usuarios',
            'Soporte para <span class="spanColor">múltiples cuentas</span>',
            'Persistencia del historial de dosis y medicamentos',
            'Entorno containerizado con <span class="spanColor">Docker</span>',
            'Estructura organizada en rutas y controladores',
        ],

        alphaSpeed: [
            'Catálogo dinámico de vehículos',
            'Filtros interactivos en tiempo real',
            'Login persistente con <span class="spanColor">LocalStorage</span>',
            'Renderización dinámica con datos mockados',
            'Manipulación directa del DOM con <span class="spanColor">JavaScript puro</span>',
            'Diseño responsivo para múltiples dispositivos',
            'Carga rápida y optimizada',
        ],

        landingPsychology: [
            'Diseño responsivo para múltiples dispositivos',
            'Integración con <span class="spanColor">WhatsApp</span> para agendamiento automático',
            'Envío de mensajes mediante <span class="spanColor">formulario por correo</span>',
            'Estructura optimizada para <span class="spanColor">SEO</span>',
            'Carga rápida con <span class="spanColor">Next.js</span>',
            'Interfaz enfocada en <span class="spanColor">conversión de usuarios</span>',
            'Estructura modular con <span class="spanColor">componentización</span>',
        ],
    },

    challenges: {
        lemnos: `El principal desafío fue estructurar la gestión de estado global utilizando <span class="spanColor">Redux</span> en una aplicación con múltiples funcionalidades interconectadas. Además, implementar <span class="spanColor">filtros avanzados</span> y <span class="spanColor">búsqueda en tiempo real</span> sin afectar el rendimiento requirió una organización eficiente de la lógica.`,

        lembraMed: `El principal desafío fue desarrollar una aplicación enfocada en <span class="spanColor">usabilidad</span> y accesibilidad, asegurando que funcionalidades como notificaciones, historial de dosis y llamadas de emergencia fueran simples y rápidas de usar. También fue necesario estructurar el soporte de <span class="spanColor">múltiples cuentas</span> manteniendo la organización de los datos.`,

        lembraMedServer: `El principal desafío fue estructurar una <span class="spanColor">API REST</span> organizada y segura para soportar múltiples cuentas y el historial de dosis de la aplicación LembraMed.`,

        alphaSpeed: `El principal desafío fue ir más allá del alcance inicial del proyecto, implementando funcionalidades como <span class="spanColor">filtros dinámicos</span>, <span class="spanColor">renderización con datos mockados</span> y un sistema de <span class="spanColor">login persistente con LocalStorage</span>. Esto requirió aprendizaje continuo y aplicación autónoma de nuevos conceptos.`,

        landingPsychology: `El principal desafío fue diseñar la interfaz enfocada en la <span class="spanColor">conversión</span>, guiando al usuario de forma intuitiva hacia acciones clave como el contacto por WhatsApp o formulario. También fue necesario equilibrar <span class="spanColor">diseño y rendimiento</span>.`,
    },

    learnings: {
        lemnos: `Este proyecto consolidó mi conocimiento en <span class="spanColor">React</span> y <span class="spanColor">Redux</span>, especialmente en la gestión de estado global en aplicaciones complejas. También mejoré mis habilidades en <span class="spanColor">arquitectura frontend</span>, organización de código y desarrollo de interfaces escalables, además de adquirir experiencia práctica con <span class="spanColor">Firebase</span>.`,

        lembraMed: `Este proyecto reforzó conceptos de <span class="spanColor">lógica de negocio</span> y organización del flujo de usuario, además de la implementación de <span class="spanColor">notificaciones en el dispositivo</span> y gestión de estado para múltiples perfiles. También permitió desarrollar una visión más enfocada en <span class="spanColor">usabilidad</span> y soluciones para problemas reales.`,

        lembraMedServer: `Este proyecto profundizó mi conocimiento en <span class="spanColor">Node.js</span> para la construcción de APIs, además de reforzar conceptos de modelado de datos con <span class="spanColor">PostgreSQL</span>. También gané experiencia práctica con <span class="spanColor">Docker</span>, comprendiendo la importancia de la containerización para la consistencia entre entornos de desarrollo y producción.`,

        alphaSpeed: `Este proyecto reforzó mi dominio de <span class="spanColor">JavaScript puro</span>, especialmente en la <span class="spanColor">manipulación del DOM</span>, renderización dinámica con <span class="spanColor">datos mockados</span> y lógica de filtros. También mejoré el uso de <span class="spanColor">LocalStorage</span> para persistencia de estado. Además, desarrollé mayor capacidad de aprendizaje <span class="spanColor">autónomo</span> y resolución de problemas.`,

        landingPsychology: `Este proyecto reforzó conceptos de <span class="spanColor">componentización</span> y organización en <span class="spanColor">Next.js</span>, además de buenas prácticas de <span class="spanColor">UX/UI</span>. También permitió implementar integraciones reales como <span class="spanColor">envío de correos</span> y automatización con WhatsApp.`,
    },
};
