import { Animacion, Typing } from "@/features"

export function Intro(){
    return(
        <section className="w-full py-10 flex flex-col-reverse md:flex-row mb-20 md:mb-28 border-b border-zinc-800/60">
            <div className="w-full md:w-1/2 h-[300px] md:h-[400px]">
                <Animacion/>
            </div>
            <div className="w-full md:w-1/2 h-[250px] md:h-[450px]">
                <Typing/>
            </div>
        </section>
    )
}
