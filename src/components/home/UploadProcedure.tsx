import React from "react";
import { Button } from "../ui/button";

function UploadProcedure() {
  return (
    <>
      <div className="h-fit w-full text-center text-4xl underline text-black font-bold py-6">
        Guideline
      </div>
      <div className="w-full h-[50vh] flex  flex-row">
        <div className="w-[20%] h-full flex flex-col gap-4 text-xl text-black font-medium items-center py-7 justify-center">
          <Button variant={"outline"} size={"lg"}>Submission Guideline</Button>
          <Button variant={"outline"} size={"lg"}>Reviewer Guideline</Button>
          <Button variant={"outline"} size={"lg"}>Editior Guideline</Button>
          <Button variant={"outline"} size={"lg"}>Publication Process</Button>
        </div>
        <div className="w-[80%] h-full bg-blue-500">
          
        </div>
      </div>
    </>
  );
}

export default UploadProcedure;


