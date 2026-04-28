import type { Metadata } from "next";
import { Syne, Manrope } from "next/font/google";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { SITE_URL, SITE_NAME, SITE_BRAND } from "@/lib/metadata";
import { seoMetadata } from "@/lib/site";
import "./globals.css";

const GA_ID = process.env.NEXT_PUBLIC_GA_ID;

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: {
    default: seoMetadata.title,
    template: `%s | ${SITE_BRAND}`,
  },
  description: seoMetadata.description,
  keywords: seoMetadata.keywords,
  metadataBase: new URL(SITE_URL),
  openGraph: {
    title: seoMetadata.title,
    description: seoMetadata.description,
    url: SITE_URL,
    siteName: SITE_NAME,
    locale: "fr_FR",
    type: "website",
  },
  icons: {
    icon: "/favicon.ico?v=2",
    apple: "/apple-icon.png",
  },
  robots: {
    index: true,
    follow: true,
  },
  ...(process.env.NEXT_PUBLIC_GSC_VERIFICATION && {
    verification: {
      google: process.env.NEXT_PUBLIC_GSC_VERIFICATION,
    },
  }),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body
        className={`${syne.variable} ${manrope.variable} font-sans bg-bg-base text-ink overflow-x-hidden`}
      >
        {GA_ID && GA_ID !== "G-XXXXXXXXXX" && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
              strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${GA_ID}', { page_path: window.location.pathname });
              `}
            </Script>
          </>
        )}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[200] focus:px-4 focus:py-2 focus:bg-primary focus:text-white focus:rounded-full focus:text-sm focus:font-bold focus:shadow-lg"
        >
          Aller au contenu principal
        </a>
        <Navbar />
        <div id="main-content">{children}</div>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
