"use client";

import { ModeToggle } from "@/components/mode-toggle";
import { Button } from "@/components/ui/button";
import Link from "next/link";

// Importa i file di traduzione
import en from "@/locales/en.json";
import it from "@/locales/it.json";

// Simula la lingua selezionata (puoi sostituirla con un sistema dinamico)
const currentLocale = "it"; // Cambia in "en" per inglese
const translations = currentLocale === "it" ? it : en;

import { Navbar } from "@/components/layout/navbar";
import { Sidebar } from "@/components/layout/sidebar";
import { ButtonDemo } from "@/components/demos/button-demo";
import { sections } from "@/constants/sections";
import { buttonData } from "@/constants/buttonData";
import { gallery } from "@/constants/gallery";
import { InputDemo } from "@/components/demos/input-demo";
import { SelectDemo } from "@/components/demos/select-demo";
import { ComboboxDemo } from "@/components/demos/combobox-demo";
import { DropdownMenuDemo } from "@/components/demos/dropdown-menu-demo";
import { ImageCardDemo } from "@/components/demos/image-card-demo";
import { CarouselDemo } from "@/components/demos/carousel-demo";
import { HoverCardDemo } from "@/components/demos/hover-card-demo";
import { MasonryGalleryDemo } from "@/components/demos/masonry-gallery-demo";
import { FancyImageCard } from "@/components/composites/fancy-image-card";
import GalleryDemo from "@/components/demos/gallery-demo";

// Aggiunta del tipo esplicito per translations
const t = (k: keyof typeof translations) => translations[k] ?? k;

const updatedSections = [
  { id: "combobox", label: "Combobox" },
  { id: "image-card", label: "Image Card" },
  { id: "carousel", label: "Carousel" },
];

const extendedSections = [
  ...sections,
  ...updatedSections,
  { id: "masonry-grid", label: "Masonry Grid" },
  { id: "hover-card", label: "Hover Card" },
  { id: "gallery", label: "Gallery" },
];

const galleryImages = [
  { src: "/images/2.JPG", alt: "Image 1" },
  { src: "/images/2.JPG", alt: "Image 2" },
  { src: "/images/2.JPG", alt: "Image 3" },
  { src: "/images/2.JPG", alt: "Image 4" },
];

const fancyImageCardData = {
  image: { src: "/images/2.JPG", alt: "Example Image" },
  title: "Esempio di Fancy Image Card",
  category: "Categoria",
  onOpen: () => alert("Azione Apri eseguita!"),
};

export default function Page() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <div className="mx-auto max-w-6xl px-4 py-6 grid grid-cols-1 md:grid-cols-[220px_1fr] gap-6">
        <Sidebar />
        <main className="space-y-10">
          <header className="mb-8">
            <h1 className="text-3xl font-bold">Benvenuto nella UI Sandbox</h1>
            <p className="text-lg opacity-80">
              Esplora i componenti e le loro varianti per costruire interfacce utente moderne.
            </p>
          </header>
          {extendedSections.map(({ id, label }) => (
            <section key={id} id={id} className="space-y-6">
              <div className="space-y-2">
                <h2 className="text-2xl font-semibold">{label}</h2>
                <p className="text-sm opacity-80">
                  {id === "hover-card"
                    ? "Anteprima immagine al passaggio del mouse, con titolo e azioni rapide."
                    : id === "input"
                      ? "Campi di inserimento con etichette e stati."
                      : `Varianti base del componente ${label}.`}
                </p>
              </div>
              <div className="border rounded-lg p-4 bg-muted">
                {id === "button" && <ButtonDemo items={buttonData} t={t} />}
                {id === "input" && <InputDemo />}
                {id === "dropdown" && <DropdownMenuDemo />}
                {id === "select" && <SelectDemo />}
                {id === "combobox" && <ComboboxDemo />}
                {id === "image-card" && <FancyImageCard {...fancyImageCardData} />}
                {id === "carousel" && <CarouselDemo />}
                {id === "masonry-grid" && <MasonryGalleryDemo />}
                {id === "hover-card" && <HoverCardDemo />}
                {id === "gallery" && <GalleryDemo />}
              </div>
            </section>
          ))}
        </main>
      </div>
    </div>
  );
}
