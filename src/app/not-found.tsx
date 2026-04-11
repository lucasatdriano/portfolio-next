'use client';

import Link from 'next/link';
import { useLanguage } from '../hooks/useLanguage';
import { Home } from '@boxicons/react';

export default function NotFound() {
    const { t, currentLang } = useLanguage();

    return (
        <div className="notFoundContainer">
            <div className="notFoundCodeWrapper">
                <span className="notFoundCodeBracket">{'<'}</span>
                <span className="notFoundCodeNumber">404</span>
                <span className="notFoundCodeBracket">{'/>'}</span>
            </div>

            <h1 className="notFoundTitle">{t('notFound.title')}</h1>

            <p className="notFoundMessage">{t('notFound.message')}</p>

            <div className="notFoundActions">
                <Link href={`/${currentLang}`} className="notFoundButton">
                    <Home />
                    {t('notFound.backHome')}
                </Link>
            </div>
        </div>
    );
}
