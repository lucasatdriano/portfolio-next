export type Language = 'pt-br' | 'en' | 'es';

export interface TranslationKeys {
    nav: {
        about: string;
        projects: string;
        contact: string;
    };
    header: {
        reloadPage: string;
    };
    languages: {
        portuguese: string;
        english: string;
        spanish: string;
    };
    hero: {
        title: string;
        subtitle: string;
        scrollDown: string;
    };
    profile: {
        title: string;
        skills: string;
        stackTitle: string;
        documentation: string;
        photoAlt: string;
        visit: string;
        text: {
            part1: string;
            part2: string;
        };
    };
    projects: {
        title: string;
        technologies: string;
        forDesktop: string;
        descriptions: {
            lemnos: string;
            alphaSpeed: string;
        };
    };
    contact: {
        title: string;
    };
    footer: {
        rights: string;
        made: string;
    };
    tooltips: {
        backToTop: string;
        downloadCV: string;
        viewRepo: string;
        viewProject: string;
        toggleTheme: string;
    };
    notFound: {
        title: string;
        message: string;
        backHome: string;
    };
}

export type Translations = Record<Language, TranslationKeys>;
