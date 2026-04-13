'use client';

import { projects } from '@/src/data';
import CardProject from '../ui/cards/CardProject';
import { useLanguage } from '@/src/hooks/useLanguage';
import { useState } from 'react';
import { Project } from '@/src/interfaces';
import ProjectModal from '../modals/ProjectModal';

export default function ProjectsSection() {
    const { t } = useLanguage();
    const [selectedProject, setSelectedProject] = useState<Project | null>(
        null,
    );
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = (project: Project) => {
        setSelectedProject(project);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedProject(null);
    };

    const getFeatures = (projectId: string): string[] => {
        console.log('Buscando:', `projects.modal.features.${projectId}`);

        const features = t(`projects.modal.features.${projectId}`, {
            returnObjects: true,
        });

        console.log('Features encontradas:', features);
        return Array.isArray(features) ? features : [];
    };

    return (
        <section className="projects" id="projectsContainer">
            <h2 className="title">{t('projects.title')}</h2>
            {projects.map((project) => (
                <CardProject
                    key={project.id}
                    title={project.title}
                    image={project.images[0]}
                    description={t(`projects.cardDescriptions.${project.id}`)}
                    repoUrl={project.repoUrl}
                    liveUrl={project.liveUrl}
                    technologies={project.technologies}
                    onCardClick={() => openModal(project)}
                />
            ))}

            {selectedProject && (
                <ProjectModal
                    isOpen={isModalOpen}
                    onClose={closeModal}
                    project={{
                        ...selectedProject,
                        images: selectedProject.images,
                        modalIntroduction: t(
                            `projects.modal.fullDescription.${selectedProject.id}.introduction`,
                        ),
                        modalDevelopment: t(
                            `projects.modal.fullDescription.${selectedProject.id}.development`,
                        ),
                        modalArchitecture: t(
                            `projects.modal.fullDescription.${selectedProject.id}.architecture`,
                        ),
                        modalConclusion: t(
                            `projects.modal.fullDescription.${selectedProject.id}.conclusion`,
                        ),
                        features: getFeatures(selectedProject.id),
                        challenges: t(
                            `projects.modal.challenges.${selectedProject.id}`,
                        ),
                        learnings: t(
                            `projects.modal.learnings.${selectedProject.id}`,
                        ),
                    }}
                />
            )}
        </section>
    );
}
