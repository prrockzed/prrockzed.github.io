import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'prrockzed',
  tagline: 'Priyanshu Ranjan',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://prrockzed.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'prrockzed', // Usually your GitHub org/user name.
  projectName: 'prrockzed.github.io', // Usually your repo name.
  deploymentBranch: 'gh-pages', // Usually gh-pages branch.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang.
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    colorMode: {
      defaultMode: 'dark',
      respectPrefersColorScheme: true,
    },
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: 'prrockzed',
      logo: {
        alt: 'My Site Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Tutorial',
        },
        {to: '/blog', label: 'Blog', position: 'left'},
        {
          href: 'https://github.com/prrockzed',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Social Media',
          items: [
            {
              label: 'Linkedin',
              to: 'https://linkedin.com/in/prrockzed',
            },
            {
              label: 'Instagram',
              to: 'https://instagram.com/prrockzed',
            },
            {
              label: 'Facebook',
              to: 'https://facebook.com/prrockzed',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'X (Formerly Twitter)',
              to: 'https://x.com/prrockzed',
            },
            {
              label: 'Stack Overflow',
              to: 'https://instagram.com/prrockzed',
            },
            {
              label: 'Discord',
              to: 'https://discord.gg/yV5nRWjDRJ',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'GitHub',
              to: 'https://github.com/prrockzed/prrockzed.github.io',
            },
            {
              label: 'Quora',
              to: 'https://quora.com/profile/Prrockzed',
            },
            {
              label: 'Reddit',
              to: 'https://reddit.com/user/prrockzed/',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} prrockzed`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
