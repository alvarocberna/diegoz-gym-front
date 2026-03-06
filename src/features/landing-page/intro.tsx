import { Animacion, Typing } from "@/features"

export function Intro(){
    return(
        <div className="w-full py-10 flex flex-col-reverse md:flex-row mb-30 " >
            <div className="w-full md:w-1/2 h-[300] md:h-[400]">
                <Animacion/>
            </div> 
            <div className="w-full md:w-1/2 h-[250] md:h-[450]">
                <Typing/>
            </div>
        </div>
    )
}