import { Carrusel } from "./carrusel";

interface Slide {
	image: string;
	alt: string;
}

export function SecGym(){

    const slides: Slide[] = [
	{
		image: "/media/img_gym_1.png",
		alt: "Seccion 1",
	},
	{
		image: "/media/img_gym_2.png",
		alt: "Seccion 2",
	},
	{
		image: "/media/img_gym_3.png",
		alt: "Seccion 3",
	},
    {
		image: "/media/img_gym_4.png",
		alt: "Seccion 4",
	},
];

    return(
        <section className="w-full flex flex-col-reverse md:flex-row mb-24 md:mb-36" id="equipamiento">
            {/* Carrusel */}
            <div className="w-full md:w-1/2 h-[500px] md:h-[650px] flex">
                <div className="relative w-[90%] h-[90%] m-auto rounded-sm overflow-hidden shadow-[0_0_40px_rgba(180,83,9,0.2)]">
                    <Carrusel slides={slides} />
                    {/* Corner accent */}
                    <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-amber-500 pointer-events-none" />
                    <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-amber-500 pointer-events-none" />
                </div>
            </div>

            {/* Texto */}
            <div className="w-full md:w-1/2 h-auto md:h-[650px] flex">
                <div className="w-[85%] m-auto py-12 md:py-0 pl-2 md:pl-6 border-l-2 border-amber-500/30">
                    <p className="gym-label">Equipamiento</p>
                    <div className="accent-bar" />
                    <h2 className="gym-heading text-4xl md:text-5xl xl:text-6xl mb-6">
                        Sala de pesas con amplia variedad de <span>máquinas</span>
                    </h2>
                    <p className="text-zinc-400 text-sm md:text-base tracking-wide leading-relaxed max-w-sm">
                        Contamos con equipamiento de primer nivel para que puedas llevar tu entrenamiento al límite.
                    </p>
                </div>
            </div>
        </section>
    );
}
