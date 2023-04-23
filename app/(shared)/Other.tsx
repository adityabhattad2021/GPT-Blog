import React from "react";
import Card from "./Card";
import { Post } from "@prisma/client";

type Props = {
    otherPosts:Array<Post>
}

function Others(props:Props){
    return (
        <section className="pt-4 mb-16">
            <hr className="border-1"/>
            <p className="font-bold text-2xl my-8">Other Trending Posts</p>
            <div className="sm:grid grid-cols-2 gap-16">
                {
                    props?.otherPosts.map((post:Post)=>(
                        <Card
                            className=" mt-5 sm:mt-0"
                            imageHeight="h-80"
                            post={post}
                        />
                    ))
                }
                {/* <Card
                    className="bg-wh-500 mt-5 sm:mt-0"
                    imageHeight="h-80"
                />
                <Card
                    className="bg-wh-500 mt-5 sm:mt-0"
                    imageHeight="h-80"
                />
                <Card
                    className="bg-wh-500 mt-5 sm:mt-0"
                    imageHeight="h-80"
                /> */}
            </div>
        </section>
    )
}

export default Others;