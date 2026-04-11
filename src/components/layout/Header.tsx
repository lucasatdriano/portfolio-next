'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import NavBarDesktop from './NavBarDesktop';
import NavBarMobile from './NavBarMobile';
import { useLanguage } from '@/src/hooks/useLanguage';

export default function Header() {
    const { t, currentLang } = useLanguage();
    const router = useRouter();

    const handleLogoClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        router.push(`/${currentLang}`);
        window.scrollTo({
            top: 0,
            behavior: 'instant',
        });
        setTimeout(() => {
            window.location.reload();
        }, 100);
    };

    return (
        <header>
            <div className="menu" role="navigation">
                <Link
                    href={`/${currentLang}`}
                    onClick={handleLogoClick}
                    className="logo"
                    title={t('header.reloadPage')}
                    aria-label={t('header.reloadPage')}
                />
                <NavBarDesktop />
                <NavBarMobile />
            </div>
        </header>
    );
}
