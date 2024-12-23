import { Button } from "./ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";

export function WalletBalance() {
  return (
    <Card className="">
      <CardHeader className="">
        <CardTitle>Wallet Balance</CardTitle>
        <CardDescription>
          Showing total visitors for the last 6 months
        </CardDescription>
        <CardContent className="grid place-content-center gap-2 w-full px-0">
          <h1 className="text-center text-2xl font-bold">$6.93</h1>
          <p className="text-xs text-center">Available credit for reports</p>
          <Button variant="default" className="">
            Refill Wallet
          </Button>
        </CardContent>
      </CardHeader>
    </Card>
  );
}
