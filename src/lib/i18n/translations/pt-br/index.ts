import { hero } from './hero';
import { profile } from './profile';
import { projects } from './projects';
import { contact } from './contact';
import { footer } from './footer';
import { tooltips } from './tooltips';
import { notFound } from './notFound';
import { TranslationKeys } from '../../types';

export const ptBr: TranslationKeys = {
    nav: {
        about: 'Sobre',
        projects: 'Projetos',
        contact: 'Contato',
    },
    header: {
        reloadPage: 'Recarregar página',
    },
    languages: {
        portuguese: 'Português',
        english: 'Inglês',
        spanish: 'Espanhol',
    },
    hero,
    profile,
    projects,
    contact,
    footer,
    tooltips,
    notFound,
};
