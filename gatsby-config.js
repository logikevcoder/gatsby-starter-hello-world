/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: "gatsby tutorial course",
    description: "course descriptions",
    author: "Kevin Napier",
    data: { name: "Kevin", age: 35 },
  },
  plugins: [`gatsby-plugin-styled-components`],
}
