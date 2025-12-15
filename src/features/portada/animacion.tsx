import Image from "next/image"
import { KiAura } from "./aura"

export function Animacion(){
    return(
        <div className="flex w-full h-full">
                <div className="w-[90%] h-full mx-auto relative">
                    <KiAura />
                    <div className="relative w-full h-full">
                        <Image
                            src="/goku2.png"
                            alt="Goku"
                            className="absolute z-1 w-full h-full object-contain"
                            width={300}
                            height={300}
                        />
                    </div>
                </div>
        </div>
    )
}