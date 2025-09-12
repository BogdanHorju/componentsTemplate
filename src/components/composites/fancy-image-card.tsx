import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export type FancyImageCardProps = {
  image: { src: string; alt: string };
  title: string;
  category: string;
  onOpen: () => void;
};

export function FancyImageCard({ image, title, category, onOpen }: FancyImageCardProps) {
  return (
    <div className="relative overflow-hidden rounded-lg bg-card text-card-foreground shadow-md transition hover:-translate-y-1 hover:shadow-lg">
      {/* Immagine con shimmer skeleton */}
      <div className="relative aspect-video w-full bg-gradient-to-br from-muted/50 to-muted">
        <Image
          src={image.src}
          alt={image.alt}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover"
          placeholder="blur"
          blurDataURL="data:image/svg+xml;base64,..." // Placeholder shimmer
        />
      </div>

      {/* Contenuto */}
      <div className="absolute inset-0 flex flex-col justify-end p-4 bg-gradient-to-t from-black/70 to-transparent">
        <span className="mb-2 inline-block rounded-full bg-primary px-3 py-1 text-xs font-medium text-primary-foreground">
          {category}
        </span>
        <h3 className="text-lg font-semibold leading-tight">{title}</h3>
        <Button
          onClick={onOpen}
          size="sm"
          className="mt-3 w-full bg-white text-black hover:bg-gray-200"
        >
          Apri
        </Button>
      </div>

      {/* Bordo gradiente */}
      <div className="absolute inset-0 rounded-lg border border-transparent bg-gradient-to-br from-primary/50 to-secondary/50 opacity-0 transition hover:opacity-100"></div>
    </div>
  );
}