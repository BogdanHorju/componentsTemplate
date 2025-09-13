// components/ui/button-link.tsx
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import type { VariantProps } from "class-variance-authority";

type ButtonLinkProps = {
  href: string;
  variant?: VariantProps<typeof buttonVariants>["variant"];
  children: React.ReactNode;
};

export function ButtonLink({ href, variant, children }: ButtonLinkProps) {
  return (
    <Link href={href} className={buttonVariants({ variant })}>
      {children}
    </Link>
  );
}
