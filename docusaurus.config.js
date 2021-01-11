module.exports = {
  title: "devMakers",
  tagline: "Lets Become Better Devs",
  url: "https://learn.sauravkhdoolia.com",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "sauravkhdoolia", // Usually your GitHub org/user name.
  projectName: "devmakers", // Usually your repo name.
  themeConfig: {
    navbar: {
      title: "devMakers",
      items: [
        {
          to: "docs/basics/",
          activeBasePath: "docs/basics",
          label: "HTML & CSS",
          position: "right",
        },
        {
          to: "docs/js/",
          activeBasePath: "docs/js",
          label: "Learn JS",
          position: "right",
        },
        {
          to: "docs/react/",
          activeBasePath: "docs/react",
          label: "Learn React",
          position: "right",
        },
        // { to: "blog", label: "Blog", position: "left" },
        {
          href: "https://github.com/sauravkhoolia/devmakers",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Learn",
          items: [
            {
              label: "HTML & CSS",
              to: "docs/basics/",
            },
            {
              label: "Learn JS",
              to: "docs/js/",
            },
          ],
        },
        {
          title: "Track Me",
          items: [
            {
              label: "Discord",
              href: "https://discord.io/devmakers",
            },
            {
              label: "Twitter",
              href: "https://twitter.com/sauravkhdoolia",
            },
          ],
        },
        {
          title: "More",
          items: [
            // {
            //   label: "Blog",
            //   to: "blog",
            // },
            {
              label: "GitHub",
              href: "https://github.com/sauravkhdoolia/devmakers",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} devMakers, LLC. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          editUrl: "https://github.com/sauravkhdoolia/devmakers/edit/master/",
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            "https://github.com/sauravkhdoolia/devmakers/edit/master/blog/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
};
