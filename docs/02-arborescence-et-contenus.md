# Arborescence & maquettage textuel

Document de référence pour la rédaction et l'intégration. Chaque bloc indique
son **wireframe**, son **contenu rédigé** et le **fichier qui l'implémente**.

---

## 0. Arborescence générale

```
/                              Accueil .......................... src/pages/index.astro
├── /le-rucher                 Notre histoire / Le rucher ....... src/pages/le-rucher.astro
│   ├── #territoire              L'environnement des ruches
│   ├── #methodes                Méthodes d'élevage
│   ├── #calendrier              Le calendrier apicole
│   └── #engagements             Engagements chiffrés
├── /nos-produits              Catalogue vitrine ................ src/pages/nos-produits.astro
│   ├── #miels                   7 miels de récolte
│   ├── #ruche                   Gelée royale, pollen, propolis
│   ├── #cire                    Cire, bougies, baume
│   ├── #epicerie                Pain d'épices, vinaigre, hydromel
│   ├── #coffrets                Coffrets & cadeaux
│   └── #professionnels          Revendeurs & épiceries fines
├── /ateliers-parrainages      Pédagogie & parrainage ........... src/pages/ateliers-parrainages.astro
│   ├── #ateliers                5 formules d'atelier
│   ├── #scolaires               Focus enseignants
│   ├── #parrainage              Formules particuliers
│   └── #entreprises             Formules RSE
├── /contact                   Contact & accès .................. src/pages/contact.astro
│   ├── #acces                   Carte & modes d'accès
│   ├── #points-de-vente         Revendeurs & marchés
│   └── #professionnels          Devenir revendeur
├── /merci                     Confirmation d'envoi ............. src/pages/merci.astro
├── /mentions-legales          Légal, RGPD, accessibilité ....... src/pages/mentions-legales.astro
└── /404                       Page introuvable ................. src/pages/404.astro
```

**Navigation principale** (5 entrées, jamais plus) : Accueil · Le rucher ·
Nos produits · Ateliers & parrainages · Contact & accès.
**CTA permanent dans l'en-tête** : « Voir les miels ».

### Parcours utilisateurs visés

| Cible | Entrée | Chemin | Conversion |
|---|---|---|---|
| Particulier gourmand | Accueil | Les Essentiels → Nos produits → Contact | Commande par e-mail |
| Épicerie fine | SEO « miel gros Lyon » | Nos produits #professionnels → Contact #professionnels | Demande de tarif pro |
| Enseignant | SEO « sortie scolaire abeilles » | Ateliers #scolaires → devis | Devis scolaire |
| Entreprise RSE | LinkedIn | Ateliers #entreprises → parrainage | Devis parrainage |
| Voisin curieux | Google Maps | Contact → horaires | Visite en boutique |

---

## PAGE 1 — Accueil

> **Intention :** faire comprendre en huit secondes *qui*, *quoi*, *où*, et
> *pourquoi c'est différent*. Puis donner une seule action évidente.

```
┌──────────────────────────────────────────────────────────────────┐
│ ▸ BANDEAU   Récolte de tilleul 2026 arrivée · Boutique mer→sam   │
├──────────────────────────────────────────────────────────────────┤
│ ▸ EN-TÊTE   [logo]      nav 5 entrées      ☎   [Voir les miels]  │
├──────────────────────────────────────────────────────────────────┤
│                                                                  │
│  ▸ HERO                            ┌───────────────────┐         │
│    surtitre                        │                   │         │
│    H1 ────────────────             │   photographie    │         │
│    sous-titre                      │   apiculteur      │         │
│    [CTA 1]  [CTA 2]                │                   │         │
│    ✓ bio  ✓ froid  ✓ direct        │ ┌───────────────┐ │         │
│                                    └─│ Récolte : …   │─┘         │
│  ┌────────┬────────┬────────┬────────┴───────────────┴──┐        │
│  │  180   │   9    │  100%  │        15 km              │        │
│  └────────┴────────┴────────┴───────────────────────────┘        │
├──────────────────────────────────────────────────────────────────┤
│  ▸ ENGAGEMENT   [photo + pastille 1/3]  │  manifeste + signature │
├──────────────────────────────────────────────────────────────────┤
│  ▸ LES ESSENTIELS        (fond sable)                            │
│    ┌──────┐ ┌──────┐ ┌──────┐                                    │
│    │miel 1│ │miel 2│ │miel 3│          grille « bento »          │
│    └──────┘ └──────┘ └──────┘                                    │
│    ┌─────────────────────┐ ┌──────┐                              │
│    │ atelier + photo     │ │coffr.│                              │
│    └─────────────────────┘ └──────┘                              │
├──────────────────────────────────────────────────────────────────┤
│  ▸ RÉASSURANCE  (fond sapin-900)  ⬡ naturel ⬡ local ⬡ à froid    │
├──────────────────────────────────────────────────────────────────┤
│  ▸ BOUTIQUE     infos pratiques     │  photo miellerie           │
├──────────────────────────────────────────────────────────────────┤
│  ▸ TÉMOIGNAGES  3 citations (cheffe · enseignant · RSE)           │
├──────────────────────────────────────────────────────────────────┤
│  ▸ CTA PARRAINAGE  (aplat miel-500)                              │
├──────────────────────────────────────────────────────────────────┤
│  ▸ PIED DE PAGE  infolettre · 4 colonnes · labels · légal        │
└──────────────────────────────────────────────────────────────────┘
```

### 1.1 Hero — `src/components/Hero.astro`

| Élément | Contenu |
|---|---|
| Surtitre | `Apiculture artisanale · Monts du Lyonnais` |
| **H1** | **Des miels qui ont le goût de _leur paysage_** *(les deux derniers mots en ambre, soulignés d'un tracé SVG irrégulier)* |
| Sous-titre | Cent quatre-vingts colonies, neuf ruchers sédentaires posés entre les prairies et la forêt. Nous récoltons à froid, nous ne mélangeons jamais deux floraisons, et nous ouvrons nos ruches à qui veut comprendre. |
| CTA primaire | **Découvrir nos miels** → `/nos-produits` |
| CTA secondaire | **Visiter le rucher** → `/ateliers-parrainages` |
| Bandeau de confiance | ✓ Certifié Agriculture Biologique · ✓ Jamais chauffé au-delà de 35 °C · ✓ Vente directe du producteur |
| Carte flottante | **Récolte en cours** — Tilleul 2026 · *Extrait le 14 juillet · 212 pots* |
| Chiffres clés | **180** colonies choyées · **9** ruchers sédentaires · **100 %** récolté à froid · **15 km** rayon de butinage |

> **Pourquoi ce H1.** Il énonce une promesse de goût (bénéfice) adossée à une
> preuve territoriale (différenciation), en huit mots. Il évite « passion »,
> « savoir-faire » et « authentique » — trois mots que le visiteur ne lit plus.

### 1.2 Section Engagement — `src/components/Manifeste.astro`

**Surtitre :** Notre engagement
**H2 :** Nous ne produisons pas du miel. Nous veillons sur des colonies.

> Une ruche n'est pas une usine, et une abeille n'est pas une ouvrière qu'on
> remplace. Depuis quinze ans, nous travaillons avec une règle simple : **la
> colonie passe avant la récolte**. Nous laissons toujours assez de miel pour
> que nos abeilles passent l'hiver avec leurs propres réserves, même les années
> où cela nous coûte la moitié d'une récolte.
>
> Pas de transhumance à travers le pays, pas de nourrissement au sirop
> industriel, pas de traitement de synthèse, pas de reines importées. Nos
> ruchers restent sur place, dans un rayon de quinze kilomètres, et nous élevons
> nos propres reines à partir des colonies les plus résistantes et les plus
> douces du cheptel.
>
> Le reste du temps, nous plantons. Trois cents mètres de haies mellifères par
> an, deux hectares de jachères fleuries, et une fauche tardive sur toutes nos
> parcelles pour laisser les fleurs monter en graine. Parce qu'une abeille sans
> fleurs, c'est juste un insecte qui a faim.

**Signature :** Mathieu & Claire Vasseur — *Apiculteurs depuis 2009*
**Pastille statistique :** **1/3** de notre alimentation
**Légende photo :** Une abeille visite jusqu'à 700 fleurs par sortie, et jusqu'à 7 000 par jour.
**CTA :** Lire notre histoire → `/le-rucher`

### 1.3 Section Les Essentiels — `src/components/Essentiels.astro`

**Surtitre :** Les essentiels
**H2 :** Ce qu'il faut avoir goûté au moins une fois
**Chapô :** Trois miels qui résument notre année, un coffret pour les découvrir tous, et la visite qui change définitivement la façon dont on regarde une abeille.
**Lien :** Voir tout le catalogue →

| Carte | Contenu |
|---|---|
| **Miel d'acacia** · *Best-seller* | Le plus délicat. Limpide, floral, d'une douceur presque transparente. — Fleur d'oranger · Vanille fraîche · Amande douce — **dès 9,50 €** |
| **Miel de châtaignier** | Le caractère. Ambré sombre, boisé, franchement tannique. — Bois humide · Châtaigne grillée · Amertume tannique — **dès 8,50 €** |
| **Miel de tilleul** | Le mentholé. Frais, balsamique, étonnamment aromatique. — Menthe fraîche · Tisane · Agrume confit — **dès 8,90 €** |
| **Atelier : Une heure dans la ruche** *(photo)* | Nous ouvrons une ruche devant vous. Vous verrez la reine, le couvain, les réserves — et vous entendrez le bruit d'une colonie qui va bien. — 1 h 15 · dès 6 ans · avril → septembre · **14 € / adulte** |
| **Coffret découverte** | Quatre miels de 125 g et leur fiche de dégustation, dans un étui en carton recyclé. Le meilleur moyen de trouver son préféré. — **29,00 €** |

**Mention de pied de section :** ⓘ La vente en ligne arrive au printemps 2027.
En attendant, commandez par téléphone ou e-mail — ou passez nous voir à la miellerie.

### 1.4 Section Réassurance — `src/components/Reassurance.astro`

**H2 :** Trois promesses, vérifiables
**Chapô :** Chaque pot porte un numéro de lot. Donnez-le-nous et nous vous dirons quel rucher, quelle semaine, quelle floraison.

| ⬡ Icône | Titre | Accroche | Développement | Mention |
|---|---|---|---|---|
| Feuille | **100 % naturel** | Rien n'entre, rien ne sort. | Aucun additif, aucun arôme, aucun sucre ajouté. Un seul filtrage sur grille large pour retirer les morceaux de cire — tout le reste (pollens, enzymes, grains de propolis) reste dans le pot. | Certifié AB · FR-BIO-01 |
| Localisation | **Récolte locale** | Neuf ruchers, quinze kilomètres. | Nos colonies ne voyagent pas. Elles restent toute l'année sur les mêmes coteaux, ce qui leur évite le stress de la transhumance et vous garantit un miel dont vous pouvez voir le paysage depuis la miellerie. | Monts du Lyonnais · 620 à 840 m |
| Flocon | **Extraction à froid** | Jamais au-dessus de 35 °C. | La température d'une ruche en été. Au-delà, les enzymes du miel se dégradent et les arômes s'évaporent. Nous n'utilisons donc ni pasteurisateur, ni fondoir chaud, ni filtration sous pression. | Extraction manuelle · maturation 21 j |

### 1.5 Pied de page — `src/components/PiedDePage.astro`

- **Infolettre :** *Les nouvelles du rucher, quatre fois par an* — « Une lettre par saison : ce que les abeilles rapportent, les récoltes disponibles, les dates d'ateliers. Pas de promotion agressive, pas de revente de vos données, désinscription en un clic. »
- **Colonne 1 :** logo, adresse postale, téléphone, e-mail, réseaux sociaux
- **Découvrir :** Notre histoire · Nos méthodes apicoles · Le calendrier du rucher · Nos engagements
- **Acheter :** Tous nos miels · Produits de la ruche · Cire & bougies · Coffrets cadeaux · Points de vente · Espace revendeurs
- **Participer :** Visites du rucher · Ateliers scolaires · Parrainer une ruche · Offres entreprises (RSE)
- **Bandeau labels :** Agriculture Biologique (FR-BIO-01) · Label Apiculture Française · Site écoconçu, hébergé en France sur énergie renouvelable
- **Légal :** Mentions légales · Confidentialité & cookies · Conditions de vente · Accessibilité : partiellement conforme
- **Avertissements réglementaires :** alcool, produits de la ruche non médicamenteux, miel déconseillé avant 12 mois

---

## PAGE 2 — Notre Histoire / Le Rucher

> **Intention :** transformer la transparence en preuve. On raconte un parcours
> réel, puis on aligne des faits vérifiables.

```
┌──────────────────────────────────────────────────────────────────┐
│ ▸ EN-TÊTE DE PAGE   fil d'Ariane · surtitre · H1 · chapô         │
├──────────────────────────────────────────────────────────────────┤
│ ▸ RÉCIT      ┌──────────┐ │ lettrine + 5 paragraphes             │
│              │ portrait │ │ H3 Des matins qui commencent à 5 h   │
│              │ (collant)│ │ H3 Ce que l'on apprend en 15 ans     │
│              └──────────┘ │ ❝ citation encadrée ❞                │
├──────────────────────────────────────────────────────────────────┤
│ ▸ TERRITOIRE  photo ruches  │  texte  →  tableau des 4 ruchers    │
├──────────────────────────────────────────────────────────────────┤
│ ▸ MÉTHODES    ✓ ce que nous faisons  │  ✗ ce que nous ne faisons │
├──────────────────────────────────────────────────────────────────┤
│ ▸ CALENDRIER  (fond sapin-900)  01 · 02 · 03 · 04 saisons        │
├──────────────────────────────────────────────────────────────────┤
│ ▸ ENGAGEMENTS  6 indicateurs chiffrés + bilan carbone            │
├──────────────────────────────────────────────────────────────────┤
│ ▸ CTA  « La meilleure visite, c'est la vôtre »                   │
└──────────────────────────────────────────────────────────────────┘
```

**H1 :** Quinze ans à écouter des colonies
**Chapô :** Il n'y a pas de secret de fabrication chez nous, seulement des choix — parfois coûteux — répétés saison après saison. Voici lesquels, et pourquoi.

### 2.1 Le récit (extraits)

> *(lettrine)* La première ruche était un cadeau de départ à la retraite —
> celle d'un voisin qui n'arrivait plus à monter jusqu'à son rucher. Elle est
> restée six mois au fond du jardin avant que j'ose l'ouvrir. Quand je l'ai
> fait, en avril 2008, j'ai mis vingt minutes à refermer le toit tellement je
> regardais. Il y avait là-dedans une organisation que je ne comprenais pas, et
> c'est exactement ce qui m'a attrapé.

> J'étais alors ingénieur agronome dans une coopérative céréalière, à conseiller
> des doses de produits phytosanitaires. Il y a une forme d'ironie à passer ses
> journées à recommander des insecticides et ses soirées à s'inquiéter pour un
> essaim. […] Il m'a appris une seule chose, mais il me l'a répétée mille fois :
> **une colonie te dit tout, à condition de te taire.**

**H3 — Des matins qui commencent à cinq heures** · **H3 — Ce que l'on apprend en quinze ans**
*(texte intégral dans `src/pages/le-rucher.astro`)*

**Citation en exergue :** « On n'élève pas des abeilles comme on élève des poules. On leur met un toit, on écarte ce qui les tue, et on prélève le surplus. Tout le reste, c'est elles qui le font. »

### 2.2 Le territoire — tableau des ruchers

**H2 :** Neuf ruchers, tous à vélo de la miellerie

| Rucher | Altitude | Colonies | Flore dominante | Exposition |
|---|---|---|---|---|
| Le Clos Doré | 620 m | 32 | Acacia, aubépine, ronce | Coteau plein sud, abrité du vent du nord |
| La Combe Verte | 680 m | 28 | Tilleul, trèfle blanc, châtaignier | Fond de vallon humide, le long du ruisseau |
| Les Chênes Tors | 710 m | 24 | Châtaignier, sapin, framboisier sauvage | Lisière de forêt, mi-ombre l'après-midi |
| Le Plateau des Bruyères | 840 m | 40 | Callune, myrtille, genêt | Lande ouverte, rucher d'été uniquement |

**Critères d'implantation :** soleil du matin · abri contre le vent dominant ·
point d'eau à moins de 300 m · aucune grande culture traitée dans un rayon de 2 km.

### 2.3 Méthodes — le double tableau

**H2 :** La transparence, c'est aussi dire ce qu'on ne fait pas

| ✓ Ce que nous faisons | ✗ Ce que nous ne faisons jamais |
|---|---|
| 14 à 18 kg de miel laissés par ruche pour l'hivernage | Pas de transhumance longue distance |
| Élevage de nos propres reines | Pas de nourrissement spéculatif au sirop industriel |
| Varroa traité à l'acide oxalique et formique | Pas d'acaricide de synthèse ni d'antibiotique |
| Ruches en douglas local non traité, huile de lin | Pas de reines importées |
| Un tiers des cadres renouvelé chaque année | Pas de chauffage ni de filtration sous pression |
| Carnet de rucher consultable | Pas de pots « origine UE et hors UE » |

### 2.4 Calendrier apicole

| # | Période | Titre | Résumé |
|---|---|---|---|
| 01 | Février → avril | **Le réveil** | Première visite dès 14 °C. Saule marsault et pissenlit. On découvre parfois qu'une ruche n'a pas passé l'hiver. |
| 02 | Mai → juillet | **La pleine saison** | Tout se joue en dix semaines. Hausses, surveillance d'essaimage tous les neuf jours, élevage de reines, premières extractions. |
| 03 | Août → septembre | **Les dernières récoltes** | Montée sur les landes à callune. Bilan sanitaire complet, comptage du varroa, réunion des colonies faibles. |
| 04 | Octobre → janvier | **Le temps long** | Atelier : réparation, filage, fonte de cire, bougies, ateliers du mercredi, marchés de Noël. |

### 2.5 Engagements chiffrés

**300 m** de haies mellifères plantées chaque année · **2 ha** de jachères
fleuries · **0** traitement de synthèse depuis la création · **92 %** de survie
hivernale (moyenne 5 ans) · **15 km** rayon maximal entre deux ruchers ·
**100 %** des pots consignés et réemployés.

**Bilan carbone 2025 :** 1,9 t éq. CO₂ pour l'exploitation entière, dont 61 %
liés aux déplacements. Utilitaire diesel remplacé par un véhicule électrique
rechargé sur la toiture photovoltaïque en mars 2026.

---

## PAGE 3 — Nos Produits (vitrine sans paiement)

> **Intention :** donner envie **et** donner les moyens de décider. Chaque fiche
> est un argumentaire de vente complet, prêt à devenir une fiche e-commerce.

```
┌──────────────────────────────────────────────────────────────────┐
│ ▸ EN-TÊTE DE PAGE                                                │
├──────────────────────────────────────────────────────────────────┤
│ ▸ NAV CATÉGORIES (collante)  Miels · Ruche · Cire · Épicerie …   │
├──────────────────────────────────────────────────────────────────┤
│ ▸ ENCART  « Pas encore de paiement en ligne — et c'est voulu »   │
├──────────────────────────────────────────────────────────────────┤
│ ▸ CATÉGORIE  en-tête (n° · titre · intro · photo)                │
│   ┌─────────┬──────────────────────────────────────────────┐     │
│   │nuancier │ nom · accroche · description                 │     │
│   │ teinte  │ récolte · texture · accords · bienfaits      │     │
│   │ réelle  │ [notes de dégustation]                       │     │
│   │         │ tableau : conditionnement · prix · €/kg · stock│    │
│   │         │ [Commander ce produit]                       │     │
│   └─────────┴──────────────────────────────────────────────┘     │
│   × 19 produits, 5 catégories (fonds alternés)                   │
├──────────────────────────────────────────────────────────────────┤
│ ▸ COMMANDER EN 3 TEMPS   choisir → écrire → récupérer            │
├──────────────────────────────────────────────────────────────────┤
│ ▸ PROFESSIONNELS (fond sapin-900)  conditions + capacités        │
├──────────────────────────────────────────────────────────────────┤
│ ▸ CTA  « Dites-nous ce que vous aimez »                          │
└──────────────────────────────────────────────────────────────────┘
```

**H1 :** Tout ce qui sort de nos ruches
**Chapô :** Sept miels, trois produits de la ruche, de la cire travaillée à la
main et quelques gourmandises. Chaque fiche indique la floraison, la période de
récolte, les notes de dégustation et le prix au kilo — pour que vous puissiez
comparer en connaissance de cause.

### 3.1 Les cinq catégories

| # | Catégorie | Intro |
|---|---|---|
| 01 | **Les miels de récolte** (7) | Sept miels, sept floraisons, sept moments de l'année. Tous extraits à froid, filtrés une seule fois sur grille large, jamais pasteurisés, jamais mélangés entre eux. |
| 02 | **Les produits de la ruche** (3) | Gelée royale, pollen et propolis — récoltés en petites quantités pour ne jamais affaiblir une colonie. |
| 03 | **Cire & bougies** (3) | Uniquement la cire d'opercules de nos propres ruches, fondue à basse température et travaillée à la main. |
| 04 | **L'épicerie du rucher** (3) | Ce que l'on fabrique avec le miel quand la saison apicole se calme, en partenariat avec des artisans voisins. |
| 05 | **Coffrets & cadeaux** (3) | Des assemblages prêts à offrir, en carton recyclé, imprimés à l'encre végétale et calés avec de la frisure de papier. |

### 3.2 Structure d'une fiche produit

Chaque produit comporte **systématiquement** : nuancier à sa teinte réelle ·
nom · accroche en une phrase · description gourmande (2 à 4 phrases) · période
de récolte · texture · accords · bienfaits éventuels · 3 à 4 notes de
dégustation · tableau des conditionnements (libellé, prix TTC, **prix au kilo**,
disponibilité) · bouton de commande pré-rempli.

**Exemple — Miel de bruyère callune**

> **Le rare. Gélifié, fumé, puissant — notre signature.**
>
> Le miel qui a donné son nom à la maison. Chaque fin d'été, nous montons
> quarante ruches sur les landes à callune du plateau. La récolte est minuscule,
> l'extraction se fait au presse-rayon car ce miel est trop gélatineux pour la
> centrifugeuse. On obtient une gelée ambre-roux au goût de caramel fumé, de
> bois de réglisse et de terre chaude. Quelques centaines de pots par an, jamais
> plus.
>
> **Récolte** Septembre, sur les landes d'altitude · **Texture** Gélifiée
> (thixotrope), se tient à la cuillère · **Accords** Vieux comté, foie gras,
> whisky tourbé, agneau braisé
> **Notes** Caramel fumé · Réglisse · Humus · Fruits secs torréfiés
>
> | Conditionnement | Prix TTC | Prix au kilo | Stock |
> |---|---|---|---|
> | Pot de 125 g | 13,50 € | 108,00 €/kg | En stock |
> | Pot de 250 g | 24,00 € | 96,00 €/kg | Épuisé |

### 3.3 Anticipation du e-commerce

Le catalogue vit dans `src/data/produits.ts`, déjà structuré comme une base
marchande : `sku`, `slug`, `conditionnements[]` avec prix et `disponibilite`
(`disponible` · `saison` · `bientot` · `epuise`), fonctions `prixDepuis()`,
`prixAuKilo()`, `formaterPrix()`. Les lignes du tableau portent déjà un
attribut `data-sku`, et le bouton d'action un `data-action-commande`.

**Le jour de la bascule** : on remplace la constante `produits` par un appel API
et on branche un panier sur `data-sku`. **Aucun composant d'affichage ne change.**
Voir [`docs/03-recommandation-technique.md`](./03-recommandation-technique.md) §5.

### 3.4 Espace professionnels

**H2 :** Revendre nos miels dans votre boutique
Remise de 35 % dès 40 pots · franco de port à 250 € HT · PLV offerte ·
étiquetage conforme · étiquette co-brandée dès 120 pots.
**Capacités :** 3,2 t de récolte annuelle · ≈ 900 kg disponibles en gros ·
réassort 5-10 jours ouvrés · commande minimale 40 pots · agrément FR 69.231.001 CE.

---

## PAGE 4 — Ateliers & Parrainages

```
┌──────────────────────────────────────────────────────────────────┐
│ ▸ EN-TÊTE DE PAGE  +  bandeau photo 21:9 avec citation           │
├──────────────────────────────────────────────────────────────────┤
│ ▸ ATELIERS  5 cartes : icône · famille · nom · accroche          │
│             durée / public / effectif / saison · inclus · tarif  │
├──────────────────────────────────────────────────────────────────┤
│ ▸ SCOLAIRES  4 blocs par cycle  │  encadré infos pratiques       │
├──────────────────────────────────────────────────────────────────┤
│ ▸ PARRAINAGE  particuliers (2 formules)                          │
│               entreprises (2 formules, fond sapin-50)            │
├──────────────────────────────────────────────────────────────────┤
│ ▸ DÉROULÉ  5 étapes numérotées  │  photo ruches                  │
├──────────────────────────────────────────────────────────────────┤
│ ▸ FAQ  6 questions en <details> natif                            │
├──────────────────────────────────────────────────────────────────┤
│ ▸ CTA  carte cadeau sur papier à planter                         │
└──────────────────────────────────────────────────────────────────┘
```

**H1 :** Ouvrir une ruche change la façon de regarder le monde

### 4.1 Les cinq ateliers

| Atelier | Durée | Public | Effectif | Tarif | Saison |
|---|---|---|---|---|---|
| **Une heure dans la ruche** *(la plus demandée)* | 1 h 15 | Tout public, dès 6 ans | 4 à 12 | **14 € / adulte**, 8 € enfant 6-14 ans | Avril → sept., mer. & sam. 10 h et 15 h |
| **Apiculteur d'un jour** | 4 h | Dès 14 ans | 3 à 8 | **75 € / pers.** (+18 € déjeuner) | Mai → juillet, samedi |
| **La classe buissonnière** *(agréé Éducation nationale)* | 2 h | CP → 3e, centres de loisirs, IME | 1 classe, 30 élèves | **190 € / classe** (+60 € hors les murs ≤ 40 km) | Toute l'année |
| **Séminaire & cohésion d'équipe** | 3 h → journée | Équipes, CSE, CODIR | 6 à 40 | **Sur devis, dès 890 €** | Avril → octobre, lun.-ven. |
| **Atelier cire & bougies** *(format hiver)* | 2 h | Dès 7 ans accompagné | 4 à 14 | **32 € / pers.** (anniversaire 8 enfants : 240 €) | Nov. → mars, mer. & sam. |

Chaque carte détaille « Compris dans le tarif » (4 à 5 lignes concrètes).

### 4.2 Focus scolaires

Déclinaison par cycle : **Cycle 2** (approche sensorielle) · **Cycle 3**
(organisation sociale, pollinisation, atelier de mesure) · **Cycle 4**
(biodiversité, services écosystémiques, débat argumenté) · **Projet annuel**
(ruche pédagogique dans l'établissement, 3 interventions).

Encadré pratique : tarif · déplacement · encadrement requis (2 adultes) · délai
de réservation (3 semaines) · règlement par mandat administratif · RC
professionnelle fournie.

### 4.3 Parrainage de ruches

**Accroche :** Parrainer une ruche, ce n'est pas un abonnement à du miel : c'est
financer l'installation et l'entretien d'une colonie supplémentaire sur le
territoire.

**Particuliers**

| Formule | Prix | Contreparties |
|---|---|---|
| **Demi-ruche** | **95 €/an** (≈ 8 €/mois) | 6 pots de 250 g · certificat nominatif sur papier recyclé · 3 lettres de nouvelles · 1 visite pour 2 personnes |
| **Ruche entière** *(la plus choisie)* | **180 €/an** (≈ 15 €/mois) | 14 pots de 250 g · plaque gravée sur la ruche · 4 lettres + 2 points météo · 2 visites pour 2 personnes dont une à la récolte · journée des parrains · −10 % permanents en boutique |

**Entreprises & collectivités**

| Formule | Prix | Contreparties |
|---|---|---|
| **Ruche d'entreprise** | **560 €/an HT** par ruche | 60 pots co-brandés · plaque à votre nom · reportage photo/vidéo libre de droits · bilan biodiversité exploitable en RSE/CSRD · 1 visite collaborateurs (12 pers.) · mention sur le site |
| **Rucher d'entreprise** *(format RSE)* | **2 400 €/an HT** — 5 ruches | 300 pots personnalisés · installation possible sur votre site (étude gratuite) · 2 journées collaborateurs (40 pers.) · inventaire floral et comptage pollinisateurs · kit de communication · accompagnement au reporting extra-financier |

**Mécénat :** reçu fiscal possible via partenaire associatif si le parrainage
soutient les actions pédagogiques.

### 4.4 FAQ (6 questions)

Peur des piqûres · allergie au venin · météo défavorable · accessibilité PMR ·
réservation et règlement · offrir un atelier.
*Réponses intégrales dans `src/data/ateliers.ts`.* Balisage `FAQPage` en JSON-LD.

---

## PAGE 5 — Contact & Accès

```
┌──────────────────────────────────────────────────────────────────┐
│ ▸ EN-TÊTE DE PAGE                                                │
├──────────────────────────────────────────────────────────────────┤
│ ▸ ACCÈS RAPIDES   ☎ téléphone  ✉ e-mail  ⌖ la miellerie          │
├──────────────────────────────────────────────────────────────────┤
│ ▸ FORMULAIRE (7/12)              │ ▸ LATÉRAL (5/12, collant)     │
│   objet · prénom · nom · e-mail  │   coordonnées                 │
│   téléphone · structure          │   horaires (7 lignes)         │
│   date · participants · message  │   encadré « un essaim ? »     │
│   ☑ RGPD   ☑ infolettre          │                               │
├──────────────────────────────────────────────────────────────────┤
│ ▸ ACCÈS   carte au clic (RGPD)   │  voiture · transports · vélo  │
│                                  │  accessibilité                │
├──────────────────────────────────────────────────────────────────┤
│ ▸ POINTS DE VENTE  6 partenaires  +  tableau des 3 marchés       │
├──────────────────────────────────────────────────────────────────┤
│ ▸ DEVENIR REVENDEUR                                              │
└──────────────────────────────────────────────────────────────────┘
```

**H1 :** Écrivez-nous, passez nous voir
**Chapô :** Nous répondons sous 48 heures ouvrées — un peu plus lentement en
juin, quand les hausses sont pleines. Pour une commande urgente ou un
signalement d'essaim, le téléphone reste le plus rapide.

### 5.1 Formulaire détaillé

| Champ | Type | Obligatoire |
|---|---|---|
| Objet de votre demande | `select` — 8 options | ✅ |
| Prénom / Nom | `text` | ✅ |
| E-mail | `email` | ✅ |
| Téléphone | `tel` | — |
| Structure (école, entreprise, commerce) | `text` | — |
| Date souhaitée | `date` | — |
| Nombre de personnes | `number` | — |
| Votre message | `textarea` (placeholder guidé) | ✅ |
| Consentement RGPD | `checkbox` | ✅ |
| Inscription à l'infolettre | `checkbox` | — |

**Les 8 objets :** commande · atelier ou visite · projet scolaire · parrainage
particulier · offre entreprise/RSE · devenir revendeur · signaler un essaim ·
presse et autre.

**Détails d'implémentation :** champ-piège anti-robots invisible (`_gotcha`) ·
pré-remplissage automatique depuis l'URL (`?produit=`, `?atelier=`,
`?parrainage=`, `?objet=`) · validation en français affichée sous le champ
fautif avec `aria-invalid` · focus déplacé sur la première erreur.

### 5.2 Colonne latérale

- **Coordonnées :** La Miellerie des Hautes Bruyères, 1240 chemin de la Combe Verte, 69850 Saint-Martin-en-Haut — 04 78 00 00 00 — bonjour@ / pro@
- **Horaires :** lundi et mardi fermé · mercredi à vendredi 9h30-12h30 / 14h-18h (18h30 le vendredi) · samedi 9h-13h · dimanche sur rendez-vous
  *Fermeture annuelle du 24 décembre au 2 janvier. En juin et juillet, un appel avant de venir évite une porte close.*
- **Encadré essaim :** « Ne le détruisez surtout pas et ne l'aspergez de rien. Un essaim en grappe est pacifique : il n'a pas de couvain à défendre. Appelez-nous, nous venons gratuitement le récupérer dans un rayon de 25 km, en général dans la journée. »

### 5.3 Accès

**Carte chargée au clic** — argumentaire affiché à l'utilisateur : « Nous ne
chargeons pas la carte automatiquement : cela économise près de 500 Ko et évite
de transmettre votre adresse IP à un service tiers sans votre accord. »
Fournisseur OpenStreetMap, `referrerPolicy="no-referrer"`. Liens de repli :
ouvrir dans OpenStreetMap · ouvrir dans mon GPS (`geo:`).

| Mode | Contenu |
|---|---|
| **En voiture** | 25 min de Lyon ouest par D311 puis D34 · 40 min de Saint-Étienne par D2 · parking gratuit 15 places · borne de recharge 7 kW |
| **En transports** | Car ligne 133 (Lyon Perrache → Saint-Martin-en-Haut), arrêt « Le Bourg », puis 1,8 km à pied. Nous venons vous chercher si vous prévenez la veille |
| **À vélo** | Voie verte à 900 m · arceaux et prise VAE · 5 % de remise pour toute visite à vélo — « nous ne vérifions rien, on vous croit » |
| **Accessibilité** | Boutique, miellerie et sanitaires de plain-pied · place PMR · rucher à 80 m sur chemin stabilisé, parcours adaptable |

### 5.4 Points de vente & marchés

6 partenaires (fromagerie Lyon 6e, épicerie fine Saint-Étienne, halle paysanne,
Biocoop, restaurant, ferme) avec type, adresse et gamme disponible.

| Jour | Marché | Horaires | Saison |
|---|---|---|---|
| Mercredi matin | Saint-Martin-en-Haut | 8 h – 12 h 30 | Toute l'année |
| Samedi matin | Croix-Rousse, Lyon 4e | 7 h – 13 h 30 | Mars → décembre |
| 1er dimanche du mois | Marché paysan de Brignais | 9 h – 13 h | Toute l'année |

---

## Annexe — Principes rédactionnels

1. **Phrases courtes, verbes concrets.** « Nous laissons 14 à 18 kg par ruche »
   plutôt que « Nous privilégions une approche respectueuse de l'hivernage ».
2. **Des chiffres partout.** Un chiffre est une preuve ; un adjectif est une
   opinion.
3. **Dire aussi ce qu'on ne fait pas.** La liste des refus est le meilleur
   argument de différenciation disponible.
4. **Assumer les limites.** « Certaines années, il n'y en a pas du tout »,
   « Épuisé », « partiellement conforme » : l'honnêteté sur les manques rend
   crédible tout le reste.
5. **Bannir le lexique mort.** Passion, savoir-faire ancestral, amoureux du
   travail bien fait, au cœur de nos valeurs — à proscrire.
6. **Une touche d'humour sec, rarement.** « Nous ne vérifions rien, on vous
   croit » · « Le plus simple reste encore de ne pas venir ».
7. **Typographie française.** Espaces insécables avant `: ; ! ?` et dans les
   nombres, guillemets « … », apostrophes typographiques ’, tirets cadratins —.
