'use client';

import { useLanguage } from '@/src/hooks/useLanguage';

export default function Footer() {
    const { t } = useLanguage();
    const currentYear = new Date().getFullYear();

    return (
        <footer>
            <p className="footerText">
                © {currentYear}. {t('footer.rights')} {t('footer.made')}
                <span className="spanColor"> Lucas Adriano</span>.
            </p>
        </footer>
    );
}
