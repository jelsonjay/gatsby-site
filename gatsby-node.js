const path = require('path')
module.exports.onCreateNode = ({ node, actions }) => {
  const { createNodeField } = actions
if(node.internal.type === 'MarkdownRemark'){
  const slug = path.basename(node.fileAbsolutePath, '.md')
  
  
  createNodeField({
    node,
    name: 'slug',
    value: slug
  })
}

}

module.exports.createPages = async ({graphql, actions}) => {
  const { createPage } = actions
  const blogTemplate = path.resolve('./src/template/blog.js')
const res = await graphql(`
 query{
   allMarkdownRemark{
     edges{
       node{
         fields{
           slug
         }
       }
     }
   }
 }
`)
res.data.allMarkdownRemark.edges.forEach((item) => {
  createPage({
  component: blogTemplate,
  path:`/blog/${item.node.fields.slug}`,
  context: {
    slug: item.node.fields.slug
  }
  })
})


}