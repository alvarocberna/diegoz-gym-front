import { Animacion } from "./animacion"

export function Portada(){
    return(
        <div className="flex h-screen w-full bg-slate-800">
            <div className="flex flex-col md:flex-row mx-auto h-[90%] w-full">
                {/* Left side - Text */}
                <div className="flex w-full md:w-1/2 m-auto">
                    <div className="w-full md:w-[70%] h-60 m-auto flex flex-col items-center md:items-start justify-center text-white md:pb-10">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center">
                            Diegoz Gym
                        </h1>
                        <p className="text-lg md:text-xl lg:text-2xl text-center text-gray-400 mt-4">
                            Gimnasio para guerreros z
                        </p>
                    </div>
                </div>
                {/* Right side - Animation */}
                <div className="flex w-full md:w-1/2 h-full">
                    <div className="flex m-auto w-[75%] h-[75%]">
                        <Animacion />
                    </div>
                </div>

            </div>
        </div>
    )
}