import React from "react";
import { Button } from "../ui/button";
import TypingAnimation from "../ui/typing-animation";
import { MarqueeDemo } from "./Marquee";

function HomeFirstElement() {
  return (
    <>
    
    <div className="h-screen w-screen flex flex-col lg:flex-row bg-[rgb(39,59,90)] lg:pl-[3rem] relative z-0">
      {/* Content Section */}
      <div className="h-screen lg:w-[55%] w-full flex flex-col items-center lg:items-start justify-center gap-8  z-[111] ">
        <div className="md:text-5xl text-xl  w-full font-bold  pl-3 lg:pl-0 lg:text-black text-white ">
          <h3 className="text-blue-500 md:text-7xl text-4xl font-extrabold newRomman pb-4 md:pb-0">Welcome to</h3>
          <br />the Journal of Embedded and Digital System Design 
          <span className=" text-gray-300">(JEDSD)</span>
        </div>
        <TypingAnimation className="md:text-xl text-base pl-3 md:pl-0 text-white text-left ">
          Explore the cutting-edge research, stay updated with the latest developments, and join our community of innovators and thought leaders in the field of digital and embedded systems.
        </TypingAnimation>
        
        <Button
          size={"lg"}
          className="text-xl bg-white text-black hover:bg-gray-200"
          onClick={() => {
            alert("We are currently working on it ... plz check after some time");
          }}
        >
          Join with us
        </Button>
        <MarqueeDemo className=" z-10 relative w-screen md:bottom-0 -bottom-20 " />
      </div>

      {/* Image Section for lg and above */}
      <div
        className="hidden lg:flex h-screen md:w-[45%] w-full items-center justify-center relative z-[999] "
        style={{
          clipPath: "polygon(0 0, 100% 0%, 100% 100%, 0 100%, 43% 46%)",
        }}
      >
        <img src="/portrait.jpg" alt="home" className="object-cover h-full w-full" />
      </div>

      {/* Background Image for smaller screens */}
      <div
        className="lg:hidden absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
        style={{ backgroundImage: "url('/portrait.jpg')" }}
      ></div>
      <div
        className="lg:hidden absolute size-full backdrop-blur-md  "  
        style={{
          background: "radial-gradient(circle, rgba(23,37,56,0) 30%, rgba(0,0,0) 100%)",
        }}
      ></div>
      
    </div></>
  );
}

export default HomeFirstElement;
