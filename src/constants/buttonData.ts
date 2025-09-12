type TranslationKey = "confirm" | "continue" | "delete" | "edit" | "cancel" | "learn_more";

type ButtonData = {
  key: TranslationKey; // Identificatore univoco per la traduzione
  label: string; // Testo del pulsante (fallback o descrittivo)
  variant: "default" | "secondary" | "destructive" | "outline" | "ghost" | "link"; // Variante del pulsante
};

export const buttonData: ButtonData[] = [
  { key: "confirm", label: "Confirm", variant: "default" },
  { key: "continue", label: "Continue", variant: "secondary" },
  { key: "delete", label: "Delete", variant: "destructive" },
  { key: "edit", label: "Edit", variant: "outline" },
  { key: "cancel", label: "Cancel", variant: "ghost" },
  { key: "learn_more", label: "Learn More", variant: "link" },
];