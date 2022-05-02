const path = require('path')


module.exports.createPages = async ({graphql, actions}) => {
  const { createPage } = actions
  const blogTemplate = path.resolve('./src/templates/blog.js')
  const res = await graphql(
    `
    query {
      allContentfulArticulo {
        edges{
          node{
 
            slug
 
          }
        }
      }
    }
    `
  )
  res.data.allContentfulArticulo.edges.forEach((edge) => {
    createPage({
      component: blogTemplate,
      path: `/articulos/${edge.node.slug}`,
      context: {
        slug: edge.node.slug
      }
    })
  })
}