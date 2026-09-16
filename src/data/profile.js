import profilePlaceholder from '../assets/pavithra_profile.png'

export const navItems = [
  'Home',
  'About',
  'Skills',
  'Projects',
  'Experience',
  'Contact',
]

const profile = {
  name: 'Pavithra',

  hero: {
    availability: 'Building intelligent software for what comes next',

    titleBefore: 'From ',
    titleEmphasis: 'code',
    titleAfter: ' to intelligent systems.',

    description:
      "I'm Pavithra, a Software Engineer focused on Python, enterprise engineering, and Generative AI. I build intelligent applications using LLMs, RAG, agentic workflows, and automation.",

    status: 'Software Engineer • Python • GenAI',

    location: 'Based in India',

    image: profilePlaceholder,
  },

  about: {
    eyebrow: 'Beyond the code',

    title: 'Engineering intelligence.\nBuilding with purpose.',

    copy:
      'I build software at the intersection of Python, enterprise engineering, and Generative AI.',

    lead:
      'My journey spans Python development, enterprise engineering with Verint, and AI-driven application development using LLMs, RAG, embeddings, and agentic workflows.',

    detail:
      'I focus on building reliable software and exploring intelligent solutions that solve real-world problems.',
  },

  footer: 'Engineering software. Exploring intelligence.',
}

export default profile