import { themes as prismThemes } from "prism-react-renderer";
const config = {
  title: "Unlem",
  tagline: "Application Documents",
  favicon: "img/favicon.ico",
  url: "https://your-docusaurus-site.example.com",
  baseUrl: "/",
  organizationName: "facebook", // Usually your GitHub org/user name.
  projectName: "Application Documents", // Usually your repo name.

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  themeConfig: {
    navbar: {
      items: [
        {
          type: "localeDropdown",
          position: "left",
        },
      ],
    },
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      {
        docs: {
          sidebarPath: "./sidebars.js",
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          //editUrl:
          //   'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          //editUrl:
          //  'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      },
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      themeConfig: {
        docs: {
          sidebar: {
            autoCollapseCategories: true,
          },
        },
      },

      // Replace with your project's social card
      image: "img/docusaurus-social-card.jpg",
      navbar: {
        title: "",
        logo: {
          alt: "UNLEM A.S.",
          src: "/img/logo.svg",
        },
        items: [
          {
            type: "docSidebar",
            sidebarId: "tutorialSidebar",
            position: "left",
            label: "Application",
          },
          { to: "/blog", label: "Blog", position: "left" },
          {
            href: "https://github.com/akimito/docu",
            label: "GitHub",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Unlem",
            items: [
              {
                label: "Application",
                to: "/docs/intro",
              },
            ],
          },
          {
            title: "Community",
            items: [
              {
                label: "Stack Overflow",
                href: "https://stackoverflow.com/questions/tagged/",
              },
              {
                label: "Discord",
                href: "https://discordapp.com/invite/",
              },
              {
                label: "Twitter",
                href: "https://twitter.com/",
              },
            ],
          },
          {
            title: "More",
            items: [
              {
                label: "Blog",
                to: "/blog",
              },
              {
                label: "GitHub",
                href: "https://github.com/akimito/docu",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} ÜNLEM Application Documents`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),

    plugins: [],
  i18n: {
    defaultLocale: "en",
    locales: ["en", "tr"],
  },
};

export default config;
