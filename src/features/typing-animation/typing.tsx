"use client";

import { useEffect, useState } from "react";

type TypingProps = {
	text?: string;
	typingSpeedMs?: number;
};

// const DEFAULT_TEXT = "Entrena tu mejor version en Diegoz Gym.";
const DEFAULT_TEXT = `
    EN DIEGOZ GYM DESPERTARÁS TU FUERZA SAIJAJIN
    CONVIRTIENDOTE EN TODO UN GUERRERO,
    NO ESPERES MÁS Y DESPIERTA TU VERDADERO PODER
`;
const RESET_DELAY_MS = 5000;

export function Typing({ text = DEFAULT_TEXT, typingSpeedMs = 50 }: TypingProps) {
	const [visibleText, setVisibleText] = useState("");
	const [index, setIndex] = useState(0);

	useEffect(() => {
		let timeoutId: ReturnType<typeof setTimeout>;

		if (index < text.length) {
			timeoutId = setTimeout(() => {
				setVisibleText(text.slice(0, index + 1));
				setIndex((prev) => prev + 1);
			}, typingSpeedMs);
		} else {
			timeoutId = setTimeout(() => {
				setVisibleText("");
				setIndex(0);
			}, RESET_DELAY_MS);
		}

		return () => clearTimeout(timeoutId);
	}, [index, text, typingSpeedMs]);

	return (
        <div className="w-full h-full flex">
            <p className="text-xl w-[90%] mx-auto mt-20 mb-20 font-semibold text-white md:text-4xl">
                {visibleText}
                <span className="ml-1 inline-block animate-pulse">|</span>
            </p>
        </div>
	);
}
