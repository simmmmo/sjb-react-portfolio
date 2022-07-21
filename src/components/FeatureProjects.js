import React from 'react';
import { FaGithub } from "react-icons/fa";

export default function FeatureProjects({ featured }) {
  let iconStyles = { fontSize: "16px" };
  return (
      <div className='col-md-6 col-portfolio portfolio-item'>
        <div className='portfolio-wrapper'>
          <div className='portfolio-thumb'>
            <img src={featured.image} alt={featured.imageAlt} />
            <div className='view-icon'>
              <a href={featured.github} target='_blank' rel='noreferrer'><i><FaGithub style={iconStyles} /></i> GitHub Repo</a>
            </div>
          </div>
          <div className='portfolio-name text-left'>
            <h4><a href={featured.preview} target='_blank' rel='noreferrer'>{featured.title}</a></h4>
            <div className='portfolio-link'>
              <p><a href={featured.preview} target='_blank' rel='noreferrer'>View Project</a></p>
            </div>						
          </div>
        </div>
      </div>
  );
}
