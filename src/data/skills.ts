export interface Technology {
  name: string;
  iconKey: 'sql' | 'python' | 'postgresql' | 'powerbi' | 'tableau' | 'excel' | 'dbt' | 'git' | 'github';
  detail?: string;
  glow: string;
}

export const technologies: Technology[] = [
  {
    name: 'SQL',
    iconKey: 'sql',
    glow: 'rgba(58, 138, 255, 0.45)',
  },
  {
    name: 'Python',
    iconKey: 'python',
    detail: '(Pandas, NumPy)',
    glow: 'rgba(255, 212, 59, 0.45)',
  },
  {
    name: 'PostgreSQL',
    iconKey: 'postgresql',
    glow: 'rgba(51, 103, 145, 0.48)',
  },
  {
    name: 'Power BI',
    iconKey: 'powerbi',
    detail: '(DAX)',
    glow: 'rgba(242, 200, 17, 0.45)',
  },
  {
    name: 'Tableau',
    iconKey: 'tableau',
    glow: 'rgba(78, 121, 167, 0.45)',
  },
  {
    name: 'Microsoft Excel',
    iconKey: 'excel',
    glow: 'rgba(33, 163, 102, 0.45)',
  },
  {
    name: 'dbt',
    iconKey: 'dbt',
    glow: 'rgba(255, 105, 63, 0.45)',
  },
  {
    name: 'Git',
    iconKey: 'git',
    glow: 'rgba(240, 80, 51, 0.45)',
  },
  {
    name: 'GitHub',
    iconKey: 'github',
    glow: 'rgba(255, 255, 255, 0.35)',
  },
];

export const analyticsExpertise = [
  'ETL',
  'Data Modeling',
  'Data Warehousing',
  'Star Schema',
  'Dashboard Development',
  'KPI Reporting',
  'Exploratory Data Analysis (EDA)',
  'Data Pipelines',
  'Data Cleaning',
];
