"use client";

import { extendedSections } from "@/constants/sections";
import { useEffect, useState } from "react";

export function Sidebar() {
  const [activeSection, setActiveSection] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      let currentSection: string | null = null;

      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= 100 && rect.bottom >= 100) {
          currentSection = section.id;
        }
      });

      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSmoothScroll = (id: string) => {
    const target = document.getElementById(id);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <aside className="md:sticky md:top-16 md:self-start">
      <nav className="space-y-1">
        <div className="mb-2 text-sm font-medium uppercase tracking-wide opacity-70">
          Componenti
        </div>
        <ul className="space-y-1">
          {extendedSections.map((s) => (
            <li key={s.id}>
              <button
                onClick={() => handleSmoothScroll(s.id)}
                className={`block rounded px-2 py-1 text-sm hover:bg-accent hover:text-accent-foreground ${activeSection === s.id ? "bg-accent text-accent-foreground" : ""
                  }`}
              >
                {s.label}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}
