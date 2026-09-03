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
  Zap,
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
  // Core Language & Problem Solving
{ name: 'Python', category: 'Core Language', icon: Terminal },
{ name: 'OOPs', category: 'Core Language', icon: Code2 },
{ name: 'DSA', category: 'Problem Solving with Python', icon: Code2 },
{ name: 'LLD', category: 'System Design', icon: Layers3 },
{ name: 'HLD', category: 'System Design', icon: Layers3 },

// Enterprise Technologies

{ 
  name: 'Verint',
  category: 'Enterprise Technologies',
  icon: Building2,
},

{ 
  name: 'WFM',
  category: 'Verint Modules',
  parent: 'Verint',
  icon: Clock,
},

{ 
  name: 'OM',
  category: 'Verint Modules',
  parent: 'Verint',
  icon: Settings,
},

{ 
  name: 'QM',
  category: 'Verint Modules',
  parent: 'Verint',
  icon: ClipboardCheck,
},

{ 
  name: 'DPA',
  category: 'Verint Modules',
  parent: 'Verint',
  icon: BarChart3,
},

{ 
  name: 'Speech Analytics',
  category: 'Verint Modules',
  parent: 'Verint',
  icon: BarChart3,
},

  // Frontend
  { name: 'HTML5', category: 'Frontend', icon: Monitor },
  { name: 'Tailwind CSS', category: 'Frontend', icon: Palette },
  { name: 'JavaScript', category: 'Frontend', icon: Code2 },
  { name: 'TypeScript', category: 'Frontend', icon: FileCode },
  { name: 'React.js', category: 'Frontend', icon: Monitor },

  // Backend
  { name: 'Python', category: 'Backend Development', icon: Terminal },
{ name: 'FastAPI', category: 'Backend Development', icon: Server },
{ name: 'RESTful APIs', category: 'Backend Development', icon: Globe },

  // AI & GenAI
  { name: 'Generative AI', category: 'AI & GenAI', icon: Brain },
  { name: 'LLMs', category: 'AI & GenAI', icon: Bot },
  { name: 'RAG', category: 'AI & GenAI', icon: Search },
  { name: 'LangChain', category: 'AI & GenAI', icon: Link },
  { name: 'Embeddings', category: 'AI & GenAI', icon: Layers3 },
  { name: 'Vector Databases', category: 'AI & GenAI', icon: Database },

  // Databases
  { name: 'SQL', category: 'Databases', icon: Database },
  { name: 'PostgreSQL', category: 'Databases', icon: Database },
  { name: 'MongoDB', category: 'Databases', icon: Database },
  { name: 'DynamoDB', category: 'Databases', icon: Database },

  // Cloud
  { name: 'AWS', category: 'Cloud & Services', icon: Cloud },
  { name: 'Amazon Lex', category: 'Cloud & Services', icon: Bot },
  { name: 'AWS Lambda', category: 'Cloud & Services', icon: Zap },

  // DevOps
  { name: 'CI/CD', category: 'DevOps', icon: GitBranch },
  { name: 'Docker', category: 'DevOps', icon: Box },
  { name: 'Kubernetes', category: 'DevOps', icon: Box },
  { name: 'Jenkins', category: 'DevOps', icon: Settings },

  // Enterprise
  
  // Tools
  { name: 'Git', category: 'Development Tools', icon: GitBranch },
  { name: 'GitHub', category: 'Development Tools', icon: Code2 },
  { name: 'Postman', category: 'Development Tools', icon: Send },
]

export default skills