'use client';

import { useLanguage } from '@/src/hooks/useLanguage';
import { useThemeToggle } from '@/src/hooks/useThemeToggle';
import { BiMoon, BiSun } from 'react-icons/bi';

interface ToggleThemeProps {
    id: string;
}

export default function ToggleTheme({ id }: ToggleThemeProps) {
    const { isDark, toggleTheme } = useThemeToggle();
    const { t } = useLanguage();

    return (
        <label htmlFor={id} className="theme">
            <input
                type="checkbox"
                name="inputAlterTheme"
                id={id}
                className="themeToggle"
                checked={isDark}
                onChange={toggleTheme}
                aria-label={t('tooltips.toggleTheme')}
            />
            <BiSun className="iconSun" aria-hidden="true" />
            <BiMoon className="iconMoon" aria-hidden="true" />
        </label>
    );
}
