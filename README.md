# Rucher des Hautes Bruyères — site vitrine

Site vitrine **complet, moderne, écoresponsable et haut de gamme** pour une
activité d'apiculture artisanale : vente de miels et produits de la ruche,
sensibilisation à la biodiversité, ateliers pédagogiques et parrainage de ruches.

> ⚠️ **Maquette.** Nom, personnes, adresse, SIRET, prix, partenaires et
> photographies sont **fictifs**. Voir
> [`docs/04-personnalisation.md`](docs/04-personnalisation.md) avant toute mise
> en ligne.

---

## Démarrage

```bash
npm install
npm run dev        # http://localhost:4321
```

| Commande | Rôle |
|---|---|
| `npm run dev` | Serveur de développement avec rechargement à chaud |
| `npm run build` | Génère le site statique dans `dist/` |
| `npm run preview` | Prévisualise le build de production |
| `npx astro check` | Vérification TypeScript — doit renvoyer **0 erreur** |

---

## Les 8 pages

| URL | Rôle |
|---|---|
| `/` | Accueil — hero, manifeste, Les Essentiels, réassurance, boutique, témoignages, CTA parrainage |
| `/le-rucher` | Notre histoire, le territoire, les méthodes, le calendrier apicole, les engagements chiffrés |
| `/nos-produits` | Catalogue de 19 références en 5 catégories, tarifs et prix au kilo, espace professionnels |
| `/ateliers-parrainages` | 5 ateliers, focus scolaires, 4 formules de parrainage, déroulé de visite, FAQ |
| `/contact` | Formulaire détaillé, coordonnées, horaires, accès, carte, points de vente, marchés |
| `/mentions-legales` | Légal, RGPD, CGV, accessibilité, écoconception |
| `/merci` | Confirmation d'envoi de formulaire (`noindex`) |
| `/404` | Page introuvable, avec réorientation vers les 4 intentions clés (`noindex`) |

---

## Stack

```
Astro 7.3            Rendu 100 % statique, 0 JS par défaut
Tailwind CSS 4.3     Configuration CSS-first (@theme) — pas de tailwind.config.js
TypeScript strict    Catalogue et ateliers typés, erreurs attrapées au build
@astrojs/sitemap     sitemap-index.xml automatique
sharp                WebP responsifs générés au build
Fraunces + Inter     Polices variables auto-hébergées (RGPD)
```

Le choix de stack, le comparatif avec **Laravel 13 + Livewire 4** et avec
**WordPress**, et la trajectoire e-commerce sont argumentés dans
[`docs/03-recommandation-technique.md`](docs/03-recommandation-technique.md).

---

## Budget de performance mesuré

| Ressource | Poids |
|---|---|
| HTML accueil | 71 Ko → **15 Ko** gzip |
| CSS (tout le site) | 63 Ko → **12 Ko** gzip |
| JavaScript accueil | **1,3 Ko**, inlinés, zéro bundle |
| Polices (2 variables) | 114 Ko |
| Photo de hero (mobile / desktop) | 28 Ko / 57 Ko |
| **Première visite, mobile** | **≈ 170 Ko** |

Pour comparaison, la médiane d'une page d'accueil en 2026 avoisine 2,4 Mo.

**Décisions d'écoconception :** rendu statique intégral · images WebP
responsives · 2 polices variables au lieu de 6 statiques · icônes en SVG inline
(pas de police d'icônes) · nuanciers produit en dégradé CSS plutôt que
19 photos de pots · trames d'alvéoles en `data:` URI · carte OpenStreetMap
chargée **au clic** (≈ 500 Ko économisés) · **aucun cookie, aucun traceur**.

---

## Organisation du dépôt

```
src/
├── assets/images/          9 photographies (optimisées au build par Astro)
├── components/
│   ├── Hero.astro          ◀ livrable principal
│   ├── Essentiels.astro    ◀ livrable principal
│   ├── Manifeste.astro     Section engagement
│   ├── Reassurance.astro   Les 3 piliers
│   ├── FicheProduit.astro  Fiche catalogue réutilisable
│   ├── Entete.astro        En-tête + menu mobile
│   ├── PiedDePage.astro    Pied de page + infolettre
│   ├── BandeauCTA.astro    Bandeau d'appel à l'action
│   ├── EnteteDePage.astro  En-tête des pages intérieures
│   ├── Icone.astro         38 icônes en SVG inline
│   └── Logo.astro          Logo (variantes claire et sombre)
├── data/
│   ├── site.ts             Identité, contact, navigation, formulaires
│   ├── produits.ts         Catalogue typé — prêt pour le e-commerce
│   └── ateliers.ts         Ateliers, parrainages, FAQ
├── layouts/BaseLayout.astro    SEO, Open Graph, JSON-LD, polices
├── pages/                  Les 8 pages
└── styles/global.css       ◀ TOUT le design system (@theme)

docs/
├── 01-charte-graphique.md          Palette, typographies, style visuel
├── 02-arborescence-et-contenus.md  Wireframes + contenu rédactionnel complet
├── 03-recommandation-technique.md  Comparatif de stacks, hébergement, e-commerce
├── 04-personnalisation.md          Check-list avant mise en ligne
└── integration/
    └── hero-et-essentiels.html     Hero + Les Essentiels en HTML5 autonome
```

---

## Design system

Tout tient dans **un seul fichier** :
[`src/styles/global.css`](src/styles/global.css).

**Palette** — Miel `#D08A1E` (marque) · Sapin `#35482D` (actions) · Crème
`#FBF7EF` (fond) · Anthracite `#1C1A17` (titres). Nuanciers complets et
contrastes vérifiés dans [`docs/01-charte-graphique.md`](docs/01-charte-graphique.md).

**Typographies** — **Fraunces** (variable, serif) pour les titres, **Inter**
(variable, sans-serif) pour les textes. Auto-hébergées : aucun appel à Google
Fonts, donc aucun transfert d'adresse IP hors UE.

**Échelle fluide** — tous les corps de texte sont en `clamp()` : l'échelle
s'adapte de 360 px à 1536 px sans aucun point de rupture.

---

## Accessibilité & conformité

- Structure sémantique complète, un `<h1>` unique par page, repères ARIA
- Contrastes : **16,2:1** (titres), **10,5:1** (texte courant), **4,65:1** (secondaire)
- Navigation clavier intégrale, focus visible, lien d'évitement
- `prefers-reduced-motion` respecté partout
- FAQ en `<details>` natifs, fonctionnels sans JavaScript
- RGPD : aucun cookie, aucun traceur, polices locales, carte en opt-in explicite
- JSON-LD `LocalBusiness` · `Product` · `FAQPage` · `Event` · `WebSite`

---

## Transition vers le e-commerce

`src/data/produits.ts` est déjà structuré comme un catalogue marchand : `sku`,
`slug`, `conditionnements[]` avec prix et disponibilité, utilitaires
`prixDepuis()` / `prixAuKilo()` / `formaterPrix()`, balisage `schema.org/Product`
et attributs `data-sku` sur chaque ligne de tarif.

1. **Aujourd'hui** — vitrine, commande par formulaire ou téléphone. 0 €/mois.
2. **Printemps 2027** — panier Snipcart ou Stripe branché sur les `data-sku`
   existants. Le site reste statique. ~2 jours d'intégration.
3. **Au-delà de 200 commandes/mois** — back-office **Laravel 13 + Livewire 4**
   sur un sous-domaine. Le HTML actuel se transpose directement en Blade, et le
   design system Tailwind v4 est repris tel quel.

Détails dans [`docs/03-recommandation-technique.md`](docs/03-recommandation-technique.md) §5.
