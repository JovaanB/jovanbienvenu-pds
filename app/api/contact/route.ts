import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

export type ContactPayload = {
  prenom: string;
  nom: string;
  email: string;
  telephone: string;
  ville?: string;
  service: string;
  message: string;
};

const SERVICE_LABELS: Record<string, string> = {
  "site-vitrine": "Création de site internet",
  "seo-local": "Référencement local / Google My Business",
  "pack-complet": "Pack complet (site + SEO local)",
  autre: "Autre / Simple renseignement",
};

function validatePayload(body: unknown): body is ContactPayload {
  if (!body || typeof body !== "object") return false;
  const b = body as Record<string, unknown>;
  return (
    typeof b.prenom === "string" &&
    b.prenom.trim().length > 0 &&
    typeof b.nom === "string" &&
    b.nom.trim().length > 0 &&
    typeof b.email === "string" &&
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(b.email) &&
    typeof b.telephone === "string" &&
    b.telephone.trim().length > 0 &&
    typeof b.service === "string" &&
    b.service.trim().length > 0 &&
    typeof b.message === "string" &&
    b.message.trim().length >= 10
  );
}

function buildEmailHtml(payload: ContactPayload): string {
  const serviceLabel = SERVICE_LABELS[payload.service] ?? payload.service;
  const now = new Date().toLocaleString("fr-FR", {
    timeZone: "Europe/Paris",
    dateStyle: "full",
    timeStyle: "short",
  });

  return `<!DOCTYPE html>
<html lang="fr">
<head><meta charset="UTF-8" /><meta name="viewport" content="width=device-width, initial-scale=1.0" /></head>
<body style="margin:0;padding:0;background:#0a0a0a;font-family:system-ui,-apple-system,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#0a0a0a;padding:40px 20px;">
    <tr><td align="center">
      <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;">

        <!-- Header -->
        <tr><td style="background:#135bec;border-radius:12px 12px 0 0;padding:28px 32px;">
          <p style="margin:0;color:#fff;font-size:18px;font-weight:700;">Jovan — Développeur Web Avesnois</p>
          <p style="margin:4px 0 0;color:rgba(255,255,255,0.7);font-size:13px;">Nouveau message depuis le formulaire de contact</p>
        </td></tr>

        <!-- Body -->
        <tr><td style="background:#161b22;border:1px solid rgba(255,255,255,0.08);border-top:0;border-radius:0 0 12px 12px;padding:32px;">

          <!-- Service badge -->
          <div style="display:inline-block;background:rgba(19,91,236,0.15);border:1px solid rgba(19,91,236,0.3);border-radius:6px;padding:6px 14px;margin-bottom:24px;">
            <span style="color:#135bec;font-size:12px;font-weight:700;text-transform:uppercase;letter-spacing:0.05em;">${serviceLabel}</span>
          </div>

          <!-- Contact info -->
          <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:24px;">
            <tr>
              <td style="padding:10px 0;border-bottom:1px solid rgba(255,255,255,0.06);">
                <span style="color:#64748b;font-size:12px;font-weight:600;text-transform:uppercase;letter-spacing:0.05em;">Nom</span><br/>
                <span style="color:#e2e8f0;font-size:15px;margin-top:2px;display:block;">${payload.prenom} ${payload.nom}</span>
              </td>
            </tr>
            <tr>
              <td style="padding:10px 0;border-bottom:1px solid rgba(255,255,255,0.06);">
                <span style="color:#64748b;font-size:12px;font-weight:600;text-transform:uppercase;letter-spacing:0.05em;">Email</span><br/>
                <a href="mailto:${payload.email}" style="color:#135bec;font-size:15px;margin-top:2px;display:block;text-decoration:none;">${payload.email}</a>
              </td>
            </tr>
            ${
              payload.telephone
                ? `<tr>
              <td style="padding:10px 0;border-bottom:1px solid rgba(255,255,255,0.06);">
                <span style="color:#64748b;font-size:12px;font-weight:600;text-transform:uppercase;letter-spacing:0.05em;">Téléphone</span><br/>
                <a href="tel:${payload.telephone}" style="color:#135bec;font-size:15px;margin-top:2px;display:block;text-decoration:none;">${payload.telephone}</a>
              </td>
            </tr>`
                : ""
            }
            ${
              payload.ville
                ? `<tr>
              <td style="padding:10px 0;border-bottom:1px solid rgba(255,255,255,0.06);">
                <span style="color:#64748b;font-size:12px;font-weight:600;text-transform:uppercase;letter-spacing:0.05em;">Ville</span><br/>
                <span style="color:#e2e8f0;font-size:15px;margin-top:2px;display:block;">${payload.ville}</span>
              </td>
            </tr>`
                : ""
            }
          </table>

          <!-- Message -->
          <div style="margin-bottom:28px;">
            <p style="color:#64748b;font-size:12px;font-weight:600;text-transform:uppercase;letter-spacing:0.05em;margin:0 0 10px;">Message</p>
            <div style="background:rgba(255,255,255,0.03);border:1px solid rgba(255,255,255,0.08);border-radius:8px;padding:16px 20px;">
              <p style="color:#cbd5e1;font-size:15px;line-height:1.7;margin:0;white-space:pre-wrap;">${payload.message}</p>
            </div>
          </div>

          <!-- Reply CTA -->
          <a href="mailto:${payload.email}?subject=Re: ${encodeURIComponent(`Votre demande — ${serviceLabel}`)}"
             style="display:inline-block;background:#135bec;color:#fff;font-size:14px;font-weight:700;padding:12px 24px;border-radius:8px;text-decoration:none;">
            Répondre à ${payload.prenom}
          </a>

          <!-- Footer -->
          <p style="color:#374151;font-size:12px;margin:28px 0 0;border-top:1px solid rgba(255,255,255,0.06);padding-top:20px;">
            Reçu le ${now} · jovanbienvenu.com
          </p>

        </td></tr>
      </table>
    </td></tr>
  </table>
</body>
</html>`;
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    if (!validatePayload(body)) {
      return NextResponse.json(
        {
          error:
            "Données invalides. Vérifiez que tous les champs obligatoires sont remplis.",
        },
        { status: 400 },
      );
    }

    const resend = new Resend(process.env.RESEND_API_KEY);
    const serviceLabel = SERVICE_LABELS[body.service] ?? body.service;

    await resend.emails.send({
      from: "onboarding@resend.dev",
      to: process.env.CONTACT_EMAIL!,
      replyTo: body.email,
      subject: `Nouveau message — ${serviceLabel} · ${body.prenom} ${body.nom}`,
      html: buildEmailHtml(body),
    });

    return NextResponse.json(
      { success: true, message: "Votre message a bien été envoyé." },
      { status: 200 },
    );
  } catch {
    return NextResponse.json(
      {
        error:
          "Erreur serveur. Veuillez réessayer ou contacter directement par téléphone.",
      },
      { status: 500 },
    );
  }
}
