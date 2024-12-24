import React from "react";
import { Button } from "../ui/button";

function AuthorGuideline() {
  const [isNavButtonClicked, setIsNavButtonClicked] = React.useState(
    "SubmissionGuideline"
  );
  const ClickedEvent = (e: string) => {
    setIsNavButtonClicked(e);
   
  };

  return (
    <div className="h-fit w-full flex flex-col justify-center items-start">
      <div className="buttonGroup w-full h-fit flex flex-row md:gap-3 gap-1 justify-around border-b-2 border-gray-900 py-4">
        <Button
          size="lg"
          className={`
            ${isNavButtonClicked === "SubmissionGuideline" && "bg-blue-500 text-white hover:bg-blue-600"} text-xs p-0.5 md:text-sm md:p-2 lg:text-base lg:p-3   
          `}
          onClick={() => ClickedEvent("SubmissionGuideline")}
          
        >
          Submission Guideline
        </Button>
        <Button
          size="lg"
          className={`
            ${isNavButtonClicked === "Templates" && "bg-blue-500 text-white hover:bg-blue-600"} text-xs p-0.5 md:text-sm md:p-2 lg:text-base lg:p-3   
          `}
          onClick={() => ClickedEvent("Templates")}
        >
          Author Resources
        </Button>
        <Button
          size="lg"
          className={`
            ${isNavButtonClicked === "SubmitMenuscript" && "bg-blue-500 text-white hover:bg-blue-600"} text-xs p-0.5 md:text-sm md:p-2 lg:text-base lg:p-3   
          `}
          onClick={() => ClickedEvent("SubmitMenuscript")}
        >
          Submit Menuscript
        </Button>
      </div>

      <div className="textArea w-full">
        {isNavButtonClicked === "SubmissionGuideline" && (
          <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">Manuscript Preparation</h1>
            <ul className="list-disc ml-4">
              <li>
                <span className="font-bold">Title:</span> Concise and
                informative. Avoid abbreviations and formulae.
              </li>
              <li>
                <span className="font-bold">Abstract:</span> Maximum 250 words,
                summarizing the research question, methodology, results, and
                conclusion.
              </li>
              <li>
                <span className="font-bold">Keywords:</span> 3-5 keywords to
                facilitate indexing and search.
              </li>
              <li>
                <span className="font-bold">Main Text:</span> Structured as
                Introduction, Methods, Results, Discussion, and Conclusion.
                <ul className="list-disc ml-4">
                  <li>
                    <span className="font-bold">Introduction:</span> Context,
                    objectives, and the significance of the study.
                  </li>
                  <li>
                    <span className="font-bold">Methods:</span> Detailed
                    methodology, including materials, procedures, and analysis
                    techniques.
                  </li>
                  <li>
                    <span className="font-bold">Results:</span> Clear and
                    concise presentation of findings with appropriate use of
                    tables and figures.
                  </li>
                  <li  className="text-gray-600/90">
                    <span className="font-bold">Discussion:</span>{" "}
                    Interpretation of results, implications, limitations, and
                    future directions.
                  </li>
                  <li className="text-gray-600/70">
                    <span className="font-bold">Conclusion:</span> Summary of
                    findings and their significance.
                  </li>
                </ul>
              </li>
              <li className="text-gray-600/50">
                <span className="font-bold">References:</span> Follow IEEE
                citation style.
              </li>
              <li className="text-gray-600/30">
                <span className="font-bold">Figures and Tables:</span>{" "}
                High-quality images with descriptive captions. Tables should be
                editable.
              </li>
              <li className="text-gray-600/10">
                <span className="font-bold">Supplementary Material:</span>{" "}
                Optional; include additional data or material that supports the
                manuscript.
              </li>
            </ul>
            <div className="w-full h-fit flex justify-center items-center ">
              <Button
                variant="destructive"
                size="lg"
                className="mt-4 border border-black shadow-md"
                onClick={()=>{alert("We are currently working on it ... plz check after some time")}}
              >
                Read More
              </Button>
            </div>
          </div>
        )}
        {isNavButtonClicked === "Templates" && (
          <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">Author Resources</h1>

            <h2 className="text-xl font-bold mb-2">1. Templates:</h2>
            <ul className="list-disc ml-4">
              <li>
                Manuscript Template: Downloadable templates in Word and LaTeX
                formats.
              </li>
              <li>
                Figure and Table Guidelines: Instructions on preparing
                high-quality figures and tables.
              </li>
            </ul>

            <h2 className="text-xl font-bold mb-2">2. Writing Assistance:</h2>
            <ul className="list-disc ml-4">
              <li>
                Language Editing Services: Recommendations for professional
                editing services to improve clarity and readability.
              </li>
              <li className="text-gray-600/90">
                Guidelines for Non-native English Speakers: Tips for writing
                clear and grammatically correct English.
              </li>
            </ul>

            <h2 className="text-xl font-bold mb-2 text-gray-800/70">3. Research Data:</h2>
            <ul className="list-disc ml-4">
              <li className="text-gray-600/50">
                Data Sharing Policies: Guidelines on sharing research data,
                including repositories and data citation.
              </li>
              <li  className="text-gray-600/20">
                Supplementary Materials: Instructions for submitting
                supplementary materials.
              </li>
            </ul>
            <div className="w-full h-fit flex justify-center items-center ">
              <Button
                variant="destructive"
                size="lg"
                className="mt-4 border border-black shadow-md"
                onClick={()=>{alert("We are currently working on it ... plz check after some time")}}
              >
                Read More !
              </Button>
            </div>
          </div>
        )}
        {
            isNavButtonClicked === "SubmitMenuscript" && (
                <div className="p-4">
                <h2 className="text-xl font-bold mb-2">Online Submission Portal:</h2>
                <ul className="list-disc ml-4">
                  <li>Access Link: [Submit Manuscript]</li>
                  <li>User Registration: New users must register for an account. Existing users can log in with their credentials.</li>
                  <li>Submission Form: Fill out the required fields, including manuscript title, abstract, keywords, and author details.</li>
                  <li>File Upload: Upload the manuscript file and any supplementary materials.</li>
                  <li>Cover Letter: Include a cover letter as part of the submission.</li>
                </ul>
          
                <h2 className="text-xl font-bold mb-2">Submission Checklist:</h2>
                <ul className="list-disc ml-4">
                  <li>Manuscript file in the correct format.</li>
                  <li className=" text-gray-600/80">Cover letter with the necessary details.</li>
                  <li className=" text-gray-700/60">High-quality figures and tables.</li>
                  <li className=" text-gray-700/40">Compliance with ethical guidelines.</li>
                  <li className=" text-gray-700/20">All authors' contributions and conflicts of interest disclosed.</li>
                </ul>
          
                
                <div className="w-full h-fit flex justify-center items-center">
                    <Button
                        variant="destructive"
                        size="lg"
                        className="mt-4 border border-black shadow-md"
                        onClick={()=>{alert("We are currently working on it ... plz check after some time")}}
                    >
                        Read More
                    </Button>
                </div>
              </div>
            
            )
        }
      </div>
    </div>
  );
}

export default AuthorGuideline;
