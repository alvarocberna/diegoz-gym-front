"use client";

import { useEffect, useState } from "react";

type TypingProps = {
	text?: string;
	typingSpeedMs?: number;
};

const DEFAULT_TEXT = "Entrena tu mejor version en Diegoz Gym.";
const RESET_DELAY_MS = 5000;

export function Typing2({ text = DEFAULT_TEXT, typingSpeedMs = 80 }: TypingProps) {
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
		<p className="text-xl font-semibold text-white md:text-3xl">
			{visibleText}
			<span className="ml-1 inline-block animate-pulse">|</span>
		</p>
	);
}
