# Charte graphique — Rucher des Hautes Bruyères

> Objectif de direction artistique : **haut de gamme sans ostentation**. On vend
> un produit vivant, saisonnier, fabriqué par deux personnes. Le design doit
> évoquer le soin et la lumière, jamais le luxe froid ni le folklore rustique.

**Les trois interdits de la DA**

| À bannir | Pourquoi |
|---|---|
| Le jaune « abeille » saturé (#FFD400) et les rayures noir/jaune | Signal enfantin, utilisé par toute la grande distribution |
| Les polices script / manuscrites | Illisibles en petit, datées, et elles crient « artisanal » au lieu de le montrer |
| Les cadres en bois, textures de jute, tampons « 100 % naturel » | Décor de marché de Noël. Le miel se suffit à lui-même |

---

## 1. Palette de couleurs

Trois familles seulement : **l'or du miel**, le **vert de la forêt**, les
**neutres chauds**. Chaque famille existe en nuancier complet pour garantir les
contrastes.

### 1.1 Miel / Or — couleur de marque

C'est la couleur **d'ambiance**, pas celle des boutons. Elle colore les halos,
les trames d'alvéoles, les surtitres, les soulignements et les nuanciers produit.

| Jeton | Hex | Usage |
|---|---|---|
| `miel-50` | `#FDF8EE` | Fond de bloc d'information |
| `miel-100` | `#FAEDD2` | Pastilles d'icônes, étiquettes |
| `miel-200` | `#F4D99F` | Halos, bordures douces |
| `miel-300` | `#EDC068` | Accents sur fond sombre (texte lisible sur vert sapin) |
| `miel-400` | `#E3A63C` | Survol du bouton miel |
| **`miel-500`** | **`#D08A1E`** | **Couleur signature** — bandeaux, logo, CTA marchand |
| `miel-600` | `#B06F15` | Icônes sur fond clair |
| `miel-700` | `#8C5513` | **Texte accentué** (surtitres, prix) — 5,6:1 sur crème ✅ AA |
| `miel-800` | `#6F4316` | Texte sur fond `miel-100` |
| `miel-900` | `#4F3113` | Texte sur fond `miel-500` (bandeau CTA) |

> ⚠️ `miel-500` sur fond crème ne donne que **2,6:1** : à réserver aux aplats,
> aux filets et aux titres de très grande taille, jamais au texte courant.

### 1.2 Sapin / Olive — couleur d'action

Contre-intuitif mais décisif : **les boutons principaux sont verts, pas dorés**.
Le vert signale l'engagement écologique, se détache parfaitement du fond crème,
et évite l'effet « bouton promo » qu'aurait un CTA orange.

| Jeton | Hex | Usage |
|---|---|---|
| `sapin-50` | `#F2F5F0` | Fond des blocs « ce que nous faisons » |
| `sapin-100` | `#E3EADD` | Étiquettes positives (« En stock ») |
| `sapin-200` | `#C6D4BC` | Bordures des blocs verts |
| `sapin-300` | `#A0B692` | Anneau de focus |
| `sapin-400` | `#78916A` | Illustrations |
| `sapin-500` | `#5A734C` | Icônes de réassurance |
| `sapin-600` | `#44593A` | Texte sur fond `sapin-50` |
| **`sapin-700`** | **`#35482D`** | **CTA principal** — 13:1 sur crème ✅ AAA |
| `sapin-800` | `#2A3924` | Survol du CTA, bandeau d'annonce |
| `sapin-900` | `#1E2A1A` | Fond des sections sombres, pied de page |

### 1.3 Neutres chauds

Aucun gris bleuté : tous les neutres tirent vers le jaune-brun pour rester
cohérents avec la lumière du miel.

| Jeton | Hex | Usage | Contraste sur crème |
|---|---|---|---|
| `creme` | `#FBF7EF` | **Fond principal** (blanc cassé) | — |
| `sable` | `#F3EBDC` | Fond de section alterné | — |
| `cire` | `#EFE2C8` | Bordures, séparateurs, filets de tableaux | — |
| `anthracite` | `#1C1A17` | Titres, texte fort | **16,2:1** ✅ AAA |
| `encre` | `#3F3A33` | Texte courant | **10,5:1** ✅ AAA |
| `grisdoux` | `#766E62` | Texte secondaire, légendes | **4,65:1** ✅ AA |

### 1.4 Couleurs de service

| Rôle | Hex | Usage |
|---|---|---|
| Alerte / rupture de stock | `#8A3324` sur `#F6E7E4` | Étiquette « Épuisé », erreurs de formulaire |

### 1.5 Règle d'équilibre : 60 / 30 / 10

- **60 %** neutres chauds (crème, sable) — l'espace blanc est la matière première
- **30 %** photographie et nuanciers produit
- **10 %** couleur de marque (miel) et actions (sapin)

---

## 2. Typographie

### 2.1 Le couple retenu

| Rôle | Police | Pourquoi elle |
|---|---|---|
| **Titres** | **Fraunces** (variable, serif) | Serif « old style » aux empattements légèrement irréguliers et aux axes `SOFT` / `WONK` réglables. Elle apporte le caractère artisanal **sans aucune fantaisie manuscrite**, et son axe de taille optique (`opsz`) lui donne un rendu très élégant en grand format. |
| **Textes** | **Inter** (variable, sans-serif) | Lisibilité maximale, dessinée pour les écrans, excellente en petit corps, chiffres tabulaires pour les tableaux de prix. Volontairement neutre : elle laisse Fraunces porter la personnalité. |

**Réglages Fraunces appliqués aux titres :**

```css
font-variation-settings: "SOFT" 20, "WONK" 0, "opsz" 100;
font-weight: 500; /* jamais de gras lourd sur les titres */
```

`SOFT 20` arrondit très légèrement les terminaisons — c'est ce qui donne l'effet
« cire chaude ». `WONK 0` désactive les glyphes excentriques, trop typés pour une
marque alimentaire.

### 2.2 Hébergement : local, jamais Google Fonts

Les deux polices sont servies depuis `/public/fonts/` en **WOFF2 variable**
(1 fichier = toutes les graisses) :

- `fraunces-variable.woff2` — 66 Ko
- `inter-variable.woff2` — 48 Ko
- **Total : 114 Ko**, contre ~380 Ko pour six fichiers statiques

Deux raisons : la **performance** (pas de connexion à un domaine tiers, polices
préchargées) et la **conformité RGPD** — un appel à `fonts.googleapis.com`
transmet l'adresse IP du visiteur aux États-Unis, ce que la CNIL considère comme
un transfert de données nécessitant un consentement.

### 2.3 Échelle fluide

Aucune valeur fixe : tout est en `clamp()`, donc l'échelle s'adapte entre 360 px
et 1536 px sans point de rupture.

| Jeton | Taille | Interlignage | Usage |
|---|---|---|---|
| `text-display` | `clamp(2.5rem → 5.25rem)` | 1.03 | H1 de la page d'accueil uniquement |
| `text-h1` | `clamp(2.125rem → 4rem)` | 1.08 | H1 des pages intérieures |
| `text-h2` | `clamp(1.75rem → 3rem)` | 1.13 | Titres de section |
| `text-h3` | `clamp(1.3rem → 1.75rem)` | 1.25 | Titres de carte |
| `text-lead` | `clamp(1.0625rem → 1.3125rem)` | 1.65 | Chapôs |
| base | `1rem` | 1.6 | Texte courant |
| `text-eyebrow` | `0.75rem` | — | Surtitres, `letter-spacing: 0.18em`, majuscules |

**Règles de composition :**

- `text-wrap: balance` sur tous les titres (évite le mot orphelin)
- `text-wrap: pretty` sur tous les paragraphes
- Largeur de ligne limitée à **65-75 caractères** (`max-w-xl` / `max-w-prose`)
- Chiffres tabulaires (`tabular-nums`) dans tous les tableaux de prix
- Lettrine Fraunces sur le premier paragraphe du récit (classe `.lettrine`)

---

## 3. Style visuel

### 3.1 Principes

1. **L'espace blanc est un ingrédient.** Rythme vertical de section : `py-20`
   (mobile) → `py-32` (grand écran). Jamais deux blocs colorés consécutifs.
2. **Alternance de fonds.** `creme` → `sable` → `creme` → `sapin-900`. Le vert
   sombre ne revient jamais deux fois de suite : c'est l'accent, pas la norme.
3. **Asymétrie contrôlée.** Les grilles éditoriales sont en 6/5, 7/5 ou 5/7 —
   jamais 50/50, qui fige la mise en page.
4. **Un seul geste graphique par section.** Un halo, ou une trame, ou une forme
   organique. Jamais les trois.

### 3.2 Éléments graphiques organiques

| Élément | Implémentation | Où |
|---|---|---|
| **Trame d'alvéoles** | SVG en `data:` URI, ~400 octets gzippés, opacité 7 à 50 % | Fonds de section sombres, angles de bloc |
| **Trame fine** | Variante 36×62 px en `mix-blend-overlay` | Par-dessus les nuanciers produit |
| **Masque hexagonal** | `clip-path: polygon(...)` | Pastilles d'icônes de la section réassurance |
| **Halo de miel** | `radial-gradient` 60 % × 50 % depuis le haut | Haut des hero sections |
| **Soulignement dessiné** | `<svg>` inline, tracé irrégulier à la main | Sous le mot clé du H1 |
| **Forme goutte** | `border-radius: 48% 52% 42% 58% / 54% 44% 56% 46%` | Visuels éditoriaux secondaires |

Tous les motifs sont **vectoriels et inline** : zéro requête réseau
supplémentaire, redimensionnement parfait, teinte pilotée par `currentColor`.

### 3.3 Rayons, ombres, profondeur

```
Cartes . . . . . . . . rounded-2xl      (1 rem)
Visuels éditoriaux . . rounded-[2rem]   → sm:rounded-[2.5rem]
Boutons & étiquettes . rounded-full
Pastilles d'icônes . . rounded-xl       (0.75 rem)
```

Les ombres sont **brunes, jamais grises** — une ombre grise sur un fond crème
fait sale :

| Jeton | Valeur | Usage |
|---|---|---|
| `shadow-douce` | `0 1px 2px rgb(79 49 19 / .04), 0 8px 24px -8px rgb(79 49 19 / .08)` | Cartes au repos |
| `shadow-relief` | `0 2px 4px rgb(79 49 19 / .05), 0 18px 40px -16px rgb(79 49 19 / .16)` | Survol, visuels |
| `shadow-flottante` | `0 30px 70px -30px rgb(28 26 23 / .35)` | Hero, éléments superposés |

### 3.4 Photographie

Une seule direction, tenue sur tout le site :

- **Lumière naturelle rasante**, heure dorée ou fenêtre nord diffuse
- **Faible profondeur de champ**, arrière-plans fondus
- **Palette ambre / olive / crème** — désaturation légère des bleus
- **Grain argentique discret**, jamais de HDR ni de vignettage marqué
- **Mains, gestes et matière** plutôt que poses

**Nuanciers produit sans photo.** Chaque miel possède sa teinte réelle
(`teinte.clair` → `teinte.fonce`) rendue en `radial-gradient`. Cela évite
dix-neuf photos de pots, allège la page de plusieurs centaines de kilo-octets,
et donne paradoxalement une grille **plus élégante** qu'un alignement de
packshots. Pour l'acacia : `#F8E3A6 → #E0AD44`. Pour le châtaignier :
`#B06F15 → #4A2606`.

### 3.5 Mouvement

Discret, court, jamais décoratif.

- Apparition au défilement via `animation-timeline: view()` — **CSS natif, zéro
  JavaScript**, dégradation gracieuse si non supporté
- Survol des cartes : `translateY(-4px)` sur 500 ms, courbe `cubic-bezier(.22,1,.36,1)`
- Flèches de bouton : `translateX(4px)` au survol
- **Tout est annulé** sous `@media (prefers-reduced-motion: reduce)`

### 3.6 Accessibilité intégrée à la charte

- Anneau de focus **visible partout** : 2 px `sapin-700`, décalé de 3 px
- Aucune information portée par la seule couleur (les étiquettes ont du texte)
- Contrastes vérifiés et consignés dans le tableau §1.3
- Cibles tactiles ≥ 44 × 44 px
- Lien d'évitement vers le contenu principal en tête de chaque page

---

## 4. Logo

Alvéole hexagonale ouverte (trait `miel-500`) contenant une abeille stylisée en
trait `sapin-700`, alvéole intérieure remplie à 18 % d'opacité. Le bloc-marque
associe **« Rucher des Hautes Bruyères »** en Fraunces 600 et
**« APICULTURE ARTISANALE »** en Inter 500 majuscules, `letter-spacing: 0.2em`.

Deux variantes : `sombre` (fond clair) et `clair` (fond `sapin-900`). Taille
minimale de l'emblème seul : 32 px. Zone de protection : la hauteur d'une
alvéole sur tout le pourtour.

---

## 5. Référence d'implémentation

Toute la charte est codée en **un seul endroit** :
[`src/styles/global.css`](../src/styles/global.css), via la configuration
CSS-first de Tailwind CSS v4 (`@theme`). Modifier une valeur hexadécimale dans ce
bloc la propage instantanément à l'ensemble du site — aucun fichier
`tailwind.config.js` à maintenir.
