import { modal } from './modal';

export const projects = {
    title: 'Projects',
    technologies: 'Technologies Used:',
    moreTechs: 'technologies',
    forDesktop: 'for desktop',
    cardDescriptions: {
        lemnos: '<span class="spanColor">Lemnos</span> is a tech e-commerce developed with <span class="spanColor">React</span> and <span class="spanColor">Vite</span>, with <span class="spanColor">Firebase authentication</span>. The project includes features such as <span class="spanColor">login</span>, <span class="spanColor">advanced product filters</span>, <span class="spanColor">search</span>, <span class="spanColor">infinite scroll</span> and <span class="spanColor">detailed product display</span>. It also has a <span class="spanColor">dark mode</span> and an <span class="spanColor">admin panel</span> to <span class="spanColor">manage products and users</span>. All styling is done with <span class="spanColor">SCSS</span>, and the application state is managed with <span class="spanColor">Redux</span>.',
        alphaSpeed:
            '<span class="spanColor">Alpha Speed</span> is a website for a vehicle dealership, featuring a <span class="spanColor">dynamic showcase</span>, interactive <span class="spanColor">search filters</span> and <span class="spanColor">local storage login</span>. The filter offers <span class="spanColor">real-time updates</span>, instantly displaying vehicles according to user preferences, and the login recognizes the user on future visits <span class="spanColor">without needing a database</span>.',
    },
    modal,
};
