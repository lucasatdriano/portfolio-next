import { Language } from './types';

export const languages = {
    'pt-br': {
        name: 'Português',
        flag: '/images/decorationsImages/brazil.png',
    },
    en: {
        name: 'Inglês',
        flag: '/images/decorationsImages/usa.png',
    },
    es: {
        name: 'Espanhol',
        flag: '/images/decorationsImages/spain.png',
    },
} as const;

export const defaultLanguage: Language = 'pt-br';
