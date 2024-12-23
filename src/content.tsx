import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { AccountDialog } from "./components/AccountDialog";

const CoveAccountInfo = () => {
  return (
    <>
      <AccountDialog />
    </>
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
