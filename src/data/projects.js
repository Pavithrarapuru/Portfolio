import projectInterface from '../assets/project-interface.jpg'
import projectData from '../assets/project-data.jpg'
import projectDashboard from '../assets/project-dashboard.jpg'

const projects = [
  {
    number: '01',
    title: 'Project placeholder',
    type: 'Web application',
    description: 'A focused product space for turning a complex workflow into a clear, useful experience.',
    tags: ['React', 'JavaScript', 'CSS'],
    image: projectInterface,
    github: '#',
    demo: '#',
  },
  {
    number: '02',
    title: 'Project placeholder',
    type: 'Data experience',
    description: 'An exploration of calm interfaces, meaningful data, and the small decisions that build trust.',
    tags: ['Python', 'Data', 'UI'],
    image: projectData,
    github: '#',
    demo: '#',
  },
  {
    number: '03',
    title: 'Project placeholder',
    type: 'Digital product',
    description: 'A flexible foundation for a polished digital tool, with room for real content and future growth.',
    tags: ['Node.js', 'API', 'Design'],
    image: projectDashboard,
    github: '#',
    demo: '#',
  },
]

export default projects
