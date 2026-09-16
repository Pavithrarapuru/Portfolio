
import projectInterface from '../assets/Nivi.png'
import projectData from '../assets/Portfolio.png'
import projectDashboard from '../assets/Sprynto.png'

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
    demo: 'https://nivivirtual-assistant.vercel.app/',
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
    demo: 'https://portfolio-xt16.vercel.app/',
  },

  {
    number: '03',
    title: 'Project Three',
    type: 'Digital Product',
    description:
      'Sprynto is a modern hotel management web application designed to simplify hotel operations and improve the guest experience. It features a responsive React-based interface with secure authentication, booking management, and an intuitive admin dashboard, supported by MongoDB for efficient data management. The application focuses on usability, performance, and scalable frontend architecture.',
    tags: ['React.js', 'JavaScript', 'MongoDB','UI/UX', 'Database Management'],

    image: projectDashboard,

    // Replace these with your actual links
    github: 'https://github.com/Pavithrarapuru/SPRYNTO',
    demo: 'https://YOUR_DEPLOYMENT_LINK.com',
  },
]

export default projects

