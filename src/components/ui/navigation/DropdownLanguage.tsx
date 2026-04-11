'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { Language } from '@/src/lib/i18n';
import { useLanguage } from '@/src/hooks/useLanguage';
import { ChevronDown } from '@boxicons/react';

interface DropdownLanguageProps {
    variant?: 'desktop' | 'mobile';
    onLanguageChange?: (langCode: Language) => void;
}

interface LanguageItem {
    code: Language;
    name: string;
    flag: string;
}

export default function DropdownLanguage({
    variant = 'desktop',
    onLanguageChange,
}: DropdownLanguageProps) {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);
    const { currentLang, changeLanguage, languages, t } = useLanguage();

    const getTranslatedLanguageName = (langCode: Language): string => {
        const languageMap: Record<Language, string> = {
            'pt-br': t('languages.portuguese'),
            en: t('languages.english'),
            es: t('languages.spanish'),
        };
        return languageMap[langCode];
    };

    const typedLanguages: LanguageItem[] = languages.map((lang) => ({
        ...lang,
        code: lang.code as Language,
    }));

    const currentLanguage =
        typedLanguages.find((lang) => lang.code === currentLang) ||
        typedLanguages[0];
    const currentLanguageTranslatedName = getTranslatedLanguageName(
        currentLanguage.code,
    );

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
                dropdownRef.current &&
                !dropdownRef.current.contains(event.target as Node)
            ) {
                setIsOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () =>
            document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    useEffect(() => {
        const handleEscKey = (event: KeyboardEvent) => {
            if (event.key === 'Escape' && isOpen) {
                setIsOpen(false);
            }
        };

        document.addEventListener('keydown', handleEscKey);
        return () => document.removeEventListener('keydown', handleEscKey);
    }, [isOpen]);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const handleLanguageSelect = (langCode: Language) => {
        changeLanguage(langCode);
        setIsOpen(false);

        if (onLanguageChange) {
            onLanguageChange(langCode);
        }
    };

    return (
        <div className={`languageContainer ${variant}`} ref={dropdownRef}>
            <button
                type="button"
                className={`btnLang ${isOpen ? 'active' : ''}`}
                onClick={toggleDropdown}
                aria-label={
                    currentLanguageTranslatedName || 'Selecionar idioma'
                }
                aria-expanded={isOpen}
            >
                <Image
                    src={currentLanguage.flag}
                    alt={`Bandeira do ${currentLanguageTranslatedName}`}
                    width={32}
                    height={24}
                    className="imgFlag"
                />
                <p className="language">{currentLanguageTranslatedName}</p>
                <ChevronDown className="arrowLang" aria-hidden="true" />
            </button>

            <ul className={`optionsLang ${isOpen ? 'open' : ''}`}>
                {typedLanguages.map((lang) => (
                    <li
                        key={lang.code}
                        className={`langs ${lang.code === currentLang ? 'active' : ''}`}
                        onClick={() => handleLanguageSelect(lang.code)}
                    >
                        <div className="langLink">
                            <Image
                                src={lang.flag}
                                alt={`Bandeira do ${getTranslatedLanguageName(lang.code)}`}
                                width={24}
                                height={16}
                                className="imgFlag"
                            />
                            <p className="language">
                                {getTranslatedLanguageName(lang.code)}
                            </p>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}
