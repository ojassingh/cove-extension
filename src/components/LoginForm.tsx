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
    <div className="fixed top-20 right-10 bg-white px-10 py-4 rounded-lg shadow-lg border text-black">
      <div className="flex items-center gap-2">
        <img
          src="https://i.ibb.co/cJmgcYD/cove-logo-removebg-preview.png"
          className=""
          style={{ height: "25px", width: "25px" }}
        />
        <h2 className="font-medium text-black">Login to Cove</h2>
      </div>
      <h3 className="!text-black text-sm mt-1 !important">
        It's time to scale your leasing operations
      </h3>

      <form
        onSubmit={handleSubmit}
        className="grid gap-4 mt-4 p-4 rounded-lg shadow-[0px_5px_10px_2px_#f56565]"
      >
        <Input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="bg-white text-black border-gray-300"
          required
        />
        <Input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="bg-white text-black border-gray-300"
          required
        />
        {error && <h3 className="!text-red-500">{error}</h3>}
        <Button type="submit">Login</Button>
      </form>

      <Button className="mt-4" variant="link">
        <a href="https://cove-stage.vercel.app/signup">
          <h3 className="text-black">
            Dont have an account? Sign Up!{" "}
            <ArrowUpRight className="inline-flex" />
          </h3>
        </a>
      </Button>
    </div>
  );
};

export default LoginForm;
