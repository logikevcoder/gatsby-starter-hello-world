const path = require("path") // built in node feature to create an absolute path see below

exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions // could destructure above in the parameter but this is more clear

  // assign the destructured data var as the var for the await. As used below
  const { data } = await graphql(`
    {
      tours: allContentfulTour {
        edges {
          node {
            slug
          }
        }
      }
    }
  `)

  // destructure the node object from each item of the forEach
  // in the createPage function we are passing 3 object values
  // path this must be named exactly, its value is the path set which was created
  // component, this is where the path of the template file lives based on the absolute path created by node
  // the slug key which could be named anything, but it must have a value of where the actual page is created from in this case slug was passed
  data.tours.edges.forEach(({ node }) => {
    createPage({
      path: `tours/${node.slug}`,
      component: path.resolve("./src/templates/tour-template.js"),
      context: {
        slug: node.slug,
      },
    })
  })
}
