import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Votre prochain client est déjà sur Google — Jovan, sites internet & référencement local dans l'Avesnois";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#0f1117",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "56px 80px",
          fontFamily: "system-ui, sans-serif",
          position: "relative",
        }}
      >
        {/* Glow décoratif */}
        <div
          style={{
            position: "absolute",
            top: -100,
            left: 100,
            width: 500,
            height: 500,
            borderRadius: "50%",
            background: "rgba(109, 40, 217, 0.25)",
            filter: "blur(120px)",
          }}
        />

        {/* Badge haut */}
        <div style={{ display: "flex", alignItems: "center" }}>
          <div
            style={{
              background: "rgba(109, 40, 217, 0.3)",
              border: "1px solid rgba(109, 40, 217, 0.6)",
              color: "#c4b5fd",
              padding: "8px 20px",
              borderRadius: 24,
              fontSize: 20,
              fontWeight: 600,
              letterSpacing: 0.3,
            }}
          >
            Sites internet & référencement local · Avesnois
          </div>
        </div>

        {/* Headline */}
        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          <div
            style={{
              fontSize: 66,
              fontWeight: 800,
              color: "white",
              lineHeight: 1.05,
              letterSpacing: -1,
            }}
          >
            Votre prochain client,
          </div>
          <div
            style={{
              fontSize: 66,
              fontWeight: 800,
              color: "#a78bfa",
              lineHeight: 1.05,
              letterSpacing: -1,
            }}
          >
            est déjà sur Google.
          </div>
          <div
            style={{
              fontSize: 26,
              color: "#94a3b8",
              marginTop: 10,
              fontWeight: 400,
            }}
          >
            Pour artisans, commerçants &amp; indépendants de l&apos;Avesnois — Devis 100% gratuit
          </div>
        </div>

        {/* Bas : CTA + URL */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div
            style={{
              background: "#6d28d9",
              color: "white",
              padding: "18px 36px",
              borderRadius: 14,
              fontSize: 26,
              fontWeight: 700,
              letterSpacing: 0.2,
            }}
          >
            Demander un devis gratuit →
          </div>
          <div
            style={{
              color: "#475569",
              fontSize: 20,
              fontWeight: 500,
            }}
          >
            jovanbienvenu.com
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
