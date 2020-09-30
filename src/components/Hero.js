import React from "react"
import Image from "gatsby-image"
import { Link } from "gatsby"
import { graphql, useStaticQuery } from "gatsby"
import SocialLinks from "../constants/socialLinks"
import downloadFile from "../assets/Gustave_Resume.pdf"

const query = graphql`
  {
    file(relativePath: { eq: "second-profile.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
const Hero = () => {
  const {
    file: {
      childImageSharp: { fluid },
    },
  } = useStaticQuery(query)

  return (
    <header className="hero">
      <div className="section-center hero-center">
        <article className="hero-info">
          <div>
            <div className="underline"></div>
            <h1>I'm Gustave</h1>
            <h4>Front End Developer, frelance and UI/UX Designer.</h4>
            <Link to="/contact" className="btn">
              Contact me
            </Link>
            <br />
            <a href={downloadFile} download className="btn">
              my resume
            </a>
            <SocialLinks target="_blank" />
          </div>
        </article>
        <Image fluid={fluid} className="hero-img" />
      </div>
    </header>
  )
}

export default Hero
