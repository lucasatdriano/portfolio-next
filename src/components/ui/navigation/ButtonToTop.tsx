'use client';

import { useLanguage } from '@/src/hooks/useLanguage';
import { ArrowUpStroke } from '@boxicons/react';
import { useEffect, useState } from 'react';

export default function ButtonToTop() {
    const [isVisible, setIsVisible] = useState(false);
    const { t } = useLanguage();

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', toggleVisibility);
        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
        });
    };

    return (
        <div
            className={`tooltip buttonContainer ${isVisible ? 'visible' : 'hidden'}`}
            id="toTopBtn"
        >
            <button
                type="button"
                onClick={scrollToTop}
                className="buttonToTop"
                aria-label={t('tooltips.backToTop')}
            >
                <ArrowUpStroke className="buttonToTopIcon" />
            </button>
            <span className="tooltipText" role="tooltip">
                {t('tooltips.backToTop')}
            </span>
        </div>
    );
}
