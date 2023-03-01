import React from 'react'
import '../assets/styles/Portfolio.css'
import projectOne from '../assets/img/portfolio-project-1.jpg'
import projectTwo from '../assets/img/portfolio-project-2.jpg'
import projectFour from '../assets/img/portfolio-project-4.jpg'
import projectFive from '../assets/img/portfolio-project-5.jpg'
import projectSix from '../assets/img/portfolio-project-6.jpg'

export default function Portfolio() {
  return (
    <div className="portfolio section" id="portfolio">
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-portfolio portfolio-item">
            <div className="portfolio-wrapper">
              <div className="portfolio-thumb">
                <img src={projectFour} alt="" />
                <div className="view-icon">
                  <a
                    href="https://github.com/simmmmo/p2-t3-togetherfitness"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="fa-brands fa-github"></i> GitHub Repo
                  </a>
                </div>
              </div>
              <div className="portfolio-name text-left">
                <h4>
                  <a
                    href="https://together-fitness.herokuapp.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    TogetherFitness
                  </a>
                </h4>
                <div className="portfolio-link">
                  <p>
                    <a
                      href="https://together-fitness.herokuapp.com/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      View Project
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-portfolio portfolio-item">
            <div className="portfolio-wrapper">
              <div className="portfolio-thumb">
                <img src={projectOne} alt="" />
                <div className="view-icon">
                  <a
                    href="https://github.com/simmmmo/p1-cocktail-finder"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="fa-brands fa-github"></i> GitHub Repo
                  </a>
                </div>
              </div>
              <div className="portfolio-name text-left">
                <h4>
                  <a
                    href="https://simmmmo.github.io/p1-cocktail-finder/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Shaken & Stirred
                  </a>
                </h4>
                <div className="portfolio-link">
                  <p>
                    <a
                      href="https://simmmmo.github.io/p1-cocktail-finder/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      View Project
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-portfolio portfolio-item">
            <div className="portfolio-wrapper">
              <div className="portfolio-thumb">
                <img src={projectTwo} alt="" />
                <div className="view-icon">
                  <a
                    href="https://github.com/simmmmo/sjb-js-code-quiz"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="fa-brands fa-github"></i> GitHub Repo
                  </a>
                </div>
              </div>
              <div className="portfolio-name text-left">
                <h4>
                  <a
                    href="https://simmmmo.github.io/sjb-js-code-quiz/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Code Quiz
                  </a>
                </h4>
                <div className="portfolio-link">
                  <p>
                    <a
                      href="https://simmmmo.github.io/sjb-js-code-quiz/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      View Project
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-portfolio portfolio-item">
            <div className="portfolio-wrapper">
              <div className="portfolio-thumb">
                <img src={projectSix} alt="" />
                <div className="view-icon">
                  <a
                    href="https://github.com/simmmmo/SJB-SQL-Employee-Tracker"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="fa-brands fa-github"></i>GitHub Repo
                  </a>
                </div>
              </div>
              <div className="portfolio-name text-left">
                <h4>
                  <a
                    href="https://github.com/simmmmo/SJB-SQL-Employee-Tracker"
                    target="_blank"
                    rel="noreferrer"
                  >
                    MySQL Employee Tracker
                  </a>
                </h4>
                <div className="portfolio-link">
                  <p>
                    <a
                      href="https://github.com/simmmmo/SJB-SQL-Employee-Tracker"
                      target="_blank"
                      rel="noreferrer"
                    >
                      View Project
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-portfolio portfolio-item">
            <div className="portfolio-wrapper">
              <div className="portfolio-thumb">
                <img src={projectFive} alt="" />
                <div className="view-icon">
                  <a href="https://github.com/simmmmo/SJB-ORM-E-Commerce">
                    <i className="fa-brands fa-github"></i>GitHub Repo
                  </a>
                </div>
              </div>
              <div className="portfolio-name text-left">
                <h4>
                  <a href="https://github.com/simmmmo/SJB-ORM-E-Commerce">
                    (ORM): E-Commerce Back End
                  </a>
                </h4>
                <div className="portfolio-link">
                  <p>
                    <a href="https://github.com/simmmmo/SJB-ORM-E-Commerce">View Project</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
