export interface TechCategory {
  label: string;
  items: string[];
}

export const techStack: TechCategory[] = [
  {
    label: 'Lenguajes',
    items: ['Java', 'Python', 'SQL', 'TypeScript'],
  },
  {
    label: 'Java / Spring',
    items: ['Spring Boot', 'Spring Data', 'Spring Security', 'Hibernate'],
  },
  {
    label: 'Python',
    items: ['Pandas', 'SQLAlchemy', 'ETL pipelines'],
  },
  {
    label: 'Bases de datos',
    items: ['PostgreSQL', 'MySQL', 'MongoDB', 'PL/pgSQL', 'Data Warehouse'],
  },
  {
    label: 'DevOps / Herramientas',
    items: ['Git', 'GitLab', 'Docker', 'Jenkins', 'Jira', 'Swagger/OpenAPI'],
  },
  {
    label: 'En aprendizaje activo',
    items: ['Kafka', 'Kubernetes'],
  },
];
