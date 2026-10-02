/**
 * ATELIERS PÉDAGOGIQUES & FORMULES DE PARRAINAGE
 * Tarifs indicatifs 2026 — À PERSONNALISER avant mise en ligne.
 */

export interface Atelier {
  slug: string;
  nom: string;
  accroche: string;
  description: string;
  duree: string;
  public: string;
  effectif: string;
  tarif: string;
  tarifDetail?: string;
  saison: string;
  inclus: string[];
  etiquette?: { texte: string; ton: "miel" | "sapin" | "neutre" };
  famille: "particuliers" | "scolaires" | "entreprises";
}

export const ateliers: Atelier[] = [
  {
    slug: "une-heure-dans-la-ruche",
    nom: "Une heure dans la ruche",
    accroche: "La visite d'initiation, pour comprendre une colonie en une heure.",
    description:
      "Nous ouvrons une ruche devant vous. Vous verrez la reine (si elle veut bien se montrer), le couvain, les réserves de pollen, et vous entendrez le bruit d'une colonie qui va bien — un bourdonnement grave et régulier qu'on n'oublie pas. On termine par une dégustation comparative de trois miels à la miellerie.",
    duree: "1 h 15",
    public: "Tout public, dès 6 ans",
    effectif: "4 à 12 personnes",
    tarif: "14 € / adulte",
    tarifDetail: "8 € / enfant de 6 à 14 ans · gratuit pour les moins de 6 ans",
    saison: "D'avril à septembre, mercredi et samedi à 10 h et 15 h",
    inclus: [
      "Prêt de la combinaison complète et du voile",
      "Ouverture d'une ruche en conditions réelles",
      "Dégustation de 3 miels de la récolte en cours",
      "10 % de remise à la boutique le jour de la visite",
    ],
    etiquette: { texte: "La plus demandée", ton: "miel" },
    famille: "particuliers",
  },
  {
    slug: "apiculteur-dun-jour",
    nom: "Apiculteur d'un jour",
    accroche: "Une demi-journée les mains dans les cadres, du rucher au pot.",
    description:
      "L'immersion complète. Vous enfumez, vous soulevez les hausses, vous lisez un cadre de couvain, vous repérez les cellules royales. L'après-midi, direction la miellerie : désoperculation au couteau, passage à l'extracteur, filtration, et vous repartez avec le pot que vous avez rempli vous-même, étiqueté à votre nom.",
    duree: "4 h (9 h – 13 h)",
    public: "Adultes et ados dès 14 ans",
    effectif: "3 à 8 personnes",
    tarif: "75 € / personne",
    tarifDetail: "Déjeuner fermier en option : + 18 €",
    saison: "De mai à juillet, le samedi",
    inclus: [
      "Matériel apicole complet fourni",
      "Travail sur 3 à 4 colonies",
      "Extraction et mise en pot à la miellerie",
      "Un pot de 500 g personnalisé à emporter",
      "Mémo papier « bien démarrer en apiculture »",
    ],
    famille: "particuliers",
  },
  {
    slug: "classe-buissonniere",
    nom: "La classe buissonnière",
    accroche: "L'atelier scolaire, calibré pour les programmes du cycle 2 au cycle 4.",
    description:
      "Deux heures conçues avec une enseignante de CM2 : observation d'une ruche vitrée en toute sécurité, manipulation de vrais cadres (vides et froids), atelier sensoriel de dégustation à l'aveugle, et construction collective d'une maquette d'alvéoles qui reste à l'école. Un dossier pédagogique de 12 pages est envoyé trois semaines avant, avec des activités à faire en classe en amont et en aval.",
    duree: "2 h, modulable",
    public: "Du CP à la 3e · centres de loisirs · IME",
    effectif: "Une classe, jusqu'à 30 élèves",
    tarif: "190 € / classe",
    tarifDetail:
      "Déplacement dans votre établissement possible dans un rayon de 40 km : + 60 €",
    saison: "Toute l'année — ruche vitrée d'intérieur en hiver",
    inclus: [
      "Dossier pédagogique de 12 pages (PDF + version imprimée)",
      "Ruche vitrée d'observation, sans aucun risque de piqûre",
      "Atelier sensoriel : 4 miels à l'aveugle",
      "Maquette d'alvéoles offerte à la classe",
      "Attestation pour le projet d'école (EDD)",
    ],
    etiquette: { texte: "Agréé Éducation nationale", ton: "sapin" },
    famille: "scolaires",
  },
  {
    slug: "team-building",
    nom: "Séminaire & cohésion d'équipe",
    accroche: "Une demi-journée qui parle vraiment de collectif, pas de karting.",
    description:
      "Comment 50 000 individus prennent-ils une décision sans chef ? Nous partons de la biologie de la colonie pour parler d'intelligence collective, de répartition des rôles et de prise de décision distribuée — puis nous passons au rucher pour l'expérimenter. Format co-construit avec vous, avec ou sans ouverture de ruche selon l'appétence du groupe.",
    duree: "3 h à la journée complète",
    public: "Équipes, CSE, comités de direction",
    effectif: "6 à 40 personnes (par sous-groupes de 10)",
    tarif: "Sur devis — à partir de 890 €",
    tarifDetail: "Repas fermier, transport en car et coffrets souvenirs en option",
    saison: "D'avril à octobre, du lundi au vendredi",
    inclus: [
      "Atelier d'intelligence collective animé par Mathieu",
      "Visite du rucher par sous-groupes encadrés",
      "Dégustation commentée façon œnologie",
      "Un pot de miel par participant",
      "Facture valorisable en budget RSE ou formation",
    ],
    famille: "entreprises",
  },
  {
    slug: "atelier-cire",
    nom: "Atelier cire & bougies",
    accroche: "Le rendez-vous de l'hiver, à l'abri dans la miellerie.",
    description:
      "Quand les abeilles sont en grappe, on travaille la cire. On fait fondre les opercules au bain-marie, on roule des chandelles sur des feuilles gaufrées, on coule des bougies dans des moules en silicone, et on fabrique un baume à lèvres à emporter. Parfait en famille, en couple ou entre amis, et parfait aussi pour un anniversaire d'enfant.",
    duree: "2 h",
    public: "Dès 7 ans, accompagné d'un adulte",
    effectif: "4 à 14 personnes",
    tarif: "32 € / personne",
    tarifDetail: "Formule anniversaire enfant (8 enfants + goûter) : 240 €",
    saison: "De novembre à mars, le mercredi et le samedi",
    inclus: [
      "Toute la matière première (cire, mèches, moules)",
      "2 chandelles roulées + 1 bougie coulée à emporter",
      "1 baume à lèvres fabriqué par vos soins",
      "Boisson chaude et pain d'épices maison",
    ],
    etiquette: { texte: "Format hiver", ton: "neutre" },
    famille: "particuliers",
  },
];

/* ------------------------------------------------------------------ */
/*  PARRAINAGE DE RUCHES                                               */
/* ------------------------------------------------------------------ */

export interface FormuleParrainage {
  slug: string;
  nom: string;
  cible: "particulier" | "entreprise";
  prix: string;
  prixDetail: string;
  accroche: string;
  contreparties: string[];
  miseEnAvant?: boolean;
  etiquette?: string;
}

export const formulesParrainage: FormuleParrainage[] = [
  {
    slug: "demi-ruche",
    nom: "Demi-ruche",
    cible: "particulier",
    prix: "95 €",
    prixDetail: "par an · env. 8 € / mois",
    accroche: "La formule d'essai, idéale en cadeau.",
    contreparties: [
      "6 pots de 250 g de miel de votre ruche",
      "Certificat de parrainage nominatif, imprimé sur papier recyclé",
      "3 lettres de nouvelles par an, avec photos de votre colonie",
      "1 visite du rucher pour 2 personnes",
    ],
  },
  {
    slug: "ruche-entiere",
    nom: "Ruche entière",
    cible: "particulier",
    prix: "180 €",
    prixDetail: "par an · env. 15 € / mois",
    accroche: "Votre ruche, votre plaque, votre récolte.",
    contreparties: [
      "14 pots de 250 g de miel de votre ruche",
      "Plaque nominative gravée, posée sur la ruche",
      "4 lettres de nouvelles + 2 points météo de la colonie",
      "2 visites du rucher pour 2 personnes, dont une à la récolte",
      "Invitation à la journée des parrains (septembre)",
      "10 % de remise permanente à la boutique",
    ],
    miseEnAvant: true,
    etiquette: "La plus choisie",
  },
  {
    slug: "ruche-entreprise",
    nom: "Ruche d'entreprise",
    cible: "entreprise",
    prix: "560 €",
    prixDetail: "par an et par ruche · HT",
    accroche: "Un engagement biodiversité concret, et 60 pots à votre marque.",
    contreparties: [
      "60 pots de 250 g étiquetés à vos couleurs (étiquette co-brandée)",
      "Plaque au nom de votre entreprise sur la ruche",
      "Reportage photo et vidéo annuel, libre de droits pour votre communication",
      "Bilan biodiversité chiffré, exploitable en rapport RSE / CSRD",
      "1 visite collaborateurs (jusqu'à 12 personnes) incluse",
      "Mention sur notre page « Ils soutiennent le rucher »",
    ],
  },
  {
    slug: "rucher-entreprise",
    nom: "Rucher d'entreprise",
    cible: "entreprise",
    prix: "2 400 €",
    prixDetail: "par an · 5 ruches · HT",
    accroche: "Un rucher dédié, sur notre terrain ou sur le vôtre.",
    contreparties: [
      "5 ruches identifiées à votre nom · 300 pots personnalisés par an",
      "Installation possible sur votre site si l'environnement s'y prête (étude gratuite)",
      "2 journées collaborateurs par an (jusqu'à 40 personnes)",
      "Suivi agronomique : inventaire floral et comptage pollinisateurs",
      "Kit de communication complet (photos, vidéos, textes, affiches)",
      "Accompagnement au reporting extra-financier",
    ],
    etiquette: "Format RSE",
  },
];

/* ------------------------------------------------------------------ */
/*  FAQ                                                                */
/* ------------------------------------------------------------------ */

export const faqAteliers = [
  {
    question: "Faut-il avoir peur des piqûres ?",
    reponse:
      "Nous fournissons une combinaison intégrale avec voile et gants à chaque participant, et nos colonies sont sélectionnées depuis quinze ans sur leur douceur. En dix ans d'ateliers, nous comptons moins de dix piqûres, toutes sans gravité. Si vous préférez rester à distance, c'est parfaitement possible : une partie du groupe peut suivre l'ouverture depuis trois mètres.",
  },
  {
    question: "Je suis allergique au venin d'abeille. Puis-je venir ?",
    reponse:
      "Oui, mais signalez-le impérativement à la réservation. Nous vous orienterons vers nos formats sans ouverture de ruche : ruche vitrée d'observation, atelier cire, dégustation commentée. Si vous portez un stylo d'adrénaline, apportez-le ; nous disposons également d'une trousse de premiers secours et le cabinet médical le plus proche est à 6 minutes.",
  },
  {
    question: "Que se passe-t-il s'il pleut ?",
    reponse:
      "On n'ouvre jamais une ruche sous la pluie — les abeilles détestent ça et deviennent nerveuses. En cas de météo défavorable, nous vous prévenons la veille au soir et vous proposons soit un report sans frais, soit un repli à la miellerie (visite du laboratoire d'extraction, ruche vitrée, dégustation), soit un remboursement intégral.",
  },
  {
    question: "Le rucher est-il accessible aux personnes à mobilité réduite ?",
    reponse:
      "La miellerie, la boutique et les sanitaires sont de plain-pied et accessibles en fauteuil. Le rucher pédagogique est à 80 mètres sur un chemin stabilisé, praticable en fauteuil manuel avec un accompagnement sur les dix derniers mètres. Nous pouvons également amener deux ruches au plus près du bâtiment : prévenez-nous à la réservation.",
  },
  {
    question: "Comment réserver et régler ?",
    reponse:
      "Par le formulaire de contact, par téléphone ou par e-mail. Nous confirmons sous 48 h ouvrées et le règlement se fait sur place, en espèces, par chèque ou par carte. Pour les groupes, les scolaires et les entreprises, un devis puis une facture sont établis ; les bons de commande administratifs et le paiement par mandat administratif sont acceptés.",
  },
  {
    question: "Peut-on offrir un atelier ou un parrainage ?",
    reponse:
      "Bien sûr. Nous éditons une carte cadeau imprimée sur papier graine (à planter : elle donne des fleurs mellifères) valable 18 mois, que nous pouvons envoyer directement au bénéficiaire avec votre mot. Précisez-le simplement dans votre demande.",
  },
] as const;
