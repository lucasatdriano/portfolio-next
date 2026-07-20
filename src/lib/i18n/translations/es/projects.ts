import { modal } from './modal';

export const projects = {
    title: 'Proyectos',
    technologies: 'Tecnologías Utilizadas:',
    moreTechs: 'tecnologías',
    forDesktop: 'para escritorio',
    viewDetailsButton: 'Ver detalles',
    clickToOpenModal: 'Haga clic para abrir los detalles del proyecto',
    titleProject: {
        lemnos: 'Lemnos',

        lembraMed: 'LembraMed',

        lembraMedServer: 'LembraMed-Server',

        alphaSpeed: 'Alpha Speed',

        landingPsychology: 'Landing Page para Psicólogos',
    },
    cardDescriptions: {
        lemnos: '<span class="spanColor">Lemnos</span> es un e-commerce completo con <span class="spanColor">autenticación</span>, <span class="spanColor">filtros avanzados</span>, <span class="spanColor">búsqueda en tiempo real</span> e <span class="spanColor">infinite scroll</span>. Desarrollado con <span class="spanColor">React</span>, <span class="spanColor">Firebase</span> y <span class="spanColor">Redux</span>, simula un entorno real con panel administrativo y gestión de estado global.',

        lembraMed:
            '<span class="spanColor">LembraMed</span> es una aplicación diseñada para ayudar en la <span class="spanColor">gestión de medicamentos</span>, con <span class="spanColor">notificaciones en el dispositivo</span>, soporte para <span class="spanColor">múltiples cuentas</span> y <span class="spanColor">historial de dosis</span>. Construida como <span class="spanColor">PWA</span>, puede instalarse en el dispositivo del usuario como una aplicación nativa. El proyecto fue creado para resolver un problema real, con enfoque en <span class="spanColor">usabilidad</span> y accesibilidad.',

        lembraMedServer:
            '<span class="spanColor">LembraMed-Server</span> es la <span class="spanColor">API backend</span> que da soporte a la aplicación LembraMed, encargada de la <span class="spanColor">autenticación de usuarios</span>, la <span class="spanColor">persistencia de datos</span> y la gestión de <span class="spanColor">múltiples cuentas</span>. Desarrollado con <span class="spanColor">Node.js</span> y <span class="spanColor">PostgreSQL</span>, y containerizado con <span class="spanColor">Docker</span>, expone una <span class="spanColor">API REST</span> segura y escalable para el consumo del front-end.',

        alphaSpeed:
            '<span class="spanColor">Alpha Speed</span> es una plataforma para concesionaria con <span class="spanColor">catálogo dinámico</span> y <span class="spanColor">filtros en tiempo real</span>, ofreciendo navegación rápida y personalizada con <span class="spanColor">inicio de sesión persistente</span> en el front-end.',

        landingPsychology:
            '<span class="spanColor">Landing Page Psicología</span> es una aplicación web enfocada en <span class="spanColor">conversión de clientes</span>, con integración de <span class="spanColor">WhatsApp</span> para agendamiento automático y <span class="spanColor">envío de formularios por correo</span>. Desarrollada con <span class="spanColor">Next.js</span>, prioriza <span class="spanColor">rendimiento</span>, <span class="spanColor">SEO</span> y experiencia de usuario.',
    },
    modal,
};
