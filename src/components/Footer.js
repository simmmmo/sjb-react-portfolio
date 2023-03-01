import React from 'react'
import '../assets/styles/Footer.css'
import { about } from '../assets/profileData'
import { FaLinkedinIn, FaPhoneAlt, FaGithub, FaEnvelope } from 'react-icons/fa'

export default function Footer() {
  var mailLink = 'mailto:' + about.contact.email
  var phoneLink = 'tel:' + about.contact.phone
  return (
    <footer>
      <div className="container">
        <h2>{about.name}</h2>
        <p>Please feel free to reach out through one of the following methods. </p>
        <ul>
          <li>
            <a href={about.contact.linkedinURL}>
              <i>
                <FaLinkedinIn />
              </i>
            </a>
          </li>
          <li>
            <a href={phoneLink}>
              <i>
                <FaPhoneAlt />
              </i>
            </a>
          </li>
          <li>
            <a href={mailLink}>
              <i>
                <FaEnvelope />
              </i>
            </a>
          </li>
          <li>
            <a href={about.contact.githubURL}>
              <i>
                <FaGithub />
              </i>
            </a>
          </li>
        </ul>
      </div>
    </footer>
  )
}
