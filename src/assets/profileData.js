const about = {
  name: 'Simon Browne',
  introduction:
    'Adipisicing sit fugit ullam unde aliquid sequi Facilis soluta facilis perspiciatis corporis nulla aspernatur. Autem eligendi rerum delectus modi quisquam? Illo ut quasi nemo ipsa cumque perspiciatis! Maiores minima consectetur.',
  resume:
    'https://s3.ap-southeast-2.amazonaws.com/testenv.com.au/bootcamp/portfolio/Resume-Simon-Browne.pdf',
  avatar:
    'https://s3.ap-southeast-2.amazonaws.com/testenv.com.au/bootcamp/portfolio/profile-pic-placeholder.png',
  contact: {
    email: 'im@simonbrowne.com.au',
    linkedin: 'simonjbrowne',
    linkedinURL: 'https://www.linkedin.com/in/simonjbrowne/',
    github: 'simmmmo',
    githubURL: 'https://github.com/simmmmo',
    phone: '0403734180'
  }
}

const featured = [
  {
    id: 1,
    title: 'WorkingBee - Crowd funding with a difference',
    image:
      'https://s3.ap-southeast-2.amazonaws.com/testenv.com.au/bootcamp/portfolio/portfolio-project-7.jpg',
    imageAlt: 'WorkingBee Project',
    github: 'https://github.com/simmmmo/p3-workingbee',
    preview: 'https://workingbee.herokuapp.com/'
  },
  {
    id: 2,
    title: 'TogetherFitness',
    image:
      'https://s3.ap-southeast-2.amazonaws.com/testenv.com.au/bootcamp/portfolio/portfolio-project-4.jpg',
    imageAlt: 'TogetherFitness Project',
    github: 'https://github.com/simmmmo/p2-t3-togetherfitness',
    preview: 'https://togetherfitness.herokuapp.com/'
  }
]

const projects = [
  {
    id: 1,
    title: 'Shaken & Stirred',
    image:
      'https://s3.ap-southeast-2.amazonaws.com/testenv.com.au/bootcamp/portfolio/portfolio-project-1.jpg',
    imageAlt: 'TogetherFitness Project',
    github: 'https://github.com/simmmmo/p1-cocktail-finder',
    preview: 'https://simmmmo.github.io/p1-cocktail-finder/'
  },
  {
    id: 2,
    title: 'Code Quiz',
    image:
      'https://s3.ap-southeast-2.amazonaws.com/testenv.com.au/bootcamp/portfolio/portfolio-project-2.jpg',
    imageAlt: 'Code Quiz Project',
    github: 'https://github.com/simmmmo/sjb-js-code-quiz',
    preview: 'https://simmmmo.github.io/sjb-js-code-quiz/'
  },
  {
    id: 3,
    title: 'MySQL Employee Tracker',
    image:
      'https://s3.ap-southeast-2.amazonaws.com/testenv.com.au/bootcamp/portfolio/portfolio-project-6.jpg',
    imageAlt: 'MySQL Employee Tracker Project',
    github: 'https://github.com/simmmmo/SJB-SQL-Employee-Tracker',
    preview: 'https://github.com/simmmmo/SJB-SQL-Employee-Tracker'
  }
  // {
  //   id: 3,
  //   title: '(ORM): E-Commerce Back End',
  //   image:
  //     'https://s3.ap-southeast-2.amazonaws.com/testenv.com.au/bootcamp/portfolio/portfolio-project-5.jpg',
  //   imageAlt: '(ORM): E-Commerce Back End Project',
  //   github: 'https://github.com/simmmmo/SJB-ORM-E-Commerce',
  //   preview: 'https://github.com/simmmmo/SJB-ORM-E-Commerce'
  // }
  // {
  //   id: 4,
  //   title: 'Shaken & Stirred',
  //   image: 'https://s3.ap-southeast-2.amazonaws.com/testenv.com.au/bootcamp/portfolio/portfolio-project-1.jpg',
  //   imageAlt: 'TogetherFitness Project',
  //   github: 'https://github.com/simmmmo/p1-cocktail-finder',
  //   preview: 'https://simmmmo.github.io/p1-cocktail-finder/',
  // },
]

const resume = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'HTML',
  'CSS',
  'JavaScript',
  'TypeScript',
  'React',
  'Redux',
  'SASS',
  'Material UI',
  'Git',
  'CI/CD',
  'Jest',
  'Enzyme'
]

export { about, featured, projects, resume }
