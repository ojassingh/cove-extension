import { atomWithStorage } from "jotai/utils";
import { atom } from "jotai";

export const isAuthenticatedAtom = atomWithStorage<boolean>(
  "isAuthenticated",
  false
);
