import React from 'react'
import Layout from '../components/layout'
import {graphql} from 'gatsby'
import SEO from '../components/head'


export const query = graphql `
query ($slug: String!) {
  markdownRemark(fields: {slug: {eq: $slug} } ) {
    frontmatter { 
      title
      date
    }
    html
  }
}

`

const Blog = (props) => {
  return (
    <Layout>
      <SEO title={props.data.markdownRemark.frontmatter.title}/>
      <h1>{props.data.markdownRemark.frontmatter.title}</h1>
      <small>{props.data.markdownRemark.frontmatter.date}</small>
      <span>{props.data.markdownRemark.frontmatter.category}</span>
      <div dangerouslySetInnerHTML={{__html: props.data.markdownRemark.html}}></div>
    </Layout>
  )
}

export default Blog
