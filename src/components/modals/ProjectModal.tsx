'use client';

import Image from 'next/image';
import Link from 'next/link';
import { CodeAlt, Link as LinkIcon, X } from '@boxicons/react';
import * as Dialog from '@radix-ui/react-dialog';
import { useLanguage } from '@/src/hooks/useLanguage';
import { Technology } from '@/src/interfaces';

interface ProjectModalProps {
    isOpen: boolean;
    onClose: () => void;
    project: {
        title: string;
        image: string;
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
    const { t } = useLanguage();

    return (
        <Dialog.Root open={isOpen} onOpenChange={onClose}>
            <Dialog.Portal>
                <Dialog.Overlay className="modalOverlay" />
                <Dialog.Content className="modalContent">
                    <Dialog.Close asChild>
                        <button className="modalClose">
                            <X className="closeIcon" />
                        </button>
                    </Dialog.Close>

                    <div className="modalImage">
                        <Image
                            src={project.image}
                            alt={project.title}
                            width={800}
                            height={450}
                            className="modalProjectImage"
                        />
                    </div>

                    <div className="modalBody">
                        <div className="modalHeader">
                            <Dialog.Title className="modalTitle">
                                {project.title}
                            </Dialog.Title>
                        </div>

                        <div className="modalDescription">
                            {project.modalIntroduction && (
                                <p
                                    dangerouslySetInnerHTML={{
                                        __html: project.modalIntroduction,
                                    }}
                                />
                            )}

                            {project.modalDevelopment && (
                                <p
                                    dangerouslySetInnerHTML={{
                                        __html: project.modalDevelopment,
                                    }}
                                />
                            )}

                            {project.modalArchitecture && (
                                <p
                                    dangerouslySetInnerHTML={{
                                        __html: project.modalArchitecture,
                                    }}
                                />
                            )}
                        </div>

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

                        <div className="modalDescription">
                            {project.modalConclusion && (
                                <div className="modalConclusion">
                                    <p
                                        dangerouslySetInnerHTML={{
                                            __html: project.modalConclusion,
                                        }}
                                    />
                                </div>
                            )}
                        </div>

                        {project.challenges && (
                            <div className="modalChallenges">
                                <h3 className="modalChallengesTitle">
                                    {t('projects.modal.challengesTitle')}
                                </h3>
                                <p
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
                                <p
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
                                                src={tech.url}
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
