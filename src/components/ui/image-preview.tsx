"use client";

import React, { useEffect, useState, useCallback } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

type ImagePreviewProps = {
  images: { src: string; alt: string; caption?: string; blurDataURL?: string }[];
  initialIndex: number;
  onClose: () => void;
};

export function ImagePreview({ images, initialIndex, onClose }: ImagePreviewProps) {
  const [index, setIndex] = useState(initialIndex);

  const prev = useCallback(
    () => setIndex((i) => (i - 1 + images.length) % images.length),
    [images.length]
  );
  const next = useCallback(
    () => setIndex((i) => (i + 1) % images.length),
    [images.length]
  );

  // Keyboard navigation
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [next, prev, onClose]);

  const current = images[index];

  return (
    <Dialog open onOpenChange={(o) => !o && onClose()}>
      <DialogContent
        // Panel “premium”
        className="max-w-[min(92vw,1100px)] border-0 p-0 overflow-hidden rounded-xl shadow-2xl bg-background/95 backdrop-blur-sm"
        // Overlay scuro e morbido
        onEscapeKeyDown={(e) => e.stopPropagation()}
      >
        <DialogTitle className="sr-only">{current?.alt ?? "Preview"}</DialogTitle>
        <DialogDescription className="sr-only">
          Anteprima immagine; usa frecce per navigare, ESC per chiudere.
        </DialogDescription>

        {/* Wrapper immagine */}
        <div className="relative bg-black/70">
          <div className="relative mx-auto aspect-video w-full max-h-[80vh]">
            <Image
              src={current?.src ?? ""}
              alt={current?.alt ?? ""}
              fill
              sizes="(max-width: 768px) 92vw, 1100px"
              className="object-contain"
              placeholder={current?.blurDataURL ? "blur" : "empty"}
              blurDataURL={current?.blurDataURL}
              priority
            />
          </div>

          {/* Controlli sovrapposti */}
          <div className="pointer-events-none absolute inset-0 flex items-center justify-between px-2 sm:px-4">
            <button
              aria-label="Precedente"
              onClick={prev}
              className="pointer-events-auto inline-flex h-10 w-10 items-center justify-center rounded-full bg-black/50 text-white backdrop-blur-sm transition hover:bg-black/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
            >
              ‹
            </button>
            <button
              aria-label="Successiva"
              onClick={next}
              className="pointer-events-auto inline-flex h-10 w-10 items-center justify-center rounded-full bg-black/50 text-white backdrop-blur-sm transition hover:bg-black/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
            >
              ›
            </button>
          </div>
        </div>

        {/* Footer tipografico */}
        <div className="flex items-start justify-between gap-4 p-4 sm:p-5">
          <div className="min-w-0">
            <p className="text-sm font-medium leading-tight">{current?.alt}</p>
            {current?.caption && (
              <p className="mt-1 text-xs text-muted-foreground">{current.caption}</p>
            )}
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <span className="text-xs text-muted-foreground">
              {index + 1} / {images.length}
            </span>
            <Button size="sm" variant="outline" onClick={onClose}>
              Chiudi
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
