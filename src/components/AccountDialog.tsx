import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { AcceptedReports } from "./Charts/AcceptedReports";
import { RejectedReports } from "./Charts/RejectedReports";
import { ReportsActivity } from "./Charts/ReportsActivity";
import { WalletBalance } from "./WalletBalance";
import { TeamMembers } from "./TeamMembers";
import { LogoutButton } from "./LogoutButton";
import { ArrowUpRight } from "lucide-react";

export function AccountDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="flex items-center gap-2 ml-2 bg-transparent">
          <img
            src="https://i.ibb.co/cJmgcYD/cove-logo-removebg-preview.png"
            className=""
            style={{ height: "30px", width: "30px" }}
          />
          <p className="sidebar-item-title">Cove Account Info </p>
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-3xl  z-[999]">
        <DialogHeader className="">
          <DialogTitle className=" flex justify-between items-center">
            <a
              target="_blank"
              href="https://cove-stage.vercel.app"
              className="text-2xl font-bold text-black"
            >
              Your Cove Account Info <ArrowUpRight className="inline-flex" />
            </a>{" "}
            <LogoutButton />
          </DialogTitle>
        </DialogHeader>
        <div className="grid grid-cols-3 gap-4 w-full">
          <AcceptedReports />
          <RejectedReports />
          <WalletBalance />
          <ReportsActivity className="col-span-2" />
          <TeamMembers />
        </div>
      </DialogContent>
    </Dialog>
  );
}
