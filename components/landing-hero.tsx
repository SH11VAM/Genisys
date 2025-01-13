"use client";

import TypewriterComponent from "typewriter-effect";
import Link from "next/link";
import { useAuth } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export const LandingHero = () => {
  const { isSignedIn } = useAuth();

  return (
    <div className="text-white font-bold py-36 text-center space-y-5 ">
       <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
            className="text-center"
          >
      <div className="mb-5">
        <p
          className={` text-4xl sm:text-7xl font-extrabold font-lota relative z-20 bg-clip-text text-[#FEFEFF] py-8`}
        >
          Empowering Your Ideas With Generative AI Excellence.
        </p>
      </div>
      </motion.div>

      <div className="text-[#FEFEFF] p-2 font-lota">
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
            wrapperClassName: ` tracking-wide text-[80px] md:text-[40] sm:text-md font-extrabold font-lota`,
          }}
        />
      </div>

      <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.3 }}
            
          >

      <div
        className={`text-lg md:text-xl  text-zinc-400 font-extrabold font-lota mb-4`}
      >
        Create content using AI 10x faster.
      </div>
      <div>
        <Link href={isSignedIn ? "/dashboard" : "/sign-up"}>
          <Button
            variant="secondary"
            className={`  md:text-lg sm:text-sm lg:text-xl p-3 md:p-4 lg:p-6 rounded-xl font-lota mb-4 text-black bg-white bg-gradient-to-br  hover:from-[#C53678] hover:via-[#F79C1A] hover:to-[#7C408A] hover:text-black hover:font-extrabold `}
          >
            Start Generating For Free
          </Button>
        </Link>
      </div>
      <div className={`text-zinc-400 text-lg md:text-sm font-bold  font-lota `}>
        No credit card required.
      </div>
      </motion.div>
    </div>
  );
};
