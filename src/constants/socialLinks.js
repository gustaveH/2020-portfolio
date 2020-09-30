import React from "react"
import {
  FaGithubSquare,
  FaLinkedin,
  // FaInstagramSquare,
  FaMediumM,
  // FaTwitterSquare,
} from "react-icons/fa"

const data = [
  {
    id: 1,
    icon: (
      <FaGithubSquare className="social-icon" target="_blank"></FaGithubSquare>
    ),
    url: "https://github.com/gustaveH",
  },
  {
    id: 2,
    icon: <FaLinkedin className="social-icon" target="_blank"></FaLinkedin>,
    url: "https://www.linkedin.com/in/gustave-habimana/",
  },
  // {
  //   id: 3,
  //   icon: (
  //     <FaInstagramSquare
  //       className="social-icon"
  //       target="_blank"
  //     ></FaInstagramSquare>
  //   ),
  //   url: "https://www.instagram.com/_habimana_/",
  // },
  {
    id: 4,
    icon: <FaMediumM className="social-icon" target="_blank"></FaMediumM>,
    url: "https://medium.com/@Habimana",
  },
  // {
  //   id: 5,
  //   icon: (
  //     <FaTwitterSquare
  //       className="social-icon"
  //       target="_blank"
  //     ></FaTwitterSquare>
  //   ),
  //   url: "https://twitter.com/_Habimana_",
  // },
]
const links = data.map(link => {
  return (
    <li key={link.id}>
      <a href={link.url} className="social-link">
        {link.icon}
      </a>
    </li>
  )
})

export default ({ styleClass }) => {
  return (
    <ul className={`social-links ${styleClass ? styleClass : ""}`}>{links}</ul>
  )
}
