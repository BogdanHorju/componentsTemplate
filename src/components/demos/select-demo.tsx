"use client";

import * as React from "react";
import {
  Select, SelectContent, SelectItem, SelectTrigger, SelectValue,
} from "@/components/ui/select";

export function SelectDemo() {
  const [value, setValue] = React.useState<string>("");

  return (
    <Select value={value} onValueChange={(val) => setValue(val)}>
      <SelectTrigger className="w-[200px]">
        <SelectValue placeholder="Seleziona un tema" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="light">Light</SelectItem>
        <SelectItem value="dark">Dark</SelectItem>
        <SelectItem value="system">System</SelectItem>
      </SelectContent>
    </Select>
  );
}
