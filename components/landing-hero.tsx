"use client";

import TypewriterComponent from "typewriter-effect";
import Link from "next/link";
import { useAuth } from "@clerk/nextjs";

import { Button } from "@/components/ui/button";

export const LandingHero = () => {
  const { isSignedIn } = useAuth();

  return (
    <div className="text-white font-bold py-36 text-center space-y-5">
      <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl space-y-5 font-extrabold">
        Unlock Infinite Creativity With <br /> Our Generative AI <br /> Genisys
    
        <div className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-200 via-sky-300 to-blue-700 p-2">
          <TypewriterComponent
            options={{
              strings: [
                "Chatbot.",
                "Photo Generation.",
                "Blog Writing.",
                "Mail Writing."
              ],
              autoStart: true,
              loop: true,
            }}
          />
        </div>
      </div>
      <div className="text-lg md:text-xl  text-zinc-400 font-extrabold">
        Create content using AI 10x faster.
      </div>
      <div>
        <Link href={isSignedIn ? "/dashboard" : "/sign-up"}>
          <Button variant="secondary" className="md:text-lg p-4 md:p-6 rounded-full font-semibold bg-gradient-to-r from-sky-400 to-blue-500 hover:from-pink-500 text-white hover:to-yellow-500 hover:text-slate-800 hover:font-extrabold">
            Start Generating For Free
          </Button>
        </Link>
      </div>
      <div className="text-zinc-400 text-xs md:text-sm font-bold ">
        No credit card required.
      </div>
    </div>
  );
};