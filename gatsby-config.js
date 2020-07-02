module.exports = {
  siteMetadata: {
    title: `Ricardo Gosch - Currículo`,
    description: `Desenvolvedor Front-end, streamer e defensor da democracia educacional.`,
    author: `@rgosch`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Ricardo Gosch`,
        short_name: `Gosch`,
        start_url: `/`,
        background_color: `#F2F2F2`,
        theme_color: `#F2F2F2`,
        icon: `src/images/gosch-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        displayName: false,
        fileName: false,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
};
