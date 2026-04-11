import { hero } from './hero';
import { profile } from './profile';
import { projects } from './projects';
import { contact } from './contact';
import { footer } from './footer';
import { tooltips } from './tooltips';
import { notFound } from './notFound';
import { TranslationKeys } from '../../types';

export const en: TranslationKeys = {
    nav: {
        about: 'About',
        projects: 'Projects',
        contact: 'Contact',
    },
    header: {
        reloadPage: 'Reload page',
    },
    languages: {
        portuguese: 'Portuguese',
        english: 'English',
        spanish: 'Spanish',
    },
    hero,
    profile,
    projects,
    contact,
    footer,
    tooltips,
    notFound,
};
