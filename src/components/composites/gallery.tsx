"use client";

import * as React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

type Photo = { src: string; alt: string; caption?: string };

export function Gallery({ images }: { images: Photo[] }) {
  const [open, setOpen] = React.useState(false);
  const [index, setIndex] = React.useState(0);

  function openAt(i: number) {
    setIndex(i);
    setOpen(true);
  }

  React.useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "ArrowLeft") {
        setIndex((i) => Math.max(0, i - 1));
      } else if (event.key === "ArrowRight") {
        setIndex((i) => Math.min(images.length - 1, i + 1));
      }
    }

    if (open) {
      window.addEventListener("keydown", handleKeyDown);
    } else {
      window.removeEventListener("keydown", handleKeyDown);
    }

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [open, images.length]);

  const prefetchImage = (i: number) => {
    if (i >= 0 && i < images.length) {
      const img = document.createElement("img");
      img.src = images[i].src;
    }
  };

  React.useEffect(() => {
    prefetchImage(index + 1);
    prefetchImage(index - 1);
  }, [index]);

  return (
    <div className="space-y-4">
      {/* Thumbnails in carousel */}
      <div className="relative">
        <Carousel className="w-full">
          <CarouselContent className="-ml-2">
            {images.map((img, i) => (
              <CarouselItem key={`${img.src}-${i}`} className="pl-2 basis-1/2 sm:basis-1/3 md:basis-1/4">
                <button
                  onClick={() => openAt(i)}
                  className="group relative block overflow-hidden rounded-lg border bg-muted/30"
                  aria-label={`Apri ${img.alt}`}
                >
                  <div className="relative aspect-[4/3]">
                    <Image
                      src={img.src}
                      alt={img.alt}
                      fill
                      sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
                      className="object-cover transition-transform duration-300 group-hover:scale-105 border border-red-500"
                      onError={(e) => {
                        console.error(`Errore nel caricamento dell'immagine: ${img.src}`);
                        (e.target as HTMLImageElement).src = "/images/fallback.jpg";
                      }}
                      onLoad={() => console.log(`Immagine caricata correttamente: ${img.src}`)}
                    />
                  </div>
                </button>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>

      {/* Lightbox */}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-4xl">
          <DialogTitle className="sr-only">{images[index]?.alt ?? "Immagine"}</DialogTitle>
          <DialogDescription className="sr-only">
            Galleria immagini con navigazione tastiera
          </DialogDescription>

          <div className="relative">
            <div className="relative aspect-video bg-black/50 rounded-md overflow-hidden">
              <Image
                src={images[index]?.src ?? ""}
                alt={images[index]?.alt ?? ""}
                fill
                sizes="80vw"
                className="object-contain"
                priority
              />
            </div>

            <div className="mt-2 flex items-center justify-between text-sm">
              <span className="opacity-70">
                {index + 1} / {images.length}
              </span>
              <div className="space-x-2">
                <Button
                  variant="outline"
                  onClick={() => setIndex((i) => Math.max(0, i - 1))}
                  disabled={index === 0}
                >
                  Prev
                </Button>
                <Button
                  variant="outline"
                  onClick={() => setIndex((i) => Math.min(images.length - 1, i + 1))}
                  disabled={index === images.length - 1}
                >
                  Next
                </Button>
              </div>
            </div>

            {images[index]?.caption && (
              <p className="mt-1 text-sm opacity-80">{images[index]?.caption}</p>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
