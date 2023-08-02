/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `Curtis Caulfield`,
    siteUrl: `https://www.curtiscaulfield.dev`,
    description: `Curtis Caulfield's personal website.`
  },
  pathPrefix: `/codedbycurtis.github.io`,
  plugins: [
    'gatsby-plugin-styled-components',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Curtis Caulfield`,
        short_name: `Curtis Caulfield`,
        start_url: `/`,
        theme_color: `#dc143c`,
        icon: `src/images/favicon.png`
      }
    }
  ]
};