"use client";

import { AuthContextProvider } from "./AuthContext";

export default function BaseProviders({ children }: { children: React.ReactNode }) {
  return (
    <>
        <AuthContextProvider>{children}</AuthContextProvider>
    </>
  );
}
