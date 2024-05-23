import Image from "@/node_modules/next/image";

export const Loader = () => {
    return( <div className="h-full flex flex-col gap-y-4 items-center justify-center">
        Loading.....
        <div className="w-10 h-10 relative animate-spin">
            <Image 
            alt="logo"
            fill
             src="/logo.png"
            />

        </div>
        <p className="test-sm text-muted-foreground">Genisys is thinking.....</p>

    </div>

);
};