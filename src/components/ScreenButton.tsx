import { useEffect, useState } from "react";
import { Switch } from "./ui/switch";
import { Label } from "./ui/label";
import axios from "axios";

export function ScreenAction() {
  const [isChecked, setIsChecked] = useState(false);

  useEffect(() => {
    const saveButton = document.querySelector(".btn-saving");
    const handleSave = async () => {
      if (isChecked) {
        try {
          const propertyId = "123456789";
          const firstName =
            (
              document.querySelector(
                'ui-text[placeholder="First name"] input'
              ) as HTMLInputElement
            )?.value || "";
          const lastName =
            (
              document.querySelector(
                'ui-text[placeholder="Last name"] input'
              ) as HTMLInputElement
            )?.value || "";
          const email =
            (
              document.querySelector(
                'ui-text[placeholder="Email"] input'
              ) as HTMLInputElement
            )?.value || "";
          const phone =
            (
              document.querySelector(
                'ui-text[placeholder="Phone"] input'
              ) as HTMLInputElement
            )?.value || "";

          // Would've used this logic however I get an invalid token message

          const url =
            "https://cove-stage-a687fd333000.herokuapp.com/api/screenings/create";
          const token = import.meta.env.VITE_COVE_TOKEN;

          //   const requestBody = {
          //     applicantFirstName: firstName,
          //     applicantLastName: lastName,
          //     applicantEmail: email,
          //     applicantPhone: phone,
          //     applicantPays: false,
          //     isLiteCheck: false,
          //     propertyId: "6737c1c0af160f7ae2b45f54",
          //   };

          // sample data for testing:
          const requestBody = {
            applicantFirstName: "John",
            applicantLastName: "Doe",
            applicantEmail: "johndoe@example.com",
            applicantPhone: "1234567890",
            applicantPays: false,
            isLiteCheck: false,
            propertyId: "6737c1c0af160f7ae2b45f54",
          };

          if (firstName && lastName && email && phone) {
            try {
              const response = await axios.post(url, requestBody, {
                headers: {
                  "Content-Type": "application/json",
                  Authorization: `Bearer ${token}`,
                },
              });
            } catch (error) {
              console.error("Failed to send screening request:", error);
            }
          }
        } catch (error) {
          console.error("Failed to send screening request:", error);
        }
      }
    };
    saveButton?.addEventListener("click", handleSave);

    return () => {
      saveButton?.removeEventListener("click", handleSave);
    };
  }, [isChecked]);

  return (
    <div className="flex items-center gap-2 rounded-md border p-2">
      <Switch
        id="airplane-mode"
        checked={isChecked}
        onCheckedChange={setIsChecked}
      />
      <Label htmlFor="airplane-mode">Screen</Label>
    </div>
  );
}
