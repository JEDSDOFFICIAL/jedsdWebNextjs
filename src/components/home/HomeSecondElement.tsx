import React from "react";
import { MarqueeDemo } from "./Marquee";
import HomepageProject from "./HomepageProject";

function HomeSecondElement() {
  return (
    <div className="w-full h-fit flex flex-col py-4 ">
      <MarqueeDemo />
      <div className="w-full h-fit ">


      <HomepageProject />
      </div>
    </div>
  );
}

export default HomeSecondElement;
