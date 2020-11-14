import React from 'react'
import {Link} from 'gatsby'
import Layout from '../components/layout'
import SEO from '../components/head'

const NotFound = () => {
  return (
    <Layout>
      <SEO title='404'/>
      <h1>404 Page not found</h1>
      <p><Link to='/'>Back to Home</Link> </p>
    </Layout>
  )
}

export default NotFound
