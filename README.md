# Jovan - Landing Page Développeur Web & SEO Local

Landing page professionnelle pour un développeur web basé dans l'Avesnois (Nord, France), ciblant artisans et commerçants locaux.

## ✨ Stack technique

- **Framework** : Next.js 15 (App Router)
- **Langage** : TypeScript
- **Styles** : Tailwind CSS v3
- **Icônes** : Lucide React
- **Police** : Inter (Google Fonts via `next/font`)

## 📁 Structure du projet

```
jovan-bienvenu/
├── app/
│   ├── globals.css        # Styles globaux + utilitaires custom
│   ├── layout.tsx         # Layout racine (métadonnées, police)
│   └── page.tsx           # Assemblage de la page
├── components/
│   ├── FadeIn.tsx         # Wrapper animation scroll (IntersectionObserver)
│   ├── Navbar.tsx         # Navigation flottante responsive
│   ├── Hero.tsx           # Section héro avec CTAs
│   ├── TrustBanner.tsx    # Bandeau de confiance (4 items)
│   ├── Services.tsx       # Cartes services (site web + SEO local)
│   ├── WhyMe.tsx          # Pourquoi me choisir (4 arguments)
│   ├── Portfolio.tsx      # Grille portfolio avec filtres
│   ├── Pricing.tsx        # Tarifs (2 offres)
│   ├── FAQ.tsx            # Accordéon FAQ (5 questions)
│   ├── ContactForm.tsx    # Formulaire de contact (UI seulement)
│   ├── Footer.tsx         # Pied de page + CTA final
│   └── WhatsAppButton.tsx # Bouton WhatsApp flottant
├── package.json
├── tailwind.config.ts
├── tsconfig.json
├── next.config.ts
└── postcss.config.mjs
```

## 🚀 Démarrage rapide

### Prérequis

- Node.js ≥ 18.18
- npm, yarn ou pnpm

### Installation

```bash
# Cloner / récupérer le projet
cd jovan-bienvenu

# Installer les dépendances
npm install
# ou
yarn install
# ou
pnpm install
```

### Développement

```bash
npm run dev
```

Ouvrir [http://localhost:3000](http://localhost:3000) dans le navigateur.

### Production

```bash
npm run build
npm run start
```

## 🎨 Personnalisation

### Informations à remplacer avant mise en ligne

| Fichier                         | Élément à modifier                             |
| ------------------------------- | ---------------------------------------------- |
| `components/Navbar.tsx`         | Nom / logo                                     |
| `components/Hero.tsx`           | Texte accroche, numéro de téléphone            |
| `components/TrustBanner.tsx`    | Numéro SIRET, années d'expérience              |
| `components/WhatsAppButton.tsx` | Numéro WhatsApp (`wa.me/33XXXXXXXXX`)          |
| `components/Footer.tsx`         | Liens LinkedIn, Instagram, Mentions légales    |
| `app/layout.tsx`                | Métadonnées SEO (title, description, keywords) |

### Couleurs

Les couleurs sont définies dans `tailwind.config.ts` :

```ts
colors: {
  primary: '#135bec',       // Bleu électrique principal
  'primary-hover': '#0e4bce',
  'background-dark': '#0a0a0a',
  'surface-dark': '#161b22',
}
```

## 📋 Sections

1. **Navbar** - Navigation flottante pill avec effet glass au scroll
2. **Hero** - Accroche principale avec 2 CTA (devis + appel)
3. **Trust Banner** - 4 indicateurs de confiance
4. **Services** - 2 cartes services (site web + SEO local)
5. **Pourquoi moi** - 4 arguments différenciants
6. **Portfolio** - 3 projets fictifs avec filtres par secteur
7. **Tarifs** - 2 offres (site vitrine 490€ + SEO local 149€/mois)
8. **FAQ** - 5 questions fréquentes en accordéon
9. **Contact** - Formulaire UI-only avec validation HTML5
10. **Footer** - CTA final + liens légaux + réseaux sociaux

## 📱 Responsive

Le site est développé en **mobile-first** et testé sur :

- Mobile (320px+)
- Tablette (768px+)
- Desktop (1024px+)

## 🔗 Formulaire de contact

Le formulaire est **UI seulement** (pas de backend). Pour l'activer en production, vous pouvez utiliser :

- [Resend](https://resend.com) + Next.js API Route
- [Formspree](https://formspree.io)
- [EmailJS](https://www.emailjs.com)

## 📄 Licence

Usage privé - tous droits réservés.
