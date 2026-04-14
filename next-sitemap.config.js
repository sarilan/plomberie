/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://www.groupe-canalnet.fr',
  generateRobotsTxt: true,
  changefreq: 'weekly',
  priority: 0.7,
  robotsTxtOptions: {
    policies: [
      { userAgent: '*', allow: '/' },
    ],
  },
}
