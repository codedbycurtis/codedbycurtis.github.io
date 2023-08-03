/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `Curtis Caulfield`,
    description: `Curtis Caulfield's personal website.`,
    image: `/images/portrait.png`,
    siteUrl: `https://www.curtiscaulfield.dev`,
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`
      }
    },
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