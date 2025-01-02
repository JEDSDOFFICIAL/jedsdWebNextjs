"use client";


import ContactInfoHome from "@/components/home/ContactInfoHome";
import Footer from "@/components/home/Footer";

import HomeFirstElement from "@/components/home/HomeFirstElement";
// import HomeSecondElement from "@/components/home/HomeSecondElement";
import Navbar from "@/components/home/LgNavbar";
import Roadmap from "@/components/home/Roadmap";
import SmNavbar from "@/components/home/SmNavbar";
// import TeamCarosel from "@/components/home/TeamCarosel";
import Testimonials from "@/components/home/Testimonials";
import UploadProcedure from "@/components/home/UploadProcedure";

export default function Home() {
  return (
    <div className="bg-blue-50 h-screen overflow-x-hidden w-screen overflow-auto  no-scrollbar">
      <div className="NavItems w-full h-fit hidden xl:block fixed z-[555]">
        <Navbar />
      </div>
      <div className="NavItems w-full h-fit block xl:hidden fixed z-[555]">
        <SmNavbar />
      </div>
      <HomeFirstElement />
      <Roadmap />
      {/* <HomeSecondElement /> */}
      <UploadProcedure />
      <div className="w-full h-fit ">
        <Testimonials />
        {/* <TeamCarosel /> */}
        
        <ContactInfoHome />

        <Footer/>
      
      </div>
    </div>
  );
}
