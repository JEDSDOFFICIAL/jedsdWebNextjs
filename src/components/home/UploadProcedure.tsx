import React from "react";
import { Button } from "../ui/button";
import AuthorGuideline from "./AuthorGuideline";

import EditorGuideline from "./EditorGuideline";
import ReviewerGuideline from "./ReviewerGuideline";

function UploadProcedure() {
  const [isButtonClicked, setIsButtonClicked] =
    React.useState("AuthorGuideline");
  const ClickedEvent = (e: string) => {
    setIsButtonClicked(e);
  };

  return (
    <>
      <div className="h-fit w-full text-center text-4xl underline text-black font-bold py-3">
        Guideline and Policy
      </div>
      <div className="w-full min-h-[80vh] h-fit py-4 flex  md:flex-row flex-col">
        <div className="md:w-[20%] w-full md:h-full h-fit flex md:flex-col flex-row gap-4 text-xl text-black font-medium items-center py-7 justify-center flex-wrap">
          <Button
            variant={"outline"}
            className={`
              ${
                isButtonClicked === "AuthorGuideline" &&
                "bg-gray-400 border border-black text-white"
              }
            `}
            onClick={() => ClickedEvent("AuthorGuideline")}
          >
            Author Guideline
          </Button>
          <Button
            variant={"outline"}
            className={`
              ${
                isButtonClicked === "Editor" &&
                "bg-gray-400 border border-black text-white"
              }
            `}
            onClick={() => ClickedEvent("Editor")}
          >
            Editor Guideline
          </Button>
          <Button
            variant={"outline"}
            className={`
              ${
                isButtonClicked === "Reviewer" &&
                "bg-gray-400 border border-black text-white"
              }
            `}
            onClick={() => ClickedEvent("Reviewer")}
          >
            Reviewer Guideline
          </Button>
          {/* <Button
            variant={"outline"}
            size={"lg"}
            onClick={() => ClickedEvent("Publication")}
          >
            Publication Process
          </Button> */}
        </div>

        <div className="h-fit md:w-[75%] w-full">
          {isButtonClicked === "AuthorGuideline" && (
            <div className="w-full h-full bg-white  text-black text-xs md:text-base">
              <AuthorGuideline />
            </div>
          )}
          {isButtonClicked === "Editor" && (
            <div className="w-full h-full bg-white  text-black text-xs md:text-base" >
              <EditorGuideline />
            </div>
          )}
          {isButtonClicked === "Reviewer" && (
            <div className="w-full h-full bg-white  text-black text-xs md:text-base">
              <ReviewerGuideline />
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default UploadProcedure;
