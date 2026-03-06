"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faSquareCaretRight, faSquareCaretLeft } from "@fortawesome/free-solid-svg-icons";

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

export function Portada() {
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    const goToPrevious = () => {
        setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    };

    const goToNext = () => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
    };

    return (
        <div className="h-screen w-full overflow-hidden relative mb-40" style={{ zIndex: 0 }}>

            {/* SLIDE */}
            <div
                className="flex h-full w-full transition-transform duration-700 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
                {/* {slides.map((slide, index) => ( */}
                    <div className="relative h-screen w-full shrink-0">
                        <Image src='/media/img_goku_portada.png' alt='alt' fill className="object-cover" priority />
                        <div className="absolute inset-0 bg-black/70"/>
                        <div className="absolute left-0 top-0 w-full h-full md:w-1/2 flex">
                            <h2 className="text-white text-2xl sm:text-4xl md:text-6xl mx-auto md:ms-[10%] my-auto w-[90%]"
                            style={{
                                fontFamily: 'sans-serif',
                                fontWeight: 800,
                                textTransform: 'uppercase',
                                letterSpacing: '3px',
                            }}>
                                Centro de entrenamiento Diegoz Gym
                            </h2>
                        </div>
                    </div>
                    <div className="relative h-screen w-full shrink-0">
                        <Image src='/media/img_broly_portada.png' alt='alt' fill className="object-cover" />
                        <div className="absolute inset-0 bg-black/70" />
                        <div className="absolute right-0 top-0 w-full h-full md:w-[40%] flex">
                            <h2 className="text-white text-2xl sm:text-4xl md:text-6xl mx-auto md:me-[10%] my-auto w-[90%]"
                            style={{
                                fontFamily: 'sans-serif',
                                fontWeight: 800,
                                textTransform: 'uppercase',
                                letterSpacing: '3px',
                            }}>
                                Donde entrena Gokú
                            </h2>
                        </div>
                    </div>
                {/* ))} */}
            </div>

            {/* PUNTOS */}
            <div className="absolute bottom-6 left-1/2 z-20 flex -translate-x-1/2 items-center gap-3">
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
            </div>

            {/* FLECHAS */}
            <div className="absolute w-full h-screen top-0 left-0 flex items-center justify-between gap-3">
                <button
                    type="button"
                    onClick={goToPrevious}
                    className=" text-white ms-1"
                    aria-label="Retroceder"
                >
                    <FontAwesomeIcon icon={faSquareCaretLeft} className="text-zinc-900 hover:text-zinc-700 transition" 
                    style={{fontSize: 40}}>
                    </FontAwesomeIcon>
                </button>
                <button
                    type="button"
                    onClick={goToNext}
                    className=" text-white me-1"
                    aria-label="Retroceder"
                >
                    <FontAwesomeIcon icon={faSquareCaretRight} className="text-zinc-900 hover:text-zinc-700 transition" 
                    style={{fontSize: 40}}>
                    </FontAwesomeIcon>
                </button>
            </div>
        </div>
    );
}