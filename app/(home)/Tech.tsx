import React from "react";
import Card from "app/(shared)/Card";
import { Post } from "@prisma/client";

type Props={
    techPosts:Array<Post>
}

function Tech(props:Props){
    return(
        <section>
            <hr className="border-1"/>
            <div className="flex items-center gap-3 my-8">
                <h4 className="bg-accent-orange py-2 px-5 text-wh-900 text-sm font-bold">
                    HOT
                </h4>
                <p className="font-bold text-2xl">
                    Latest News in Technology
                </p>
            </div>
            <div className="sm:grid grid-cols-2 grid-rows-3 gap-8 my-5">

                <Card
                    className="col-span-1 row-span-3"
                    imageHeight="h-96"
                    isLongForm={true}
                    post={props.techPosts[0]}
                />
                <Card
                    className="col-span-1 row-span-3"
                    imageHeight="h-96"
                    isLongForm={true}
                    post={props.techPosts[0]}
                />
                <Card
                    className="col-span-1 row-span-3"
                    imageHeight="h-96"
                    isLongForm={true}
                    post={props.techPosts[0]}
                />
                <Card
                    className="col-span-1 row-span-3"
                    imageHeight="h-96"
                    isLongForm={true}
                    post={props.techPosts[0]}
                />
            </div>
           
        </section>
    )
}

export default Tech;