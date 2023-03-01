import React from 'react'
import '../assets/styles/About.css'
import { about } from '../assets/profileData'
import { FaLinkedin, FaGithubSquare, FaFileAlt } from 'react-icons/fa'

export default function About() {
  let iconStyles = { fontSize: '20px' }
  return (
    <div className="about section">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-8">
            <h2>About</h2>
          </div>
        </div>
        <div className="row align-items-center">
          <div className="col-md-6">
            <div className="about-intro">
              <h3>Simon Browne</h3>
              <p>
                An experienced Product and Account Manager that has worked in a wide variety of
                roles within the digital industry. Extensive experience across multiple functions
                including digital strategy and management, client and vendor support, design and
                product development.
              </p>

              <p>
                Looking to build on these digital management skills and recent qualifications, and
                move to a full stack development role - a lateral progression which aligns with
                passion for helping organisations maximise their value from digital products and
                services.
              </p>

              <ul className="about-list">
                <li className="about-links">
                  <a href={about.contact.linkedinURL}>
                    <i>
                      <FaLinkedin style={iconStyles} />
                    </i>{' '}
                    {about.contact.linkedin}
                  </a>
                </li>
                <li className="about-links">
                  <a href={about.contact.githubURL}>
                    <i>
                      <FaGithubSquare style={iconStyles} />
                    </i>
                    {about.contact.github}
                  </a>
                </li>
                <li className="about-links">
                  <a href={about.resume} target="_blank" rel="noreferrer">
                    <i>
                      <FaFileAlt style={iconStyles} />
                    </i>
                    Resume
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-6">
            <div className="about-image">
              <img src={about.avatar} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
