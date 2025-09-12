import { MasonryGallery } from "@/components/composites/masonry-gallery";

const demoImages = [
  { src: "/images/2.JPG", alt: "Image 1" },
  { src: "/images/2.JPG", alt: "Image 2" },
  { src: "/images/2.JPG", alt: "Image 3" },
  { src: "/images/2.JPG", alt: "Image 4" },
];

export function MasonryGalleryDemo() {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold">Esempio di Masonry Gallery</h3>
      <MasonryGallery images={demoImages} />
    </div>
  );
}