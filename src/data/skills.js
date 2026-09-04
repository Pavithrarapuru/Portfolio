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
  // Languages & Core
  { name: 'Python', category: 'Languages & Core', subcategory: 'Core Language', icon: Terminal },
  { name: 'OOPs', category: 'Languages & Core', subcategory: 'Object Oriented', icon: Code2 },
  { name: 'DSA', category: 'Languages & Core', subcategory: 'Problem Solving', icon: Code2 },
  { name: 'Low Level Design', category: 'Languages & Core', subcategory: 'System Design', icon: Layers3 },
  { name: 'High Level Design', category: 'Languages & Core', subcategory: 'System Design', icon: Layers3 },

  // Frontend
  { name: 'HTML5', category: 'Frontend', icon: Monitor },
  { name: 'Tailwind CSS', category: 'Frontend', icon: Palette },
  { name: 'JavaScript', category: 'Frontend', icon: Code2 },
  { name: 'TypeScript', category: 'Frontend', icon: FileCode },
  { name: 'React.js', category: 'Frontend', icon: Monitor },

  // Backend
  { name: 'Python', category: 'Backend', subcategory: 'Backend Dev', icon: Terminal },
  { name: 'FastAPI', category: 'Backend', subcategory: 'Framework', icon: Server },
  { name: 'RESTful APIs', category: 'Backend', subcategory: 'API Design', icon: Globe },

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

  // Cloud & DevOps
  { name: 'AWS', category: 'Cloud & DevOps', subcategory: 'Cloud', icon: Cloud },
  { name: 'CI/CD', category: 'Cloud & DevOps', subcategory: 'DevOps', icon: GitBranch },
  { name: 'Github Actions', category: 'Cloud & DevOps', subcategory: 'Automation', icon: GitBranch },
  { name: 'Docker', category: 'Cloud & DevOps', subcategory: 'Containers', icon: Box },
  { name: 'Kubernetes', category: 'Cloud & DevOps', subcategory: 'Orchestration', icon: Box },
  { name: 'Jenkins', category: 'Cloud & DevOps', subcategory: 'Automation', icon: Settings },

  // Enterprise Technologies
  { name: 'Verint', category: 'Enterprise Technologies', subcategory: 'Platform', icon: Building2 },
  { name: 'WFM', category: 'Enterprise Technologies', parent: 'Verint', subcategory: 'Verint Module', icon: Clock },
  { name: 'OM', category: 'Enterprise Technologies', parent: 'Verint', subcategory: 'Verint Module', icon: Settings },
  { name: 'QM', category: 'Enterprise Technologies', parent: 'Verint', subcategory: 'Verint Module', icon: ClipboardCheck },
  { name: 'DPA', category: 'Enterprise Technologies', parent: 'Verint', subcategory: 'Verint Module', icon: BarChart3 },
  { name: 'Speech Analytics', category: 'Enterprise Technologies', parent: 'Verint', subcategory: 'Verint Module', icon: BarChart3 },

  // Tools & Technologies
  { name: 'Git', category: 'Tools & Technologies', icon: GitBranch },
  { name: 'GitHub', category: 'Tools & Technologies', icon: Code2 },
  { name: 'Postman', category: 'Tools & Technologies', icon: Send },
  { name: 'Jira', category: 'Tools & Technologies', icon: Settings },
  { name: 'Bruno', category: 'Tools & Technologies', icon: Send },
]

export default skills