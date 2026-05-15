import { Icon } from "./Icon";

const STATS = [
  { icon: "medal",   head: "21 Lehrgänge",       sub: "mit offiziellem IHK-Zertifikat" },
  { icon: "monitor", head: "100 % online",        sub: "inkl. IHK-Leistungsüberprüfung" },
  { icon: "rate",    head: "Ratenzahlung",        sub: "ab 19,78 € im Monat" },
  { icon: "timer",   head: "Schneller Abschluss", sub: "lebenslanger Zugriff" },
] as const;

export function BenefitStats() {
  return (
    <section style={{ padding: "32px 0" }}>
      <div style={{ maxWidth: 1240, margin: "0 auto", padding: "0 32px" }}>
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: 16,
        }}>
          {STATS.map((s) => (
            <div key={s.head} style={{
              background: "var(--tk-brand-900)",
              color: "#fff",
              borderRadius: 20,
              padding: "32px 24px",
              textAlign: "center",
              display: "flex", flexDirection: "column",
              alignItems: "center", gap: 12,
            }}>
              <div style={{
                width: 56, height: 56,
                display: "flex", alignItems: "center", justifyContent: "center",
                color: "var(--tk-green-80)",
                background: "rgba(255,255,255,0.06)",
                borderRadius: 999, marginBottom: 4,
              }}>
                <Icon name={s.icon} size={28} color="var(--tk-green-80)" />
              </div>
              <div style={{
                fontFamily: "var(--font-display)", fontWeight: 800,
                fontSize: 18, lineHeight: 1.2, letterSpacing: "-0.01em",
                minHeight: "2.4em",
                display: "flex", alignItems: "center", justifyContent: "center",
              }}>
                {s.head}
              </div>
              <div style={{ fontSize: 14, lineHeight: 1.4, color: "rgba(255,255,255,0.72)" }}>
                {s.sub}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
