import ContactSection from '@/src/components/sections/ContactSection';
import HeroSection from '@/src/components/sections/HeroSection';
import ProfileSection from '@/src/components/sections/ProfileSection';
import ProjectsSection from '@/src/components/sections/ProjectSection';

export default function HomePage() {
    return (
        <>
            <HeroSection />
            <ProfileSection />
            <ProjectsSection />
            <ContactSection />
        </>
    );
}
