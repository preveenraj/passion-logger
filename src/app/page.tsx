"use client";

import Home from "@/components/Home";
import { configure } from "react-hotkeys";

configure({
  ignoreTags: ["TEXTAREA"],
});

export default function App() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between px-12 py-24">
      <Home />
    </main>
  );
}
