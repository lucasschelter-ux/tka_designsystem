"use client";
import { useState } from "react";

const CATEGORIES = [
  "Führung & Transformation",
  "KI & digitale Kompetenzen",
  "Selbstführung & Resilienz",
  "Menschen & Wirkung",
  "Marketing & Vertrieb",
  "Prozesse & Qualität",
];

export function Categories() {
  const [active, setActive] = useState<string | null>(null);

  return (
    <section style={{ padding: "72px 0 88px", background: "var(--tk-shade-50)" }}>
      <div style={{ maxWidth: 1240, margin: "0 auto", padding: "0 32px" }}>
        <h2 style={{
          fontFamily: "var(--font-display)", fontWeight: 800,
          fontSize: 36, color: "var(--tk-brand-900)",
          letterSpacing: "-0.02em", margin: 0,
        }}>
          Lehrgangs-Kategorien
        </h2>
        <p style={{
          marginTop: 12, marginBottom: 32,
          fontSize: 16, color: "var(--fg-2)",
          maxWidth: 720, lineHeight: 1.55,
        }}>
          Unsere Online-Weiterbildungen decken 6 Themenbereiche ab. Wähle die Kategorie, die zu dir passt und entwickle dich gezielt weiter.
        </p>
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(6, 1fr)",
          gap: 14,
        }}>
          {CATEGORIES.map((cat) => {
            const isActive = active === cat;
            return (
              <button
                key={cat}
                onClick={() => setActive(isActive ? null : cat)}
                style={{
                  background: isActive ? "var(--tk-brand-100)" : "#fff",
                  border: `1px solid ${isActive ? "var(--tk-brand-700)" : "var(--border-2)"}`,
                  borderRadius: 14,
                  padding: "22px 16px",
                  textAlign: "center",
                  fontWeight: 700, fontSize: 14,
                  color: "var(--tk-brand-900)",
                  cursor: "pointer", lineHeight: 1.3,
                  fontFamily: "var(--font-body)",
                  transition: "box-shadow 140ms ease, transform 140ms ease, border-color 140ms ease, background 140ms ease",
                }}
                onMouseEnter={(e) => {
                  if (isActive) return;
                  e.currentTarget.style.boxShadow = "var(--shadow-md)";
                  e.currentTarget.style.transform = "translateY(-1px)";
                  e.currentTarget.style.borderColor = "var(--tk-brand-500)";
                }}
                onMouseLeave={(e) => {
                  if (isActive) return;
                  e.currentTarget.style.boxShadow = "none";
                  e.currentTarget.style.transform = "none";
                  e.currentTarget.style.borderColor = "var(--border-2)";
                }}
              >
                {cat}
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
