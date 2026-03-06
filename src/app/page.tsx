import Image from "next/image";
import {Portada, Intro, SecGym, SecEspacios} from "@/features";
import {Background} from "@/shared"
import { Navbar } from "@/shared";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
        <Navbar/>
        <Portada />
        <Intro/>
        <SecGym/>
        <SecEspacios/>
        {/* <Background/> */}
    </div>
  );
}
