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
        <div className="w-full h-full flex mb-30">
            <div className="w-1/2 h-[600] flex">
                <div className="relative w-[90%] h-[90%] m-auto">
                    <Carrusel slides={slides} />
                    {/* <Image className="absolute rounded-xl" src='/media/img_gym1.png' alt="gym" fill/> */}
                </div>
            </div>
            <div className="w-1/2 h-[600] flex">
                <p className="text-6xl w-[90%] m-auto" style={{
                    fontFamily: 'sans-serif',
                    fontWeight: 600,
                    textTransform: 'uppercase',
                    letterSpacing: '3px',

                }}>
                    Sala de pesas con equipo de último nivel
                </p>
            </div>
        </div>
    );
}