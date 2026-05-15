import { Button } from "./Button";
import { Icon } from "./Icon";

export function Hero() {
  return (
    <section style={{ background: "#fff", padding: "64px 0 80px" }}>
      <div style={{
        maxWidth: 1240, margin: "0 auto", padding: "0 32px",
        display: "grid", gridTemplateColumns: "1fr 1.05fr",
        gap: 56, alignItems: "center",
      }}>
        {/* Copy */}
        <div>
          {/* IHK Badge */}
          <div style={{
            display: "inline-flex", alignItems: "center", gap: 12,
            padding: "10px 14px",
            border: "1px solid var(--border-2)",
            borderRadius: 14,
            background: "#fff",
            marginBottom: 28,
            boxShadow: "var(--shadow-xs)",
          }}>
            <div style={{
              width: 44, height: 44, borderRadius: 8,
              background: "#fff", border: "1px solid #d7dade",
              display: "flex", alignItems: "center", justifyContent: "center",
              fontFamily: "var(--font-display)",
              fontWeight: 800, color: "var(--tk-info)", fontSize: 14,
            }}>
              IHK
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 4, lineHeight: 1.25 }}>
              <span style={{ fontSize: 11, color: "var(--fg-3)", whiteSpace: "nowrap" }}>IHK-Projektgesellschaft mbH</span>
              <span style={{ fontSize: 11, fontWeight: 800, letterSpacing: "0.14em", color: "var(--fg-1)", whiteSpace: "nowrap" }}>OSTBRANDENBURG</span>
            </div>
          </div>

          {/* Headline */}
          <h1 style={{
            fontFamily: "var(--font-display)",
            fontWeight: 800, fontSize: 72,
            letterSpacing: "-0.025em", lineHeight: 1.02,
            color: "var(--tk-brand-900)", margin: 0,
          }}>
            Unsere<br />Lehrgänge
          </h1>

          <p style={{
            marginTop: 24, maxWidth: 460,
            fontFamily: "var(--font-body)", fontSize: 18, lineHeight: 1.55,
            color: "var(--fg-2)",
          }}>
            Finde deine Online-Weiterbildung und hol dir dein IHK-Zertifikat – flexibel, digital, in deinem Tempo.
          </p>

          <div style={{ display: "flex", gap: 12, marginTop: 32 }}>
            <Button variant="primary" size="lg" iconRight="chevron">Lehrgänge entdecken</Button>
            <Button variant="ghost" size="lg">So funktioniert's</Button>
          </div>
        </div>

        {/* Device illustration */}
        <div style={{ position: "relative", aspectRatio: "11 / 8", width: "100%" }}>
          {/* Phone */}
          <div style={{
            position: "absolute", left: "6%", bottom: 0,
            width: "30%", aspectRatio: "9 / 19",
            borderRadius: 30, background: "#1c1c20",
            padding: 8, boxShadow: "0 18px 48px rgba(14,23,35,0.18)", zIndex: 2,
          }}>
            <div style={{
              height: "100%", borderRadius: 22,
              background: "linear-gradient(180deg, #291371 0%, #5327e6 100%)",
              display: "flex", flexDirection: "column",
              alignItems: "center", justifyContent: "center", gap: 8,
              color: "#fff", fontFamily: "var(--font-display)", fontWeight: 800,
              fontSize: 13, padding: 12, textAlign: "center", lineHeight: 1.2,
            }}>
              <Icon name="medal" size={32} color="var(--tk-green-100)" />
              <span>Glückwunsch!</span>
              <span style={{ fontSize: 9, opacity: 0.85, fontWeight: 600 }}>Modul abgeschlossen</span>
            </div>
          </div>

          {/* Laptop */}
          <div style={{
            position: "absolute", inset: "6% 0 0 14%", width: "86%",
          }}>
            <div style={{
              aspectRatio: "16 / 10", background: "#0e1723",
              borderRadius: "12px 12px 4px 4px", padding: 10,
              boxShadow: "0 24px 60px rgba(14,23,35,0.22)",
            }}>
              <div style={{
                height: "100%", borderRadius: 6, overflow: "hidden",
                background: "linear-gradient(135deg, var(--tk-brand-900) 0%, #5327e6 50%, #379fb7 100%)",
                position: "relative",
                display: "flex", alignItems: "center", justifyContent: "center",
              }}>
                {/* Play button */}
                <div style={{
                  width: 64, height: 64, borderRadius: 999,
                  background: "rgba(255,255,255,0.92)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  boxShadow: "0 8px 24px rgba(0,0,0,0.2)",
                }}>
                  <Icon name="play" size={26} color="var(--tk-brand-900)" />
                </div>
                <div style={{
                  position: "absolute", left: 12, bottom: 12,
                  background: "rgba(0,0,0,0.45)", color: "#fff",
                  padding: "4px 10px", borderRadius: 999, fontSize: 11, fontWeight: 700,
                }}>
                  Modul 03 · Einführung
                </div>
              </div>
            </div>
            <div style={{
              height: 14, background: "#cdd2dc",
              borderRadius: "2px 2px 12px 12px",
              width: "112%", marginLeft: "-6%",
            }} />
          </div>
        </div>
      </div>
    </section>
  );
}
