"use client";

import { TemplateBuilder } from "@/components/composites/template-builder";
import { Navbar } from "@/components/layout/navbar";
import Link from "next/link";

export default function CreateTemplatePage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <div className="mx-auto max-w-6xl px-4 py-6">
        <header className="mb-6">
          <h1 className="text-3xl font-bold">Crea il tuo Template</h1>
          <p className="text-lg opacity-80">
            Usa i componenti esistenti per creare un layout personalizzato.
          </p>
        </header>
        <TemplateBuilder />
        <footer className="mt-6">
          <Link href="/" className="text-blue-500 hover:underline">
            Torna alla Home
          </Link>
        </footer>
      </div>
    </div>
  );
}