import { Post } from "@prisma/client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type TrendingCardProps = {
  className?: string;
  post: Post;
};

function TrendingCard({ className,post }: TrendingCardProps) {
  return (
    <Link
      className={`${className} sm:mt-0 sm:h-auto relative mt-7 block w-full h-96 hover:opacity-70`}
      href={`${process.env.NEXT_PUBLIC_URL}/post/${post?.id}`}
    >
      <div className="z-0 relative w-full h-full">
        <Image
          fill
          style={{objectFit:"cover"}}
          alt="tech"
          src={post?.image}
        />
      </div>
      <div className="absolute z-1 top-0 left-0 w-full h-full bg-gradient-gradual"></div>
      <div className="absolute z-2 bottom-0 left-0 p-3">
        <h4 className="inline-block px-5 py-1 font-semibold bg-accent-orange text-wh-900">
          {post?.category}
        </h4>
        <div className="text-wh-100 mt-2">{post?.title}</div>
      </div>
    </Link>
  );
}

type TrendingProps = {
  trendingPosts: Array<Post>
};

function Trending(props: TrendingProps) {
  return (
    <section className="pt-3 pb-10">
      <div className="flex items-center gap-3">
        <div className="bg-wh-900 py-2 px-8 text-wh-10 text-sm font-bold">
          TRENDING
        </div>
        <p className="text-sm">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </p>
      </div>

      <div className="sm:grid gap-5 grid-cols-4 grid-rows-2 sm:h-[600px] my-3">

        <TrendingCard className="col-span-2 row-span-2" post={props.trendingPosts[0]} />
        <TrendingCard className="col-span-2 row-span-1 " post={props.trendingPosts[0]}/>
        <TrendingCard className="col-span-1 row-span-1 " post={props.trendingPosts[0]} />
        <TrendingCard className="col-span-1 row-span-1 " post={props.trendingPosts[0]}/>
      </div>
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged.
      </p>
    </section>
  );
}

export default Trending;
