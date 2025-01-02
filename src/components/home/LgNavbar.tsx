import React, { useState, useEffect } from "react";
import {
  ChevronDown,
  FacebookIcon,
  Instagram,
  LogIn,
  MailCheckIcon,
  Search,
  XIcon,
} from "lucide-react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

function Navbar() {
  const [isChangeBg, setIsChangeBg] = useState(false);  
  
   useEffect(() => {
     setTimeout(() => {
       setIsChangeBg(true);
     },3000)
   }, []);

  return (
    <DropdownMenu>
      <div
        className={`w-full h-fit fixed top-0 left-0 z-50 transition-all ${isChangeBg?'bg-white/80 backdrop-blur-sm':'bg-transparent'} duration-300 bg-transparent flex justify-around items-center py-3`}
      >
        <div className="logoArea h-full w-[8rem] bg-red-400">a</div>
        <div className="navArea h-full flex items-center w-[calc(100%-14rem)] justify-between px-8">
          <div className="navArea h-full flex items-center gap-16 text-[1.2rem]">
            <DropdownMenuTrigger asChild>
              <div className={`flex h-fit w-fit gap-2 flex-row items-center cursor-pointer ${isChangeBg?' text-black':'text-white'}`}>
                About Us <ChevronDown />
              </div>
            </DropdownMenuTrigger>

            <div
              onClick={() => {
                alert(
                  "We are currently working on it ... plz check after some time"
                );
              }}
              className={`cursor-pointer ${isChangeBg?' text-black':'text-white'}`}
            >
              Articles
            </div>
            <div
              onClick={() => {
                alert(
                  "We are currently working on it ... plz check after some time"
                );
              }}
              className={`cursor-pointer ${isChangeBg?' text-black':'text-white'}`}
            >
              Be a Reviewer
            </div>
            <div
              onClick={() => {
                alert(
                  "We are currently working on it ... plz check after some time"
                );
              }}
              className={`cursor-pointer ${isChangeBg?' text-black':'text-white'}`}
            >
              Publish an Article
            </div>
          </div>

          <div className="h-full flex items-center gap-16">
            <div
              className="flex bg-white h-fit w-[20vw] gap-2 flex-row-reverse items-center justify-end border rounded-xl px-3 py-2 border-black underline"
              onClick={() => {
                alert(
                  "We are currently working on it ... plz check after some time"
                );
              }}
            >
              Search for an Article
              <Search />
            </div>
            <div className="flex items-center gap-4">
              <div
                className={`flex item-center gap-2 flex-row cursor-pointer ${isChangeBg?'text-black': 'text-white'}`}
                onClick={() => {
                  alert("We are currently working on it ... plz check after some time");
                }}
              >
                <LogIn /> Sign In
              </div>
            </div>
          </div>
        </div>
      </div>
      <DropdownMenuContent className="w-[100vw] h-[50vh] bg-white text-black flex flex-row items-start py-7  justify-around">
        <div className="flex flex-col justify-start items-start">
          <h1 className="text-xl underline font-bold py-4">Who are we</h1>

          <div className="flex flex-col gap-4 text-base">
            <p className=" text-gray-600 hover:text-black transition-all delay-100 cursor-pointer">
              Our Mission
            </p>
            <p className=" text-gray-600 hover:text-black transition-all delay-100 cursor-pointer">
              Our Vision
            </p>
            <p className=" text-gray-600 hover:text-black transition-all delay-100 cursor-pointer">
              Our Team
            </p>
          </div>
        </div>
        <div className="flex flex-col justify-start items-start">
          <h1 className="text-xl underline font-bold py-4">
            News and Announcement
          </h1>

          <div className="flex flex-col gap-4 text-base">
            <p className=" text-gray-600 hover:text-black transition-all delay-100 cursor-pointer">
              Call for Papers
            </p>
            <p className=" text-gray-600 hover:text-black transition-all delay-100 cursor-pointer">
              Upcoming Conference
            </p>
            <p className=" text-gray-600 hover:text-black transition-all delay-100 cursor-pointer">
              Award and Recognitions
            </p>
            <p className=" text-gray-600 hover:text-black transition-all delay-100 cursor-pointer">
              New Members
            </p>
          </div>
        </div>
        <div className="flex flex-col justify-start items-start">
          <h1 className="text-xl underline font-bold py-4">Our Policies</h1>

          <div className="flex flex-col gap-4 text-base">
            <p className=" text-gray-600 hover:text-black transition-all delay-100 cursor-pointer">
              Editorial Policies
            </p>
            <p className=" text-gray-600 hover:text-black transition-all delay-100 cursor-pointer">
              Submission Guidelines
            </p>
            <p className=" text-gray-600 hover:text-black transition-all delay-100 cursor-pointer">
              Reviewer Guidelines
            </p>
          </div>
        </div>
        <div className="flex flex-col justify-start items-start">
          <h1 className="text-xl underline font-bold py-4">Publishing Model</h1>

          <div className="flex flex-col gap-4 text-base">
            <p className=" text-gray-600 hover:text-black transition-all delay-100 cursor-pointer">
              How we publish
            </p>
            <p className=" text-gray-600 hover:text-black transition-all delay-100 cursor-pointer">
              Templates
            </p>
            <p className=" text-gray-600 hover:text-black transition-all delay-100 cursor-pointer">
              Open access
            </p>
            <p className=" text-gray-600 hover:text-black transition-all delay-100 cursor-pointer">
              Fee policy
            </p>
            <p className=" text-gray-600 hover:text-black transition-all delay-100 cursor-pointer">
              Peer review
            </p>
            <p className=" text-gray-600 hover:text-black transition-all delay-100 cursor-pointer">
              Research Topics
            </p>
          </div>
        </div>
        <div className="flex flex-col justify-start items-start">
          <h1 className="text-xl underline font-bold py-4">Get in Touch</h1>

          <div className="flex flex-col gap-4 text-base">
            <p className=" text-gray-600 hover:text-black transition-all delay-100 cursor-pointer">
              Be a Sponser
            </p>
            <p className=" text-gray-600 hover:text-black transition-all delay-100 cursor-pointer">
              Contact Us
            </p>
            <p className=" text-gray-600 hover:text-black transition-all delay-100 cursor-pointer">
              Social media and mail
            </p>
          </div>
        </div>
        <div className="absolute bottom-2 right-3 flex gap-6 justify-center items-center h-fit w-fit">
          <MailCheckIcon className="hover:scale-125 transition-all duration-300 cursor-pointer" />
          <FacebookIcon className="hover:scale-125 transition-all duration-300 cursor-pointer" />
          <Instagram className="hover:scale-125 transition-all duration-300 cursor-pointer" />
          <XIcon className="hover:scale-125 transition-all duration-300 cursor-pointer" />
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default Navbar;
