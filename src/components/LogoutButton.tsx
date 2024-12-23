import { useAtomValue, useSetAtom } from "jotai";
import { isAuthenticatedAtom } from "@/context";
import { Button } from "./ui/button";

export function LogoutButton() {
  const isAuthenticated = useAtomValue(isAuthenticatedAtom);
  const setAuthenticated = useSetAtom(isAuthenticatedAtom);
  function handleClick() {
    setAuthenticated(false);
  }

  return (
    <div className="mr-4">
      {isAuthenticated && (
        <Button
        className=""
          onClick={handleClick}
        >
          Logout
        </Button>
      )}
    </div>
  );
}
