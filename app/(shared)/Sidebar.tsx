import React from "react";
import SocialLinks from "./SocialLinks";
import Subscribe from "./Subscribe";
import Image from "next/image";

type Props = {};

function Sidebar() {
  return (
    <section>
      <h4 className="bg-wh-900 py-3 px-5 text-wh-50 text-sx font-bold text-center">
        Subscribe and Follow
      </h4>
      <div className="my-5 mx-5">
        <SocialLinks isDark />
      </div>
      <Subscribe />
      <h4 className="bg-wh-900 py-3 px-5 text-wh-50 text-xs font-bold text-center">
        About the Blog
      </h4>
      <div className="h-[200px] relative flex justify-center py-3 mt-5">
        <Image  
          src={"https://source.unsplash.com/1600x900/?blockchain"}
          fill
          style={{ objectFit: "cover" }}
          alt="tech"
        />
      </div>
      <h4 className="py-3 px-5 text-wh-500 font-bold text-center">
        Some Name
      </h4>
      <p className="text-wh-500 text-center text-sm">
        Sit diam vel lacus tortor molestie amet tincidunt. Amet amet arcu sed
        facilisi
      </p>
    </section>
  );
}

export default Sidebar;
