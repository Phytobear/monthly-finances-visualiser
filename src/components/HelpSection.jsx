import { useState } from "react";
import SectionWrapper from "./SectionWrapper";
import PosNegButton from "./PosNegButton";

export default function HelpSection() {
  const [helpVisible, setHelpVisible] = useState(false);

  return (
    <>
      {helpVisible ? (
        <>
          {/* This first div is the grey overlay */}
          <div className="fixed top-0 z-20 bg-neu-base/50 backdrop-blur-sm h-screen w-dvw"></div>

          {/* This is our actual Help modal */}
          <div className="fixed bottom-5 right-2 z-50 w-6/12">
            <SectionWrapper>
              <div className="text-gray-700 space-y-4">
                <p className="text-lg">
                  Plan your monthly finances by entering:
                </p>
                <ul className="list-disc pl-5 space-y-2 font-light">
                  <li>Your monthly income</li>
                  <li>Your monthly expenses</li>
                  <li>How much you&apos;d like to save</li>
                </ul>
                <p className="text-sm font-light mt-4">
                  The app figures out your UK Income tax based on 2024-25 tax
                  brackets, personal allowances and NI payments.
                </p>
                <p className="text-sm font-light">
                  Your figures, expenses and savings are only stored on your
                  device.
                </p>
              </div>
              <div className="mt-6">
                <PosNegButton
                  text="Close"
                  onClickFunction={() => setHelpVisible(false)}
                  positive={true}
                />
              </div>
            </SectionWrapper>
          </div>
        </>
      ) : (
        <div className="fixed bottom-2 right-2 z-50">
          <button
            onClick={() => setHelpVisible(true)}
            className="w-10 h-10 rounded-full bg-white/90 text-gray-700 
              shadow-neu-component hover:shadow-neu-pressed
              transition-all duration-200 flex items-center justify-center"
          >
            ?
          </button>
        </div>
      )}
    </>
  );
}
