import React from "react"
import Layout from "../components/layout"
import SEO from '../components/head'


 function Home() {
  return (
  <Layout>
    <SEO title='Home'/>
    <h1>The modern way to build the website using gatsby.js</h1>
    <p>Gatsby is a React-based open source framework for 
      creating websites and apps. Build anything you can 
      imagine with over 2000 plugins and performance, 
      scalability, and security built-in by default.</p>
   
  </Layout>
    )
}

export default Home