import React from 'react'
import { Button } from '../ui/button';

function ReviewerGuideline() {
    const [isNavButtonClicked, setIsNavButtonClicked] = React.useState(
        "Guideline"
      );
      const ClickedEvent = (e: string) => {
        setIsNavButtonClicked(e);
      };
    
      return (
        <div className="h-fit w-full flex flex-col justify-center items-start">
          <div className="buttonGroup w-full h-fit flex flex-row gap-3 justify-around border-b-2 border-gray-900 py-4">
            <Button
              className={`
                ${isNavButtonClicked === "Guideline" && "bg-blue-500 text-white hover:bg-blue-600"} text-xs p-0.5 md:text-sm md:p-2 lg:text-base lg:p-3   
              `}
              onClick={() => ClickedEvent("Guideline")}
              
            >
              Reviewer Guideline
            </Button>
            <Button
              
              className={`
                ${isNavButtonClicked === "Templates" && "bg-blue-500 text-white hover:bg-blue-600"} text-xs p-0.5 md:text-sm md:p-2 lg:text-base lg:p-3   
              `}
              onClick={() => ClickedEvent("Templates")}
            >
              Reviewer Templates
            </Button>
           
          </div>
    
          <div className="textArea w-full">
            {isNavButtonClicked === "Guideline" && (
              <div className="p-4">
              <h1 className="text-xl font-bold mb-4">Reviewer Guidelines</h1>
        
              <h2 className="text-lg font-bold mb-2">1. Invitation to Review:</h2>
              <ul className="list-disc ml-4 text-base">
                <li>Review Assignment: When selected to review a manuscript, you will receive an invitation via email with the manuscript title, abstract, and a link to accept or decline the invitation.</li>
                <li>Acceptance: Upon accepting the invitation, you will gain access to the full manuscript and review materials through our online submission system.</li>
              </ul>
        
              <h2 className="text-lg font-bold mb-2">2. Review Process:</h2>
              <ul className="list-disc ml-4 text-base">
                <li className='text-gray-800/90'>Confidentiality: Manuscripts under review must be treated as confidential documents. Do not share or discuss the manuscript with others except with the journal's editorial team.</li>
                <li className='text-gray-800/80'>Objective Evaluation: Provide an objective and constructive critique of the manuscript. Personal remarks or unprofessional language are unacceptable.</li>
                <li className='text-gray-800/70'>Timeliness: Complete the review within the stipulated timeframe (typically 2-3 weeks). If additional time is needed, please inform the editorial office as soon as possible.</li>
                <li className='text-gray-800/60'>Conflict of Interest: Disclose any potential conflicts of interest before agreeing to review. If a conflict arises during the review process, notify the editorial office immediately.</li>
              </ul>
        
              <div className='w-full h-fit flex items-center justify-center'>
                <Button variant={"destructive"} size={"lg"} className='mt-4'>Read More</Button>
              </div>
            </div>
            )}
            {isNavButtonClicked === "Templates" && (
                <div className="p-4">
                <h1 className="text-2xl font-bold mb-4">Reviewer Resources</h1>
          
                <h2 className="text-xl font-bold mb-2">1. Reviewer Guidelines Document:</h2>
                <ul className="list-disc ml-4">
                  <li>Downloadable Guide: A comprehensive PDF guide with detailed instructions and best practices for reviewing manuscripts.</li>
                </ul>
          
                <h2 className="text-xl font-bold mb-2">2. Online Submission System:</h2>
                <ul className="list-disc ml-4">
                  <li>Access Link: Reviewer Login</li>
                  <li>Instructions: Step-by-step instructions for using the online submission and review system.</li>
                </ul>
          
                <h2 className="text-xl font-bold mb-2">3. Reviewer Training:</h2>
                <ul className="list-disc ml-4 text-gray-500/70">
                  <li>Webinars: Periodic webinars on effective reviewing techniques, ethical considerations, and updates in the field.</li>
                  <li>Workshops: On-demand online workshops for new and experienced reviewers.</li>
                </ul>
          
                <h2 className="text-xl font-bold mb-2 text-gray-700/50">4. Ethical Guidelines:</h2>
               <div className='w-full h-fit flex items-center justify-center'>
                <Button variant={"destructive"} size={"lg"} className='mt-4'>Read More</Button>
              </div>
             </div>
            )}
           
          </div>
        </div>
      );
}

export default ReviewerGuideline