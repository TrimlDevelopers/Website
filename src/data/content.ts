export const company = {
  name: 'TriML Technologies',
  tagline: 'Intelligent Software. Automated Operations.',
  positioning:
    'We help businesses automate operations, reduce manual work, and improve efficiency through custom software, AI solutions, microservices, and cloud-native applications.',
  email: 'hello@triml.tech',
  phone: '+1 (555) 123-4567',
}

export const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'Products', href: '/products' },
  { label: 'Industries', href: '/industries' },
]

export const services = [
  {
    id: 'custom-software',
    title: 'Custom Software Development',
    shortDescription:
      'Tailored applications built to solve unique business challenges at scale.',
    description:
      'We design and develop tailored software applications that solve unique business challenges. Our solutions are scalable, secure, and built according to client requirements.',
    icon: 'code',
  },
  {
    id: 'website-development',
    title: 'Website Development',
    shortDescription:
      'Professional, responsive, and SEO-friendly websites that generate leads.',
    description:
      'We create professional, responsive, and SEO-friendly websites that help businesses establish a strong digital presence and generate leads.',
    icon: 'globe',
  },
  {
    id: 'microservices',
    title: 'Microservices Development',
    shortDescription:
      'Modular architectures for maintainability, flexibility, and performance.',
    description:
      'We build modular and scalable microservices architectures using modern technologies. This approach improves maintainability, flexibility, and system performance.',
    icon: 'boxes',
  },
  {
    id: 'ai-solutions',
    title: 'AI Solutions',
    shortDescription:
      'Chatbots, predictive analytics, computer vision, and intelligent automation.',
    description:
      'Our AI services include chatbots, intelligent assistants, predictive analytics, computer vision applications, and automation systems that improve business efficiency.',
    icon: 'brain',
  },
  {
    id: 'business-automation',
    title: 'Business Automation',
    shortDescription:
      'Automate reporting, approvals, CRM workflows, and customer interactions.',
    description:
      'We automate repetitive processes such as reporting, approvals, notifications, CRM workflows, and customer interactions to save time and reduce operational costs.',
    icon: 'workflow',
  },
  {
    id: 'cloud-devops',
    title: 'Cloud & DevOps',
    shortDescription:
      'Deploy, manage, and scale with Docker, CI/CD, and cloud infrastructure.',
    description:
      'We help businesses deploy, manage, and scale applications using modern cloud infrastructure, Docker containers, and CI/CD pipelines.',
    icon: 'cloud',
  },
]

export const products = [
  {
    id: 'cmms',
    title: 'CMMS',
    subtitle: 'Computerized Maintenance Management System',
    description:
      'A Computerized Maintenance Management System that helps organizations manage assets, work orders, preventive maintenance schedules, spare parts inventory, and maintenance analytics.',
    features: [
      'Asset & equipment tracking',
      'Work order management',
      'Preventive maintenance scheduling',
      'Spare parts inventory',
      'Maintenance analytics dashboards',
    ],
    icon: 'wrench',
    featured: true,
  },
  {
    id: 'ai-vision',
    title: 'AI Vision Analytics',
    subtitle: 'Computer Vision Monitoring Platform',
    description:
      'An AI-powered monitoring platform that uses computer vision and deep learning to analyze production lines, monitor safety compliance, detect defects, and generate actionable insights.',
    features: [
      'Production line monitoring',
      'Safety compliance detection',
      'Defect identification',
      'Real-time alerts',
      'Actionable analytics',
    ],
    icon: 'eye',
    featured: false,
  },
  {
    id: 'automation-suite',
    title: 'Business Automation Suite',
    subtitle: 'Cross-Department Workflow Platform',
    description:
      'A platform that automates workflows, reporting, approvals, notifications, and operational tasks across multiple business departments.',
    features: [
      'Workflow automation',
      'Automated reporting',
      'Approval pipelines',
      'Multi-department integration',
      'Notification systems',
    ],
    icon: 'zap',
    featured: false,
  },
]

export const industries = [
  {
    id: 'manufacturing',
    title: 'Manufacturing',
    description:
      'Manufacturing companies require software solutions to manage production, maintenance, quality control, inventory, and workforce efficiency. TriML can help manufacturers reduce downtime, improve asset utilization, and automate daily operations through CMMS, dashboards, and AI-powered analytics.',
    icon: 'factory',
  },
  {
    id: 'logistics',
    title: 'Logistics',
    description:
      'Logistics businesses need real-time visibility into shipments, warehouses, vehicle tracking, and operational workflows. We can provide logistics dashboards, tracking systems, and automation tools to improve efficiency and reduce manual work.',
    icon: 'truck',
  },
  {
    id: 'warehousing',
    title: 'Warehousing',
    description:
      'Warehouses require inventory management, stock monitoring, barcode systems, and reporting solutions. Our software can help warehouse managers optimize storage, improve inventory accuracy, and monitor operations through intelligent dashboards.',
    icon: 'warehouse',
  },
  {
    id: 'healthcare',
    title: 'Healthcare',
    description:
      'Healthcare organizations need patient management systems, appointment scheduling, reporting dashboards, and AI-powered support solutions. We can build secure and scalable healthcare applications that improve operational efficiency.',
    icon: 'heart',
  },
  {
    id: 'education',
    title: 'Education',
    description:
      'Educational institutions require student portals, attendance systems, learning management systems, and analytics dashboards. Our solutions help streamline administrative processes and improve communication.',
    icon: 'graduation',
  },
  {
    id: 'retail',
    title: 'Retail',
    description:
      'Retail businesses benefit from inventory management, sales analytics, customer engagement systems, and e-commerce platforms. We can help retailers improve customer experience and business performance.',
    icon: 'shopping',
  },
  {
    id: 'startups',
    title: 'Startups',
    description:
      'Startups often need scalable web applications, MVP development, cloud-native architectures, and automation solutions. We help startups launch quickly and scale efficiently.',
    icon: 'rocket',
  },
  {
    id: 'finance',
    title: 'Finance',
    description:
      'Financial organizations need secure, compliant software for reporting, automation, and data analytics. We build robust systems that streamline operations while maintaining security and regulatory standards.',
    icon: 'chart',
  },
]

export const problems = [
  {
    title: 'Manual, Repetitive Workflows',
    description:
      'Teams spend hours on tasks that could be automated — from data entry to report generation.',
  },
  {
    title: 'Disconnected Systems',
    description:
      'Siloed tools and spreadsheets create bottlenecks, errors, and poor visibility across departments.',
  },
  {
    title: 'Unplanned Downtime',
    description:
      'Without proactive maintenance and monitoring, equipment failures disrupt production and increase costs.',
  },
  {
    title: 'Limited Data Insights',
    description:
      'Businesses collect data but lack the tools to turn it into actionable intelligence and predictions.',
  },
  {
    title: 'Scaling Challenges',
    description:
      'Legacy monoliths and manual processes struggle to keep up as your business grows.',
  },
  {
    title: 'Slow Digital Transformation',
    description:
      'Outdated websites and internal tools hold back customer engagement and operational efficiency.',
  },
]

export const techStack = {
  frontend: ['React', 'TypeScript', 'Tailwind CSS', 'PHP'],
  backend: ['FastAPI', 'Spring Boot', 'Node.js'],
  database: ['PostgreSQL', 'MongoDB', 'MySQL'],
  cloud: ['Docker', 'AWS', 'Render', 'Vercel'],
  ai: ['OpenAI', 'Computer Vision', 'Predictive Analytics'],
}

export const processSteps = [
  {
    step: '01',
    title: 'Discovery',
    description:
      'We analyze your business goals, pain points, and technical requirements to define a clear project roadmap.',
  },
  {
    step: '02',
    title: 'Design',
    description:
      'Our team creates wireframes, architecture plans, and UX designs aligned with your brand and users.',
  },
  {
    step: '03',
    title: 'Development',
    description:
      'We build your solution using agile sprints, modern frameworks, and best practices for quality and speed.',
  },
  {
    step: '04',
    title: 'Testing',
    description:
      'Rigorous QA, performance testing, and security reviews ensure your application is production-ready.',
  },
  {
    step: '05',
    title: 'Deployment',
    description:
      'We deploy to cloud infrastructure with CI/CD pipelines, monitoring, and documentation in place.',
  },
  {
    step: '06',
    title: 'Support',
    description:
      'Ongoing maintenance, feature updates, and dedicated support keep your systems running smoothly.',
  },
]
