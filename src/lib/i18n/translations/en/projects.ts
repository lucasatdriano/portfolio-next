import { modal } from './modal';

export const projects = {
    title: 'Projects',
    technologies: 'Technologies Used:',
    moreTech: {
        one: 'technology',
        other: 'technologies',
    },
    forDesktop: 'for desktop',
    viewDetailsButton: 'View details',
    clickToOpenModal: 'Click to open project details',
    titleProject: {
        lemnos: 'Lemnos',

        lembraMed: 'LembraMed',

        lembraMedServer: 'LembraMed-Server',

        alphaSpeed: 'Alpha Speed',

        landingPsychology: 'Landing Page for Psychologists',
    },
    cardDescriptions: {
        lemnos: '<span class="spanColor">Lemnos</span> is a full-featured e-commerce platform with <span class="spanColor">authentication</span>, <span class="spanColor">advanced filters</span>, <span class="spanColor">real-time search</span>, and <span class="spanColor">infinite scroll</span>. Built with <span class="spanColor">React</span>, <span class="spanColor">Firebase</span>, and <span class="spanColor">Redux</span>, it simulates a real-world environment with an <span class="spanColor">admin panel</span> and global state management.',

        lembraMed:
            '<span class="spanColor">LembraMed</span> is an application designed to assist with <span class="spanColor">medication management</span>, featuring <span class="spanColor">device notifications</span>, <span class="spanColor">multi-account support</span>, and <span class="spanColor">dose history tracking</span>. Built as a <span class="spanColor">PWA</span>, it can be installed on the user\'s device like a native app. The project was built to solve a real-world problem, focusing on <span class="spanColor">usability</span> and accessibility.',

        lembraMedServer:
            '<span class="spanColor">LembraMed-Server</span> is the <span class="spanColor">backend API</span> powering the LembraMed app, handling <span class="spanColor">user authentication</span>, <span class="spanColor">data persistence</span>, and <span class="spanColor">multi-account management</span>. Built with <span class="spanColor">Node.js</span> and <span class="spanColor">PostgreSQL</span>, and containerized with <span class="spanColor">Docker</span>, it exposes a secure, scalable <span class="spanColor">REST API</span> consumed by the front-end.',

        alphaSpeed:
            '<span class="spanColor">Alpha Speed</span> is a car dealership platform with a <span class="spanColor">dynamic catalog</span> and <span class="spanColor">real-time filters</span>, providing fast navigation and a personalized experience with <span class="spanColor">persistent login</span> on the front-end.',

        landingPsychology:
            '<span class="spanColor">Psychology Landing Page</span> is a web application focused on <span class="spanColor">lead conversion</span>, featuring <span class="spanColor">WhatsApp integration</span> for automatic scheduling and <span class="spanColor">email form submission</span>. Built with <span class="spanColor">Next.js</span>, it prioritizes <span class="spanColor">performance</span>, <span class="spanColor">SEO</span>, and user experience.',
    },
    modal,
};
