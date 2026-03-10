import { Carrusel } from "./carrusel";

interface Slide {
	image: string;
	alt: string;
}

export function SecEspacios(){

    const slides: Slide[] = [
	{
		image: "/media/img_espacio_1.png",
		alt: "Seccion 1",
	},
	{
		image: "/media/img_espacio_2.png",
		alt: "Seccion 2",
	},
	{
		image: "/media/img_espacio_3.png",
		alt: "Seccion 3",
	},
];

    return(
        <section className="w-full flex flex-col md:flex-row mb-24 md:mb-36" id="espacios">
            {/* Texto */}
            <div className="w-full md:w-1/2 h-auto md:h-[650px] flex order-2 md:order-1">
                <div className="w-[85%] m-auto py-12 md:py-0 pr-2 md:pr-6 border-r-2 border-amber-500/30">
                    <p className="gym-label">Espacios</p>
                    <div className="accent-bar" />
                    <h2 className="gym-heading text-4xl md:text-5xl xl:text-6xl mb-6">
                        Diversidad de espacios para <span>múltiples disciplinas</span>
                    </h2>
                    <p className="text-zinc-400 text-sm md:text-base tracking-wide leading-relaxed max-w-sm">
                        Boxeo, funcional y levantamiento de pesas. Todo bajo un mismo techo, diseñado para atletas que buscan más.
                    </p>
                </div>
            </div>

            {/* Carrusel */}
            <div className="w-full md:w-1/2 h-[500px] md:h-[650px] flex order-1 md:order-2">
                <div className="relative w-[90%] h-[90%] m-auto rounded-sm overflow-hidden shadow-[0_0_40px_rgba(180,83,9,0.2)]">
                    <Carrusel slides={slides} />
                    {/* Corner accent */}
                    <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-amber-500 pointer-events-none" />
                    <div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-amber-500 pointer-events-none" />
                </div>
            </div>
        </section>
    );
}
