// components/demos/button-demo.tsx
"use client";
import { Button } from "@/components/ui/button";
import translations from "@/locales/it.json";
// eslint-disable-next-line @typescript-eslint/no-explicit-any
type Item = { key: keyof typeof translations; variant?: any };

export function ButtonDemo({
  items,
  t,
}: {
  items: Item[];
  t: (k: keyof typeof translations) => string;
}) {
  return (
    <div className="flex flex-wrap items-center gap-3">
      {items.map(({ key, variant }) => (
        // eslint-disable-next-line
        <Button key={key as string} variant={variant}>
          {t(key)}
        </Button>
      ))}
    </div>
  );
}
