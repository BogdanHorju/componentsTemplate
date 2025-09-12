"use client";

import * as React from "react";

export function ImageCardDemo() {
  const images = [
    "/images/2.JPG",
    "/images/3.JPG",
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {images.map((src, index) => (
        <div
          key={index}
          className="border rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
        >
          <img
            src={src}
            alt={`Image ${index + 1}`}
            className="w-full h-auto"
          />
          <div className="p-4">
            <h3 className="text-lg font-semibold">Image {index + 1}</h3>
            <p className="text-sm text-gray-600">Description for image {index + 1}.</p>
          </div>
        </div>
      ))}
    </div>
  );
}