import React from 'react'
import {graphql, useStaticQuery} from 'gatsby'
import footerStyles from './footer.module.css'

const Footer = () => {
  const data = useStaticQuery(graphql`
  query{
    site{
      siteMetadata{
        author
      }
    }
  }
  
  `)
  return (
    <div className={footerStyles.footer}>
    <p>&copy; {new Date().getFullYear()} {data.site.siteMetadata.author}</p>
    </div>
  )
}

export default Footer
