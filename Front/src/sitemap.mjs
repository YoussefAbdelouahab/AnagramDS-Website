import { SitemapStream, streamToPromise } from 'sitemap';
import { createGzip } from 'zlib';
import fs from 'fs';

const sitemap = new SitemapStream({
  hostname: 'https://anagramds.com', // Mettez ici l'URL de votre site
});

const pages = [
  { url: '/', changefreq: 'daily', priority: 1 },
  { url: '/about', changefreq: 'daily', priority: 0.8 },
  { url: '/freequote', changefreq: 'daily', priority: 0.8 },
  { url: '/jobs', changefreq: 'daily', priority: 0.8 },
  { url: '/help', changefreq: 'daily', priority: 0.8 },
  { url: '/contact', changefreq: 'daily', priority: 0.8 },
  { url: '/portail', changefreq: 'daily', priority: 0.8 },
  { url: '/login', changefreq: 'daily', priority: 0.8 },
  { url: '/register', changefreq: 'daily', priority: 0.8 },
  { url: '/blog', changefreq: 'daily', priority: 0.8 },
  // Ajoutez ici d'autres pages de votre site
];

// Ajoutez chaque page à la sitemap
pages.forEach((page) => {
  sitemap.write(page);
});

// Finalisez la sitemap
sitemap.end();

// Générez un fichier gzip pour la sitemap
streamToPromise(sitemap)
  .then((xml) => {
    fs.writeFileSync('sitemap.xml', xml);
    fs.writeFileSync('sitemap.xml.gz', xml);
  });
