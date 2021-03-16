// FINOS project blueprint setup for Docusaurus 1.x project documentation websites
// 
// Check comments below to know how to adapt the default configuration to your FINOS project.
// If a configuration is not commented, please do not change it.
//
// See https://docusaurus.io/docs/site-config for all the possible
// site configuration options.

// Replace 'project-blueprint' with Open Source Readiness
const projectName = 'Open Source Readiness'
// Replace 'project-blueprint' with Open Source Readiness
const projectSlug = 'open-source-readiness'
// Replace 'FINOS' with {name of copyright owner}
const copyrightOwner = 'FINOS'

const siteConfig = {
  noIndex: true,
  title: `FINOS ${projectName}`,
  tagline: `OVERCOMING OBSTACLES TO OPEN SOURCE`,
  url: `https://${projectSlug}.netlify.app/`,
  cname: `${projectSlug}.netlify.app`,
  baseUrl: `/`,
  projectName: projectSlug,
  repoUrl: `https://github.com/finos/${projectSlug}`,
  organizationName: 'FINOS',

  // Header menu
  headerLinks: [
    {doc: 'oslc', label: 'OSLC Handbook'},
    {doc: 'foss-policy', label: 'FOSS Policy'},
    {doc: 'whitepaper', label: 'WhitePaper'},
    {doc: 'compliance-checklist', label: 'Compliance Checklist'},
    {doc: 'compliance-workflows', label: 'Compliance Workflows'},
    {blog: false}
  ],

  // Update icon files with program/project logos
  headerIcon: 'img/favicon/favicon-finos.ico',   
  footerIcon: 'img/favicon/favicon-finos.ico',
  favicon: 'img/favicon/favicon-finos.ico',

  colors: {
    primaryColor: '#0086bf',
    secondaryColor: '#0033A0'
  },

  // Change the copyright info with correct program/project names */
  copyright: `Copyright © ${new Date().getFullYear()} ${projectName} - ${copyrightOwner}`,

  highlight: {
    theme: 'default',
  },

  scripts: ['https://buttons.github.io/buttons.js'],
  onPageNav: 'separate',
  cleanUrl: true,

  // Update Open Graph and Twitter cards/links, if project have dedicated ones
  ogImage: 'img/undraw_online.svg',
  twitterImage: 'img/undraw_tweetstorm.svg',
  twitterUsername: 'FinosFoundation'
};

module.exports = siteConfig;