'use client';

import { setCookie } from 'cookies-next';
import { useState, useEffect } from 'react';

export function useThemeToggle() {
    const [isDark, setIsDark] = useState(() => {
        if (typeof window !== 'undefined') {
            return document.documentElement.classList.contains('dark');
        }
        return true;
    });

    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    const toggleTheme = () => {
        const newIsDark = !isDark;
        setIsDark(newIsDark);

        const newTheme = newIsDark ? 'dark' : 'light';

        setCookie('theme', newTheme, { path: '/' });

        if (newIsDark) {
            document.documentElement.classList.remove('light');
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
            document.documentElement.classList.add('light');
        }
    };

    return { isDark, toggleTheme, mounted };
}
