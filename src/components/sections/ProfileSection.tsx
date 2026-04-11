'use client';

import Image from 'next/image';
import ToolTip from '../ui/display/ToolTip';
import { useLanguage } from '@/src/hooks/useLanguage';
import { skills } from '@/src/data';
import Link from 'next/link';

export default function ProfileSection() {
    const { t } = useLanguage();

    return (
        <section className="profileContainer" id="aboutContainer">
            <div className="about">
                <h2
                    className="title aboutMe"
                    dangerouslySetInnerHTML={{
                        __html: t('profile.title'),
                    }}
                ></h2>
                <div className="textContainer">
                    <p
                        className="textAboutMe"
                        dangerouslySetInnerHTML={{
                            __html: t('profile.text.part1'),
                        }}
                    />
                    <br />
                    <p
                        className="textAboutMe"
                        dangerouslySetInnerHTML={{
                            __html: t('profile.text.part2'),
                        }}
                    />
                </div>
                <div className="skills">
                    <h2 className="title">{t('profile.skills')}</h2>
                    <h3 className="subTitle">{t('profile.stackTitle')}</h3>
                    <div className="stackContainer">
                        {skills.map((skill) => (
                            <ToolTip key={skill.name} text={skill.name}>
                                <Link
                                    href={skill.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    title={`${t('profile.documentation')} ${skill.name}`}
                                >
                                    <Image
                                        src={skill.iconUrl}
                                        alt={skill.name}
                                        className="skillImage"
                                        width={24}
                                        height={24}
                                    />
                                </Link>
                            </ToolTip>
                        ))}
                    </div>
                </div>
                <div className="photoContainer">
                    <Image
                        src="/images/test_portrait_image.png"
                        alt={t('profile.photoAlt')}
                        width={400}
                        height={400}
                        priority
                        className="profileImage"
                    />
                </div>
            </div>
        </section>
    );
}
