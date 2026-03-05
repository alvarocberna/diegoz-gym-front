import { Animacion, Typing } from "@/features"

export function Intro(){
    return(
        <div className="w-full py-10 flex mb-30 " >
            <div className="w-1/2 h-[400] ">
                <Animacion/>
            </div> 
            <div className="w-1/2 h-[450] ">
                <Typing/>
            </div>
        </div>
    )
}