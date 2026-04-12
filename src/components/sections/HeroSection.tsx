'use client';

import {
    ChevronsDown,
    Circle,
    FileDetail,
    Github,
    LinkedinSquare,
} from '@boxicons/react';
import Wave from '../layout/Wave';
import ToolTip from '../ui/display/ToolTip';
import { useLanguage } from '@/src/hooks/useLanguage';
import TypeWriter from '../ui/display/TypeWriter';
import Link from 'next/link';

export default function HeroSection() {
    const { t } = useLanguage();

    return (
        <section className="hero animateScroll" role="banner">
            <div className="containerHero">
                <div className="heroText">
                    <h1 className="heroTitle">
                        {t('hero.title')} <br />
                        <TypeWriter
                            text={'Lucas Adriano.'}
                            delay={150}
                            className="titleSpan"
                        />
                    </h1>
                    <h2 className="heroSubTitle">{t('hero.subtitle')}</h2>
                </div>
                <div className="heroDetails">
                    <hr className="heroLine" />
                    <div className="circlesContainer">
                        <Circle className="iconCircle" pack="filled" />
                        <Circle className="iconCircle" pack="filled" />
                        <Circle className="iconCircle" pack="filled" />
                    </div>

                    <div className="linksContainer">
                        <ToolTip text={t('tooltips.downloadCV')}>
                            <Link
                                href="/docs/curriculo.pdf"
                                download
                                title={t('tooltips.downloadCV')}
                            >
                                <FileDetail
                                    className="iconLink"
                                    pack="filled"
                                />
                            </Link>
                        </ToolTip>

                        <ToolTip text="GitHub">
                            <Link
                                href="https://github.com/lucasatdriano"
                                target="_blank"
                                rel="noopener noreferrer"
                                title="GitHub"
                            >
                                <Github className="iconLink" pack="brands" />
                            </Link>
                        </ToolTip>

                        <ToolTip text="LinkedIn">
                            <Link
                                href="https://www.linkedin.com/in/lucasadrianodev"
                                target="_blank"
                                rel="noopener noreferrer"
                                title="LinkedIn"
                            >
                                <LinkedinSquare
                                    className="iconLink"
                                    pack="brands"
                                />
                            </Link>
                        </ToolTip>
                    </div>

                    <div className="circlesContainer">
                        <Circle className="iconCircle" pack="filled" />
                        <Circle className="iconCircle" pack="filled" />
                        <Circle className="iconCircle" pack="filled" />
                    </div>
                    <hr className="heroLine" />
                </div>
            </div>
            <div className="scroll">
                <span className="hidden">
                    {t('hero.scrollDown') || 'Descer a página'}
                </span>
                <p className="scrollText" aria-hidden="true">
                    S
                </p>
                <p className="scrollText" aria-hidden="true">
                    C
                </p>
                <p className="scrollText" aria-hidden="true">
                    R
                </p>
                <p className="scrollText" aria-hidden="true">
                    O
                </p>
                <p className="scrollText" aria-hidden="true">
                    L
                </p>
                <p className="scrollText" aria-hidden="true">
                    L
                </p>
                <ChevronsDown className="scrollIcon" aria-hidden="true" />
            </div>
            <Wave />
        </section>
    );
}
