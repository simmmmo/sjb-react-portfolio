import React from 'react'
import '../assets/styles/Contact.css'
// import Form from '../components/Form'
import { about } from '../assets/profileData'

import { FaLinkedin, FaPhoneAlt, FaGithubSquare, FaEnvelope } from 'react-icons/fa'

export default function Contact() {
  var mailLink = 'mailto:' + about.contact.email
  var phoneLink = 'tel:' + about.contact.phone
  let iconStyles = { fontSize: '20px' }
  let iconStylesContact = { fontSize: '16px' }
  return (
    <div className="contact section">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-8">
            <h2>Contact</h2>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <div className="contact-intro">
              <p>
                Please feel free to reach out through one of the following methods to discuss my
                portfolio or experience further. Thank you
              </p>
              <ul className="contact-list">
                <li className="contact-links">
                  <a href={mailLink} target="_blank" rel="noreferrer">
                    <i>
                      <FaEnvelope style={iconStylesContact} />
                    </i>
                    {about.contact.email}
                  </a>
                </li>
                <li className="contact-links">
                  <a href={phoneLink} target="_blank" rel="noreferrer">
                    <i>
                      <FaPhoneAlt style={iconStylesContact} />
                    </i>
                    {about.contact.phone}
                  </a>
                </li>
                <li className="contact-links">
                  <a href={about.contact.linkedinURL}>
                    <i>
                      <FaLinkedin style={iconStyles} />
                    </i>
                    {about.contact.linkedin}
                  </a>
                </li>
                <li className="contact-links">
                  <a href={about.contact.githubURL}>
                    <i>
                      <FaGithubSquare style={iconStyles} />
                    </i>
                    {about.contact.github}
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-6">
            <div className="contact-image">{/* <Form /> */}</div>
          </div>
        </div>
      </div>
    </div>
  )
}
