module.exports = {
  siteMetadata: {
    title: `Argh Team`,
  },
  pathPrefix: `/argh.team`,
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography.js`,
      },
    }
  ],
}
