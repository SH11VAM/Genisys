import { NextResponse } from "next/server";
import OpenAI from "openai"; // Change this line
import { auth } from "@clerk/nextjs";

const openAI = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
}); // Change this line

export async function POST(req:Request) {
    try{
        const { userId } = auth(); // Change this line
        const body = await req.json();
        const { prompt, amount=1, resolution= "512x512" } = body;

        if(!userId){
            return new NextResponse("Unauthorized", {status:401});
        }

        if(!openAI){
            return new NextResponse("OpenAI API not configure", {status:500});
        }

        if(!prompt){
            return new NextResponse("Prompt is required", {status:400});
        }
        if(!amount){
            return new NextResponse("Amount is required", {status:400});
        }

        if(!resolution){
            return new NextResponse("Resolution is required", {status:400});
        }


        const response = await openAI.images.generate({ // Change this line
           prompt,
           n:parseInt(amount,10), 
           size:resolution,
        });

        return NextResponse.json(response.data); // Change this line

    }catch(error){
        console.log("[Image_ERROR]", error);
        return new NextResponse("Internal error", {status:500});
    }
}
