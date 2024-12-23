import React from "react";

function HomeFirstElement() {
  return (
    <div className="h-[100vh]  mix-blend-multiply  w-screen  relative bg-[url('/bg-first-down.png')] bg-cover bg-center bg-no-repeat">
      <div className="flex justify-end items-center h-fit w-full bg-gradient-to-t from-white/90 to-transparent absolute right-0 bottom-0">
        <div className="h-24 md:w-[25rem] w-screen  border-2 border-black  flex gap-0 ">
          <div className="flex flex-col items-start justify-center h-auto w-[65%] border-r-2 border-black bg-slate-600/75 pl-4">
            <h1 className="text-xl font-bold">100 +</h1>
            <p>Articles and Research papers</p>
          </div>
          <div className="flex flex-col items-start justify-center  h-auto w-[35%] pl-4 bg-gray-900/80">
            <h1 className="text-xl font-bold">1000 +</h1>
            <p>Members</p>
          </div>
        </div>
      </div>
      <div className="h-screen md:w-[65%] md:pl-11 w-full flex flex-col items-start justify-center gap-8">
        <h1 className="md:text-4xl text-2xl pl-3 leading-normal font-bold text-black">
          <span className="text-blue-900/80 md:text-7xl text-3xl">Welcome to</span>
          <br /> the Journal of Embedded and <br/> Digital System Design
          <span className=" text-gray-500">(JEDSD)</span>
        </h1>
        <p className="md:text-xl text-lg text-black text-left pl-3">
        Explore the cutting-edge research, stay updated with the latest developments, and join our community of innovators and thought leaders in the field of digital and embedded systems.
        </p>
      </div>
    </div>
  );
}

export default HomeFirstElement;
