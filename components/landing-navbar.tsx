"use client";

import Image from "next/image";
import Link from "next/link";
import { useAuth } from "@clerk/nextjs";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

export const LandingNavbar = () => {
  const { isSignedIn } = useAuth();
  return (
    <nav className="p-4 bg-transparent flex items-center justify-between">
      <Link href="/" className="flex items-center">
        <div
          className="relative h-10
        w-10 mr-4"
        >
          <Image
            fill
            alt="Logo"
            src="/logo.png"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
        <h1 className={cn("text-3xl font-extrabold text-white font-lota")}>
          Genisys
        </h1>
      </Link>
      <div className="flex items-center gap-x-2">
        <Link href={isSignedIn ? "/dashboard" : "/sign-up"}>
          <Button
            className={`rounded-xl bg-white text-black bg-gradient-to-br hover:from-[#C53678] hover:via-[#F79C1A] hover:to-[#742186] hover:text-white font-extrabold md:text-lg sm:text-sm lg:text-xl p-3 md:p-4 lg:p-6`}
          >
            Get Started
          </Button>
        </Link>
      </div>
    </nav>
  );
};
