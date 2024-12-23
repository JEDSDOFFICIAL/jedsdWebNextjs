"use client";

import HomeFirstElement from "@/components/home/HomeFirstElement";
import HomeSecondElement from "@/components/home/HomeSecondElement";
import Navbar from "@/components/home/LgNavbar";
import SmNavbar from "@/components/home/SmNavbar";
import UploadProcedure from "@/components/home/UploadProcedure";

export default function Home() {
  return (
    <div className="bg-gradient-to-r from-cyan-200 via-cyan-100 to-teal-50 h-screen w-screen overflow-auto  no-scrollbar">
      <div className="NavItems w-full h-fit hidden xl:block fixed z-[10]">
        <Navbar />
      </div>
      <div className="NavItems w-full h-fit block xl:hidden fixed z-[10]">
        <SmNavbar />
      </div>
      <HomeFirstElement />
      <HomeSecondElement />
      <UploadProcedure/>
    </div>
  );
}
