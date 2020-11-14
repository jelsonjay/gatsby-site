import React from 'react'
import Layout from '../components/layout'
import {Link, graphql, useStaticQuery} from 'gatsby'
import blogStyles from '../components/blog.module.css'
import SEO from '../components/head'

const Blog = props => {

  const data = useStaticQuery(graphql`
  query {
    allMarkdownRemark{
      edges{
        node{
          frontmatter{
            title
            category
            date
          }
          fields{
            slug
          }
        }
      }
    }
  }
  
  `)
  
  return (
    <Layout>
      <SEO title='Blog'/>
      <h1>Blog static website</h1>
  <ol className={blogStyles.post}>{data.allMarkdownRemark.edges.map((item) => {
    return(
      <li className={blogStyles.post}>
        <Link className={blogStyles.a} to={`/blog/${item.node.fields.slug}`}>
        <h2>{item.node.frontmatter.title}</h2>
        <p>{item.node.frontmatter.category}</p>
        </Link>
        <small>{item.node.frontmatter.date}</small>

      </li>
    )
  })}</ol>
    </Layout>
  )
}



export default Blog
