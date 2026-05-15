"use client";
import { Icon } from "./Icon";
import { Button } from "./Button";

const NAV_LINKS = ["Lehrgänge", "Über uns", "IHK-Zertifikat", "Unternehmen", "Blog", "Kontakt"];

interface TopNavProps {
  active?: string;
  cartCount?: number;
}

export function TopNav({ active = "Lehrgänge", cartCount = 0 }: TopNavProps) {
  return (
    <header style={{
      position: "sticky", top: 0, zIndex: 50,
      background: "#fff",
      borderBottom: "1px solid var(--border-1)",
    }}>
      <div style={{
        maxWidth: 1280, margin: "0 auto",
        padding: "18px 32px",
        display: "grid",
        gridTemplateColumns: "auto 1fr auto",
        alignItems: "center",
        gap: 32,
      }}>
        {/* Logo */}
        <a href="/" aria-label="thekey.ACADEMY home">
          <div style={{
            fontFamily: "var(--font-display)",
            fontWeight: 900,
            fontSize: 18,
            letterSpacing: "0.01em",
            color: "var(--tk-brand-900)",
            display: "flex",
            alignItems: "center",
            gap: 0,
          }}>
            <span>thekey</span>
            <span style={{ color: "var(--tk-green-100)" }}>.</span>
            <span style={{ letterSpacing: "0.14em" }}>ACADEMY</span>
          </div>
        </a>

        {/* Nav links */}
        <nav style={{ display: "flex", gap: 32, justifyContent: "center" }}>
          {NAV_LINKS.map((l) => (
            <a
              key={l}
              href="#"
              style={{
                fontSize: 14, fontWeight: 700,
                color: active === l ? "var(--tk-brand-700)" : "var(--fg-1)",
                fontFamily: "var(--font-body)",
                transition: "color 120ms ease",
                textDecoration: "none",
              }}
            >
              {l}
            </a>
          ))}
        </nav>

        {/* CTA cluster */}
        <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
          <Button size="md" variant="primary">Login</Button>
          <button
            style={{
              width: 44, height: 44, borderRadius: 999,
              display: "flex", alignItems: "center", justifyContent: "center",
              color: "var(--fg-1)", cursor: "pointer",
              background: "transparent", border: 0,
              position: "relative",
            }}
            aria-label="Warenkorb"
          >
            <Icon name="cart" size={22} />
            {cartCount > 0 && (
              <span style={{
                position: "absolute", top: -2, right: -2,
                background: "var(--tk-green-100)", color: "#fff",
                borderRadius: 999, fontSize: 10, fontWeight: 800,
                minWidth: 18, height: 18, padding: "0 5px",
                display: "inline-flex", alignItems: "center", justifyContent: "center",
              }}>{cartCount}</span>
            )}
          </button>
        </div>
      </div>
    </header>
  );
}
