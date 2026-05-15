const COL_LEHRGAENGE = ["Alle Lehrgänge", "IHK-Zertifikat", "Kategorien", "Beratung"];
const COL_UNTERNEHMEN = ["Über uns", "Für Unternehmen", "Blog", "Karriere"];
const COL_KONTAKT = ["Hilfecenter", "Kontaktformular", "+49 30 12345-678"];

function FooterCol({ title, links }: { title: string; links: string[] }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
      <span style={{
        fontWeight: 800, fontSize: 13, letterSpacing: "0.06em",
        textTransform: "uppercase", color: "rgba(255,255,255,0.6)", marginBottom: 4,
      }}>
        {title}
      </span>
      {links.map((l) => (
        <a key={l} href="#" style={{ fontSize: 14, color: "rgba(255,255,255,0.85)", textDecoration: "none" }}>
          {l}
        </a>
      ))}
    </div>
  );
}

export function Footer() {
  return (
    <footer style={{ background: "var(--tk-brand-900)", color: "#fff", padding: "64px 0 32px" }}>
      <div style={{ maxWidth: 1240, margin: "0 auto", padding: "0 32px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1.4fr 1fr 1fr 1fr", gap: 40 }}>
          {/* Logo col */}
          <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
            <div style={{
              fontFamily: "var(--font-display)", fontWeight: 900,
              fontSize: 20, letterSpacing: "0.01em", color: "#fff",
            }}>
              <span>thekey</span>
              <span style={{ color: "var(--tk-green-100)" }}>.</span>
              <span style={{ letterSpacing: "0.14em" }}>ACADEMY</span>
            </div>
            <p style={{ color: "rgba(255,255,255,0.7)", fontSize: 14, lineHeight: 1.55, maxWidth: 320 }}>
              Online-Weiterbildung mit offiziellem IHK-Zertifikat — flexibel, digital, in deinem Tempo.
            </p>
          </div>
          <FooterCol title="Lehrgänge" links={COL_LEHRGAENGE} />
          <FooterCol title="Unternehmen" links={COL_UNTERNEHMEN} />
          <FooterCol title="Kontakt" links={COL_KONTAKT} />
        </div>

        <div style={{
          marginTop: 56, paddingTop: 24,
          borderTop: "1px solid rgba(255,255,255,0.15)",
          display: "flex", justifyContent: "space-between", alignItems: "center",
          color: "rgba(255,255,255,0.55)", fontSize: 12,
        }}>
          <span>© 2026 thekey.ACADEMY · theKey Group</span>
          <div style={{ display: "flex", gap: 22 }}>
            {["Impressum", "Datenschutz", "AGB"].map((l) => (
              <a key={l} href="#" style={{ color: "inherit", textDecoration: "none" }}>{l}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
