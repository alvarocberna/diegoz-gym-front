"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareCaretLeft, faSquareCaretRight } from "@fortawesome/free-solid-svg-icons";

interface Slide {
	image: string;
	alt: string;
}

interface CarruselProps {
	slides: Slide[];
}

export function Carrusel({ slides }: CarruselProps) {
	const [currentSlide, setCurrentSlide] = useState(0);

	useEffect(() => {
		const interval = setInterval(() => {
			setCurrentSlide((prev) => (prev + 1) % slides.length);
		}, 2000);

		return () => clearInterval(interval);
	}, []);

	const goToPrevious = () => {
		setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
	};

	const goToNext = () => {
		setCurrentSlide((prev) => (prev + 1) % slides.length);
	};

	return (
		<div className="relative h-full w-full overflow-hidden" style={{ zIndex: 0 }}>
			<div
				className="flex h-full w-full transition-transform duration-700 ease-in-out"
				style={{ transform: `translateX(-${currentSlide * 100}%)` }}
			>
				{slides.map((slide, index) => (
					<div key={slide.image} className="relative h-full w-full shrink-0">
						<Image src={slide.image} alt={slide.alt} fill className="object-cover" priority={index === 0} />
						<div className="absolute inset-0 bg-black/20" />
					</div>
				))}
			</div>

			<div className="absolute bottom-4 left-1/2 z-20 flex -translate-x-1/2 items-center gap-2">
				{slides.map((_, index) => (
					<button
						key={index}
						type="button"
						onClick={() => setCurrentSlide(index)}
						aria-label={`Ir a seccion ${index + 1}`}
						className={`h-2.5 w-2.5 rounded-full transition ${
							currentSlide === index ? "bg-white" : "bg-white/40"
						}`}
					/>
				))}
			</div>

			<div className="absolute left-0 top-0 flex h-full w-full items-center justify-between">
				<button
					type="button"
					onClick={goToPrevious}
					className="ms-2 text-white"
					aria-label="Retroceder"
				>
					<FontAwesomeIcon
						icon={faSquareCaretLeft}
						className="text-zinc-100/80 transition hover:text-zinc-100"
						style={{ fontSize: 34 }}
					/>
				</button>
				<button type="button" onClick={goToNext} className="me-2 text-white" aria-label="Avanzar">
					<FontAwesomeIcon
						icon={faSquareCaretRight}
						className="text-zinc-100/80 transition hover:text-zinc-100"
						style={{ fontSize: 34 }}
					/>
				</button>
			</div>
		</div>
	);
}
