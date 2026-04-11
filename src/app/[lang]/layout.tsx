import Header from '@/src/components/layout/Header';
import Footer from '@/src/components/layout/Footer';
import ButtonToTop from '@/src/components/ui/navigation/ButtonToTop';

export default function LangLayout({
    children,
}: {
    children: React.ReactNode;
    params: { lang: string };
}) {
    return (
        <>
            <Header />
            <main>
                <ButtonToTop />
                {children}
            </main>
            <Footer />
        </>
    );
}
