module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "JCNG.ME",
  },
  plugins: [
    "gatsby-plugin-gatsby-cloud",
    // "gatsby-plugin-image",
    // {
    //   resolve: `gatsby-source-filesystem`,
    //   options: {
    //     path: `${__dirname}/attachments`,
    //   },
    // },
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-obsidian',
            options: {
              highlightClassName: 'highlight', // optional
            },
          },
          {
            resolve: `gatsby-remark-images`,
            options: {
              // It's important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
              maxWidth: 590,
            },
          },
        ]
      }
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `garden`,
        path: `${__dirname}/garden`,
      },
    },
    {
      resolve: `gatsby-omni-font-loader`,
      options: {
        enableListener: true,
        preconnect: [`https://fonts.googleapis.com`, `https://fonts.gstatic.com`],
        web: [
          {
            name: `Staatliches`,
            file: `https://fonts.googleapis.com/css2?family=Staatliches&display=swap`,
          },
          {
            name: `JetBrains Mono`,
            file: `https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@200;400&display=swap`,
          },
        ],
      },
    },
  ],
};
