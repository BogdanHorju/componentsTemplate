type ButtonVariant = "default" | "secondary" | "destructive" | "outline" | "ghost" | "link";

export const buttonVariants: { label: string; variant: ButtonVariant }[] = [
  { label: "Default", variant: "default" },
  { label: "Secondary", variant: "secondary" },
  { label: "Destructive", variant: "destructive" },
  { label: "Outline", variant: "outline" },
  { label: "Ghost", variant: "ghost" },
  { label: "Link", variant: "link" },
];