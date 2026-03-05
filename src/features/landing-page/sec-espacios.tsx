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
        <div className="w-full h-full flex mb-30">
            <div className="w-1/2 h-[600] flex">
                <p className="text-6xl w-[90%] m-auto" style={{
                    fontFamily: 'sans-serif',
                    fontWeight: 600,
                    textTransform: 'uppercase',
                    letterSpacing: '3px',
                    
                }}>
                    Diviersidad de espacio para múltiples disciplinas como boxeo, funcional y levantamiento de pesas
                </p>
            </div>
            <div className="w-1/2 h-[600] flex">
                <div className="relative w-[90%] h-[90%] m-auto">
                    <Carrusel slides={slides} />
                </div>
            </div>
        </div>
    );
}