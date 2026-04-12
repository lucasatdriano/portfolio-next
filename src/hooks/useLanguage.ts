'use client';

import { useCallback, useMemo } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import {
    defaultLanguage,
    getTranslation,
    Language,
    languages,
} from '../lib/i18n';

export function useLanguage() {
    const router = useRouter();
    const pathname = usePathname();

    const currentLang = useMemo((): Language => {
        const segments = pathname.split('/');
        const langFromUrl = segments[1] as Language;

        if (langFromUrl && languages[langFromUrl]) {
            return langFromUrl;
        }
        return defaultLanguage;
    }, [pathname]);

    const changeLanguage = useCallback(
        (newLang: Language) => {
            if (newLang === currentLang) return;

            const segments = pathname.split('/');
            const hasValidLang =
                segments[1] && languages[segments[1] as Language];

            let newPath: string;
            if (hasValidLang) {
                segments[1] = newLang;
                newPath = segments.join('/') || '/';
            } else {
                newPath = `/${newLang}${pathname === '/' ? '' : pathname}`;
            }

            newPath = newPath.replace(/\/$/, '') || '/';
            router.push(newPath);
        },
        [currentLang, pathname, router],
    );

    // 🔥 SOLUÇÃO: Função com overloads
    function t(path: string): string;
    function t(path: string, options: { returnObjects: true }): unknown;
    function t(path: string, options?: { returnObjects?: boolean }): unknown {
        const translation = getTranslation(currentLang, path);

        if (options?.returnObjects) {
            return translation;
        }

        return typeof translation === 'string' ? translation : '';
    }

    return {
        currentLang,
        changeLanguage,
        t,
        languages: Object.entries(languages).map(([code, data]) => ({
            code: code as Language,
            name: data.name,
            flag: data.flag,
        })),
    };
}
