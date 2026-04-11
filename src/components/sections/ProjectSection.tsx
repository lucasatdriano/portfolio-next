'use client';

import { projects } from '@/src/data';
import CardProject from '../ui/cards/CardProject';
import { useLanguage } from '@/src/hooks/useLanguage';

export default function ProjectsSection() {
    const { t } = useLanguage();

    return (
        <section className="projects" id="projectsContainer">
            <h2 className="title">{t('projects.title')}</h2>
            {projects.map((project) => (
                <CardProject
                    key={project.id}
                    title={project.title}
                    image={project.image}
                    description={t(`projects.descriptions.${project.id}`)}
                    repoUrl={project.repoUrl}
                    liveUrl={project.liveUrl}
                    technologies={project.technologies}
                />
            ))}
        </section>
    );
}
