import Trending from "./(home)/Trending";

export default function Home() {
  return (
    <main className="md:flex gap-10 mb-5">
        <Trending/>
        <div className="md:flex gap-10 mb-5">
          <div className="basis-3/4">
            {/* <Tech /> */}
            {/* <Travel/> */}
            {/* <Other/> */}
            <div className="hidden:block">
              {/* <Subscribe/> */}
            </div>
          </div>
          <div className="basis-1/4">
            {/* <Sidebar/> */}
          </div>
        </div>
    </main>
  )
}
