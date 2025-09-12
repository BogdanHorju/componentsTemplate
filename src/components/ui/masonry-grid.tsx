import React from "react";

type MasonryItem = { id: string; content: React.ReactNode };

export function MasonryGrid({ items, colClass = "columns-1 sm:columns-2 lg:columns-3" }: {
  items: MasonryItem[];
  colClass?: string;
}) {
  return (
    <div className={`${colClass} gap-4`}>
      {items.map((item) => (
        <div
          key={item.id}
          className="mb-4 break-inside-avoid rounded-lg border bg-card text-card-foreground shadow-sm"
        >
          {item.content}
        </div>
      ))}
    </div>
  );
}
