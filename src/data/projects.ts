export type Project = {
  name: string;
  summary: string;
  description: string;
  image: string;
  technologies: string[];
  metrics: string[];
  github?: string;
  demo?: string;
  caseStudy?: string;
};

export const projects: Project[] = [
  {
    name: 'Customer Intelligence Platform',
    summary: 'Unified customer analytics with warehouse modeling and executive reporting.',
    description:
      'Delivered a scalable reporting foundation that connected product, finance, and growth teams around a shared set of customer metrics.',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=900&q=80',
    technologies: ['SQL', 'Python', 'PostgreSQL', 'Power BI', 'dbt'],
    metrics: ['100K+ Records', 'Customer Analytics', 'ETL Pipeline', 'Power BI Dashboard'],
    github: 'https://github.com',
    demo: 'https://example.com',
    caseStudy: 'https://example.com',
  },
  {
    name: 'Revenue Operations Dashboard',
    summary: 'A premium BI experience for pipeline and revenue monitoring.',
    description:
      'Built a modern reporting layer that helped leadership track weekly trends, funnel performance, and expansion opportunities without relying on manual exports.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=900&q=80',
    technologies: ['SQL', 'PostgreSQL', 'Power BI', 'React', 'TypeScript'],
    metrics: ['Data Warehouse', 'Revenue Insights', 'Weekly Reporting', 'Executive KPI'],
    github: 'https://github.com',
    demo: 'https://example.com',
  },
];
