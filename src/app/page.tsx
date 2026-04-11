'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function Home() {
    const router = useRouter();

    const getLanguageData = () => {
        const browserLang = navigator.language || navigator.languages[0];

        if (browserLang.startsWith('en')) {
            return {
                targetLang: 'en',
                message: 'Detecting language...',
                redirect: 'Redirecting...',
            };
        } else if (browserLang.startsWith('es')) {
            return {
                targetLang: 'es',
                message: 'Detectando idioma...',
                redirect: 'Redirecionando...',
            };
        } else if (browserLang.startsWith('pt')) {
            return {
                targetLang: 'pt-br',
                message: 'Detectando idioma...',
                redirect: 'Redirecionando...',
            };
        } else {
            return {
                targetLang: 'en',
                message: 'Detecting language...',
                redirect: 'Redirecting...',
            };
        }
    };

    const { targetLang, message, redirect } = getLanguageData();

    useEffect(() => {
        const timer = setTimeout(() => {
            router.push(`/${targetLang}`);
        }, 1500);

        return () => clearTimeout(timer);
    }, [router, targetLang]);

    return (
        <div className="loadingContainer">
            <div className="logoContainer">
                <h1 className="logo"></h1>
            </div>
            <div className="loadingContent">
                <h2 className="loadingMessage">{message}</h2>

                <div className="loadingDotsContainer">
                    <div className="loadingDots"></div>
                    <div className="loadingDots"></div>
                    <div className="loadingDots"></div>
                </div>

                <p className="loadingRedirectText">{redirect}</p>
            </div>
        </div>
    );
}
