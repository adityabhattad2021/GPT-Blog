"use client";
import { FormattedPost } from "@/app/types";
import React, { useState } from "react";
import Image from "next/image";
import SocialLinks from "@/app/(shared)/SocialLinks";

type Props = {
    post: FormattedPost;
}

function Content(props: Props) {

    const [isEditable, setIsEditable] = useState<boolean>(false);

    const [title, setTitle] = useState<string>(props?.post?.title);
    const [titleError, setTitleError] = useState<string>("");
    const [tempTitle, setTempTitle] = useState<string>(title);

    const [content, setContent] = useState<string>(props?.post?.content);
    const [contentError, setContentError] = useState<string>("");
    const [tempContent, setTempContent] = useState<string>(content);

    const date = new Date(props?.post?.createdAt);
    const options = { year: "numeric", month: "long", day: "numeric" } as any;
    const formattedDate = date.toLocaleDateString("en-US", options);

    function handleIsEditable(bool: boolean) {
        setIsEditable(bool);
    }

    function handleOnContentChange({ editor }: any) {

    }

    function handleSubmit() {

    }

    function handleTitleChange() {

    }

    return (
        <div className="prose w-full max-w-full">
            <h5 className="text-wh-300">
                {`Home > ${props?.post?.category} > ${props?.post?.title}`}
            </h5>
            <form onSubmit={handleSubmit}>
                <>
                    {
                        isEditable ? (
                            <div>
                                <textarea
                                    className="border-2 rounded-md bg-wh-50 p-3 w-full"
                                    placeholder="title"
                                    onChange={handleTitleChange}
                                    value={title}
                                />
                                {titleError && (
                                    <p className="mt-1 text-primary-500">{titleError}</p>
                                )}
                            </div>
                        ) : (
                            <h3 className="font-bold text-3xl mt-3">
                                {title}
                            </h3>
                        )
                    }
                    <div className="flex gap-3">
                        <h5 className="font-semibold text-xs">
                            By {props?.post?.author}
                        </h5>
                        <h6 className="text-wh-300 text-xs">
                            {formattedDate}
                        </h6>
                    </div>


                </>
                <div className="relative w-auto mt-2 mb-16 h-96">
                    <Image
                        fill
                        alt={props?.post?.title}
                        src={props?.post?.image}
                        style={{ objectFit: "cover" }}
                    />
                </div>

                {
                    isEditable && (
                        <div className="flex justify-end">
                            <button
                                type="submit"
                                className="bg-accent-red hover:bg-wh-500 text-wh-10 font-semibold py-2 px-5 mt-5"
                            >
                                SUBMIT
                            </button>
                        </div>
                    )
                }
            </form>
            <div className="hidden md:block mt-10 w-1/3">
                <SocialLinks isDark />
            </div>
        </div>
    )
}

export default Content;