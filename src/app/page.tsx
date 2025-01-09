"use client";

import React from 'react';
// import Loader from '@/components/Genaral/Loader';
import Footer from "@/components/home/Footer";
import HomeFirstElement from "@/components/home/HomeFirstElement";
import Navbar from "@/components/home/LgNavbar";
import Roadmap from "@/components/home/Roadmap";
import SmNavbar from "@/components/home/SmNavbar";
// import Testimonials from "@/components/home/Testimonials";
import UploadProcedure from "@/components/home/UploadProcedure";

export default function Home() {
  // const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   setTimeout(() => {
  //     setLoading(false);
  //   }, 3000);
  // }, []);


  return (
    // loading ? <Loader /> : (
        <div className="bg-blue-50 h-screen overflow-x-hidden w-screen overflow-auto no-scrollbar">
        <div className="NavItems w-full h-fit hidden xl:block fixed z-[555]">
          <Navbar />
        </div>
        <div className="NavItems w-full h-fit block xl:hidden fixed z-[555]">
          <SmNavbar />
        </div>
        <HomeFirstElement />
        <Roadmap />
        {/* <Testimonials /> */}
        <UploadProcedure />
        <Footer />
      </div>
      
  );
}