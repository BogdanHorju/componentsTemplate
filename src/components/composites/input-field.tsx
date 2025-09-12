"use client";

import * as React from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

type InputFieldProps = {
  id: string;
  label: string;
  type?: React.InputHTMLAttributes<HTMLInputElement>["type"];
  placeholder?: string;
  value?: string;
  defaultValue?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  description?: string;
  error?: string;
  required?: boolean;
  disabled?: boolean;
};

export function InputField({
  id,
  label,
  type = "text",
  placeholder,
  value,
  defaultValue,
  onChange,
  description,
  error,
  required,
  disabled,
}: InputFieldProps) {
  const describedBy = [
    description ? `${id}-desc` : null,
    error ? `${id}-err` : null,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className="grid gap-2">
      <div className="flex items-baseline justify-between">
        <Label htmlFor={id} className="text-sm">
          {label}
          {required && <span className="ml-1 text-destructive">*</span>}
        </Label>
        {description && (
          <span id={`${id}-desc`} className="text-xs text-muted-foreground">
            {description}
          </span>
        )}
      </div>
      <Input
        id={id}
        type={type}
        placeholder={placeholder}
        value={value}
        defaultValue={defaultValue}
        onChange={onChange}
        aria-describedby={describedBy || undefined}
        aria-invalid={!!error || undefined}
        required={required}
        disabled={disabled}
        className={error ? "ring-1 ring-destructive focus-visible:ring-destructive" : undefined}
      />
      {error && (
        <p id={`${id}-err`} className="text-xs text-destructive">
          {error}
        </p>
      )}
    </div>
  );
}
