import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Priyanshu Ranjan',
  tagline: 'prrockzed',
  favicon: 'img/logo.svg',

  url: 'https://prrockzed.github.io',
  baseUrl: '/',

  organizationName: 'prrockzed',
  projectName: 'prrockzed.github.io',
  deploymentBranch: 'gh-pages',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

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
          editUrl:
            'https://github.com/prrockzed/prrockzed.github.io/blob/main/',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          editUrl:
            'https://github.com/prrockzed/prrockzed.github.io/blob/main/',
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
    navbar: {
      title: 'prrockzed',
      logo: {
        alt: 'My Site Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'aboutSidebar',
          position: 'left',
          label: 'About',
        },
        {
          type: 'docSidebar',
          sidebarId: 'experienceSidebar',
          position: 'left',
          label: 'Experience',
        },
        {
          type: 'docSidebar',
          sidebarId: 'skillsSidebar',
          position: 'left',
          label: 'Skills',
        },
        {
          type: 'docSidebar',
          sidebarId: 'learningsSidebar',
          position: 'left',
          label: 'Learnings',
        },
        {
          type: 'docSidebar',
          sidebarId: 'achievementsSidebar',
          position: 'left',
          label: 'Achievements',
        },
        {
          type: 'docSidebar',
          sidebarId: 'letsConnectSidebar',
          position: 'left',
          label: 'Let\'s Connect',
        },
        {
          href: 'https://drive.google.com/file/d/1FSuNphePjptV4gJw8vXQwUvyBrGmC5aS/view',
          label: 'Resume',
          position: 'right',
        },
        {
          to: '/blog',
          label: 'Blogs',
          position: 'right'
        },
        {
          to: 'https://github.com/prrockzed',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'light',
      copyright: `Copyright © ${new Date().getFullYear()} prrockzed`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
