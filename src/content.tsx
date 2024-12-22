import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

const SayHello = () => {
  const logHello = () => {
    console.log("Hello");
  };

  return (
    <div className="fixed top-4 right-4 z-[999] bg-white shadow-md rounded-lg p-4">
      <div className="space-y-2">
        <button onClick={logHello} className=" text-white">
          Say Hello
        </button>
      </div>
    </div>
  );
};

const container = document.createElement("div");
document.body.appendChild(container);

const root = createRoot(container);
root.render(
  <React.StrictMode>
    <SayHello />
  </React.StrictMode>
);
