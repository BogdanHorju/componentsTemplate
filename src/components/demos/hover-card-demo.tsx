"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

type Item = {
  src: string;
  alt: string;
  title: string;
  description?: string;
};

const items: Item[] = [
  {
    src: "/images/3.jpg",
    alt: "Alba sulle montagne",
    title: "Monti Azzurri",
    description: "Scatta all'alba sui colli.",
  },
  {
    src: "/images/2.jpg",
    alt: "Strada nel bosco",
    title: "Sentiero di Rovere",
    description: "Foglie e luce radente.",
  },
];

export function HoverCardDemo() {
  return (
    <div className="flex flex-wrap gap-4">
      {items.map((it) => (
        <HoverCard key={it.src} openDelay={150} closeDelay={120}>
          <HoverCardTrigger asChild>
            <button
              className="group relative block overflow-hidden rounded-lg border bg-muted/30"
              aria-label={`Anteprima di ${it.alt}`}
            >
              <div className="relative h-[160px] w-[240px]">
                <Image
                  src={it.src}
                  alt={it.alt}
                  fill
                  sizes="240px"
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
            </button>
          </HoverCardTrigger>
          <HoverCardContent side="top" align="start" sideOffset={8} className="w-80">
            <div className="space-y-2">
              <div>
                <h4 className="font-medium leading-none">{it.title}</h4>
                {it.description && (
                  <p className="text-sm text-muted-foreground">{it.description}</p>
                )}
              </div>
              <div className="relative aspect-[4/3] overflow-hidden rounded-md">
                <Image src={it.src} alt={it.alt} fill sizes="320px" className="object-cover" />
              </div>
              <div className="flex gap-2">
                <Button size="sm" variant="secondary">Apri</Button>
                <Button size="sm" variant="outline">Dettagli</Button>
              </div>
            </div>
          </HoverCardContent>
        </HoverCard>
      ))}
    </div>
  );
}
