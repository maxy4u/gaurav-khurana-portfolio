/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://gauravkhurana.ca',
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  sitemapSize: 1000
};
