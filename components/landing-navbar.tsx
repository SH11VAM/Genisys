"use client";

import { Montserrat } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { useAuth } from "@clerk/nextjs";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";


const font = Montserrat({
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
            />

        </div>
        <h1 className={cn("text-2xl font-bold text-white", font.className)}>
            Genisys
        </h1>
         </Link>
         <div className="flex items-center gap-x-2">
            <Link href= {isSignedIn ? "/dashboard" : "/sign-up"}>
                <Button  className="rounded-full bg-gradient-to-r from-sky-400 to-blue-500 hover:from-pink-500 text-white hover:to-yellow-500 hover:text-slate-800 font-black">
                    Get Started
                </Button>
            </Link>

         </div>
    </nav>
)

}