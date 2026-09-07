
import projectInterface from '../assets/Nivi.png'
import projectData from '../assets/project-data.jpg'
import projectDashboard from '../assets/project-dashboard.jpg'

const projects = [
  {
    number: '01',
    title: 'Nivi Virtual Assistant',
    type: 'Voice-Based AI Assistant',
    description:
      'NIVI is a voice-based virtual assistant built with Python that allows users to interact through voice commands. It can perform tasks like launching applications, generating emails, and fetching real-time information.',

    tags: ['React', 'Python', 'ChatGPT', 'Edge-TTS','REST API', 'Selenium'],
    image: projectInterface,

    // Replace these with your actual links
    github: 'https://github.com/Pavithrarapuru/Virtual_Assistant',
    demo: 'https://YOUR_DEPLOYMENT_LINK.com',
  },

  {
    number: '02',
    title: 'Portfolio Website & AWS CI/CD',
    type: 'Cloud-Hosted Portfolio',
    description:
     'A responsive portfolio website deployed on AWS with an automated CI/CD pipeline using GitHub Actions. It uses S3 and CloudFront for secure, fast delivery, with AWS Lambda and DynamoDB powering the serverless contact form.'
,
    tags: ['React', 'JavaScript', 'vite','tailwind CSS','GitHub', 'CI/CD', 'AWS'],
    image: projectData,

    // Replace these with your actual links
    github: 'https://github.com/Pavithrarapuru/Portfolio',
    demo: 'https://YOUR_DEPLOYMENT_LINK.com',
  },

  {
    number: '03',
    title: 'Project Three',
    type: 'Digital Product',
    description:
      'A flexible foundation for a polished digital tool, with room for real content and future growth.',
    tags: ['Node.js', 'API', 'Design'],
    image: projectDashboard,

    // Replace these with your actual links
    github: 'https://github.com/YOUR_USERNAME/project-three',
    demo: 'https://YOUR_DEPLOYMENT_LINK.com',
  },
]

export default projects

