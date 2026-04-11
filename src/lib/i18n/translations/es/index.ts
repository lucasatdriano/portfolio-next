import { hero } from './hero';
import { profile } from './profile';
import { projects } from './projects';
import { contact } from './contact';
import { footer } from './footer';
import { tooltips } from './tooltips';
import { notFound } from './notFound';
import { TranslationKeys } from '../../types';

export const es: TranslationKeys = {
    nav: {
        about: 'Sobre',
        projects: 'Proyectos',
        contact: 'Contacto',
    },
    header: {
        reloadPage: 'Recargar página',
    },
    languages: {
        portuguese: 'Portugués',
        english: 'Inglés',
        spanish: 'Español',
    },
    hero,
    profile,
    projects,
    contact,
    footer,
    tooltips,
    notFound,
};
