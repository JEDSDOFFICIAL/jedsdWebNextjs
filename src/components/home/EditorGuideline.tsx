import React from 'react'
import { Button } from '../ui/button';

function EditorGuideline() {
    const [isNavButtonClicked, setIsNavButtonClicked] = React.useState(
        "PeerReviewProcess"
      );
      const ClickedEvent = (e: string) => {
        setIsNavButtonClicked(e);
      };
    
      return (
        <div className="h-fit w-full flex flex-col justify-center items-start">
          <div className="buttonGroup w-full h-fit flex flex-row md:gap-3 gap-1 justify-around border-b-2 border-gray-900 py-4">
            <Button
              
              className={`
                ${isNavButtonClicked === "PeerReviewProcess" && "bg-blue-500 text-white hover:bg-blue-600"} text-xs p-0.5 md:text-sm md:p-2 lg:text-base lg:p-3   
              `}
              onClick={() => ClickedEvent("PeerReviewProcess")}
              
            >
              Peer Review Process
            </Button>
            <Button
              
              className={`
                ${isNavButtonClicked === "PublicationEthics" && "bg-blue-500 text-white hover:bg-blue-600"} text-xs p-0.5 md:text-sm md:p-2 lg:text-base lg:p-3   
              `}
              onClick={() => ClickedEvent("PublicationEthics")}
            >
              Publication Ethics
            </Button>
            <Button
              
              className={`
                ${isNavButtonClicked === "ConflictofInterest" && "bg-blue-500 text-white hover:bg-blue-600"} text-xs p-0.5 md:text-sm md:p-2 lg:text-base lg:p-3   
              `}
              onClick={() => ClickedEvent("ConflictofInterest")}
            >
              Conflict of Interest
            </Button>
          </div>
    
          <div className="textArea w-full">
            {isNavButtonClicked === "PeerReviewProcess" && (
              <div className="p-4">
              <h1 className="text-2xl font-bold mb-4">Peer Review Process</h1>
        
              <h2 className="text-xl font-bold mb-2">1. Initial Submission:</h2>
              <ul className="list-disc ml-4">
                <li>Manuscript Submission: Authors submit their manuscripts through the online submission system.</li>
                <li>Preliminary Check: The editorial office conducts an initial screening to ensure the manuscript adheres to the journal's formatting and ethical guidelines. Manuscripts that do not meet these criteria are returned to the authors for correction.</li>
              </ul>
        
              <h2 className="text-xl font-bold mb-2">2. Assignment to Associate Editor:</h2>
              <ul className="list-disc ml-4">
                <li>Editor Assignment: The Editor-in-Chief assigns the manuscript to an appropriate Associate Editor based on the manuscript's subject area.</li>
                <li>Reviewer Selection: The Associate Editor selects two or more independent reviewers with expertise in the relevant field.</li>
              </ul>
        
              <h2 className="text-xl font-bold mb-2 text-gray-950/80">3. Peer Review:</h2>
              <ul className="list-disc ml-4">
                <li className='text-gray-950/60'>Double-Blind Review: JEDSD follows a double-blind review process, where both the reviewers and the authors remain anonymous to each other.</li>
                <li className='text-gray-950/40'>Review Criteria: Reviewers evaluate the manuscript based on originality, technical quality, significance, clarity, and relevance to the journal's scope.</li>
                <li className='text-gray-950/20'>Reviewer Reports: Reviewers provide detailed feedback and recommendations: accept, minor revisions, major revisions, or reject.</li>
              </ul>
              <div className='w-full h-fit flex items-center justify-center'>
                <Button variant={"destructive"} size={"lg"} className='mt-4'>Read More</Button>
              </div>
            </div>
            )}
            {isNavButtonClicked === "PublicationEthics" && (
               <div className="p-4">
               <h1 className="text-2xl font-bold mb-4">Ethical Considerations</h1>
         
               <h2 className="text-xl font-bold mb-2">1. Originality and Plagiarism:</h2>
               <ul className="list-disc ml-4">
                 <li>Original Work: All manuscripts must be the original work of the authors and not previously published or under consideration elsewhere.</li>
                 <li>Plagiarism Screening: Manuscripts are checked for plagiarism using specialized software. Any instance of plagiarism will result in the immediate rejection of the manuscript.</li>
               </ul>
         
               <h2 className="text-xl font-bold mb-2">2. Authorship:</h2>
               <ul className="list-disc ml-4">
                 <li>Author Contributions: All listed authors must have made significant contributions to the research and manuscript preparation.</li>
                 <li  className='text-gray-900/85'>Corresponding Author: One author must be designated as the corresponding author, responsible for all communication with the journal.</li>
               </ul>
         
               <h2 className="text-xl font-bold mb-2 text-gray-900/70">3. Data Fabrication and Falsification:</h2>
               <ul className="list-disc ml-4">
                 <li className='text-gray-950/40'>Data Integrity: Authors must ensure that all data presented in the manuscript is accurate and has not been manipulated.</li>
                 <li className='text-gray-950/20'>Raw Data: Authors may be asked to provide raw data for verification purposes.</li>
               </ul>
               <div className='w-full h-fit flex items-center justify-center'>
                <Button variant={"destructive"} size={"lg"} className='mt-4'>Read More</Button>
              </div>
             </div>
            )}
            {
                isNavButtonClicked === "ConflictofInterest" && (
                    <div className="p-4">
                    <h1 className="text-2xl font-bold mb-4">Conflict of Interest</h1>
              
                    <h2 className="text-xl font-bold mb-2">1. Definition:</h2>
                    <ul className="list-disc ml-4">
                      <li>Conflict of Interest: A conflict of interest occurs when there are financial, personal, or professional affiliations that could influence the research or interpretation of the results.</li>
                    </ul>
              
                    <h2 className="text-xl font-bold mb-2">2. Disclosure Requirements:</h2>
                    <ul className="list-disc ml-4">
                      <li className='text-gray-800/80'>Authors: All authors must disclose any potential conflicts of interest in the manuscript, including financial support, employment, consultancies, stock ownership, honoraria, and paid expert testimony.</li>
                      <li className='text-gray-800/70'>Reviewers: Reviewers must disclose any potential conflicts of interest before accepting a review assignment. If a conflict of interest is identified, the reviewer will be recused from the review process.</li>
                    </ul>
              
                    <h2 className="text-xl font-bold mb-2 text-gray-800/50">3. Editorial Board:</h2>
                    <ul className="list-disc ml-4 text-gray-800/30">
                      <li>Transparency: Editorial board members must disclose any potential conflicts of interest related to the manuscripts they handle. Board members will be recused from handling manuscripts where a conflict of interest exists.</li>
                    </ul>
                    <div className='w-full h-fit flex items-center justify-center'>
                <Button variant={"destructive"} size={"lg"} className='mt-4'>Read More</Button>
              </div>
                  </div>
                )
            }
          </div>
        </div>
      );
}

export default EditorGuideline