import React from "react"
import SocialLinks from "../constants/socialLinks"
const Footer = () => {
  return (
    <footer className="footer">
      <div>
        <SocialLinks styleClass="footer-links"></SocialLinks>
        <h4>made with 💚 &copy;Gustave {new Date().getFullYear()}</h4>
      </div>
    </footer>
  )
}

export default Footer