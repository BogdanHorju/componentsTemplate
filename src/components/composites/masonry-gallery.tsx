import Image from "next/image";
import React, { useState } from "react";
import { ImagePreview } from "@/components/ui/image-preview";

type MasonryGalleryProps = {
  images: { src: string; alt: string }[];
  onSelect?: (index: number) => void;
};

export function MasonryGallery({ images, onSelect }: MasonryGalleryProps) {
  const [previewIndex, setPreviewIndex] = useState<number | null>(null);

  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {images.map((image, index) => (
          <div
            key={index}
            className="relative overflow-hidden rounded-lg"
            style={{ width: "100%", paddingBottom: "75%" }}
            onClick={() => setPreviewIndex(index)}
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
              className="object-cover cursor-pointer"
            />
          </div>
        ))}
      </div>
      {previewIndex !== null && (
        <ImagePreview
          images={images}
          initialIndex={previewIndex}
          onClose={() => setPreviewIndex(null)}
        />
      )}
    </>
  );
}