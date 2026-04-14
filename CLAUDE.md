# CLAUDE.md — Groupe CanalNet

## PROJET
Site web professionnel de Groupe CanalNet, entreprise spécialisée 
en dégorgement et curage canalisation en Île-de-France.
Disponible 24h/24, 7j/7 sur les 8 départements franciliens.

---

## STACK TECHNIQUE
- Next.js 14 (App Router, TypeScript strict)
- Tailwind CSS + shadcn/ui
- Framer Motion (animations)
- React Hook Form + Zod (formulaires)
- Sanity.io (CMS headless)
- Resend (emails transactionnels)
- Leaflet.js (carte interactive IDF)
- next-sitemap (sitemap + robots.txt)
- Vercel (hébergement cible)

---

## ARCHITECTURE


src/
├── app/                        # App Router Next.js
│   ├── layout.tsx              # Layout global + Schema Organization
│   ├── page.tsx                # Homepage
│   ├── degorgement-ile-de-france/
│   ├── degorgement/[ville]/    # ~100 pages villes (generateStaticParams)
│   ├── (departements)/         # 8 pages départementales
│   ├── urgence-degorgement/
│   ├── curage-tout-a-l-egout/
│   ├── debouchage-canalisation/
│   ├── hydrocurage/
│   ├── blog/[slug]/
│   ├── avis-clients/
│   ├── a-propos/
│   ├── contact/
│   ├── devis/
│   └── api/                    # Routes API (contact, devis)
├── components/
│   ├── layout/                 # Header, Footer, StickyCallBar, FloatingCTA
│   ├── home/                   # Sections homepage
│   ├── seo/                    # Schema.org, Breadcrumb, FAQ
│   └── forms/                  # DevisForm, ContactForm
├── config/
│   └── constants.ts            # ← SOURCE DE VÉRITÉ UNIQUE
├── lib/
│   ├── cities.ts               # Dataset ~100 villes IDF
│   ├── departments.ts          # Dataset 8 départements
│   └── utils.ts                # cn(), slugify(), formatPhone()
└── types/
    └── index.ts                # Types globaux TypeScript


---

## RÈGLES DE DÉVELOPPEMENT

### Priorité absolue
- Toutes les valeurs de l'entreprise (nom, téléphone, stats) 
  viennent UNIQUEMENT de `src/config/constants.ts`
- Ne jamais hardcoder "Groupe CanalNet" ou un numéro de téléphone 
  ailleurs que dans constants.ts

### TypeScript
- Strict mode activé, zéro `any`
- Tous les composants typés avec des interfaces explicites
- Utiliser les types de `src/types/index.ts`

### Styling
- Tailwind CSS exclusivement, pas de CSS modules ni styled-components
- Utiliser `cn()` de `src/lib/utils.ts` pour les classes conditionnelles
- Couleurs du projet uniquement (définies dans tailwind.config.ts) :
  - primary : #0A1628 (bleu profond)
  - accent : #0066FF (bleu électrique)
  - urgence : #E63946 (rouge urgence)
  - orange.brand : #FF6B35

### Composants
- shadcn/ui en base, customisé avec les couleurs CanalNet
- Framer Motion pour toutes les animations (pas de CSS keyframes custom)
- Toujours prévoir la version mobile en premier (mobile-first)

### Performance (objectifs Lighthouse)
- Score mobile > 90, desktop > 95
- Toutes les images via next/image avec lazy loading
- Vidéo hero < 5MB, WebM prioritaire + MP4 fallback
- Iframes YouTube : facade pattern (chargement au clic uniquement)
- Leaflet : dynamic import avec ssr: false obligatoire
- Fonts : next/font/google uniquement

### SEO
- Chaque page doit avoir ses propres metadata (generateMetadata)
- Schema.org adapté à chaque type de page
- canonical systématique sur chaque page
- FAQPage schema sur toutes les pages services et villes

---

## IDENTITÉ VISUELLE

### Couleurs
- Bleu profond : #0A1628 → fonds sombres, header, footer
- Bleu électrique : #0066FF → CTA principaux, accents
- Rouge urgence : #E63946 → bouton appel, badges urgence
- Orange : #FF6B35 → hover secondaires
- Blanc : #FFFFFF
- Gris clair : #F4F6F9 → fonds sections alternées

### Typographie
- Font : Inter (next/font/google)
- Titres : font-bold à font-black
- Corps : font-normal à font-medium
- Stats/chiffres : font-extrabold, très grand

### Ton éditorial
- Toujours institutionnel et corporate
- "nos équipes", "notre service", "nos techniciens" 
- Jamais "je", jamais ton artisan solo
- Preuves sociales systématiques (chiffres, disponibilité, zones)

---

## COMPOSANTS CLÉS

### StickyCallBar
Barre fixe top-0 z-50, toujours visible, bouton rouge pulsant.
Ne disparaît jamais au scroll.

### HeroVideo
Vidéo background loop/muted/autoplay. 
Image fallback sur mobile pour performance.
H1 animé Framer Motion fadeInUp.

### MapSection
Carte Leaflet IDF, chargée en dynamic import ssr:false.
Polygones départements + markers villes cliquables.

### FloatingCTA
Visible mobile uniquement. Slide-in après 3s de scroll.
Deux boutons : téléphone + WhatsApp.

---

## PAGES VILLES — PATTERN

Fichier : src/app/degorgement/[ville]/page.tsx
Dataset : src/lib/cities.ts (IDF_CITIES array)
Génération : generateStaticParams() → ~100 pages statiques
Metadata : generateMetadata() → title/description uniques par ville
Maillage : chaque page ville → lien vers sa page département + 3 villes proches

---

## VARIABLES À COMPLÉTER AVANT MISE EN LIGNE

Toutes dans src/config/constants.ts :
- phone → numéro d'appel affiché
- phoneRaw → numéro pour href="tel:"
- whatsapp → numéro WhatsApp international
- address.street / address.postalCode
- foundedYear
- totalInterventions
- googleRating / googleReviewCount
- social.facebook / instagram / linkedin / youtube
- Clé Google Analytics dans layout.tsx
- Token Sanity dans .env.local
- Clé Resend dans .env.local

---

## VARIABLES D'ENVIRONNEMENT (.env.local)

```
NEXT_PUBLIC_SITE_URL=https://www.groupe-canalnet.fr
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
SANITY_PROJECT_ID=
SANITY_DATASET=production
SANITY_API_TOKEN=
RESEND_API_KEY=
```

---

## ORDRE DE DÉVELOPPEMENT

- [x] Bloc 1 : Setup, config, structure, layout.tsx
- [ ] Bloc 2 : Header + StickyCallBar + Footer
- [ ] Bloc 3 : Dataset cities.ts (100 villes IDF)
- [ ] Bloc 4 : Homepage complète
- [ ] Bloc 5 : Page pilier IDF + pages services
- [ ] Bloc 6 : Template pages villes (generateStaticParams)
- [ ] Bloc 7 : 8 pages départementales
- [ ] Bloc 8 : Formulaires + API routes + Resend
- [ ] Bloc 9 : Sanity CMS
- [ ] Bloc 10 : Blog
- [ ] Bloc 11 : Pages secondaires (avis, à propos, contact)
- [ ] Bloc 12 : SEO final (sitemap, robots, Schema.org audit)
- [ ] Bloc 13 : Optimisation performance (Lighthouse audit)

---

## COMMANDES UTILES

```bash
npm run dev          # Développement local
npm run build        # Build production
npm run lint         # ESLint
npx next-sitemap     # Générer sitemap après build
```
