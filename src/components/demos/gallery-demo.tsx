import { Gallery } from "@/components/composites/gallery";

const galleryImages = [
  { src: "/images/2.JPG", alt: "Image 1" },
  { src: "/images/3.JPG", alt: "Image 2" },
  { src: "/images/2.JPG", alt: "Image 3" },
  { src: "/images/2.JPG", alt: "Image 4" },
];

export default function GalleryDemo() {
  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Gallery Demo</h2>
      <Gallery images={galleryImages} />
    </div>
  );
}