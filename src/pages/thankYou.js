import React from "react"
import Layout from "../components/Layout"
import { Link } from "gatsby"
import SEO from "../components/SEO"

const ThankYouPage = () => {
  return (
    <Layout>
      <SEO title="Contact" description="Thank You" />
      <main className="error-page">
        <div className="error-container">
          <h1>Thank You for your submission!</h1>
          <Link to="/" className="btn">
            Back Home
          </Link>
        </div>
      </main>
    </Layout>
  )
}

export default ThankYouPage
