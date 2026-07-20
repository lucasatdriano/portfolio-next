'use client';

import Image from 'next/image';
import { useState } from 'react';
import { BiChevronLeft, BiChevronRight } from 'react-icons/bi';

interface ImageCarouselProps {
    images: string[];
    title: string;
}

export default function ImageCarousel({ images, title }: ImageCarouselProps) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [thumbnailStart, setThumbnailStart] = useState(0);

    const visibleThumbnails = images.slice(thumbnailStart, thumbnailStart + 3);

    const updateCarousel = (newIndex: number) => {
        setCurrentIndex(newIndex);

        if (images.length <= 3) {
            setThumbnailStart(0);
            return;
        }

        if (newIndex < thumbnailStart) {
            setThumbnailStart(newIndex);
        } else if (newIndex >= thumbnailStart + 3) {
            setThumbnailStart(newIndex - 2);
        }
    };

    const goToPrevious = () => {
        const newIndex =
            currentIndex === 0 ? images.length - 1 : currentIndex - 1;

        updateCarousel(newIndex);
    };

    const goToNext = () => {
        const newIndex =
            currentIndex === images.length - 1 ? 0 : currentIndex + 1;

        updateCarousel(newIndex);
    };

    const goToSlide = (index: number) => {
        updateCarousel(index);
    };

    if (!images || images.length === 0) {
        return null;
    }

    return (
        <div className="carouselContainer">
            <div className="carouselMain">
                <button
                    onClick={goToPrevious}
                    className="carouselButton prev"
                    aria-label="Previous image"
                >
                    <BiChevronLeft className="carouselIcon" />
                </button>

                <div className="carouselImageWrapper">
                    <Image
                        src={images[currentIndex]}
                        alt={`${title} - Image ${currentIndex + 1}`}
                        width={800}
                        height={450}
                        className="carouselImage"
                        priority
                    />
                </div>

                <button
                    onClick={goToNext}
                    className="carouselButton next"
                    aria-label="Next image"
                >
                    <BiChevronRight className="carouselIcon" />
                </button>
            </div>

            <div className="carouselThumbnailWrapper">
                <button className="thumbnailArrow" onClick={goToPrevious}>
                    <BiChevronLeft />
                </button>

                {images.length > 1 && (
                    <div className="carouselThumbnails">
                        {visibleThumbnails.map((image, index) => {
                            const realIndex = thumbnailStart + index;

                            return (
                                <button
                                    key={realIndex}
                                    onClick={() => goToSlide(realIndex)}
                                    className={`thumbnailButton ${
                                        realIndex === currentIndex
                                            ? 'active'
                                            : ''
                                    }`}
                                >
                                    <Image
                                        src={image}
                                        alt={`${title} thumbnail ${realIndex + 1}`}
                                        width={120}
                                        height={70}
                                        className="thumbnailImage"
                                    />
                                </button>
                            );
                        })}
                    </div>
                )}

                <button className="thumbnailArrow" onClick={goToNext}>
                    <BiChevronRight />
                </button>
            </div>
        </div>
    );
}
