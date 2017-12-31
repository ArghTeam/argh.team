const production = () => process.env.NODE_ENV === 'production'

module.exports = {
  siteMetadata: {
    title: `Argh Team`,
  },
  pathPrefix: production ? '/' : '/argh.team',
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
