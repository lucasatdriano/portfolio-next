'use client';

import Image from 'next/image';
import { useState } from 'react';
import { ChevronLeft, ChevronRight } from '@boxicons/react';

interface ImageCarouselProps {
    images: string[];
    title: string;
}

export default function ImageCarousel({ images, title }: ImageCarouselProps) {
    const [currentIndex, setCurrentIndex] = useState(0);

    const goToPrevious = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? images.length - 1 : prevIndex - 1,
        );
    };

    const goToNext = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === images.length - 1 ? 0 : prevIndex + 1,
        );
    };

    const goToSlide = (index: number) => {
        setCurrentIndex(index);
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
                    <ChevronLeft className="carouselIcon" />
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
                    <ChevronRight className="carouselIcon" />
                </button>
            </div>

            {images.length > 1 && (
                <div className="carouselThumbnails">
                    {images.map((image, index) => (
                        <button
                            key={index}
                            onClick={() => goToSlide(index)}
                            className={`thumbnailButton ${index === currentIndex ? 'active' : ''}`}
                            aria-label={`Go to image ${index + 1}`}
                        >
                            <Image
                                src={image}
                                alt={`${title} thumbnail ${index + 1}`}
                                width={80}
                                height={45}
                                className="thumbnailImage"
                            />
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
}
