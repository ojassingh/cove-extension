import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

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
          <p className="sidebar-item-title">Cove Account Info</p>
        </Button>
      </DialogTrigger>
      <DialogContent className="">
        <DialogHeader>
          <DialogTitle className="text-2xl">Cove Account Info</DialogTitle>
          <DialogDescription>
            Check your Cove account information here.
          </DialogDescription>
        </DialogHeader>
        <div className="grid grid-cols-3 gap-4 p-4 border w-full">
          <div className="border rounded-sm p-4">
            <h1>Accepted Reports</h1>
          </div>
          <div className="border rounded-sm p-4">
            <h1>Rejected Reports</h1>
          </div>
          <div className="border rounded-sm p-4">
            <h1>Wallet Balance</h1>
          </div>
          <div className="border rounded-sm p-4">
            <h1>Reports Activity</h1>
          </div>
          <div className="border rounded-sm p-4">
            <h1>Team members (3)</h1>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
