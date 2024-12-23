import React, { useState } from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { ArrowUpRight } from "lucide-react";
import { useSetAtom } from "jotai";
import { isAuthenticatedAtom } from "@/context";

const LoginForm: React.FC = () => {
  const setIsAuthenticated = useSetAtom(isAuthenticatedAtom);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Hardcoded credentials
    if (email === "cyril@getcove.co" && password === "12345678") {
      setIsAuthenticated(true);
    } else {
      setError("Invalid email or password.");
    }
  };
  return (
    <div className="fixed top-40 right-10 bg-white p-10 rounded-lg shadow-lg border">
      <div className="flex items-center gap-2">
        <img
          src="https://i.ibb.co/cJmgcYD/cove-logo-removebg-preview.png"
          className=""
          style={{ height: "25px", width: "25px" }}
        />
        <h2 className="font-medium">Login to Cove</h2>
      </div>
      <p className="mt-2">It's time to scale your leasing operations</p>
      <form
        onSubmit={handleSubmit}
        className="grid gap-4 mt-4 p-4 rounded-lg shadow-[0px_5px_10px_2px_#f56565]"
      >
        <Input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <Input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        {error && <p className="text-red-500">{error}</p>}
        <Button type="submit">Login</Button>
      </form>

      <Button className="mt-4" variant="link">
        <a href="https://cove-stage.vercel.app/signup">
          Dont have an account?{" "}
          <span className="underline">
            Sign Up! <ArrowUpRight className="inline-flex" />
          </span>
        </a>
      </Button>
    </div>
  );
};

export default LoginForm;
