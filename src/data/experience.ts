export interface ExperienceItem {
  role: string;
  company: string;
  location: string;
  duration: string;
  logo: string;
  bullets: string[];
  technologies: Array<'SQL' | 'Python' | 'PostgreSQL' | 'Power BI' | 'Tableau' | 'Microsoft Excel' | 'dbt' | 'Git' | 'GitHub'>;
}

export const experienceItems: ExperienceItem[] = [
  {
    role: 'AI Data Analytics Intern',
    company: 'InAmigos Foundation',
    location: 'Remote',
    duration: 'Jul 2026 – Present',
    logo: '/images/inamigos-logo.jpg',
    bullets: [
      'Built automated ETL pipelines and data workflows to clean, transform, and aggregate raw operational datasets.',
      'Designed interactive dashboards and executive KPI views to track organizational metrics and drive data-backed strategy.',
      'Partnered with stakeholders to establish standard data definitions, validation checks, and structured reporting frameworks.',
    ],
    technologies: ['SQL', 'Python', 'Power BI', 'Microsoft Excel'],
  },
  {
    role: 'Data Analytics & Visualization Intern',
    company: 'Design Esthetics',
    location: 'Remote',
    duration: 'Jan 2026 – Jun 2026',
    logo: '/images/design-esthetics-logo.png',
    bullets: [
      'Modeled dimensional star-schema data structures enabling self-service reporting and exploratory data analysis.',
      'Developed interactive Tableau visual dashboards to monitor user engagement metrics, conversion funnels, and retention trends.',
      'Optimized SQL queries and automated data transformation models using dbt and Git version control workflows.',
    ],
    technologies: ['PostgreSQL', 'Tableau', 'dbt', 'Git'],
  },
];
