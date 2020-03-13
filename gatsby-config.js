/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: "tutorial",
    description: "just some description about our site",
    author: "Kevin Napier",
    data: { name: "Kevin", age: 35 },
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `aa6lmvvj10ja`,
        // Learn about environment variables: https://gatsby.dev/env-vars
        accessToken: "coEg-s-TeNE4MIZnenmUau8zdPNpZZQc5LqeJ9dW6qU",
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/src/posts/`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-styled-components`,
  ],
}
