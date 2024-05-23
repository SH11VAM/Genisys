import React from "react";

const LandingLayout = ({children} : {children : React.ReactNode}) => {
    return (
        <main className="h-full bg-[#020617] font-mono overflow-auto">
            <div className="mx-auto max-w-screen-xl h-full w-full">
                {children}
            </div>

        </main>
      );
}
 
export default LandingLayout;