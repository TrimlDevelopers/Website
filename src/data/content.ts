export const company = {
  name: 'TriML Technologies',
  tagline: 'Intelligent Software. Automated Operations.',
  heroBadge: 'AI • AUTOMATION • INNOVATION',
  heroTitle: 'Transforming Businesses Through Intelligent',
  heroTitleAccent: 'Technology',
  heroSubtitle:
    'We build custom software, AI solutions, microservices and automation systems that help organizations streamline operations, reduce downtime and drive growth.',
  positioning:
    'We help businesses automate operations, reduce manual work, and improve efficiency through custom software, AI solutions, microservices, and cloud-native applications.',
  email: 'info@trimltechnologies.com',
  phone: '+91 98765 43210',
  website: 'www.trimltechnologies.com',
  location: 'Pune, Maharashtra, India',
}

export const socialLinks = [
  { label: 'LinkedIn', href: 'https://linkedin.com' },
  { label: 'Twitter', href: 'https://twitter.com' },
  { label: 'GitHub', href: 'https://github.com' },
  { label: 'YouTube', href: 'https://youtube.com' },
]

export const footerLinks = {
  legal: [
    { label: 'Privacy Policy', href: '#' },
    { label: 'Terms & Conditions', href: '#' },
  ],
}

export const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'Solutions', href: '/products' },
  { label: 'Industries', href: '/industries' },
  { label: 'About Us', href: '/#about' },
  { label: 'Contact', href: '/#contact' },
]

export const heroFeatures = [
  { label: 'AI-Powered Solutions', icon: 'brain' },
  { label: 'Scalable Architecture', icon: 'layers' },
  { label: 'Cloud Native', icon: 'cloud' },
]

export const services = [
  {
    id: 'custom-software',
    title: 'Custom Software Development',
    shortDescription: 'Enterprise-grade applications tailored to your business needs.',
    description:
      'We design and develop tailored software applications that solve unique business challenges. Our solutions are scalable, secure, and built according to client requirements.',
    icon: 'code',
    highlights: ['Scalable architecture', 'Secure by design', 'Agile delivery', 'Long-term support'],
  },
  {
    id: 'website-development',
    title: 'Website Development',
    shortDescription: 'Modern, responsive websites that deliver exceptional experiences.',
    description:
      'We create professional, responsive, and SEO-friendly websites that help businesses establish a strong digital presence and generate leads.',
    icon: 'globe',
    highlights: ['Responsive design', 'SEO optimized', 'Fast performance', 'CMS integration'],
  },
  {
    id: 'microservices',
    title: 'Microservices Development',
    shortDescription: 'Scalable APIs and cloud-native architecture for performance.',
    description:
      'We build modular and scalable microservices architectures using modern technologies. This approach improves maintainability, flexibility, and system performance.',
    icon: 'boxes',
    highlights: ['API-first design', 'Cloud-native', 'Independent scaling', 'Fault tolerance'],
  },
  {
    id: 'ai-solutions',
    title: 'AI Solutions',
    shortDescription: 'Smart AI systems, chatbots, and computer vision applications.',
    description:
      'Our AI services include chatbots, intelligent assistants, predictive analytics, computer vision applications, and automation systems that improve business efficiency.',
    icon: 'brain',
    highlights: ['Chatbots & assistants', 'Computer vision', 'Predictive analytics', 'Process automation'],
  },
  {
    id: 'business-automation',
    title: 'Business Automation',
    shortDescription: 'Automate workflows and processes to improve efficiency.',
    description:
      'We automate repetitive processes such as reporting, approvals, notifications, CRM workflows, and customer interactions to save time and reduce operational costs.',
    icon: 'workflow',
    highlights: ['Workflow automation', 'CRM integration', 'Report generation', 'Approval pipelines'],
  },
  {
    id: 'data-analytics',
    title: 'Data & Analytics',
    shortDescription: 'Transform your data into actionable insights and business value.',
    description:
      'We help businesses collect, analyze, and visualize data through dashboards, predictive models, and reporting systems that drive smarter decisions.',
    icon: 'chart',
    highlights: ['Live dashboards', 'Predictive models', 'Data pipelines', 'Business intelligence'],
  },
]

export const products = [
  {
    id: 'cmms',
    title: 'TriMaint CMMS',
    subtitle: 'Computerized Maintenance Management System',
    description:
      'Manage assets, work orders, preventive maintenance schedules, spare parts inventory, and maintenance analytics from one platform.',
    features: [
      'Asset & equipment tracking',
      'Work order management',
      'Preventive maintenance scheduling',
      'Spare parts inventory',
      'Maintenance analytics dashboards',
    ],
    icon: 'wrench',
    featured: true,
    tech: ['React', 'Spring Boot', 'PostgreSQL'],
  },
  {
    id: 'ai-vision',
    title: 'AI Vision Analytics',
    subtitle: 'Computer Vision Monitoring Platform',
    description:
      'AI-powered monitoring using computer vision to analyze production lines, monitor safety compliance, and detect defects in real time.',
    features: [
      'Production line monitoring',
      'Safety compliance detection',
      'Defect identification',
      'Real-time alerts',
      'Actionable analytics',
    ],
    icon: 'eye',
    featured: false,
    tech: ['Python', 'AI/ML', 'OpenCV'],
  },
  {
    id: 'automation-suite',
    title: 'Business Automation Suite',
    subtitle: 'Cross-Department Workflow Platform',
    description:
      'Automate workflows, reporting, approvals, notifications, and operational tasks across multiple business departments.',
    features: [
      'Workflow automation',
      'Automated reporting',
      'Approval pipelines',
      'Multi-department integration',
      'Notification systems',
    ],
    icon: 'zap',
    featured: false,
    tech: ['React', 'FastAPI', 'MongoDB'],
  },
]

export const projects = [
  {
    id: 'trimaint',
    title: 'TriMaint CMMS',
    description: 'Maintenance management system for manufacturing operations.',
    tech: ['React', 'Spring Boot', 'PostgreSQL'],
    color: 'from-blue-600 to-blue-800',
  },
  {
    id: 'ai-vision',
    title: 'AI Vision Analytics',
    description: 'Production monitoring with computer vision and deep learning.',
    tech: ['Python', 'AI/ML', 'OpenCV'],
    color: 'from-indigo-600 to-purple-800',
  },
  {
    id: 'dashboard',
    title: 'Business Dashboard',
    description: 'Analytics and reporting platform for operational insights.',
    tech: ['React', 'FastAPI', 'MongoDB'],
    color: 'from-cyan-600 to-blue-700',
  },
  {
    id: 'helpdesk',
    title: 'Helpdesk System',
    description: 'Ticket management and customer support automation platform.',
    tech: ['React', 'Node.js', 'MySQL'],
    color: 'from-slate-600 to-slate-800',
  },
]

export const industries = [
  {
    id: 'manufacturing',
    title: 'Manufacturing',
    shortDescription: 'Reduce downtime and optimize production with smart maintenance systems.',
    description:
      'Manufacturing companies require software solutions to manage production, maintenance, quality control, inventory, and workforce efficiency. TriML helps manufacturers reduce downtime and automate operations.',
    icon: 'factory',
    image: 'https://images.unsplash.com/photo-1565043666747-69fbe6ad340f?w=800&q=80',
  },
  {
    id: 'logistics',
    title: 'Logistics & Supply Chain',
    shortDescription: 'Real-time visibility into shipments, fleets, and warehouse workflows.',
    description:
      'Logistics businesses need real-time visibility into shipments, warehouses, vehicle tracking, and operational workflows. We provide dashboards, tracking systems, and automation tools.',
    icon: 'truck',
    image: 'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=800&q=80',
  },
  {
    id: 'warehousing',
    title: 'Warehousing',
    shortDescription: 'Inventory management, barcode systems, and intelligent reporting.',
    description:
      'Warehouses require inventory management, stock monitoring, barcode systems, and reporting solutions. Our software helps optimize storage and improve inventory accuracy.',
    icon: 'warehouse',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80',
  },
  {
    id: 'healthcare',
    title: 'Healthcare',
    shortDescription: 'Secure patient management, scheduling, and AI-powered support.',
    description:
      'Healthcare organizations need patient management systems, appointment scheduling, reporting dashboards, and AI-powered support solutions built for security and scale.',
    icon: 'heart',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80',
  },
  {
    id: 'education',
    title: 'Education',
    shortDescription: 'Student portals, LMS platforms, and administrative automation.',
    description:
      'Educational institutions require student portals, attendance systems, learning management systems, and analytics dashboards to streamline administrative processes.',
    icon: 'graduation',
    image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800&q=80',
  },
  {
    id: 'retail',
    title: 'Retail & eCommerce',
    shortDescription: 'Inventory, sales analytics, and customer engagement platforms.',
    description:
      'Retail businesses benefit from inventory management, sales analytics, customer engagement systems, and e-commerce platforms that improve customer experience.',
    icon: 'shopping',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80',
  },
  {
    id: 'startups',
    title: 'Startups',
    shortDescription: 'MVPs, cloud-native apps, and automation for rapid scaling.',
    description:
      'Startups often need scalable web applications, MVP development, cloud-native architectures, and automation solutions. We help startups launch quickly and scale efficiently.',
    icon: 'rocket',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80',
  },
  {
    id: 'finance',
    title: 'Finance',
    shortDescription: 'Secure, compliant software for reporting and automation.',
    description:
      'Financial organizations need secure, compliant software for reporting, automation, and data analytics while maintaining regulatory standards.',
    icon: 'chart',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
  },
]

export const whyTriML = [
  {
    title: 'Experienced Team',
    description: 'Seasoned engineers dedicated to your success',
    icon: 'users',
  },
  {
    title: 'Modern Technologies',
    description: 'Latest frameworks, cloud, and AI tooling',
    icon: 'sparkles',
  },
  {
    title: 'Scalable Solutions',
    description: 'Architecture that grows with your business',
    icon: 'trending',
  },
  {
    title: 'On-Time Delivery',
    description: 'Agile sprints with clear milestones',
    icon: 'clock',
  },
  {
    title: '24/7 Support',
    description: 'Always-on assistance when you need it',
    icon: 'headphones',
  },
  {
    title: 'Quality First Approach',
    description: 'Rigorous testing and best practices',
    icon: 'award',
  },
]

export const trustFeatures = [
  { title: 'Secure & Reliable', subtitle: 'Data Protection', icon: 'shield' },
  { title: 'Cloud Ready', subtitle: 'Scalable Infrastructure', icon: 'cloud' },
  { title: 'AI-Powered', subtitle: 'Smart Automation', icon: 'brain' },
  { title: 'High Performance', subtitle: 'Fast & Efficient', icon: 'zap' },
]

export const techStack = [
  'React',
  'Node.js',
  'Python',
  'FastAPI',
  'Java',
  'PostgreSQL',
  'Docker',
  'AWS',
]

export const processSteps = [
  {
    step: '01',
    title: 'Discovery',
    description: 'Understand your goals, challenges, and technical requirements.',
    icon: 'search',
  },
  {
    step: '02',
    title: 'Planning',
    description: 'Define architecture, roadmap, and project milestones.',
    icon: 'map',
  },
  {
    step: '03',
    title: 'Development',
    description: 'Build with agile sprints using modern frameworks.',
    icon: 'code',
  },
  {
    step: '04',
    title: 'Testing',
    description: 'QA, performance, and security validation before launch.',
    icon: 'check',
  },
  {
    step: '05',
    title: 'Deployment',
    description: 'Cloud deployment with CI/CD and monitoring setup.',
    icon: 'rocket',
  },
  {
    step: '06',
    title: 'Support',
    description: 'Ongoing maintenance, updates, and dedicated support.',
    icon: 'headphones',
  },
]
