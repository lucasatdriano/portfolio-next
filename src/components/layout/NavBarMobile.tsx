'use client';

import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';
import { useLanguage } from '@/src/hooks/useLanguage';
import DropdownLanguage from '../ui/navigation/DropdownLanguage';
import ToggleTheme from './ToggleTheme';

export default function NavBarMobile() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { t } = useLanguage();
    const menuRef = useRef<HTMLDivElement>(null);
    const btnRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
                menuRef.current &&
                !menuRef.current.contains(event.target as Node) &&
                btnRef.current &&
                !btnRef.current.contains(event.target as Node)
            ) {
                setIsMenuOpen(false);
            }
        };

        const handleEscKey = (event: KeyboardEvent) => {
            if (event.key === 'Escape' && isMenuOpen) {
                setIsMenuOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        document.addEventListener('keydown', handleEscKey);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
            document.removeEventListener('keydown', handleEscKey);
        };
    }, [isMenuOpen]);

    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }

        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isMenuOpen]);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const handleLinkClick = () => {
        setIsMenuOpen(false);
    };

    return (
        <nav className="menuNavMobile">
            <ToggleTheme id="inputThemeMobile" />
            <div
                className={`navMobile ${isMenuOpen ? 'visible' : ''}`}
                ref={menuRef}
            >
                <i
                    className="menuIcon"
                    id="btnMenuMob"
                    onClick={toggleMenu}
                    aria-label={isMenuOpen ? 'Fechar Menu' : 'Abrir Menu'}
                    aria-expanded={isMenuOpen}
                    ref={btnRef}
                ></i>

                <ul className="navContainer">
                    <li className="navItem">
                        <Link
                            href="#aboutContainer"
                            className="link linkMobile"
                            onClick={handleLinkClick}
                        >
                            {t('nav.about')}
                        </Link>
                    </li>
                    <li className="navItem">
                        <Link
                            href="#projectsContainer"
                            className="link linkMobile"
                            onClick={handleLinkClick}
                        >
                            {t('nav.projects')}
                        </Link>
                    </li>
                    <li className="navItem">
                        <Link
                            href="#contactsContainer"
                            className="link linkMobile"
                            onClick={handleLinkClick}
                        >
                            {t('nav.contact')}
                        </Link>
                    </li>
                    <li className="languageMenuItem">
                        <DropdownLanguage variant="mobile" />
                    </li>
                </ul>
            </div>
        </nav>
    );
}
