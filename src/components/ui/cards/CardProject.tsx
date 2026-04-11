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
}

export default function CardProject({
    title,
    image,
    description,
    repoUrl,
    liveUrl,
    technologies,
}: CardProjectProps) {
    const { t } = useLanguage();

    return (
        <article className="projectContainer">
            <div className="contentProject">
                <h3 className="titleProject">{title}</h3>
                <Link
                    href={liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={t('tooltips.viewProject')}
                    className="linkImage"
                >
                    <Image
                        src={image}
                        alt={`${title} ${t('projects.forDesktop')}`}
                        width={800}
                        height={450}
                        className="imageProject"
                        priority={false}
                    />
                </Link>
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
                        <h4 className="stacks">{t('projects.technologies')}</h4>
                        <div className="stackDetails">
                            {technologies.map((tech) => (
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
                                        />
                                    </Link>
                                </ToolTip>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </article>
    );
}
