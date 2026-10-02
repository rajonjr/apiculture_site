/**
 * Configuration éditoriale du site.
 * ⚠️ Toutes les valeurs marquées « À PERSONNALISER » sont des données fictives
 *    de maquette : remplacez-les par les informations réelles avant mise en ligne.
 *    (Voir docs/04-personnalisation.md pour la liste exhaustive.)
 */

export const site = {
  nom: "Rucher des Hautes Bruyères",
  nomCourt: "Hautes Bruyères",
  baseline: "Apiculture artisanale depuis 2009",
  // À PERSONNALISER
  url: "https://www.rucher-hautes-bruyeres.fr",
  descriptionCourte:
    "Miels de terroir récoltés à froid, produits de la ruche et ateliers pédagogiques dans les Monts du Lyonnais. Apiculture artisanale, sans transhumance intensive.",
  apiculteurs: {
    principal: "Mathieu Vasseur",
    associee: "Claire Vasseur",
  },
  fondation: 2009,
  siret: "812 457 903 00024", // À PERSONNALISER
  tva: "FR 42 812457903", // À PERSONNALISER
  certifications: [
    "Agriculture Biologique (FR-BIO-01)",
    "Label Apiculture Française",
  ],
  contact: {
    // À PERSONNALISER
    telephone: "+33 4 78 00 00 00",
    telephoneAffiche: "04 78 00 00 00",
    email: "bonjour@rucher-hautes-bruyeres.fr",
    emailPro: "pro@rucher-hautes-bruyeres.fr",
    adresse: {
      ligne1: "La Miellerie des Hautes Bruyères",
      ligne2: "1240 chemin de la Combe Verte",
      codePostal: "69850",
      ville: "Saint-Martin-en-Haut",
      region: "Monts du Lyonnais, Rhône",
      pays: "France",
    },
    coordonnees: { lat: 45.6356, lon: 4.5564 },
  },
  horaires: [
    { jour: "Lundi", creneaux: "Fermé", ferme: true },
    { jour: "Mardi", creneaux: "Fermé", ferme: true },
    { jour: "Mercredi", creneaux: "9h30 – 12h30 · 14h – 18h", ferme: false },
    { jour: "Jeudi", creneaux: "9h30 – 12h30 · 14h – 18h", ferme: false },
    { jour: "Vendredi", creneaux: "9h30 – 12h30 · 14h – 18h30", ferme: false },
    { jour: "Samedi", creneaux: "9h – 13h", ferme: false },
    { jour: "Dimanche", creneaux: "Sur rendez-vous", ferme: false },
  ],
  reseaux: [
    { nom: "Instagram", url: "https://instagram.com/", handle: "@hautesbruyeres" },
    { nom: "Facebook", url: "https://facebook.com/", handle: "Rucher des Hautes Bruyères" },
    { nom: "LinkedIn", url: "https://linkedin.com/", handle: "Rucher des Hautes Bruyères" },
  ],
} as const;

/**
 * POINT D'INTÉGRATION DES FORMULAIRES
 * ------------------------------------------------------------------
 * Le site étant 100 % statique, l'envoi des formulaires doit être confié
 * à un service externe ou à une fonction serverless. Renseignez ici l'URL
 * du point de terminaison (Formspree, Brevo, Netlify Forms, Scaleway
 * Functions, route Laravel…).
 *
 * Tant que la valeur est vide, les formulaires fonctionnent en mode
 * « démonstration » : validation complète côté client, puis redirection
 * vers /merci sans qu'aucune donnée ne soit transmise.
 */
export const formulaires = {
  endpoint: "", // ex. "https://formspree.io/f/xxxxxxx"
  pageConfirmation: "/merci",
} as const;

export const navigation = [
  { libelle: "Accueil", href: "/" },
  { libelle: "Le rucher", href: "/le-rucher" },
  { libelle: "Nos produits", href: "/nos-produits" },
  { libelle: "Ateliers & parrainages", href: "/ateliers-parrainages" },
  { libelle: "Contact & accès", href: "/contact" },
] as const;

export const liensPied = {
  decouvrir: [
    { libelle: "Notre histoire", href: "/le-rucher" },
    { libelle: "Nos méthodes apicoles", href: "/le-rucher#methodes" },
    { libelle: "Le calendrier du rucher", href: "/le-rucher#calendrier" },
    { libelle: "Nos engagements", href: "/le-rucher#engagements" },
  ],
  acheter: [
    { libelle: "Tous nos miels", href: "/nos-produits#miels" },
    { libelle: "Produits de la ruche", href: "/nos-produits#ruche" },
    { libelle: "Cire & bougies", href: "/nos-produits#cire" },
    { libelle: "Coffrets cadeaux", href: "/nos-produits#coffrets" },
    { libelle: "Points de vente", href: "/contact#points-de-vente" },
    { libelle: "Espace revendeurs", href: "/contact#professionnels" },
  ],
  participer: [
    { libelle: "Visites du rucher", href: "/ateliers-parrainages#ateliers" },
    { libelle: "Ateliers scolaires", href: "/ateliers-parrainages#scolaires" },
    { libelle: "Parrainer une ruche", href: "/ateliers-parrainages#parrainage" },
    { libelle: "Offres entreprises (RSE)", href: "/ateliers-parrainages#entreprises" },
  ],
  legal: [
    { libelle: "Mentions légales", href: "/mentions-legales" },
    { libelle: "Confidentialité & cookies", href: "/mentions-legales#donnees" },
    { libelle: "Conditions de vente", href: "/mentions-legales#cgv" },
    { libelle: "Accessibilité : partiellement conforme", href: "/mentions-legales#accessibilite" },
  ],
} as const;

/** Chiffres clés affichés dans la hero et en pied de page. */
export const chiffresCles = [
  { valeur: "180", unite: "", libelle: "colonies choyées" },
  { valeur: "9", unite: "", libelle: "ruchers sédentaires" },
  { valeur: "100", unite: "%", libelle: "récolté à froid" },
  { valeur: "15", unite: "km", libelle: "rayon de butinage" },
] as const;
