"use client";
import * as React from "react";
import { Check, ChevronsUpDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList,
} from "@/components/ui/command";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";

const frameworks = [
  { value: "react", label: "React" },
  { value: "next", label: "Next.js" },
  { value: "vue", label: "Vue" },
];

export function ComboboxDemo() {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState<string | undefined>(undefined);

  const selected = frameworks.find(f => f.value === value);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button variant="outline" role="combobox" aria-expanded={open} className="w-[240px] justify-between">
          {selected ? selected.label : "Seleziona un framework..."}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[240px] p-0">
        <Command>
          <CommandInput placeholder="Cerca..." />
          <CommandList>
            <CommandEmpty>Nessun risultato.</CommandEmpty>
            <CommandGroup>
              {frameworks.map((f) => (
                <CommandItem
                  key={f.value}
                  value={f.label}
                  onSelect={() => {
                    setValue(f.value);
                    setOpen(false);
                  }}
                >
                  <Check className={cn("mr-2 h-4 w-4", f.value === value ? "opacity-100" : "opacity-0")} />
                  {f.label}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}

const items = ["Apple", "Banana", "Cherry", "Date", "Elderberry"];

export function ComboboxDemo2() {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState("");

  const filteredItems = items.filter((item) =>
    item.toLowerCase().includes(value.toLowerCase())
  );

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <button className="w-[200px] flex justify-between items-center border p-2 rounded">
          {value || "Select an item"}
          <ChevronsUpDown className="ml-2 h-4 w-4" />
        </button>
      </PopoverTrigger>
      <PopoverContent>
        <Command>
          <CommandInput
            placeholder="Search..."
            value={value}
            onValueChange={(val: string) => setValue(val)}
          />
          <CommandList>
            {filteredItems.map((item) => (
              <CommandItem
                key={item}
                onSelect={() => {
                  setValue(item);
                  setOpen(false);
                }}
              >
                {item}
                {value === item && <Check className="ml-auto h-4 w-4" />}
              </CommandItem>
            ))}
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
