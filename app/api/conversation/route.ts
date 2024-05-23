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
        const { messages } = body;

        if(!userId){
            return new NextResponse("Unauthorized", {status:401});
        }

        if(!openAI){
            return new NextResponse("OpenAI API not configure", {status:500});
        }

        if(!messages){
            return new NextResponse("Message are required", {status:400});
        }

        const response = await openAI.chat.completions.create({ // Change this line
            model: "gpt-3.5-turbo",
            messages
        });

        return NextResponse.json(response.choices[0].message); // Change this line

    }catch(error){
        console.log("[CONVERSATION_ERROR]", error);
        return new NextResponse("Internal error", {status:500});
    }
}
