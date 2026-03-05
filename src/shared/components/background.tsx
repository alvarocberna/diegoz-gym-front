"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const slides = [
    {
        image: "/media/img_portada1.png",
        alt: "Seccion 1",
    },
    {
        image: "/media/img_portada2.png",
        alt: "Seccion 2",
    },
];

export function Background() {
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    const goToPrevious = () => {
        setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    };

    const goToNext = () => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
    };

    return (
        <div className="fixed top-0 left-0 h-screen w-full overflow-hidden" style={{ zIndex: 0 }}>
            <div
                className="flex h-full w-full transition-transform duration-700 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
                {slides.map((slide, index) => (
                    <div key={index} className="relative h-screen w-full shrink-0">
                        <Image src={slide.image} alt={slide.alt} fill className="object-cover" priority={index === 0} />
                        <div className="absolute inset-0 bg-black/70" />
                    </div>
                ))}
            </div>

            <div className="absolute bottom-6 left-1/2 z-20 flex -translate-x-1/2 items-center gap-3">
                <button
                    type="button"
                    onClick={goToPrevious}
                    className="rounded-full border border-white/40 bg-black/40 px-3 py-2 text-sm text-white backdrop-blur-sm transition hover:bg-black/70"
                    aria-label="Retroceder"
                >
                    Anterior
                </button>

                <div className="flex items-center gap-2">
                    {slides.map((_, index) => (
                        <button
                            key={index}
                            type="button"
                            onClick={() => setCurrentSlide(index)}
                            aria-label={`Ir a seccion ${index + 1}`}
                            className={`h-3 w-3 rounded-full transition ${
                                currentSlide === index ? "bg-white" : "bg-white/40"
                            }`}
                        />
                    ))}
                </div>

                <button
                    type="button"
                    onClick={goToNext}
                    className="rounded-full border border-white/40 bg-black/40 px-3 py-2 text-sm text-white backdrop-blur-sm transition hover:bg-black/70"
                    aria-label="Avanzar"
                >
                    Siguiente
                </button>
            </div>
        </div>
    );
}