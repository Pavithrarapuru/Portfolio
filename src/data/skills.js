import {
  Code2,
  Database,
  Monitor,
  Server,
  Terminal,
  Layers3,
  Palette,
  FileCode,
  Globe,
  Brain,
  Bot,
  Search,
  Link,
  Cloud,
  GitBranch,
  Box,
  Settings,
  Building2,
  Clock,
  ClipboardCheck,
  BarChart3,
  Send,
} from 'lucide-react'

const skills = [
  // 01 — Languages & Core
  {
    name: 'Python',
    category: 'Languages & Core',
    subcategory: 'Core Language',
    icon: Terminal,
  },
  {
    name: 'OOPs',
    category: 'Languages & Core',
    subcategory: 'Object Oriented',
    icon: Code2,
  },
  {
    name: 'DSA',
    category: 'Languages & Core',
    subcategory: 'Problem Solving',
    icon: Code2,
  },
  {
    name: 'Low Level Design',
    category: 'Languages & Core',
    subcategory: 'System Design',
    icon: Layers3,
  },
  {
    name: 'High Level Design',
    category: 'Languages & Core',
    subcategory: 'System Design',
    icon: Layers3,
  },

  // 02 — AI & GenAI
  {
    name: 'Generative AI',
    category: 'AI & GenAI',
    subcategory: 'AI Engineering',
    icon: Brain,
  },
  {
    name: 'LLMs',
    category: 'AI & GenAI',
    subcategory: 'Language Models',
    icon: Bot,
  },
  {
    name: 'RAG',
    category: 'AI & GenAI',
    subcategory: 'Retrieval Augmentation',
    icon: Search,
  },
  {
    name: 'Embeddings',
    category: 'AI & GenAI',
    subcategory: 'Semantic Representation',
    icon: Layers3,
  },
  {
    name: 'LangChain',
    category: 'AI & GenAI',
    subcategory: 'AI Framework',
    icon: Link,
  },
  {
    name: 'Vector Databases',
    category: 'AI & GenAI',
    subcategory: 'Semantic Search',
    icon: Database,
  },

  // 03 — Verint
  {
    name: 'Verint',
    category: 'Verint',
    subcategory: 'Enterprise Platform',
    icon: Building2,
  },
  {
    name: 'WFM',
    category: 'Verint',
    subcategory: 'Workforce Management',
    parent: 'Verint',
    icon: Clock,
  },
  {
    name: 'OM',
    category: 'Verint',
    subcategory: 'Operations Manager',
    parent: 'Verint',
    icon: Settings,
  },
  {
    name: 'QM',
    category: 'Verint',
    subcategory: 'Quality Management',
    parent: 'Verint',
    icon: ClipboardCheck,
  },
  {
    name: 'DPA',
    category: 'Verint',
    subcategory: 'Process Analytics',
    parent: 'Verint',
    icon: BarChart3,
  },
  {
    name: 'Speech Analytics',
    category: 'Verint',
    subcategory: 'Speech Intelligence',
    parent: 'Verint',
    icon: BarChart3,
  },

  // 04 — Cloud & DevOps
  {
    name: 'AWS',
    category: 'Cloud & DevOps',
    subcategory: 'Cloud Infrastructure',
    icon: Cloud,
  },
  {
    name: 'CI/CD',
    category: 'Cloud & DevOps',
    subcategory: 'DevOps',
    icon: GitBranch,
  },
  {
    name: 'GitHub Actions',
    category: 'Cloud & DevOps',
    subcategory: 'Automation',
    icon: GitBranch,
  },
  {
    name: 'Docker',
    category: 'Cloud & DevOps',
    subcategory: 'Containers',
    icon: Box,
  },
  {
    name: 'Kubernetes',
    category: 'Cloud & DevOps',
    subcategory: 'Orchestration',
    icon: Box,
  },
  {
    name: 'Jenkins',
    category: 'Cloud & DevOps',
    subcategory: 'CI/CD Automation',
    icon: Settings,
  },

  // 05 — Databases
  {
    name: 'SQL',
    category: 'Databases',
    subcategory: 'Relational Database',
    icon: Database,
  },
  {
    name: 'PostgreSQL',
    category: 'Databases',
    subcategory: 'Relational Database',
    icon: Database,
  },
  {
    name: 'MongoDB',
    category: 'Databases',
    subcategory: 'NoSQL Database',
    icon: Database,
  },
  {
    name: 'DynamoDB',
    category: 'Databases',
    subcategory: 'AWS NoSQL',
    icon: Database,
  },

  // 06 — Backend
  {
    name: 'FastAPI',
    category: 'Backend',
    subcategory: 'Python Framework',
    icon: Server,
  },
  {
    name: 'RESTful APIs',
    category: 'Backend',
    subcategory: 'API Architecture',
    icon: Globe,
  },

  // 07 — Frontend
  {
    name: 'HTML5',
    category: 'Frontend',
    subcategory: 'Markup',
    icon: Monitor,
  },
  {
    name: 'CSS',
    category: 'Frontend',
    subcategory: 'Styling',
    icon: Palette,
  },
  {
    name: 'Tailwind CSS',
    category: 'Frontend',
    subcategory: 'UI Framework',
    icon: Palette,
  },
  {
    name: 'JavaScript',
    category: 'Frontend',
    subcategory: 'Programming Language',
    icon: Code2,
  },
  {
    name: 'TypeScript',
    category: 'Frontend',
    subcategory: 'Typed JavaScript',
    icon: FileCode,
  },
  {
    name: 'React.js',
    category: 'Frontend',
    subcategory: 'UI Library',
    icon: Monitor,
  },

  // 08 — Tools & Technologies
  {
    name: 'Git',
    category: 'Tools & Technologies',
    subcategory: 'Version Control',
    icon: GitBranch,
  },
  {
    name: 'GitHub',
    category: 'Tools & Technologies',
    subcategory: 'Code Collaboration',
    icon: Code2,
  },
  {
    name: 'Postman',
    category: 'Tools & Technologies',
    subcategory: 'API Testing',
    icon: Send,
  },
  {
    name: 'Jira',
    category: 'Tools & Technologies',
    subcategory: 'Project Management',
    icon: Settings,
  },
  {
    name: 'Bruno',
    category: 'Tools & Technologies',
    subcategory: 'API Testing',
    icon: Send,
  },
]

export default skills