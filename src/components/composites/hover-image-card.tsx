"use client";

import * as React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";

type Action = { label: string; onClick?: () => void; href?: string };
type HoverImageCardProps = {
  src: string;
  alt: string;
  title: string;
  description?: string;
  actions?: Action[];
  blurDataURL?: string; // per placeholder blur
  width?: number;
  height?: number;
  className?: string;
};

export function HoverImageCard({
  src,
  alt,
  title,
  description,
  actions = [],
  blurDataURL,
  width = 320,
  height = 200,
  className,
}: HoverImageCardProps) {
  return (
    <HoverCard openDelay={80} closeDelay={120}>
      <HoverCardTrigger asChild>
        <button
          className={["group relative block overflow-hidden rounded-lg border bg-muted/30", className]
            .filter(Boolean)
            .join(" ")}
          aria-label={`Apri anteprima di ${alt}`}
        >
          <div className="relative" style={{ width, height }}>
            <Image
              src={src}
              alt={alt}
              fill
              sizes={`${width}px`}
              placeholder={blurDataURL ? "blur" : "empty"}
              blurDataURL={blurDataURL}
              className="object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </div>
        </button>
      </HoverCardTrigger>

      <HoverCardContent align="start" side="top" sideOffset={8} className="w-80">
        <Card className="border-0 shadow-none">
          <CardHeader className="pb-2">
            <CardTitle className="text-base">{title}</CardTitle>
            {description && (
              <CardDescription className="text-sm">{description}</CardDescription>
            )}
          </CardHeader>
          <CardContent className="pt-0">
            <div className="relative aspect-[4/3] overflow-hidden rounded-md">
              <Image
                src={src}
                alt={alt}
                fill
                sizes="320px"
                placeholder={blurDataURL ? "blur" : "empty"}
                blurDataURL={blurDataURL}
                className="object-cover"
              />
            </div>
          </CardContent>
          {actions?.length ? (
            <CardFooter className="pt-2 flex gap-2">
              {actions.map((a, i) =>
                a.href ? (
                  <a key={i} href={a.href} className="inline-flex">
                    <Button size="sm" variant="secondary">
                      {a.label}
                    </Button>
                  </a>
                ) : (
                  <Button key={i} size="sm" variant="secondary" onClick={a.onClick}>
                    {a.label}
                  </Button>
                )
              )}
            </CardFooter>
          ) : null}
        </Card>
      </HoverCardContent>
    </HoverCard>
  );
}
