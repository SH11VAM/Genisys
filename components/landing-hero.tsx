"use client";

import TypewriterComponent from "typewriter-effect";
import Link from "next/link";
import { useAuth } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import { Playfair} from "next/font/google";

const rubikVinyl = Playfair({
  subsets: ["latin"],
  weight: "600",
});

const paragraph = Playfair({
  subsets: ["latin"],
  weight: "400",
});
export const LandingHero = () => {
  const { isSignedIn } = useAuth();

  return (
    <div className="text-white font-bold py-36 text-center space-y-5">
      <p
        className={`${rubikVinyl.className} text-4xl sm:text-7xl font-bold font-rubik font-R relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-zinc-600 py-8`}
      >
        Empowering Your Ideas with Generative AI Excellence
      </p>
      <div className="text-transparent bg-clip-text bg-gradient-to-r from-gray-100 via-zinc-500 to-slate-900 p-2">
            <TypewriterComponent
              options={{
                strings: [
                  "Content Generation.",
                  "Image Generation.",
                  "Code Generation.",
                  "Query Generation.",
                ],
                autoStart: true,
                loop: true,
                wrapperClassName: `${rubikVinyl.className} tracking-wide text-[80px] md:text-[40]`,
              }}
            />
          </div>

      <div className={`text-lg md:text-xl  text-zinc-400 font-extrabold ${paragraph.className}`}>
        Create content using AI 10x faster.
      </div>
      <div>
        <Link href={isSignedIn ? "/dashboard" : "/sign-up"}>
          <Button
            variant="secondary"
            className={` ${paragraph.className} text-base md:text-lg sm:text-sm lg:text-xl p-3 md:p-4 lg:p-6 rounded-full  font-bold text-white bg-gradient-to-r from-zinc-300 to-zinc-900 hover:from-[#C53678] hover:via-[#F79C1A] hover:to-[#7C408A] hover:text-black hover:font-extrabold transition-all duration-300 ease-in-out`}
          >
            Start Generating For Free
          </Button>
        </Link>
      </div>
      <div className={`text-zinc-400 text-lg md:text-sm font-bold ${paragraph.className}`}>
        No credit card required.
      </div>
    </div>
  );
};
