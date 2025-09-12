// src/constants/sections.ts
export const sections = [
  { id: "button", label: "Button" },
  { id: "input", label: "Input" },
  { id: "dropdown", label: "Dropdown" },
  { id: "select", label: "Select" },
];

export const updatedSections = [
  { id: "combobox", label: "Combobox" },
  { id: "image-card", label: "Image Card" },
  { id: "carousel", label: "Carousel" },
];

export const extendedSections = [
  ...sections,
  ...updatedSections,
  { id: "masonry-grid", label: "Masonry Grid" },
  { id: "hover-card", label: "Hover Card" }, // nuova voce
  { id: "gallery", label: "Gallery" },
];
