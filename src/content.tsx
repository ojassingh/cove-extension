import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { AccountDialog } from "./components/AccountDialog";
import { ScreeningTab } from "./components/ScreeningTab";
import { ScreenAction } from "./components/ScreenButton";

// Sidebar menu logic
const sidebar_menu = document.querySelector(".sidebar-body");

if (sidebar_menu) {
  const cove_account_info = document.createElement("div");
  sidebar_menu.appendChild(cove_account_info);

  const cove_account_info_root = createRoot(cove_account_info);
  cove_account_info_root.render(
    <React.StrictMode>
      <AccountDialog />
    </React.StrictMode>
  );
}

// Screening tab logic in Lead Mangament (/#leadHub)

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

      const leadData = {
        applicantFirstName: (
          document.querySelector(
            'input[ng-model="$ctrl.customer.firstName"]'
          ) as HTMLInputElement
        )?.value,
        applicantLastName: (
          document.querySelector(
            'input[ng-model="$ctrl.customer.lastName"]'
          ) as HTMLInputElement
        )?.value,
        applicantEmail: (
          document.querySelector(
            'input[ng-model="$ctrl.customer.email"]'
          ) as HTMLInputElement
        )?.value,
        applicantPhone: (
          document.querySelector(
            'input[ng-model="$ctrl.customer.phone"]'
          ) as HTMLInputElement
        )?.value,
      };

      screeningTabRoot.render(
        <React.StrictMode>
          <ScreeningTab leadData={leadData} />
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

        createRoot(screenButtonContainer).render(<ScreenAction />);
        // clearInterval(checkForModal);
        // commenting this to keep it endless
      }
    }
  }
}, 100);
