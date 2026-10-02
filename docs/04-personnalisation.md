# Check-list de personnalisation avant mise en ligne

> ⚠️ **Toutes les données de ce dépôt sont fictives.** Le nom, les personnes,
> l'adresse, le SIRET, les prix, les partenaires et les photographies ont été
> créés pour donner vie à la maquette. Rien ne doit être publié tel quel.

Cochez au fur et à mesure. Les trois premiers blocs sont bloquants.

---

## 🔴 Bloquant — identité et mentions obligatoires

### `src/data/site.ts`

| Clé | Valeur fictive actuelle | À remplacer par |
|---|---|---|
| `nom` | Rucher des Hautes Bruyères | Votre nom commercial |
| `nomCourt` | Hautes Bruyères | Version courte (pied de page, manifest) |
| `baseline` | Apiculture artisanale depuis 2009 | Votre baseline |
| `url` | `https://www.rucher-hautes-bruyeres.fr` | Votre domaine réel |
| `apiculteurs.principal` / `.associee` | Mathieu / Claire Vasseur | Vos prénoms et noms |
| `fondation` | 2009 | Votre année d'installation |
| `siret` | 812 457 903 00024 | **Votre SIRET réel** |
| `tva` | FR 42 812457903 | Votre n° de TVA intracommunautaire |
| `certifications` | AB (FR-BIO-01), Label Apiculture Française | Vos labels **réellement détenus** |
| `contact.telephone` | +33 4 78 00 00 00 | Votre numéro |
| `contact.email` / `.emailPro` | bonjour@ / pro@ | Vos adresses |
| `contact.adresse.*` | 1240 chemin de la Combe Verte, 69850 Saint-Martin-en-Haut | Votre adresse postale |
| `contact.coordonnees` | 45.6356 / 4.5564 | **Vos coordonnées GPS exactes** (clic droit → « Afficher l'adresse » sur openstreetmap.org) |
| `horaires` | 7 lignes | Vos horaires réels |
| `reseaux` | URL génériques | Vos profils, ou **supprimez la ligne** si le réseau n'existe pas |

### `astro.config.mjs`

```js
site: "https://www.rucher-hautes-bruyeres.fr",  // ← votre domaine
```
Indispensable : conditionne le sitemap, les URL canoniques et les métadonnées
Open Graph.

### `public/robots.txt`

Mettre à jour la ligne `Sitemap:`.

### `src/pages/mentions-legales.astro`

- [ ] **Hébergeur** : raison sociale, adresse et téléphone — mention obligatoire
      (article 6 III de la LCEN). Un emplacement en italique attend l'information.
- [ ] **Agrément sanitaire** et **NAPI** : remplacer `FR 69.231.001 CE` et `69-01234`.
- [ ] **CGV** : à compléter à l'ouverture de la vente en ligne (rétractation
      14 jours, remboursement, médiateur de la consommation).
- [ ] **Déclaration d'accessibilité** : mettre à jour après l'audit RGAA réel.
- [ ] **Date de dernière mise à jour**.

---

## 🟠 Important — contenus commerciaux

### `src/data/produits.ts` — 19 références

- [ ] Supprimer les produits que vous ne vendez pas
- [ ] **Vérifier chaque prix** (ils sont plausibles mais inventés)
- [ ] Ajuster les `sku` à votre nomenclature
- [ ] Mettre à jour les `disponibilite` : `disponible` · `saison` · `bientot` · `epuise`
- [ ] Réécrire les descriptions si vos floraisons diffèrent
- [ ] Ajuster les `teinte` si la couleur réelle de votre miel diffère
- [ ] ⚖️ **Mentions santé** : les champs `bienfaits` utilisent une formulation
      prudente (« traditionnellement apprécié pour… »). Toute allégation de
      santé est strictement encadrée par le règlement (CE) n° 1924/2006 —
      faites relire si vous les modifiez.

### `src/data/ateliers.ts`

- [ ] Tarifs des 5 ateliers et des 4 formules de parrainage
- [ ] Durées, effectifs, saisons, créneaux
- [ ] Contreparties de parrainage (nombre de pots en particulier)
- [ ] Réponses de la FAQ — notamment **allergies** et **accessibilité**,
      qui engagent votre responsabilité
- [ ] Mention « Agréé Éducation nationale » : **à retirer si vous ne l'êtes pas**

### `src/pages/contact.astro`

- [ ] `pointsDeVente` : les 6 partenaires sont inventés
- [ ] `marches` : jours, lieux, horaires
- [ ] Conditions revendeurs (remise 35 %, franco 250 € HT, capacités de production)

### `src/pages/index.astro`

- [ ] Les 3 **témoignages** sont fictifs. Un faux avis client est une pratique
      commerciale trompeuse (article L121-2 du code de la consommation) :
      recueillez de vrais témoignages écrits, ou supprimez la section.

### `src/pages/le-rucher.astro`

- [ ] **Le récit entier** est une fiction : à réécrire avec votre histoire
- [ ] Tableau des 4 ruchers (noms, altitudes, nombre de colonies, flore)
- [ ] Listes « ce que nous faisons / ne faisons jamais » — n'affirmez que le vrai
- [ ] Chiffres d'engagement et bilan carbone 2025

### Bandeau d'annonce (`src/components/Entete.astro`)

- [ ] « La récolte de tilleul 2026 est arrivée » → votre actualité du moment

### Carte flottante du hero (`src/components/Hero.astro`)

- [ ] « Tilleul 2026 · Extrait le 14 juillet · 212 pots »

---

## 🟡 À prévoir — médias et services

### Photographies

Les 9 visuels de `src/assets/images/` sont **générés par IA**. Ils fixent la
direction artistique mais doivent être remplacés par un **reportage réel** :
la crédibilité d'un site de producteur repose entièrement sur l'authenticité
de ses images.

| Fichier | Sujet à photographier |
|---|---|
| `hero-rucher.jpg` | Vous, au rucher, heure dorée, format paysage |
| `apiculteur-portrait.jpg` | Vos mains sur un cadre, format portrait |
| `ruches-clairiere.jpg` | Un rucher dans son environnement, sans personne |
| `atelier-pedagogique.jpg` | Un vrai atelier — **autorisation de droit à l'image obligatoire, et autorisation parentale pour les mineurs** |
| `miels-collection.jpg` | Vos pots avec vos étiquettes |
| `produits-ruche.jpg` | Bougies, propolis, pollen, cire |
| `rayon-abeilles.jpg` | Macro d'un cadre operculé |
| `prairie-fleurie.jpg` | Une abeille sur une fleur de votre territoire |
| `miellerie.jpg` | Votre boutique / laboratoire d'extraction |
| `public/og-rucher-hautes-bruyeres.jpg` | Image de partage social, **1200 × 630 px** |

Conserver les mêmes noms de fichier évite toute modification de code.
Format conseillé : JPEG qualité 85, côté long ≥ 1600 px — Astro se charge de
générer les versions WebP responsives.

### Textes alternatifs

Chaque `alt=` décrit la photo fictive. **À réécrire** en même temps que les
images : un `alt` qui ne correspond pas à l'image est pire que pas d'`alt`.

### Formulaires

- [ ] Renseigner `formulaires.endpoint` dans `src/data/site.ts`
      (voir [`03-recommandation-technique.md`](./03-recommandation-technique.md) §7)
- [ ] Tester un envoi réel de bout en bout
- [ ] Vérifier la réception et le non-classement en spam

### Identité visuelle

- [ ] `public/favicon.svg` — logo provisoire
- [ ] `public/apple-touch-icon.png` — **à créer** (180 × 180 px)
- [ ] `public/site.webmanifest` — nom et couleurs
- [ ] Logo : si vous en faites réaliser un, remplacer `src/components/Logo.astro`

---

## 🟢 Facultatif — personnalisation avancée

- [ ] **Couleurs** : tout se change dans le bloc `@theme` de
      `src/styles/global.css`. Conservez les niveaux 700 pour les textes,
      ils garantissent les contrastes AA.
- [ ] **Polices** : remplacer les `.woff2` de `public/fonts/` et les
      `@font-face`. Privilégiez des variables auto-hébergées.
- [ ] **Navigation** : `navigation` et `liensPied` dans `src/data/site.ts`
- [ ] **Chiffres clés du hero** : `chiffresCles` dans `src/data/site.ts`
- [ ] **Mesure d'audience** : si vous en ajoutez une, choisissez une solution
      sans cookie et exemptée de consentement CNIL (Matomo auto-hébergé
      configuré en mode exempté, ou Plausible hébergé dans l'UE). **Sinon, un
      bandeau cookies devient obligatoire** et l'argument « aucun cookie » des
      mentions légales devient faux.

---

## Vérification finale avant publication

```bash
npx astro check        # 0 erreur TypeScript attendue
npm run build          # build sans avertissement
npm run preview        # revue complète des 8 pages
grep -rn "À PERSONNALISER" src/   # plus aucun résultat attendu
```

- [ ] Relire les 8 pages sur mobile **et** sur grand écran
- [ ] Naviguer tout le site **au clavier uniquement** (Tab / Maj+Tab / Entrée)
- [ ] Vérifier chaque lien interne et externe
- [ ] Tester le formulaire de contact en conditions réelles
- [ ] Lancer Lighthouse (objectif : ≥ 98 sur les quatre axes)
- [ ] Soumettre le `sitemap-index.xml` à la Google Search Console
- [ ] Créer / mettre à jour la fiche **Google Business Profile** avec les mêmes
      nom, adresse et téléphone **au caractère près** que le site (cohérence NAP,
      critère majeur de référencement local)
