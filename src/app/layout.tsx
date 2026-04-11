import type { Metadata } from 'next';
import { Fira_Code, Outfit, Rubik } from 'next/font/google';
import './globals.scss';
import { cookies } from 'next/headers';
import GlowCursor from '../components/ui/display/GlowCursor';

const firaCode = Fira_Code({
    variable: '--font-fira-code',
    subsets: ['latin'],
    weight: ['300', '400', '500', '600', '700'],
    display: 'swap',
});

const outfit = Outfit({
    variable: '--font-outfit',
    subsets: ['latin'],
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
    display: 'swap',
});

const rubik = Rubik({
    variable: '--font-rubik',
    subsets: ['latin'],
    weight: ['300', '400', '500', '600', '700', '800', '900'],
    display: 'swap',
});

export const metadata: Metadata = {
    title: 'Lucas Adriano',
    description:
        'Portfólio de Lucas Adriano, desenvolvedor front-end com experiência em HTML, CSS, JavaScript e React.',
    authors: [{ name: 'Lucas Adriano' }],
    keywords: 'desenvolvedor front-end, React, TypeScript, portfolio',
    icons: {
        icon: '/images/favicon/faviconCode.png',
    },
};

export default async function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const cookieStore = await cookies();
    const theme = cookieStore.get('theme')?.value || 'dark';

    return (
        <html
            lang="pt-BR"
            className={`${firaCode.variable} ${outfit.variable} ${rubik.variable} ${theme}`}
            suppressHydrationWarning
        >
            <body suppressHydrationWarning>
                {' '}
                <GlowCursor />
                {children}
            </body>
        </html>
    );
}
