'use client';

import Image from 'next/image';
import Link from 'next/link';
import ToolTip from '../display/ToolTip';
import { CodeAlt, Link as LinkIcon } from '@boxicons/react';
import { useLanguage } from '@/src/hooks/useLanguage';
import { Technology } from '@/src/interfaces';

interface CardProjectProps {
    title: string;
    image: string;
    description: string;
    repoUrl: string;
    liveUrl: string;
    technologies: Technology[];
    onCardClick?: () => void;
}

export default function CardProject({
    title,
    image,
    description,
    repoUrl,
    liveUrl,
    technologies,
    onCardClick,
}: CardProjectProps) {
    const { t } = useLanguage();

    const VISIBLE_ICONS = 5;
    const visibleTechs = technologies.slice(0, VISIBLE_ICONS);
    const hiddenCount = technologies.length - VISIBLE_ICONS;

    // Função para lidar com clique no card inteiro
    const handleCardClick = (e: React.MouseEvent) => {
        // Se o clique foi em um link ou dentro de um link, não abre o modal
        const target = e.target as HTMLElement;
        if (target.closest('a') || target.closest('button')) {
            return;
        }
        onCardClick?.();
    };

    return (
        <article
            className="projectContainer"
            onClick={handleCardClick}
            style={{ cursor: 'pointer' }}
        >
            <div className="contentProject">
                <h3 className="titleProject">{title}</h3>

                <div className="linkImage">
                    <Image
                        src={image}
                        alt={`${title} ${t('projects.forDesktop')}`}
                        width={800}
                        height={450}
                        className="imageProject"
                        loading="lazy"
                    />
                </div>

                <p
                    className="descriptionProject"
                    dangerouslySetInnerHTML={{ __html: description }}
                />

                <div className="linksProject">
                    <ToolTip text={t('tooltips.viewRepo')}>
                        <Link
                            href={repoUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            title={t('tooltips.viewRepo')}
                        >
                            <CodeAlt className="iconProject" />
                        </Link>
                    </ToolTip>
                    <ToolTip text={t('tooltips.viewProject')}>
                        <Link
                            href={liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            title={t('tooltips.viewProject')}
                        >
                            <LinkIcon className="iconProject" />
                        </Link>
                    </ToolTip>
                </div>

                <div className="stackContainer">
                    <div className="stackContent">
                        <h4 className="stackTitle">
                            {t('projects.technologies')}
                        </h4>
                        <div className="stackDetails">
                            {visibleTechs.map((tech) => (
                                <ToolTip key={tech.name} text={tech.name}>
                                    <Link
                                        href={tech.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        title={`${t('profile.documentation')} ${tech.name}`}
                                        className="techLink"
                                    >
                                        <Image
                                            src={tech.url}
                                            alt={tech.name}
                                            className="techIcon"
                                            width={24}
                                            height={24}
                                            loading="lazy"
                                        />
                                    </Link>
                                </ToolTip>
                            ))}

                            {hiddenCount > 0 && (
                                <ToolTip
                                    text={`+ ${hiddenCount} ${t('projects.moreTechs')}`}
                                >
                                    <div className="moreTechs">
                                        +{hiddenCount}
                                    </div>
                                </ToolTip>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </article>
    );
}
