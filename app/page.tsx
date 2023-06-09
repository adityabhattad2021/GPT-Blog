import { Post } from "@prisma/client";
import Tech from "./(home)/Tech";
import Travel from "./(home)/Travel";
import Trending from "./(home)/Trending";
import Others from "./(shared)/Other";
import Sidebar from "./(shared)/Sidebar";
import Subscribe from "./(shared)/Subscribe";
import { prisma } from "./api/client";


export const revalidate = 60;

async function getPosts() {
  const posts = await prisma.post.findMany()
  return posts;
}

export default async function Home() {

  const posts = await getPosts();

  function formatPosts(posts: Array<Post>) {
    const trendingPosts: Array<Post> = [];
    const techPosts: Array<Post> = [];
    const travelPosts: Array<Post> = [];
    const otherPosts: Array<Post> = [];

    posts.forEach((post: Post, i: number) => {
      if (i < 4) {
        trendingPosts.push(post);
      } else if (post?.category === "Tech") {
        techPosts.push(post);
      } else if (post?.category === "Travel") {
        travelPosts.push(post);
      } else {
        otherPosts.push(post);
      }
    })

    return [trendingPosts,techPosts,travelPosts,otherPosts];
  }

  const [trendingPosts,techPosts,travelPosts,otherPosts]=formatPosts(posts);

  return (
    <main className="px-10 leading-7">
      <Trending trendingPosts={trendingPosts} />
      <div className="md:flex gap-10 mb-5">
        <div className="basis-3/4">
          <Tech techPosts={techPosts} />
          <Travel travelPosts={travelPosts} />
          <Others otherPosts={otherPosts} />
          <div className="hidden md:block">
            <Subscribe />
          </div>
        </div>
        <div className="basis-1/4">
          <Sidebar />
        </div>
      </div>
    </main>
  )
}
