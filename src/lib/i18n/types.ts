export type Language = 'pt-br' | 'en' | 'es';

type ProjectKey = 'lemnos' | 'alphaSpeed' | 'landingPsychology' | 'lembraMed';
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
            part3: string;
            part4: string;
            part5: string;
        };
    };
    projects: {
        title: string;
        technologies: string;
        forDesktop: string;
        titleProject: Record<ProjectKey, string>;
        cardDescriptions: Record<ProjectKey, string>;
        modal: {
            featuresTitle: string;
            challengesTitle: string;
            learningsTitle: string;
            fullDescription: Record<
                ProjectKey,
                {
                    introduction: string;
                    development: string;
                    architecture: string;
                    conclusion: string;
                }
            >;
            features: Record<ProjectKey, string[]>;
            challenges: Record<ProjectKey, string>;
            learnings: Record<ProjectKey, string>;
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
