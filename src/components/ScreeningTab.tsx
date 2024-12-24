import { createRoot } from "react-dom/client";
import { useState } from "react";

export function ScreeningTab({ leadData }: { leadData?: any }) {
  console.log(leadData);
  return (
    <div className="flex flex-col">
      <button
        className="flex items-center gap-2"
        onClick={() => {
          const contentDiv = document.getElementById(
            "lead-hub-details-content"
          );
          if (contentDiv) {
            const root = createRoot(contentDiv);
            root.render(<ScreeningContent leadData={leadData} />);
          }
        }}
      >
        <img
          src="https://i.ibb.co/cJmgcYD/cove-logo-removebg-preview.png"
          className=""
          style={{ height: "25px", width: "25px" }}
        />
        <p className="font-medium uppercase">Screening</p>
      </button>
    </div>
  );
}

function ScreeningContent({ leadData }: { leadData?: any }) {
  return (
    <div className="p-4">
      <div className="p-4">
        <h2 className="text-2xl font-semibold text-gray-800 ml-4">
          Screening Information{" "}
          {`for ${leadData.name} with email ${leadData.email}`}
        </h2>
      </div>

      <div className="shadow-lg rounded-lg p-4">
        <img
          style={{ width: "1000px" }}
          className=""
          src="https://i.ibb.co/xMF3vWK/sample-data.png"
        />
      </div>
    </div>
  );
}
