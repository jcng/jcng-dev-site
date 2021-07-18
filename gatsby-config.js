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
  ],
};
