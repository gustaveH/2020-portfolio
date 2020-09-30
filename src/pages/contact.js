import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/SEO"

const contact = () => {
  return (
    <Layout>
      <SEO title="Contact" description="Contact Gustave" />
      <section className="contact-page">
        <article className="contact-form">
          <h3>get in touch</h3>
          <form
            name="contact"
            method="POST"
            data-netlify-recaptcha="true"
            data-netlify-honeypot="bot-field"
            data-netlify="true"
          >
            <div className="form-group">
              <input
                type="text"
                name="name"
                placeholder="name"
                className="form-control"
              />
              <input
                type="email"
                name="email"
                placeholder="email"
                className="form-control"
              />
              <textarea
                name="message"
                rows="5"
                placeholder="message"
                className="form-control"
              ></textarea>
              <div data-netlify-recaptcha="true"></div>
            </div>

            <button type="submit" className="submit-btn btn">
              Submit Here
            </button>
          </form>
        </article>
      </section>
    </Layout>
  )
}

export default contact
