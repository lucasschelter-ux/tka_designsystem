"use client";
import { useEffect, useState } from "react";
import { Button } from "./Button";

function useCountdown(deadlineMs: number) {
  const [now, setNow] = useState(Date.now());
  useEffect(() => {
    const id = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(id);
  }, []);
  const diff = Math.max(0, deadlineMs - now);
  return {
    d: Math.floor(diff / 86400000),
    h: Math.floor((diff % 86400000) / 3600000),
    m: Math.floor((diff % 3600000) / 60000),
    s: Math.floor((diff % 60000) / 1000),
  };
}

const pad = (n: number) => String(n).padStart(2, "0");

export function PromoCountdown() {
  const deadlineMs = Date.now() + (16 * 86400e3 + 2 * 3600e3 + 17 * 60e3);
  const { d, h, m, s } = useCountdown(deadlineMs);

  const Cell = ({ value, label }: { value: number; label: string }) => (
    <div style={{
      background: "rgba(255,255,255,0.18)", borderRadius: 16,
      padding: "12px 22px", textAlign: "center", minWidth: 78,
    }}>
      <div style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: 32, lineHeight: 1 }}>
        {pad(value)}
      </div>
      <div style={{ fontSize: 11, opacity: 0.9, marginTop: 4, letterSpacing: "0.06em" }}>
        {label}
      </div>
    </div>
  );

  return (
    <section style={{
      background: "var(--tk-gradient-promo)",
      color: "#fff", padding: "40px 0",
    }}>
      <div style={{
        maxWidth: 1240, margin: "0 auto", padding: "0 32px",
        display: "grid", gridTemplateColumns: "auto 1fr auto",
        alignItems: "center", gap: 36,
      }}>
        {/* Badge */}
        <div style={{
          width: 130, height: 130, borderRadius: 999,
          background: "radial-gradient(circle at 30% 30%, #ff7bf0 0%, #ff4cb3 30%, #6f00ff 75%, transparent 100%)",
          display: "flex", alignItems: "center", justifyContent: "center",
          boxShadow: "0 0 48px rgba(255,100,220,0.45)",
        }}>
          <div style={{
            width: 96, height: 96, borderRadius: 999,
            background: "#2b0d6e",
            display: "flex", flexDirection: "column",
            alignItems: "center", justifyContent: "center",
            color: "#fff", lineHeight: 1,
          }}>
            <span style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: 32 }}>30%</span>
            <span style={{ fontSize: 10, letterSpacing: "0.14em", fontWeight: 700, marginTop: 6 }}>RABATT</span>
          </div>
        </div>

        {/* Timer */}
        <div>
          <div style={{
            fontFamily: "var(--font-display)", fontWeight: 700,
            fontSize: 26, marginBottom: 14, letterSpacing: "-0.01em",
          }}>
            Weiterbildungs-Mai: 30 % Rabatt — Nur noch heute!
          </div>
          <div style={{ display: "flex", gap: 12 }}>
            <Cell value={d} label="Tage" />
            <Cell value={h} label="Std" />
            <Cell value={m} label="Min" />
            <Cell value={s} label="Sek" />
          </div>
        </div>

        <Button variant="action" size="lg">Zur Aktion</Button>
      </div>
    </section>
  );
}
