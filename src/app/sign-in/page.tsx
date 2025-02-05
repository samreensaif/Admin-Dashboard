"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { signIn } from "@/services/auth";

export default function SignIn() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const result = await signIn(username, password);
    if (result.success) {
      router.push("/");
    } else {
      setError(result.message || '');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 px-4">
      <Card className="w-full max-w-[320px] xsm:max-w-[400px] sm:max-w-[480px] md:max-w-[520px] lg:max-w-[600px] p-4 md:p-6 lg:p-8 shadow-lg">
        <CardHeader>
          <CardTitle className="text-xl xsm:text-2xl sm:text-3xl font-bold text-center">Sign In</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <Input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              className="p-2 text-sm sm:text-base"
            />
            <Input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="p-2 text-sm sm:text-base"
            />
            {error && <p className="text-red-500 text-xs sm:text-sm">{error}</p>}
            <Button type="submit" className="w-full py-2 text-sm sm:text-base">
              Sign In
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
