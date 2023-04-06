module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "JCNG",
  },
  plugins: [
    "gatsby-plugin-gatsby-cloud",
    "gatsby-plugin-image",
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
