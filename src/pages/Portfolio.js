import React from 'react';
import '../assets/styles/Portfolio.css'
import FeatureProjects from '../components/FeatureProjects'
import ListProjects from '../components/Projects'
import { featured, projects } from '../assets/profileData'


export default function Portfolio() {
  return (

<div className='portfolio section'>
  <div className='container'>
  <div className="row align-items-center">
        <div className="col-md-8">
          <h2>Portfolio</h2>
        </div>
      </div>
    <div className='row'>
    
      {featured.map((featured) => (
          <FeatureProjects key={featured.id} featured={featured} />
        ))}
       {projects.map((project) => (
          <ListProjects key={project.id} project={project} />
        ))}
    </div>
  </div>
</div>
  );
}
