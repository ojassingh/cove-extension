import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { Button } from "./components/ui/button";

const CoveAccountInfo = () => {
  return (
    <Button className="flex items-center gap-2 ml-2 bg-transparent">
      <img
        src="https://i.ibb.co/cJmgcYD/cove-logo-removebg-preview.png"
        className=""
        style={{ height: "30px", width: "30px" }}
      />
      <p className="sidebar-item-title">Cove Account Info</p>
    </Button>
  );
};

const sidebar_menu = document.querySelector(".sidebar-body");

if (sidebar_menu) {
  const cove_account_info = document.createElement("div");
  sidebar_menu.appendChild(cove_account_info);

  const cove_account_info_root = createRoot(cove_account_info);
  cove_account_info_root.render(
    <React.StrictMode>
      <CoveAccountInfo />
    </React.StrictMode>
  );
}
