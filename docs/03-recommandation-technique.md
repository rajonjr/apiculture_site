# Recommandation technique

> **Réponse courte :** pour un site **vitrine écoresponsable haut de gamme** de
> 5 pages qui basculera vers le e-commerce dans 12 à 18 mois, la stack retenue
> et implémentée ici est **Astro 7 + Tailwind CSS v4 + contenu typé en
> TypeScript**, rendu 100 % statique.
>
> **Laravel 13 + Livewire 4 + Tailwind v4** reste le bon choix — mais plus tard,
> au moment où la boutique en ligne et la gestion des stocks arriveront. En
> faire le socle dès aujourd'hui reviendrait à payer un serveur applicatif, un
> back-office et une maintenance PHP pour afficher cinq pages qui ne changent
> pas trois fois par mois.

---

## 1. Ce que le projet demande réellement

| Contrainte | Conséquence technique |
|---|---|
| 5 pages de contenu quasi statique | Un moteur de rendu serveur par requête n'apporte rien |
| **Écoresponsabilité affichée comme valeur de marque** | Le poids des pages et l'énergie serveur deviennent un argument commercial, pas un détail |
| Rendu « sur-mesure haut de gamme » | Exclut les thèmes génériques du marché |
| Autonomie des apiculteurs sur les textes et les prix | Il faut une interface d'édition, ou des fichiers vraiment simples |
| Transition e-commerce anticipée | Les données produit doivent déjà être structurées et portables |
| Deux personnes, pas de DSI | Le moins de surface de maintenance et de sécurité possible |
| RGPD strict (CNIL) | Pas de Google Fonts, pas d'analytics intrusif, carte en chargement différé |

---

## 2. Comparatif des trois options

| Critère | **Astro 7 + Tailwind v4** ✅ | **Laravel 13 + Livewire 4** | **WordPress + thème sur-mesure** |
|---|---|---|---|
| Performance brute | **Excellent** — HTML pré-généré servi par CDN | Bon (avec Octane + cache) | Moyen à mauvais sans empilement de caches |
| Poids d'une page | **≈ 170-200 Ko** première visite | ≈ 300-500 Ko | 1,5 à 3 Mo en pratique |
| Coût d'hébergement | **0 à 5 €/mois** (statique) | 15 à 40 €/mois (VPS + PHP + base) | 10 à 25 €/mois (mutualisé correct) |
| Surface d'attaque | **Quasi nulle** (aucun exécutable serveur) | Moyenne (PHP, base, sessions) | **Élevée** (cœur + extensions + base) |
| Maintenance annuelle | Mises à jour npm, ~2 h/an | Montées de version PHP/Laravel, ~1 j/an | Mises à jour hebdomadaires, risque de casse |
| Autonomie éditoriale | Bonne **avec un CMS git** (Sveltia/Decap) | Excellente (back-office sur mesure, à développer) | **Excellente nativement** |
| Liberté de design | **Totale** | Totale | Contrainte par l'éditeur de blocs |
| Prêt pour le e-commerce | Via API/headless ou migration | **Natif** (Cashier, Stripe, stocks) | WooCommerce (lourd mais fonctionnel) |
| Empreinte carbone | **La plus faible** | Moyenne | La plus élevée |
| Délai de mise en ligne | **Court** | Moyen à long | Court mais qualité variable |

### Pourquoi pas Laravel 13 + Livewire 4 *maintenant*

La stack est excellente — Laravel 13 est sorti le 17 mars 2026 (PHP 8.3 minimum,
mise à niveau quasi sans rupture depuis la 12), et Livewire 4, stable depuis
janvier 2026, apporte les composants en fichier unique et un moteur de
réactivité réécrit. C'est aujourd'hui la façon la plus agréable de construire
une application PHP interactive.

Mais sur ce projet précis, elle ferait tourner un interpréteur PHP et une base
de données **à chaque visite** pour recomposer des pages dont le contenu change
quelques fois par an. On paierait un serveur, un back-office à développer, un
plan de sauvegarde et un cycle de mises à jour de sécurité — pour un résultat
visuellement identique et mesurablement plus lent. Et surtout : cela
contredirait frontalement le discours écoresponsable que le site tient à ses
visiteurs.

**Le bon moment pour Laravel, c'est l'étape 2** (voir §5).

### Pourquoi pas WordPress

C'est le choix pertinent si — et seulement si — **l'autonomie totale sans aucun
développeur** est une exigence absolue et non négociable. Il faut alors assumer :
une page d'accueil difficile à maintenir sous 1 Mo, des mises à jour de sécurité
hebdomadaires, des extensions qui déposent des cookies et compliquent la
conformité RGPD, et un rendu « haut de gamme » qui demandera autant de travail
d'intégration qu'un site sur mesure — en luttant contre l'outil.

Pour un site qui vend un positionnement **sobre et artisanal**, livrer 2,5 Mo de
JavaScript jQuery est une incohérence que les visiteurs ne verront pas, mais que
les journalistes, les clients professionnels et les scores Lighthouse verront.

---

## 3. La stack retenue, en détail

```
Astro 7.3            Générateur statique, îlots d'interactivité, 0 JS par défaut
Tailwind CSS 4.3     Configuration CSS-first (@theme), aucun tailwind.config.js
TypeScript strict    Catalogue produits et ateliers typés, erreurs attrapées au build
@astrojs/sitemap     sitemap-index.xml généré automatiquement
sharp                AVIF/WebP responsifs générés au build
Fraunces + Inter     Polices variables auto-hébergées (RGPD)
```

**Pas de framework UI** (ni React, ni Vue, ni Svelte) : il n'y a sur ce site que
trois comportements interactifs — menu mobile, carte au clic, validation de
formulaire. Soit **1 333 octets de JavaScript** sur la page d'accueil, écrits à la
main et inlinés par Astro. Une dépendance React aurait coûté 45 Ko pour le même
résultat.

### ⚠️ Piège Tailwind v4 à connaître avant de modifier le code

En v4, le modificateur *important* est passé **en suffixe**. L'ancienne syntaxe
v3 ne déclenche aucune erreur : la classe est simplement **ignorée en
silence**, et le style attendu n'apparaît jamais.

```html
<!-- ❌ syntaxe v3 : compile sans erreur, mais ne produit RIEN -->
<span class="surtitre !text-miel-300">

<!-- ✅ syntaxe v4 -->
<span class="surtitre text-miel-300!">

<!-- ✅ avec variante : le préfixe reste devant, le ! reste à la fin -->
<a class="btn sm:px-8!">
```

Le même piège existe côté JavaScript, où la classe est une chaîne :

```js
entete.classList.toggle("border-cire!", !entree.isIntersecting);
```

Pour vérifier qu'une classe `important` est bien compilée, cherchez-la dans la
feuille de style produite — Tailwind y échappe le `!` :

```bash
npm run build && grep -o '\.text-miel-300\\!' dist/_astro/*.css
```

### Ce qui a été fait pour l'écoconception

| Décision | Gain |
|---|---|
| Rendu statique intégral | Aucun calcul serveur, aucune requête base à la visite |
| Images en WebP responsives (`widths` + `sizes`) | 256 Ko → **28 Ko** sur mobile pour la photo de hero |
| 2 polices variables au lieu de 6 statiques | 380 Ko → **114 Ko** |
| Icônes en SVG inline | **Zéro** police d'icônes (≈ 80 Ko économisés) |
| Nuanciers produit en `radial-gradient` | **19 photos de pots évitées** |
| Trames d'alvéoles en `data:` URI | ~400 octets au lieu d'une image de fond |
| Carte chargée au clic | **≈ 500 Ko** économisés sur chaque visite de la page Contact |
| Aucun analytics, aucun cookie | Pas de bandeau, pas de requêtes tierces |

### Budget de performance mesuré sur ce dépôt

| Ressource | Poids |
|---|---|
| HTML accueil | 71 Ko → **15 Ko** gzip |
| CSS (tout le site, un seul fichier) | 63 Ko → **12 Ko** gzip |
| JavaScript accueil | **1 333 octets**, inlinés, zéro bundle |
| Polices préchargées | 114 Ko |
| Photo de hero (mobile 480w / desktop 768w) | **28 Ko** / 57 Ko |
| **Première visite, mobile** | **≈ 170 Ko** |
| **Première visite, desktop** | **≈ 200 Ko** |

> À titre de comparaison, la médiane d'une page d'accueil en 2026 se situe entre
> 2,2 et 2,6 Mo. On est à **environ un treizième** de ce volume, sans avoir
> sacrifié une seule photographie.

**Objectifs à tenir :** Lighthouse ≥ 98 sur les quatre axes · LCP < 1,2 s en 4G ·
CLS = 0 (toutes les images ont des dimensions explicites) · INP < 100 ms ·
EcoIndex visé **A**.

---

## 4. Autonomie éditoriale : trois niveaux

| Niveau | Pour qui | Mise en œuvre |
|---|---|---|
| **1. Fichiers TypeScript** *(état actuel)* | Développeur, ou utilisateur à l'aise | Éditer `src/data/produits.ts`, `ateliers.ts`, `site.ts`. Les types empêchent les erreurs : oublier un prix casse le build, pas le site en production |
| **2. CMS git, gratuit** *(recommandé à la livraison)* | Les apiculteurs | **Sveltia CMS** ou **Decap CMS** : interface web d'édition, authentification GitHub, chaque enregistrement = un commit = un redéploiement automatique. Zéro serveur, zéro base de données, historique complet et réversible |
| **3. CMS headless hébergé** | Si le catalogue dépasse ~80 références | **Directus** ou **Strapi** auto-hébergé en France, consommé au build. Garde le site statique |

Le passage du niveau 1 au niveau 2 représente environ une demi-journée de
travail et ne modifie **aucun** composant d'affichage.

---

## 5. Trajectoire e-commerce

Le catalogue est déjà structuré pour la vente : `src/data/produits.ts` contient
`sku`, `slug`, `conditionnements[]` (libellé, quantité, unité, prix,
disponibilité) et les utilitaires `prixDepuis()`, `prixAuKilo()`,
`formaterPrix()`. Le balisage `schema.org/Product` et `AggregateOffer` est déjà
en place, les lignes de tarif portent un `data-sku`.

### Étape 1 — Vitrine (aujourd'hui)

Commande par formulaire, téléphone ou e-mail. Coût d'infrastructure : **0 €**.

### Étape 2 — Boutique légère (printemps 2027, ~50 commandes/mois)

Greffer un panier **Snipcart** ou **Stripe Payment Links** sur les `data-sku`
existants. Le site reste statique, le paiement est externalisé et conforme DSP2.
Budget : 2 à 3 jours d'intégration, ~29 €/mois + commission.
**Aucune refonte. Aucune migration de contenu.**

### Étape 3 — Boutique complète (si > 200 commandes/mois)

**C'est ici que Laravel 13 + Livewire 4 devient le bon outil** : gestion de
stock en temps réel, comptes clients et parrains, espace revendeur avec tarifs
dégressifs, étiquettes de lot, factures, relances, tableau de bord de récolte.

Le passage se fait sans douleur : le front-office actuel est en **HTML sémantique
+ classes Tailwind**, directement transposable en `.blade.php`. Les données
produit se migrent par un seeder Laravel lisant le TypeScript existant. Le
design system (`global.css`, §`@theme`) est repris **tel quel** — Tailwind v4 est
identique des deux côtés.

> Architecture cible à ce stade : **Laravel 13 pour le back-office et la
> boutique** sur `boutique.rucher-hautes-bruyeres.fr`, **Astro conservé pour les
> pages vitrine** servies par CDN. Chacun fait ce qu'il fait le mieux.

---

## 6. Hébergement & déploiement

### Recommandation : hébergeur français, électricité renouvelable

| Option | Profil | Prix indicatif |
|---|---|---|
| **Scaleway Object Storage + Edge Services** | Datacenters français, parmi les mieux-disants en PUE | ~2 €/mois |
| **Infomaniak Hébergement Web** | Suisse, 100 % renouvelable, neutre en carbone, RGPD strict | ~6 €/mois |
| **o2switch** | France, Auvergne, offre unique illimitée | ~7 €/mois |
| Cloudflare Pages / Netlify | Gratuit, très simple, mais CDN hors UE | 0 € |

Le choix d'un hébergeur **français ou suisse** est cohérent avec le discours de
la marque et simplifie le volet RGPD des mentions légales.

### Chaîne de déploiement

```
git push  →  GitHub Actions  →  npm ci && npm run build  →  rsync/déploiement
                                      ↓
                              astro check (0 erreur TS)
                              Lighthouse CI (seuil 95)
```

Déploiement par **commit**, réversible instantanément. Pas de FTP manuel, pas de
« qui a modifié quoi en production ».

---

## 7. Formulaires

Un site statique ne traite pas de POST. Le point d'intégration est centralisé
dans `src/data/site.ts` :

```ts
export const formulaires = {
  endpoint: "",              // ← URL du service de traitement
  pageConfirmation: "/merci",
};
```

Tant que `endpoint` est vide, les formulaires fonctionnent en **mode
démonstration** : validation complète côté client puis redirection vers `/merci`,
sans transmission de données. Une fois renseigné, l'envoi se fait en `fetch`
avec gestion d'erreur et repli affiché à l'utilisateur.

| Service | Hébergement | Prix | Remarque |
|---|---|---|---|
| **Brevo** (ex-Sendinblue) | 🇫🇷 France | Gratuit < 300 envois/j | Gère aussi l'infolettre — un seul outil |
| **Formspree** | 🇺🇸 États-Unis | ~8 €/mois | Le plus rapide à brancher |
| **Scaleway Serverless Function** | 🇫🇷 France | < 1 €/mois | Maîtrise totale, ~50 lignes de code |

**Recommandé : Brevo**, qui couvre à la fois le formulaire de contact et la
lettre saisonnière, avec des données hébergées en Europe.

---

## 8. Conformité & qualité

| Volet | État |
|---|---|
| **RGPD** | Aucun cookie, aucun traceur, polices auto-hébergées, carte en opt-in explicite, mentions de durée de conservation et de droits |
| **RGAA 4.1 / WCAG 2.1 AA** | Structure sémantique, contrastes documentés (10,5:1 en texte courant), navigation clavier complète, focus visible, `prefers-reduced-motion`, lien d'évitement, `<details>` natifs pour la FAQ |
| **SEO** | Un `<h1>` unique par page, JSON-LD `LocalBusiness` + `Product` + `FAQPage` + `Event`, sitemap automatique, canoniques, Open Graph, balises géographiques pour le référencement local |
| **Mentions légales** | Page dédiée : éditeur, hébergeur, propriété intellectuelle, données personnelles, CGV, déclaration d'accessibilité, démarche d'écoconception |

---

## 9. Estimation budgétaire indicative

| Poste | Charge | Fourchette |
|---|---|---|
| Design system & intégration des 5 pages | *livré dans ce dépôt* | — |
| Rédaction et relecture professionnelle | 2 à 3 j | 1 200 – 1 800 € |
| Reportage photographique sur site (1 journée + retouches) | 1 à 2 j | 900 – 1 500 € |
| Mise en place du CMS git + formation 2 h | 1 j | 500 – 700 € |
| Branchement des formulaires et de l'infolettre | 0,5 j | 250 – 400 € |
| Recette, audit accessibilité, mise en ligne | 1 j | 500 – 800 € |
| **Hébergement + nom de domaine** | — | **≈ 100 €/an** |
| **Maintenance** (mises à jour, sauvegardes) | 2 h/an | ≈ 200 €/an |

> Les photographies livrées ici sont **générées pour la maquette**. Elles
> définissent la direction artistique mais doivent impérativement être
> remplacées par un reportage réel avant mise en ligne : la crédibilité d'un
> site de producteur repose entièrement sur l'authenticité de ses images.

---

## 10. Commandes du projet

```bash
npm install        # installation des dépendances
npm run dev        # serveur de développement — http://localhost:4321
npm run build      # génération du site statique dans dist/
npm run preview    # prévisualisation du build de production
npx astro check    # vérification TypeScript (doit renvoyer 0 erreur)
```
