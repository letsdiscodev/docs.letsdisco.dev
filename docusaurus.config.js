// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from "prism-react-renderer";

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "disco documentation",
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: "https://docs.letsdisco.dev",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "letsdiscodev", // Usually your GitHub org/user name.
  projectName: "docs.letsdisco.dev", // Usually your repo name.

  trailingSlash: false,

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: "/",
          sidebarPath: "./sidebars.js",
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          //editUrl:
          //  "https://github.com/letsdiscodev/docs.letsdisco.dev/tree/main/",
        },
        blog: false,
        theme: {
          customCss: "./src/css/custom.css",
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      metadata: [
        {
          name: 'description',
          content: 'disco documentation',
        },
        {
          name: 'og:title',
          content: 'disco documentation',
        },
        {
          name: 'og:description',
          content: 'disco documentation',
        },
        {
          name: 'og:image',
          content: '/img/disco-opengraph.jpg',
        },
        {
          name: 'twitter:card',
          content: 'summary',
        },
        {
          name: 'twitter:site',
          content: '@letsdiscodev',
        },
        {
          name: 'twitter:creator',
          content: '@letsdiscodev',
        },
      ],
      docs: {
        sidebar: {
            autoCollapseCategories: false,
          },
      },
      algolia: {
        // The application ID provided by Algolia
        appId: 'BLNP7BXTWD',

        // Public API key: it is safe to commit it
        apiKey: '2be8ad1ce65efff21b869dfd33e10039',

        indexName: 'letsdisco',

        // Optional: see doc section below
        contextualSearch: true,

        // Optional: Specify domains where the navigation should occur through window.location instead on history.push. Useful when our Algolia config crawls multiple documentation sites and we want to navigate with window.location.href to them.
        // externalUrlRegex: 'external\\.com|domain\\.com',

        // Optional: Replace parts of the item URLs from Algolia. Useful when using the same search index for multiple deployments using a different baseUrl. You can use regexp or string in the `from` param. For example: localhost:3000 vs myCompany.com/docs
        // replaceSearchResultPathname: {
          // from: '/docs/', // or as RegExp: /\/docs\//
          // to: '/',
        // },

        // Optional: Algolia search parameters
        // searchParameters: {},

        // Optional: path for search page that enabled by default (`false` to disable it)
        searchPagePath: false, // 'search',

        // Optional: whether the insights feature is enabled or not on Docsearch (`false` by default)
        insights: false,

        //... other Algolia params
      },
      colorMode: {
        disableSwitch: true,
        respectPrefersColorScheme: true,
      },
      // Replace with your project's social card
      // image: "img/docusaurus-social-card.jpg",
      navbar: {
        title: "disco documentation",
        logo: {
          alt: 'disco',
          src: 'img/disco-logo.svg',
        },
        items: [
          // {
          //   type: 'docSidebar',
          //   sidebarId: 'tutorialSidebar',
          //   position: 'left',
          //   label: 'Tutorial',
          // },
          {
            label: "GitHub",
            href: "https://github.com/letsdiscodev/",
            position: "right",
          },
          {
            label: "Discord",
            href: "https://discord.gg/7J4vb5uUwU",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          // {
          //   title: "Docs",
          //   items: [
          //     {
          //       label: "Tutorial",
          //       to: "/",
          //     },
          //   ],
          // },
          {
            // title: "Community",
            items: [
              {
                label: "GitHub",
                href: "https://github.com/letsdiscodev/",
              },
              {
                label: "Discord",
                href: "https://discord.gg/7J4vb5uUwU",
              },
              {
                label: "letsdisco.dev",
                href: "https://letsdisco.dev/",
              },
            ],
          },
          // {
          //   title: "More",
          //   items: [
          //   ],
          // },
        ],
        copyright: `© ${new Date().getFullYear()} disco`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
        additionalLanguages: ['json', 'bash']
      },
    }),
};

export default config;
