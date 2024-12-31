"use client";

import { Playfair } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { useAuth } from "@clerk/nextjs";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";


const font = Playfair({
    weight:"600",
    subsets: ['latin', 'latin-ext']
});

export const LandingNavbar = () => {
    const {isSignedIn } = useAuth();
return(
    <nav className="p-4 bg-transparent flex items-center justify-between">
        <Link href="/" className="flex items-center"> 
        <div className="relative h-8
        w-8 mr-4">
            <Image
            fill 
            alt="Logo" 
            src="/logo.png"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />

        </div>
        <h1 className={cn("text-2xl font-bold text-white", font.className)}>
            Genisys
        </h1>
         </Link>
         <div className="flex items-center gap-x-2">
            <Link href= {isSignedIn ? "/dashboard" : "/sign-up"}>
                <Button  className={`${font.className} rounded-full bg-gradient-to-r from-zinc-400 to-zinc-900  text-white  hover:from-[#C53678] hover:via-[#F79C1A] hover:to-[#742186] hover:text-black font-black text-lg`}>
                    Get Started
                </Button>
            </Link>

         </div>
    </nav>
)

}