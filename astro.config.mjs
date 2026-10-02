// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  // ⚠️ À remplacer par le domaine de production (utilisé par le sitemap + les URL canoniques)
  site: 'https://www.rucher-hautes-bruyeres.fr',
  trailingSlash: 'ignore',
  integrations: [
    sitemap({
      // Les pages utilitaires n'ont rien à faire dans l'index des moteurs.
      filter: (page) => !/\/(merci|404)\/?$/.test(page),
    }),
  ],
  build: {
    // HTML « propre » : /nos-produits.html -> /nos-produits/
    format: 'directory',
    inlineStylesheets: 'auto',
  },
  compressHTML: true,
  vite: {
    plugins: [tailwindcss()],
    server: {
      // Indispensable pour la preview sandbox (*.e2b.app) et les tunnels de recette
      allowedHosts: true,
      host: true,
    },
  },
});
