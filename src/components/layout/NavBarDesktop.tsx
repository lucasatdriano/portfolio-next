'use client';

import ToggleTheme from './ToggleTheme';
import DropdownLanguage from '../ui/navigation/DropdownLanguage';
import { useLanguage } from '@/src/hooks/useLanguage';
import Link from 'next/link';

export default function NavBarDesktop() {
    const { t } = useLanguage();

    return (
        <nav className="menuNavDesktop">
            <ul className="navDesktop">
                <li className="navItem">
                    <Link
                        href="#aboutContainer"
                        className="link"
                        title={t('nav.about')}
                    >
                        {t('nav.about')}
                    </Link>
                </li>
                <li className="navItem">
                    <Link
                        href="#projectsContainer"
                        className="link"
                        title={t('nav.projects')}
                    >
                        {t('nav.projects')}
                    </Link>
                </li>
                <li className="navItem">
                    <Link
                        href="#contactsContainer"
                        className="link"
                        title={t('nav.contact')}
                    >
                        {t('nav.contact')}
                    </Link>
                </li>
            </ul>
            <div className="settings">
                <ToggleTheme id="inputThemeDesktop" />
                <DropdownLanguage variant="desktop" />
            </div>
        </nav>
    );
}
