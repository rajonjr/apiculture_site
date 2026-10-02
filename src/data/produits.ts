/**
 * CATALOGUE PRODUITS
 * ------------------------------------------------------------------
 * Ce fichier est volontairement structuré comme un futur catalogue
 * e-commerce : chaque produit possède déjà un `sku`, un `slug`, des
 * déclinaisons (`conditionnements`) avec prix et disponibilité.
 *
 * MIGRATION E-COMMERCE : le jour où la vente en ligne est activée,
 * ce tableau est remplacé par un `fetch` vers l'API du back-office
 * (Stripe, Snipcart, Medusa, WooCommerce…) SANS toucher aux composants
 * d'affichage — seule la source de données change.
 */

export type Disponibilite = "disponible" | "saison" | "bientot" | "epuise";

export interface Conditionnement {
  /** Référence unique — sert de clé produit dans le futur panier. */
  sku: string;
  libelle: string;
  /** Poids ou volume en grammes / millilitres, pour le prix au kilo. */
  quantite: number;
  unite: "g" | "ml" | "cl" | "pièce";
  /** Prix TTC en euros. */
  prix: number;
  disponibilite: Disponibilite;
}

export interface Produit {
  slug: string;
  nom: string;
  categorie: "miels" | "ruche" | "cire" | "epicerie" | "coffrets";
  /** Accroche courte (listes, cartes, métadonnées). */
  accroche: string;
  /** Description gourmande, 2 à 4 phrases. */
  description: string;
  recolte?: string;
  notesDegustation?: string[];
  texture?: string;
  accords?: string;
  /** Couleur réelle du produit — sert de "nuancier" graphique (aucune image à charger). */
  teinte?: { clair: string; fonce: string };
  bienfaits?: string;
  conditionnements: Conditionnement[];
  etiquette?: { texte: string; ton: "miel" | "sapin" | "neutre" | "rupture" };
  /** Mise en avant sur la page d'accueil (section « Les Essentiels »). */
  vedette?: boolean;
}

export const produits: Produit[] = [
  /* ====================== MIELS ====================== */
  {
    slug: "miel-acacia",
    nom: "Miel d'acacia",
    categorie: "miels",
    teinte: { clair: "#f8e3a6", fonce: "#e0ad44" },
    accroche: "Le plus délicat. Limpide, floral, d'une douceur presque transparente.",
    description:
      "Récolté sur les robiniers qui bordent les coteaux exposés au sud, ce miel est le plus clair de notre gamme : une eau d'or pâle qui reste liquide près de deux ans. En bouche, aucune agressivité — une douceur ronde de fleur blanche, un sillage de vanille fraîche et une finale nette qui ne masque jamais ce qu'elle accompagne. C'est le miel des palais prudents et des enfants difficiles.",
    recolte: "Fin mai — la floraison la plus courte de l'année, dix jours à peine.",
    notesDegustation: ["Fleur d'oranger", "Vanille fraîche", "Amande douce"],
    texture: "Liquide, très fluide — cristallise rarement.",
    accords: "Fromages frais de chèvre, yaourt nature, infusions délicates, pâtisserie fine.",
    conditionnements: [
      { sku: "MIE-ACA-250", libelle: "Pot de 250 g", quantite: 250, unite: "g", prix: 9.5, disponibilite: "disponible" },
      { sku: "MIE-ACA-500", libelle: "Pot de 500 g", quantite: 500, unite: "g", prix: 16.5, disponibilite: "disponible" },
    ],
    etiquette: { texte: "Best-seller", ton: "miel" },
    vedette: true,
  },
  {
    slug: "miel-chataignier",
    nom: "Miel de châtaignier",
    categorie: "miels",
    teinte: { clair: "#b06f15", fonce: "#4a2606" },
    accroche: "Le caractère. Ambré sombre, boisé, franchement tannique.",
    description:
      "Un miel qui ne demande pas la permission. Sombre comme un vieux rhum, il ouvre sur le bois humide et la châtaigne grillée, puis laisse monter une amertume noble, presque tannique, qui reste longtemps. Les colonies le rapportent des taillis de châtaigniers qui couvrent le versant nord du rucher, là où la forêt prend le relais des prairies.",
    recolte: "Fin juin à mi-juillet, au cœur de la chaleur.",
    notesDegustation: ["Bois humide", "Châtaigne grillée", "Amertume tannique", "Cacao"],
    texture: "Liquide et sirupeuse, cristallisation lente et grossière.",
    accords: "Fromages persillés, gibier, pain de seigle, chocolat noir 70 %.",
    bienfaits: "Naturellement riche en oligo-éléments (fer, manganèse) et en polyphénols.",
    conditionnements: [
      { sku: "MIE-CHA-250", libelle: "Pot de 250 g", quantite: 250, unite: "g", prix: 8.5, disponibilite: "disponible" },
      { sku: "MIE-CHA-500", libelle: "Pot de 500 g", quantite: 500, unite: "g", prix: 14.9, disponibilite: "disponible" },
      { sku: "MIE-CHA-1000", libelle: "Pot de 1 kg", quantite: 1000, unite: "g", prix: 26.5, disponibilite: "disponible" },
    ],
    vedette: true,
  },
  {
    slug: "miel-tilleul",
    nom: "Miel de tilleul",
    categorie: "miels",
    teinte: { clair: "#e3cf69", fonce: "#a6881a" },
    accroche: "Le mentholé. Frais, balsamique, étonnamment aromatique.",
    description:
      "Celui qu'on reconnaît les yeux fermés. Le tilleul donne un miel jaune-vert, d'une fraîcheur presque mentholée, avec cette note balsamique de tisane du soir qui surprend toujours à la première cuillère. Nos ruches passent juin sous les grands tilleuls de l'allée du domaine voisin, plantés il y a plus d'un siècle.",
    recolte: "Juin, sur une dizaine de jours de floraison intense.",
    notesDegustation: ["Menthe fraîche", "Tisane", "Agrume confit", "Camphre léger"],
    texture: "Liquide à semi-crémeuse, cristallisation fine après 6 à 8 mois.",
    accords: "Tisanes du soir, poisson blanc, carottes rôties, fromage de brebis.",
    bienfaits: "Traditionnellement apprécié pour la détente et le confort du sommeil.",
    conditionnements: [
      { sku: "MIE-TIL-250", libelle: "Pot de 250 g", quantite: 250, unite: "g", prix: 8.9, disponibilite: "disponible" },
      { sku: "MIE-TIL-500", libelle: "Pot de 500 g", quantite: 500, unite: "g", prix: 15.5, disponibilite: "disponible" },
    ],
    vedette: true,
  },
  {
    slug: "miel-toutes-fleurs-printemps",
    nom: "Miel toutes fleurs de printemps",
    categorie: "miels",
    teinte: { clair: "#f6e3bd", fonce: "#d9ab61" },
    accroche: "Le quotidien. Crémeux, fruité, le goût exact de nos prairies en avril.",
    description:
      "C'est le miel de la maison, celui qu'on tartine tous les matins. Pissenlit, saule, prunellier, aubépine, trèfle blanc : tout ce qui fleurit dans un rayon de trois kilomètres finit dans ce pot. Sa texture crémeuse vient d'un ensemencement lent, sans aucun chauffage, qui lui donne ce fondu de beurre pommade. Il change discrètement chaque année — c'est précisément ce qui en fait un vrai miel de terroir.",
    recolte: "Mi-avril à fin mai.",
    notesDegustation: ["Pomme cuite", "Fleur de sureau", "Caramel laitier"],
    texture: "Crémeuse et tartinable, cristallisation naturelle très fine.",
    accords: "Tartine beurrée, fromage blanc, porridge, pâte à crêpes.",
    conditionnements: [
      { sku: "MIE-TFP-250", libelle: "Pot de 250 g", quantite: 250, unite: "g", prix: 7.5, disponibilite: "disponible" },
      { sku: "MIE-TFP-500", libelle: "Pot de 500 g", quantite: 500, unite: "g", prix: 12.5, disponibilite: "disponible" },
      { sku: "MIE-TFP-1000", libelle: "Pot de 1 kg", quantite: 1000, unite: "g", prix: 22.0, disponibilite: "disponible" },
    ],
    etiquette: { texte: "Le favori des familles", ton: "sapin" },
    vedette: true,
  },
  {
    slug: "miel-miellat-sapin",
    nom: "Miellat de sapin",
    categorie: "miels",
    teinte: { clair: "#5a4026", fonce: "#1f1408" },
    accroche: "Le mystérieux. Presque noir, malté, sans une goutte de nectar floral.",
    description:
      "Celui-ci n'est pas un miel de fleurs : il naît du miellat, cette sève sucrée que les pucerons déposent sur les aiguilles des sapins et que les abeilles récoltent ensuite. Résultat : une pâte sombre, dense, aux reflets verts, qui évoque la résine chaude, le malt et le pain d'épices. Il ne se produit que les années où l'été est doux et humide — certaines années, il n'y en a pas du tout.",
    recolte: "Juillet-août, les bonnes années seulement.",
    notesDegustation: ["Résine de sapin", "Malt", "Réglisse", "Caramel brûlé"],
    texture: "Épaisse et sirupeuse, cristallise très peu.",
    accords: "Comté affiné, pain d'épices, café noir, marinades.",
    bienfaits: "Le plus riche en minéraux et en antioxydants de notre gamme.",
    conditionnements: [
      { sku: "MIE-SAP-250", libelle: "Pot de 250 g", quantite: 250, unite: "g", prix: 10.5, disponibilite: "disponible" },
      { sku: "MIE-SAP-500", libelle: "Pot de 500 g", quantite: 500, unite: "g", prix: 18.5, disponibilite: "saison" },
    ],
    etiquette: { texte: "Récolte rare", ton: "neutre" },
  },
  {
    slug: "miel-bruyere-callune",
    nom: "Miel de bruyère callune",
    categorie: "miels",
    teinte: { clair: "#c9762a", fonce: "#70340e" },
    accroche: "Le rare. Gélifié, fumé, puissant — notre signature.",
    description:
      "Le miel qui a donné son nom à la maison. Chaque fin d'été, nous montons quarante ruches sur les landes à callune du plateau. La récolte est minuscule, l'extraction se fait au presse-rayon car ce miel est trop gélatineux pour la centrifugeuse. On obtient une gelée ambre-roux au goût de caramel fumé, de bois de réglisse et de terre chaude. Quelques centaines de pots par an, jamais plus.",
    recolte: "Septembre, sur les landes d'altitude.",
    notesDegustation: ["Caramel fumé", "Réglisse", "Humus", "Fruits secs torréfiés"],
    texture: "Gélifiée (thixotrope) — se tient à la cuillère.",
    accords: "Vieux comté, foie gras, whisky tourbé, agneau braisé.",
    conditionnements: [
      { sku: "MIE-BRU-125", libelle: "Pot de 125 g", quantite: 125, unite: "g", prix: 13.5, disponibilite: "disponible" },
      { sku: "MIE-BRU-250", libelle: "Pot de 250 g", quantite: 250, unite: "g", prix: 24.0, disponibilite: "epuise" },
    ],
    etiquette: { texte: "Édition limitée", ton: "miel" },
  },
  {
    slug: "miel-en-rayon",
    nom: "Miel en rayon",
    categorie: "miels",
    teinte: { clair: "#f3dca4", fonce: "#d9a94a" },
    accroche: "Le brut. Le rayon de cire entier, tel que les abeilles l'ont bâti.",
    description:
      "Rien n'a été extrait, filtré ni transvasé : vous recevez un morceau de rayon operculé, découpé à la main dans une hausse, avec son miel encore prisonnier des alvéoles. La cire se mâche, fond doucement et libère le miel — c'est la façon la plus ancienne et la plus directe de goûter une récolte. Produit vivant, chaque pièce est unique.",
    recolte: "Juin et juillet, en quantité très limitée.",
    notesDegustation: ["Cire fraîche", "Fleurs d'été", "Pollen"],
    texture: "Rayon de cire entier, miel liquide emprisonné.",
    accords: "Planche de fromages, burrata, toast au beurre salé.",
    conditionnements: [
      { sku: "MIE-RAY-400", libelle: "Barquette ~400 g", quantite: 400, unite: "g", prix: 16.0, disponibilite: "saison" },
    ],
    etiquette: { texte: "De juin à septembre", ton: "neutre" },
  },

  /* ====================== PRODUITS DE LA RUCHE ====================== */
  {
    slug: "gelee-royale",
    nom: "Gelée royale fraîche",
    categorie: "ruche",
    teinte: { clair: "#fdfaf2", fonce: "#e3dcc6" },
    accroche: "La nourriture des reines. Récoltée le jour même, jamais congelée.",
    description:
      "Une substance nacrée, acidulée, produite par les jeunes abeilles pour nourrir leur reine — qui vivra quarante fois plus longtemps que ses sœurs. Nous la prélevons par petits greffages, à la main, et la conditionnons en pot de verre ambré dans l'heure qui suit. Elle part en chaîne du froid et doit être conservée au réfrigérateur. Une cure se prend le matin à jeun, une petite cuillère sous la langue.",
    recolte: "D'avril à juillet, par séries de dix jours.",
    texture: "Crème blanche nacrée, saveur acidulée et piquante.",
    bienfaits:
      "Traditionnellement prise en cure de 3 à 6 semaines aux changements de saison. Produit frais français, non lyophilisé.",
    conditionnements: [
      { sku: "RUC-GRO-10", libelle: "Pot de 10 g (cure découverte)", quantite: 10, unite: "g", prix: 22.0, disponibilite: "disponible" },
      { sku: "RUC-GRO-25", libelle: "Pot de 25 g (cure complète)", quantite: 25, unite: "g", prix: 45.0, disponibilite: "disponible" },
    ],
    etiquette: { texte: "Chaîne du froid", ton: "sapin" },
  },
  {
    slug: "pollen-frais",
    nom: "Pollen frais de printemps",
    categorie: "ruche",
    teinte: { clair: "#f0b64a", fonce: "#c07a18" },
    accroche: "Des pelotes multicolores, surgelées à la récolte pour tout garder.",
    description:
      "Un confetti de couleurs : orange du pissenlit, crème du saule, bleu-gris du phacélie. Le pollen frais garde ses ferments et ses vitamines, contrairement au pollen séché à chaud. Nous le trions à la main, le surgelons dans les deux heures et le livrons congelé. Une cuillère à soupe le matin, sur un fromage blanc ou un muesli.",
    recolte: "Avril à juin, trappes posées deux jours par semaine seulement.",
    texture: "Pelotes souples, saveur fleurie et légèrement fermentée.",
    bienfaits: "Riche en protéines, ferments lactiques et vitamines du groupe B.",
    conditionnements: [
      { sku: "RUC-POL-200", libelle: "Barquette 200 g (congelée)", quantite: 200, unite: "g", prix: 14.0, disponibilite: "disponible" },
    ],
  },
  {
    slug: "propolis",
    nom: "Propolis — extrait hydroalcoolique",
    categorie: "ruche",
    teinte: { clair: "#8a5a2b", fonce: "#43240c" },
    accroche: "Le bouclier de la ruche, concentré en flacon compte-gouttes.",
    description:
      "Les abeilles récoltent la résine des bourgeons de peuplier et de sapin pour aseptiser leur colonie et colmater la moindre fissure. Nous grattons cette propolis sur nos cadres, la laissons macérer douze semaines, puis la filtrons. Un extrait brun sombre, résineux et piquant, à diluer dans un peu de miel ou d'eau tiède dès les premiers froids.",
    texture: "Liquide résineux brun, arôme balsamique puissant.",
    bienfaits: "Usage traditionnel pour le confort de la sphère ORL en hiver.",
    conditionnements: [
      { sku: "RUC-PRO-30", libelle: "Flacon 30 ml", quantite: 30, unite: "ml", prix: 16.5, disponibilite: "disponible" },
      { sku: "RUC-PRO-BRU", libelle: "Propolis brute à mâcher — 20 g", quantite: 20, unite: "g", prix: 9.0, disponibilite: "disponible" },
    ],
  },

  /* ====================== CIRE & BOUGIES ====================== */
  {
    slug: "bougies-cire",
    nom: "Bougies en cire d'abeille",
    categorie: "cire",
    teinte: { clair: "#f4dc92", fonce: "#d6a63c" },
    accroche: "Une flamme douce, une odeur de miel chaud, zéro paraffine.",
    description:
      "Nous ne vendons que la cire de nos propres opercules — celle que les abeilles fabriquent pour sceller le miel mûr, la plus pure de la ruche. Fondue à basse température, coulée ou roulée à la main, elle brûle lentement, sans fumée noire, et parfume la pièce d'une note de miel chaud. Mèche en coton biologique, aucun colorant, aucun parfum ajouté.",
    texture: "Cire jaune doré naturelle, odeur miellée.",
    conditionnements: [
      { sku: "CIR-CHA-01", libelle: "Chandelle roulée (12 cm) — à l'unité", quantite: 1, unite: "pièce", prix: 6.0, disponibilite: "disponible" },
      { sku: "CIR-CHA-06", libelle: "Lot de 6 chandelles roulées", quantite: 6, unite: "pièce", prix: 32.0, disponibilite: "disponible" },
      { sku: "CIR-ALV-100", libelle: "Bougie « alvéole » coulée — 100 g", quantite: 100, unite: "g", prix: 14.0, disponibilite: "disponible" },
    ],
    vedette: true,
  },
  {
    slug: "cire-brute",
    nom: "Cire d'abeille brute",
    categorie: "cire",
    teinte: { clair: "#f0d58a", fonce: "#c99b35" },
    accroche: "Pour vos baumes, vos encaustiques et vos emballages réutilisables.",
    description:
      "Des pains de cire filtrée trois fois, sans solvant ni blanchiment, prêts à l'emploi pour vos cosmétiques maison, vos cires à bois ou vos tissus enduits. La couleur varie du jaune paille au miel foncé selon la saison de récolte : c'est la signature des fleurs butinées cette année-là.",
    conditionnements: [
      { sku: "CIR-BRU-100", libelle: "Pain de 100 g", quantite: 100, unite: "g", prix: 7.0, disponibilite: "disponible" },
      { sku: "CIR-BRU-500", libelle: "Pain de 500 g", quantite: 500, unite: "g", prix: 29.0, disponibilite: "disponible" },
    ],
  },
  {
    slug: "baume-levres",
    nom: "Baume à lèvres miel & cire",
    categorie: "cire",
    teinte: { clair: "#f6e6bb", fonce: "#d9b66e" },
    accroche: "Trois ingrédients. C'est tout.",
    description:
      "Cire d'abeille, huile d'olive bio du Vaucluse, une pointe de miel d'acacia. Fondu et coulé par Claire dans notre atelier, en petites séries. Rien d'autre : pas de conservateur, pas de parfum de synthèse, pas de plastique — le stick est en carton compostable.",
    conditionnements: [
      { sku: "CIR-BAU-05", libelle: "Stick 5 g (carton compostable)", quantite: 5, unite: "g", prix: 5.5, disponibilite: "disponible" },
    ],
    etiquette: { texte: "Zéro plastique", ton: "sapin" },
  },

  /* ====================== ÉPICERIE ====================== */
  {
    slug: "pain-epices",
    nom: "Pain d'épices au miel de châtaignier",
    categorie: "epicerie",
    teinte: { clair: "#b4794a", fonce: "#6b3f1d" },
    accroche: "Cuit au four à bois du village, 42 % de miel.",
    description:
      "La recette de la grand-mère de Mathieu, à peine ajustée : farine de seigle, miel de châtaignier de la maison, anis vert, cannelle, un soupçon de gingembre frais. Cuisson lente au four à bois du boulanger de Saint-Martin. Dense, humide, il se bonifie trois jours après la cuisson et se garde deux semaines dans son papier.",
    accords: "Foie gras, fromage bleu, thé noir fumé, chocolat chaud.",
    conditionnements: [
      { sku: "EPI-PAI-350", libelle: "Pain de 350 g", quantite: 350, unite: "g", prix: 9.5, disponibilite: "disponible" },
    ],
  },
  {
    slug: "vinaigre-miel",
    nom: "Vinaigre de miel",
    categorie: "epicerie",
    teinte: { clair: "#e8cf8f", fonce: "#b98f32" },
    accroche: "Le miel passé par la fermentation : acidulé, rond, inattendu.",
    description:
      "Nos fonds de maturateur et nos miels de fin de saison sont dilués, fermentés lentement en fût de chêne pendant dix-huit mois, puis mis en bouteille sans pasteurisation. Un vinaigre blond, moins agressif que le vin, avec une rondeur miellée qui transforme une simple salade de mâche.",
    accords: "Vinaigrettes, déglaçage de volaille, fruits rouges, carpaccio.",
    conditionnements: [
      { sku: "EPI-VIN-250", libelle: "Bouteille 250 ml", quantite: 250, unite: "ml", prix: 11.0, disponibilite: "disponible" },
    ],
  },
  {
    slug: "hydromel",
    nom: "Hydromel sec « Les Hautes Bruyères »",
    categorie: "epicerie",
    teinte: { clair: "#f2e4af", fonce: "#cfa94e" },
    accroche: "La plus vieille boisson fermentée du monde, version sèche.",
    description:
      "Un hydromel sec, loin des versions sirupeuses : miel toutes fleurs, eau de source, levures indigènes, deux ans de fermentation lente en cuve puis six mois en bouteille. Robe or pâle, nez de pomme et de cire, bouche vive et minérale. À servir frais, à l'apéritif ou sur une volaille rôtie. 12 % vol.",
    accords: "Apéritif, volaille rôtie, fromages de chèvre affinés.",
    conditionnements: [
      { sku: "EPI-HYD-750", libelle: "Bouteille 75 cl — 12 % vol.", quantite: 75, unite: "cl", prix: 19.0, disponibilite: "disponible" },
    ],
    etiquette: { texte: "Vente interdite aux mineurs", ton: "neutre" },
  },

  /* ====================== COFFRETS ====================== */
  {
    slug: "coffret-decouverte",
    nom: "Coffret découverte — 4 miels",
    categorie: "coffrets",
    teinte: { clair: "#eacf9a", fonce: "#b8853a" },
    accroche: "Le tour du rucher en quatre pots de 125 g.",
    description:
      "Acacia, toutes fleurs de printemps, tilleul et châtaignier, présentés dans un étui en carton recyclé imprimé à l'encre végétale, avec une fiche de dégustation qui raconte chaque floraison. Le cadeau d'initiation parfait — et le meilleur moyen de trouver son miel préféré.",
    conditionnements: [
      { sku: "COF-DEC-4", libelle: "4 pots de 125 g + fiche de dégustation", quantite: 500, unite: "g", prix: 29.0, disponibilite: "disponible" },
    ],
    etiquette: { texte: "Idée cadeau", ton: "miel" },
  },
  {
    slug: "coffret-bien-etre",
    nom: "Coffret bien-être de la ruche",
    categorie: "coffrets",
    teinte: { clair: "#e7d9b4", fonce: "#a98f52" },
    accroche: "Propolis, pollen, gelée royale et miel de tilleul.",
    description:
      "Les quatre trésors de la ruche réunis pour une cure de saison, accompagnés d'un livret de six pages qui explique les usages traditionnels de chacun, les dosages et les précautions. Expédié en chaîne du froid pour la gelée royale.",
    conditionnements: [
      { sku: "COF-BIE-1", libelle: "Coffret complet + livret", quantite: 1, unite: "pièce", prix: 59.0, disponibilite: "disponible" },
    ],
  },
  {
    slug: "coffret-entreprise",
    nom: "Coffrets d'entreprise personnalisés",
    categorie: "coffrets",
    teinte: { clair: "#dcd3c0", fonce: "#8c8168" },
    accroche: "Vos cadeaux de fin d'année, avec votre marque et notre miel.",
    description:
      "À partir de 20 coffrets : composition sur mesure, étiquettes à vos couleurs, mot personnalisé, livraison groupée ou expédition individuelle à vos collaborateurs. Nous produisons chaque série à la commande, sans surplus ni invendus. Devis sous 48 h.",
    conditionnements: [
      { sku: "COF-ENT-X", libelle: "Dès 20 coffrets — sur devis", quantite: 1, unite: "pièce", prix: 0, disponibilite: "disponible" },
    ],
    etiquette: { texte: "Sur devis", ton: "sapin" },
  },
];

export const categories = [
  {
    id: "miels",
    titre: "Les miels de récolte",
    ancre: "miels",
    intro:
      "Sept miels, sept floraisons, sept moments de l'année. Tous extraits à froid, filtrés une seule fois sur grille large, jamais pasteurisés, jamais mélangés entre eux.",
  },
  {
    id: "ruche",
    titre: "Les produits de la ruche",
    ancre: "ruche",
    intro:
      "Gelée royale, pollen et propolis — récoltés en petites quantités pour ne jamais affaiblir une colonie.",
  },
  {
    id: "cire",
    titre: "Cire & bougies",
    ancre: "cire",
    intro:
      "Uniquement la cire d'opercules de nos propres ruches, fondue à basse température et travaillée à la main.",
  },
  {
    id: "epicerie",
    titre: "L'épicerie du rucher",
    ancre: "epicerie",
    intro:
      "Ce que l'on fabrique avec le miel quand la saison apicole se calme, en partenariat avec des artisans voisins.",
  },
  {
    id: "coffrets",
    titre: "Coffrets & cadeaux",
    ancre: "coffrets",
    intro:
      "Des assemblages prêts à offrir, en carton recyclé, imprimés à l'encre végétale et calés avec de la frisure de papier.",
  },
] as const;

/** Les produits mis en avant dans la section « Les Essentiels » de l'accueil. */
export const produitsVedettes = produits.filter((p) => p.vedette);

/** Prix d'entrée d'un produit (le conditionnement le moins cher disponible). */
export function prixDepuis(produit: Produit): number | null {
  const prix = produit.conditionnements
    .filter((c) => c.prix > 0)
    .map((c) => c.prix);
  return prix.length ? Math.min(...prix) : null;
}

/** Formatage monétaire français : 9,50 €. */
export function formaterPrix(valeur: number): string {
  return new Intl.NumberFormat("fr-FR", {
    style: "currency",
    currency: "EUR",
  }).format(valeur);
}

/** Prix au kilo, utile pour la transparence tarifaire. */
export function prixAuKilo(c: Conditionnement): string | null {
  if (c.unite !== "g" || c.prix <= 0) return null;
  return `${formaterPrix((c.prix / c.quantite) * 1000)} / kg`;
}

export const libellesDisponibilite: Record<
  Disponibilite,
  { texte: string; ton: "miel" | "sapin" | "neutre" | "rupture" }
> = {
  disponible: { texte: "En stock", ton: "sapin" },
  saison: { texte: "Selon saison", ton: "neutre" },
  bientot: { texte: "Bientôt", ton: "miel" },
  epuise: { texte: "Épuisé", ton: "rupture" },
};
