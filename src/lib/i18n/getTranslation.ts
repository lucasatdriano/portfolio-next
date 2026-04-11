import { en } from './translations/en';
import { es } from './translations/es';
import { ptBr } from './translations/pt-br';
import type { Language, Translations } from './types';

const translations: Translations = {
    'pt-br': ptBr,
    en: en,
    es: es,
};

export function getTranslation(lang: Language, path: string): string {
    const keys = path.split('.');
    let result: unknown = translations[lang];

    for (const key of keys) {
        if (result && typeof result === 'object' && key in result) {
            result = (result as Record<string, unknown>)[key];
        } else {
            console.warn(`Translation not found: ${path}`);
            return path;
        }
    }

    return typeof result === 'string' ? result : path;
}
