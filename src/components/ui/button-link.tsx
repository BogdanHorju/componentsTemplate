// components/ui/button-link.tsx
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function ButtonLink({ href, variant, children }: any) {
  return (
    <Link href={href} className={buttonVariants({ variant })}>
      {children}
    </Link>
  );
}
