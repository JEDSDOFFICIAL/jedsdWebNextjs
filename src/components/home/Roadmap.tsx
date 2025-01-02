import React from "react";
import { Button } from "../ui/button";

function Roadmap() {
  return (
    <div className="flex flex-col items-center justify-center w-full h-fit">
     
      <div
        id="Events"
        className="h-fit w-screen md:w-[97%] lg:w-[90%]  flex md:flex-row flex-col gap-16 md:gap-0 justify-between py-16"
      >
        <div className="text-black text-3xl sticky top-[6rem] h-fit md:w-1/2 flex flex-col gap-6">
          <h1 className="text-4xl font-bold ">
            Discover the Power of Our Products
          </h1>
          <p className="text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            varius enim in eros elementum tristique. Duis cursus, mi quis
            viverra ornare, eros dolor interdum nulla, ut commodo diam libero
            vitae erat.
          </p>
          <Button className="w-fit">Read Doc</Button>
        </div>

        <div className="h-fit md:w-1/3 w-full flex flex-col gap-20">
          <div className="w-full min-h-[12rem] sticky top-[6rem] bg-[rgb(39,59,90)] rounded-md border border-black shadow-md shadow-black rotate-2 flex flex-col gap-3 px-10 py-6">
            <h1 className="text-2xl font-bold text-white ">Create an Account</h1>
            <p className="text-lg font-medium text-white">Sign up for a free account on our platform to start publishing your journals and articles.</p>
            <Button>Sign Up</Button>
          </div>
          <div className="w-full min-h-[12rem] sticky top-[6rem] bg-[rgb(39,59,90)] rounded-md border border-black shadow-md shadow-black -rotate-2 flex flex-col gap-3 px-10 py-6">
            <h1 className="text-2xl font-bold text-white ">Submit your content</h1>
            <p className="text-lg font-medium text-white">Submit your well-researched journals and articles through our user-friendly submission process.</p>
            
          </div>
          <div className="w-full min-h-[12rem] sticky top-[6rem] bg-[rgb(39,59,90)] rounded-md border border-black shadow-md shadow-black rotate-2 flex flex-col gap-3 px-10 py-6">
            <h1 className="text-2xl font-bold text-white ">Peer review process</h1>
            <p className="text-lg font-medium text-white">Your submissions will undergo a thorough peer review process by experts in the field to ensure quality and credibility.</p>
            
          </div>
          <div className="w-full min-h-[12rem] sticky top-[6rem] bg-[rgb(39,59,90)] rounded-md border border-black shadow-md shadow-black rotate-2 flex flex-col gap-3 px-10 py-6">
            <h1 className="text-2xl font-bold text-white ">Publish and Share</h1>
            <p className="text-lg font-medium text-white">Once your content is approved, it will be published on our platform for readers to access and share.</p>
            
          </div>

          
        </div>
      </div>
    </div>
  );
}

export default Roadmap;
