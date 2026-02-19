import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import { siteInfo } from "@/lib/site";
import FadeIn from "@/components/FadeIn";

export const metadata: Metadata = buildMetadata({
  title:
    "Politique de confidentialité — Jovan Bienvenu, Développeur Web Avesnois",
  description: `Politique de confidentialité et traitement des données personnelles du site ${siteInfo.siteUrl}, conforme au RGPD.`,
  path: "/politique-de-confidentialite",
});

export default function PolitiqueConfidentialitePage() {
  return (
    <main className="relative">
      {/* Ambient glow */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-[10%] left-[10%] w-[400px] h-[400px] bg-primary/8 rounded-full blur-[120px]" />
      </div>

      {/* Hero */}
      <section className="relative z-10 pt-36 pb-12 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <FadeIn>
            <p className="text-primary font-bold tracking-widest uppercase text-xs mb-4">
              RGPD
            </p>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
              Politique de{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-300">
                confidentialité
              </span>
            </h1>
            <p className="text-slate-400 text-sm">
              Vos données personnelles sont traitées avec soin, dans le respect
              du Règlement Général sur la Protection des Données (RGPD — UE
              2016/679).
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Content */}
      <section className="relative z-10 pb-24 px-6">
        <div className="max-w-3xl mx-auto space-y-8">
          {/* 1. Responsable */}
          <FadeIn>
            <div className="rounded-2xl border border-white/8 bg-surface-dark p-6 md:p-8">
              <h2 className="text-white font-bold text-lg mb-4">
                1. Responsable du traitement
              </h2>
              <dl className="space-y-3">
                {[
                  {
                    label: "Identité",
                    value: "Jovan Bienvenu — Auto-entrepreneur",
                  },
                  { label: "SIRET", value: siteInfo.siret },
                  { label: "Email", value: siteInfo.email },
                  { label: "Téléphone", value: siteInfo.phoneDisplay },
                  { label: "Localisation", value: `Fourmies, Nord (59)` },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="flex flex-col sm:flex-row sm:gap-4 py-2 border-b border-white/5 last:border-0"
                  >
                    <dt className="text-slate-500 text-sm font-medium w-40 shrink-0">
                      {item.label}
                    </dt>
                    <dd className="text-slate-200 text-sm mt-0.5 sm:mt-0">
                      {item.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </FadeIn>

          {/* 2. Données collectées */}
          <FadeIn>
            <div className="rounded-2xl border border-white/8 bg-surface-dark p-6 md:p-8">
              <h2 className="text-white font-bold text-lg mb-4">
                2. Données collectées
              </h2>
              <p className="text-slate-400 text-sm leading-relaxed mb-4">
                Le seul point de collecte de données personnelles sur ce site
                est le{" "}
                <span className="text-white font-medium">
                  formulaire de contact
                </span>
                . Les données collectées sont les suivantes :
              </p>
              <ul className="space-y-2">
                {[
                  {
                    field: "Prénom et nom",
                    required: true,
                    purpose: "Vous identifier et personnaliser la réponse",
                  },
                  {
                    field: "Adresse email",
                    required: true,
                    purpose: "Vous répondre à votre demande de devis",
                  },
                  {
                    field: "Numéro de téléphone",
                    required: false,
                    purpose: "Vous contacter si vous le souhaitez",
                  },
                  {
                    field: "Ville",
                    required: false,
                    purpose:
                      "Vérifier que vous êtes dans la zone d'intervention",
                  },
                  {
                    field: "Service souhaité",
                    required: true,
                    purpose: "Orienter la réponse vers la bonne offre",
                  },
                  {
                    field: "Message",
                    required: true,
                    purpose: "Comprendre votre projet",
                  },
                ].map((item) => (
                  <li
                    key={item.field}
                    className="flex flex-col sm:flex-row sm:items-start gap-1 sm:gap-4 py-2 border-b border-white/5 last:border-0"
                  >
                    <div className="flex items-center gap-2 w-56 shrink-0">
                      <span className="text-slate-200 text-sm font-medium">
                        {item.field}
                      </span>
                      {!item.required && (
                        <span className="text-[10px] px-1.5 py-0.5 rounded bg-white/10 text-slate-400">
                          optionnel
                        </span>
                      )}
                    </div>
                    <span className="text-slate-400 text-sm">
                      {item.purpose}
                    </span>
                  </li>
                ))}
              </ul>
              <p className="text-slate-500 text-xs mt-4 leading-relaxed">
                Aucune autre donnée n'est collectée automatiquement (pas de
                cookies de tracking, pas de pixel publicitaire, pas d'outil
                d'analytics tiers actif).
              </p>
            </div>
          </FadeIn>

          {/* 3. Finalité */}
          <FadeIn>
            <div className="rounded-2xl border border-white/8 bg-surface-dark p-6 md:p-8">
              <h2 className="text-white font-bold text-lg mb-4">
                3. Finalité du traitement
              </h2>
              <p className="text-slate-400 text-sm leading-relaxed mb-3">
                Les données collectées via le formulaire sont utilisées
                exclusivement pour :
              </p>
              <ul className="space-y-2 list-disc list-inside text-slate-400 text-sm">
                <li>Répondre à votre demande de contact ou de devis</li>
                <li>Établir un devis personnalisé selon votre projet</li>
                <li>
                  Vous recontacter si vous avez laissé un numéro de téléphone
                </li>
              </ul>
              <p className="text-slate-400 text-sm leading-relaxed mt-3">
                Vos données ne sont jamais utilisées à des fins commerciales non
                sollicitées, ni cédées ou revendues à des tiers.
              </p>
              <p className="text-slate-400 text-sm leading-relaxed mt-3">
                La base légale du traitement est votre{" "}
                <span className="text-white font-medium">
                  consentement explicite
                </span>
                , matérialisé par l'envoi volontaire du formulaire.
              </p>
            </div>
          </FadeIn>

          {/* 4. Durée de conservation */}
          <FadeIn>
            <div className="rounded-2xl border border-white/8 bg-surface-dark p-6 md:p-8">
              <h2 className="text-white font-bold text-lg mb-4">
                4. Durée de conservation
              </h2>
              <p className="text-slate-400 text-sm leading-relaxed">
                Vos données sont conservées pendant une durée maximale de{" "}
                <span className="text-white font-medium">3 ans</span> à compter
                de votre dernier contact. Passé ce délai, elles sont supprimées
                de manière définitive.
              </p>
              <p className="text-slate-400 text-sm leading-relaxed mt-3">
                En l'absence de suite donnée à votre demande (aucun devis signé,
                aucun échange complémentaire), les données sont supprimées dans
                un délai de{" "}
                <span className="text-white font-medium">12 mois</span>.
              </p>
            </div>
          </FadeIn>

          {/* 5. Vos droits */}
          <FadeIn>
            <div className="rounded-2xl border border-white/8 bg-surface-dark p-6 md:p-8">
              <h2 className="text-white font-bold text-lg mb-4">
                5. Vos droits
              </h2>
              <p className="text-slate-400 text-sm leading-relaxed mb-4">
                Conformément au RGPD, vous disposez des droits suivants sur vos
                données personnelles :
              </p>
              <ul className="space-y-3">
                {[
                  {
                    right: "Droit d'accès",
                    desc: "Obtenir une copie des données vous concernant.",
                  },
                  {
                    right: "Droit de rectification",
                    desc: "Corriger des données inexactes ou incomplètes.",
                  },
                  {
                    right: "Droit à l'effacement",
                    desc: 'Demander la suppression de vos données ("droit à l\'oubli").',
                  },
                  {
                    right: "Droit d'opposition",
                    desc: "Vous opposer à tout traitement de vos données.",
                  },
                  {
                    right: "Droit à la portabilité",
                    desc: "Recevoir vos données dans un format structuré et lisible.",
                  },
                  {
                    right: "Droit à la limitation",
                    desc: "Demander la limitation du traitement de vos données.",
                  },
                ].map((item) => (
                  <li key={item.right} className="flex gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary mt-1.5 shrink-0" />
                    <div>
                      <span className="text-white text-sm font-medium">
                        {item.right} :{" "}
                      </span>
                      <span className="text-slate-400 text-sm">
                        {item.desc}
                      </span>
                    </div>
                  </li>
                ))}
              </ul>
              <div className="mt-5 p-4 rounded-xl bg-primary/8 border border-primary/20">
                <p className="text-slate-300 text-sm leading-relaxed">
                  Pour exercer l'un de ces droits, contactez-moi directement par
                  email à{" "}
                  <a
                    href={`mailto:${siteInfo.email}`}
                    className="text-primary hover:underline font-medium"
                  >
                    {siteInfo.email}
                  </a>
                  . Je m'engage à vous répondre dans un délai de{" "}
                  <span className="text-white font-medium">30 jours</span>.
                </p>
              </div>
              <p className="text-slate-500 text-xs mt-4 leading-relaxed">
                Vous avez également le droit d'introduire une réclamation auprès
                de la{" "}
                <span className="text-slate-400">
                  CNIL (Commission Nationale de l'Informatique et des Libertés)
                </span>{" "}
                — www.cnil.fr — si vous estimez que vos droits ne sont pas
                respectés.
              </p>
            </div>
          </FadeIn>

          {/* 6. Cookies */}
          <FadeIn>
            <div className="rounded-2xl border border-white/8 bg-surface-dark p-6 md:p-8">
              <h2 className="text-white font-bold text-lg mb-4">6. Cookies</h2>
              <p className="text-slate-400 text-sm leading-relaxed">
                Ce site n'utilise{" "}
                <span className="text-white font-medium">
                  aucun cookie de tracking, publicitaire ou analytique tiers
                </span>
                . Seuls des cookies techniques strictement nécessaires au bon
                fonctionnement du site peuvent être déposés (session, sécurité).
                Ces cookies ne collectent aucune donnée personnelle et ne
                nécessitent pas votre consentement.
              </p>
            </div>
          </FadeIn>

          {/* 7. Sécurité */}
          <FadeIn>
            <div className="rounded-2xl border border-white/8 bg-surface-dark p-6 md:p-8">
              <h2 className="text-white font-bold text-lg mb-4">
                7. Sécurité des données
              </h2>
              <p className="text-slate-400 text-sm leading-relaxed">
                Toutes les communications entre votre navigateur et ce site sont
                chiffrées via le protocole{" "}
                <span className="text-white font-medium">HTTPS/TLS</span>. Les
                données transmises via le formulaire de contact sont acheminées
                de façon sécurisée et ne sont accessibles qu'au responsable du
                traitement.
              </p>
            </div>
          </FadeIn>

          {/* 8. Modifications */}
          <FadeIn>
            <div className="rounded-2xl border border-white/8 bg-surface-dark p-6 md:p-8">
              <h2 className="text-white font-bold text-lg mb-4">
                8. Modifications de la politique
              </h2>
              <p className="text-slate-400 text-sm leading-relaxed">
                Cette politique de confidentialité peut être mise à jour pour
                refléter des évolutions légales ou des changements dans nos
                pratiques. La date de dernière modification est indiquée en bas
                de page. Nous vous invitons à la consulter régulièrement.
              </p>
            </div>
          </FadeIn>

          <FadeIn>
            <p className="text-center text-slate-600 text-xs">
              Dernière mise à jour : février 2026
            </p>
          </FadeIn>
        </div>
      </section>
    </main>
  );
}
