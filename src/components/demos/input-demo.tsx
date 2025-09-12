"use client";

import * as React from "react";
import { Input } from "@/components/ui/input";
import { InputField } from "@/components/composites/input-field";

export function InputDemo() {
  const [email, setEmail] = React.useState("");
  const [pwd, setPwd] = React.useState("");

  return (
    <div className="grid gap-6 max-w-md">
      {/* Primitives semplici */}
      <div className="grid gap-2">
        <label className="text-sm opacity-80">Semplice</label>
        <Input placeholder="Testo..." />
      </div>

      {/* Composito riusabile */}
      <InputField
        id="email"
        label="Email"
        type="email"
        placeholder="nome@dominio.com"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        description="Usa un indirizzo valido"
      />

      <InputField
        id="password"
        label="Password"
        type="password"
        placeholder="••••••••"
        value={pwd}
        onChange={(e) => setPwd(e.target.value)}
        required
        description="Minimo 8 caratteri"
        error={pwd && pwd.length < 8 ? "Password troppo corta" : undefined}
      />

      <InputField
        id="disabled"
        label="Campo disabilitato"
        placeholder="Non modificabile"
        disabled
      />
    </div>
  );
}
