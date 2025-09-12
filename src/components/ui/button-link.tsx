// components/ui/button-link.tsx
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
export function ButtonLink({ href, variant, children }: any) {
  return (
    <Link href={href} className={buttonVariants({ variant })}>
      {children}
    </Link>
  );
}
