import React from "react";
import { prisma } from "@/app/api/client";
import { Post as PostType } from "@prisma/client";
import { FormattedPost } from "@/app/types";
import Sidebar from "@/app/(shared)/Sidebar";
import Content from "./Content";

type Props = {
    params: { id: string };
}

export const revalidate = 60;

async function getPost(id: string) {
    const post: PostType | null = await prisma.post.findUnique({
        where: { id }
    })

    if (!post) {
        console.log("Post not found.");
        return null;
    }

    const formattedPost = {
        ...post,
        createdAt: post?.createdAt?.toISOString(),
        updatedAt: post?.updatedAt?.toISOString(),
    }

    return formattedPost;
}

async function Post({ params }: Props) {

    const { id } = params;
    const post: FormattedPost | null = await getPost(id);

    if (!post) {
        return (
            <div>
                Post not found!
            </div>
        )
    }

    return (
        <main className="px-10  leading-7">
            <div className="md:flex gap-10 mb-5">
                <div className="basis3/4">
                    <Content post={post} />
                </div>
                <div className="basis-1/4">
                    <Sidebar />
                </div>
            </div>
        </main>
    )
}

export default Post;