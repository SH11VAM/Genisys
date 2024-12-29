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
        <div className="h-[50rem] w-full bg-black  bg-grid-white/[0.2]  relative pt-20  items-center justify-center">
          {/* Radial gradient for the container to give a faded look */}
          <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-black  [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
          <p className="text-4xl sm:text-7xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-8 ">
            Unlock Infinite Creativity With <br /> Our Generative AI <br />
            Genesys
          </p>
        </div>

        <div className="text-transparent bg-clip-text bg-gradient-to-r from-gray-100 via-zinc-300 to-slate-500 p-2">
          <TypewriterComponent
            options={{
              strings: [
                "Chatbot.",
                "Photo Generation.",
                "Blog Writing.",
                "Mail Writing.",
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
          <Button
            variant="secondary"
            className="md:text-lg p-4 md:p-6 rounded-full text-4xl font-semibold bg-gradient-to-r from-zinc-400 to-zinc-500 hover:from-pink-500  hover:to-yellow-500 hover:text-slate-800 hover:font-extrabold"
          >
            Start Generating For Free
          </Button>
        </Link>
      </div>
      <div className="text-zinc-400 text-lg md:text-sm font-bold ">
        No credit card required.
      </div>
    </div>
  );
};
