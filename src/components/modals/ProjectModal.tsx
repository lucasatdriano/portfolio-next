'use client';

import Image from 'next/image';
import Link from 'next/link';
import { CodeAlt, Link as LinkIcon, X } from '@boxicons/react';
import * as Dialog from '@radix-ui/react-dialog';
import { useLanguage } from '@/src/hooks/useLanguage';
import { Technology } from '@/src/interfaces';
import ImageCarousel from '../ui/display/ImageCarousel';
import { useState } from 'react';

interface ProjectModalProps {
    isOpen: boolean;
    onClose: () => void;
    project: {
        title: string;
        images: string[];
        repoUrl: string;
        liveUrl: string;
        technologies: Technology[];
        modalIntroduction?: string;
        modalDevelopment?: string;
        modalArchitecture?: string;
        modalConclusion?: string;
        features?: string[];
        challenges?: string;
        learnings?: string;
    };
}

export default function ProjectModal({
    isOpen,
    onClose,
    project,
}: ProjectModalProps) {
    const [isAnimating, setIsAnimating] = useState(false);
    const { t } = useLanguage();

    const handleClose = () => {
        setIsAnimating(true);
        setTimeout(() => {
            onClose();
            setIsAnimating(false);
        }, 200);
    };

    const descriptionId = 'modal-description';

    return (
        <Dialog.Root open={isOpen} onOpenChange={handleClose}>
            <Dialog.Portal>
                <Dialog.Overlay className="modalOverlay" />
                <Dialog.Content
                    className="modalContent"
                    data-state={isOpen && !isAnimating ? 'open' : 'closed'}
                    aria-describedby={descriptionId}
                >
                    <Dialog.Close asChild>
                        <button className="modalClose">
                            <X className="closeIcon" />
                        </button>
                    </Dialog.Close>

                    <ImageCarousel
                        images={project.images}
                        title={project.title}
                    />

                    <div className="modalBody">
                        <div className="modalHeader">
                            <Dialog.Title className="modalTitle">
                                {project.title}
                            </Dialog.Title>
                        </div>

                        <Dialog.Description asChild>
                            <div className="modalDescription">
                                {project.modalIntroduction && (
                                    <div
                                        dangerouslySetInnerHTML={{
                                            __html: project.modalIntroduction,
                                        }}
                                    />
                                )}

                                {project.modalDevelopment && (
                                    <div
                                        dangerouslySetInnerHTML={{
                                            __html: project.modalDevelopment,
                                        }}
                                    />
                                )}

                                {project.modalArchitecture && (
                                    <div
                                        dangerouslySetInnerHTML={{
                                            __html: project.modalArchitecture,
                                        }}
                                    />
                                )}
                            </div>
                        </Dialog.Description>

                        {project.features && project.features.length > 0 && (
                            <div className="modalFeatures">
                                <h3 className="modalFeaturesTitle">
                                    {t('projects.modal.featuresTitle')}
                                </h3>
                                <ul className="featuresList">
                                    {project.features.map(
                                        (feature: string, index: number) => (
                                            <li
                                                key={index}
                                                dangerouslySetInnerHTML={{
                                                    __html: feature,
                                                }}
                                            />
                                        ),
                                    )}
                                </ul>
                            </div>
                        )}

                        {project.modalConclusion && (
                            <div className="modalDescription">
                                <div
                                    dangerouslySetInnerHTML={{
                                        __html: project.modalConclusion,
                                    }}
                                />
                            </div>
                        )}

                        {project.challenges && (
                            <div className="modalChallenges">
                                <h3 className="modalChallengesTitle">
                                    {t('projects.modal.challengesTitle')}
                                </h3>
                                <div
                                    dangerouslySetInnerHTML={{
                                        __html: project.challenges,
                                    }}
                                />
                            </div>
                        )}

                        {project.learnings && (
                            <div className="modalLearnings">
                                <h3 className="modalLearningsTitle">
                                    {t('projects.modal.learningsTitle')}
                                </h3>
                                <div
                                    dangerouslySetInnerHTML={{
                                        __html: project.learnings,
                                    }}
                                />
                            </div>
                        )}

                        <div className="modalTechnologies">
                            <h3 className="modalTechTitle">
                                {t('projects.technologies')}
                            </h3>
                            <div className="modalTechList">
                                {project.technologies.map((tech) => (
                                    <div
                                        key={tech.name}
                                        className="modalTechItem"
                                    >
                                        <Link
                                            href={tech.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="modalTechLink"
                                        >
                                            <Image
                                                src={tech.iconUrl}
                                                alt={tech.name}
                                                width={32}
                                                height={32}
                                                className="modalTechIcon"
                                            />
                                            <span className="modalTechName">
                                                {tech.name}
                                            </span>
                                        </Link>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="modalLinks">
                            <Link
                                href={project.repoUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="modalLinkButton"
                            >
                                <CodeAlt className="modalLinkIcon" />
                                {t('tooltips.viewRepo')}
                            </Link>
                            <Link
                                href={project.liveUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="modalLinkButton primary"
                            >
                                <LinkIcon className="modalLinkIcon" />
                                {t('tooltips.viewProject')}
                            </Link>
                        </div>
                    </div>
                </Dialog.Content>
            </Dialog.Portal>
        </Dialog.Root>
    );
}
