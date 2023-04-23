import { NextResponse } from "next/server";
import { Configuration, CreateChatCompletionResponse, OpenAIApi } from "openai";
import { AxiosResponse } from "axios";

const configuration = new Configuration({
    apiKey:process.env.OPENAI_API_KEY
})
const openai = new OpenAIApi(configuration);


export async function POST(request:Request,response:any) {
    try {
        const {title,role}=await request.json()

        // @ts-ignore
        const  aiResponse: AxiosResponse<CreateChatCompletionResponse,any> = await openai.createChatCompletion({
            model:"gpt-3.5-turbo",
            messages:[
                {
                    role:"user",
                    content:`Create a big blog post with the following title: ${title}`,
                },
                {
                    role:"system",
                    content:`${role || "I am a helpful assistant"} and i use html tags to create a blog post.`
                }
            ]
        })

        return NextResponse.json(
            {
                content:aiResponse.data.choices[0].message?.content,
            },
            {
                status:200
            }
        )
    }catch(err){
        console.log(err);
        NextResponse.json({error:"error getting the post from open ai"},{status:500})
    }
}