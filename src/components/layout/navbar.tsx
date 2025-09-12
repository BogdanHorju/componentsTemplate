"use client";

import { ModeToggle } from "@/components/mode-toggle";
import Link from "next/link";

export function Navbar() {
  return (
    <header className="sticky top-0 z-40 border-b bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto max-w-6xl px-4 h-14 flex items-center justify-between">
        <span className="font-semibold">UI Sandbox</span>
        <nav className="flex space-x-4">
          <Link href="/" className="hover:underline">
            Home
          </Link>
          <Link href="/create-template" className="hover:underline">
            Crea Template
          </Link>
        </nav>
        <ModeToggle />
      </div>
    </header>
  );
}
