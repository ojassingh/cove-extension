import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { AccountDialog } from "./components/AccountDialog";
import { ScreeningTab } from "./components/ScreeningTab";
import { ScreenAction } from "./components/ScreenButton";
import LoginForm from "./components/LoginForm";
import { useAtomValue, useSetAtom } from "jotai";
import { isAuthenticatedAtom } from "./context";

// Auth logic to show the form when not authenticated

const ProtectedComponent: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const isAuthenticated = useAtomValue(isAuthenticatedAtom);

  if (!isAuthenticated) {
    return <LoginForm />;
  }

  return <>{children}</>;
};

// Sidebar menu logic
const sidebar_menu = document.querySelector(".sidebar-body");

if (sidebar_menu) {
  const cove_account_info = document.createElement("div");
  sidebar_menu.appendChild(cove_account_info);

  const cove_account_info_root = createRoot(cove_account_info);
  cove_account_info_root.render(
    <React.StrictMode>
      <ProtectedComponent>
        <AccountDialog />
      </ProtectedComponent>
    </React.StrictMode>
  );
}

// Below lies the screening tab logic in Lead Mangament (/#leadHub)

let leadData = {
  name: "",
  email: "",
};

const checkForRows = setInterval(() => {
  const rows = document.querySelectorAll("tr.leadRow");
  rows.forEach((row) => {
    if (!row.hasAttribute("data-listener")) {
      row.addEventListener("click", () => {
        const nameDiv = row.querySelector(".nameDetails");
        const name = nameDiv?.textContent?.trim() || "";
        const emailLink = row.querySelector(
          'td:nth-child(3) a[href^="mailto:"]'
        );
        const email = emailLink?.textContent?.trim() || "";

        leadData = {
          name,
          email,
        };
      });
      row.setAttribute("data-listener", "true");
    }
  });
}, 100);

const checkForElement = setInterval(() => {
  const notes_tab = document.getElementById("lead-hub-details-top-bar");
  if (notes_tab) {
    const tabs = notes_tab.getElementsByClassName(
      "lead-hub-details-top-bar-item-2"
    );
    const existingScreeningTab = notes_tab.querySelector(".screening-tab");
    if (!existingScreeningTab && tabs.length >= 2) {
      const screeningTabContainer = document.createElement("div");
      screeningTabContainer.className =
        "lead-hub-details-top-bar-item-2 screening-tab";
      tabs[1].after(screeningTabContainer);
      const screeningTabRoot = createRoot(screeningTabContainer);
      screeningTabRoot.render(
        <React.StrictMode>
          <ProtectedComponent>
            <ScreeningTab leadData={leadData} />
          </ProtectedComponent>
        </React.StrictMode>
      );
    }
  }
}, 100);

// Screening button logic when New Lead button is clicked

const checkForModal = setInterval(() => {
  const lead_modal = document.querySelector(".moveInModal");
  if (lead_modal) {
    const actionButtonsContainer =
      lead_modal.querySelector(".d--f.jc--fe.mt-3");

    if (actionButtonsContainer) {
      if (!actionButtonsContainer.querySelector(".screen-action-button")) {
        const screenButtonContainer = document.createElement("div");
        screenButtonContainer.className = "screen-action-button";
        actionButtonsContainer.insertBefore(
          screenButtonContainer,
          actionButtonsContainer.lastElementChild
        );

        createRoot(screenButtonContainer).render(
          <ProtectedComponent>
            <ScreenAction />
          </ProtectedComponent>
        );
      }
    }
  }
}, 100);
