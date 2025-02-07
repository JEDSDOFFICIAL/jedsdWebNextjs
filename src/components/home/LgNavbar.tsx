

"use client";

import React, { useState, useEffect } from "react";
import {
  ChevronDown,
  FacebookIcon,
  Instagram,
  Loader,
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
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";

function Navbar() {
  const [isChangeBg, setIsChangeBg] = useState(false);
  const [isLoginRotatting, setIsLoginRotatting] = useState<boolean | null>(null);
  const [userImage, setUserImage] = useState<string | null>(null);
  const [userId, setUserId] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setIsChangeBg(true);
    }, 3000);

    return () => clearTimeout(timeoutId); // Cleanup the timeout on unmount
  }, []);

  useEffect(() => {
    if (userImage) {
      console.log('User image updated:', userImage);
    }
  }, [userImage]);

  return (
    <DropdownMenu>
      <div
        className={`w-full h-fit max-h-20 fixed top-0 left-0 z-50 transition-all ${isChangeBg ? 'bg-gray-200 backdrop-blur-md' : 'bg-transparent'} duration-300 flex justify-around items-center py-3`}
      >
        <Link href={'/'} className="logoArea h-[4rem] w-[4rem] ">
          <div>
            <Image src={'/logored.png'} height={50} width={60} alt="logo" />
          </div>
        </Link>
        <div className="navArea h-full flex items-center w-[calc(100%-14rem)] justify-between px-8">
          <div className="navArea h-full flex items-center gap-16 text-[1.2rem]">
            <DropdownMenuTrigger asChild>
              <div className={`flex h-fit w-fit gap-2 flex-row items-center cursor-pointer ${isChangeBg ? 'text-black' : 'text-white'}`}>
                About Us <ChevronDown />
              </div>
            </DropdownMenuTrigger>

            <div
              onClick={() => alert("We are currently working on it ... plz check after some time")}
              className={`cursor-pointer ${isChangeBg ? 'text-black' : 'text-white'}`}
            >
              Articles
            </div>

            <div
              onClick={() => alert("We are currently working on it ... plz check after some time")}
              className={`cursor-pointer ${isChangeBg ? 'text-black' : 'text-white'}`}
            >
              Publish an Article
            </div>
          </div>

          <div className="h-full flex items-center gap-16">
            <div
              className="flex bg-blue-100 h-fit w-[20vw] gap-2 flex-row-reverse items-center justify-end border rounded-xl px-3 py-2 border-black underline"
              onClick={() => alert("We are currently working on it ... plz check after some time")}
            >
              Search for an Article
              <Search />
            </div>
            <div className="flex items-center gap-4">
              {userId && (
                <Link href={`/user/${userId}`} className="flex items-center">
                  {userImage && (
                    <Image height={100} width={100} src={userImage} alt="user" className="h-8 w-8 rounded-full" />
                  )}
                </Link>
              )}
              <div
                className={`flex item-center gap-2 flex-row cursor-pointer ${isChangeBg ? 'text-black' : 'text-white'}`}
              
              >
                {isLoginRotatting ? <Loader className="animate-spin" /> : !userImage ? <><LogIn /> Sign In</> : null}
              </div>
            </div>
          </div>
        </div>
      </div>
      <DropdownMenuContent className="w-[100vw] h-[50vh] bg-white text-black flex flex-row items-start py-7  justify-around">
        <div className="flex flex-col justify-start items-start">
          <h1 className="text-xl underline font-bold py-4">Who are we</h1>

          <div className="flex flex-col gap-4 text-base">
            <Link href={'/mission'} className=" text-gray-600 hover:text-black transition-all delay-100 cursor-pointer">
              Our Mission and Vision
            </Link>
           
            <Link href={'team'} className=" text-gray-600 hover:text-black transition-all delay-100 cursor-pointer">
              Editorial Team
            </Link>
            <p className=" text-gray-600 hover:text-black transition-all delay-100 cursor-pointer">
              Contact Us
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
              Call for Papers
            </p>
            <p className=" text-gray-600 hover:text-black transition-all delay-100 cursor-pointer">
              How we publish
            </p>
            <p className=" text-gray-600 hover:text-black transition-all delay-100 cursor-pointer">
              Download Templates
            </p>
           
            <p className=" text-gray-600 hover:text-black transition-all delay-100 cursor-pointer">
              Peer review
            </p>
            <p className=" text-gray-600 hover:text-black transition-all delay-100 cursor-pointer">
              Research Topics
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
