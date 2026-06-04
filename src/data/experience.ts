export interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  location: string;
  modality: string;
  description: string[];
  tags: string[];
}

export const experience: ExperienceItem[] = [
  {
    company: 'Softtek',
    role: 'Desarrollador Python / Integración de Datos',
    period: 'Sep 2024 – Presente',
    location: 'Almería, España',
    modality: 'Remoto',
    description: [
      'Desarrollo de procesos de integración y ETL en Python para consolidar y transformar datos hacia bases analíticas y cuadros de mando.',
      'Diseño y modelado de bases de datos en PostgreSQL: esquemas en estrella, tablas de hechos y dimensiones.',
      'Optimización de consultas SQL y lógica procedimental en PL/pgSQL.',
      'Construcción de un Data Warehouse integrando múltiples fuentes de datos heterogéneas.',
      'Trabajo con Jenkins, Git/GitLab y Jira en metodología ágil.',
      'Mentoría técnica a compañeros durante 3 meses.',
    ],
    tags: ['Python', 'PostgreSQL', 'PL/pgSQL', 'ETL', 'Data Warehouse', 'Jenkins', 'GitLab', 'Jira'],
  },
  {
    company: 'Autónomo / Freelance',
    role: 'Desarrollador Back-End Java',
    period: 'Oct 2021 – Sep 2024',
    location: 'Málaga, España',
    modality: 'Remoto',
    description: [
      'Diseño y desarrollo de aplicaciones web y APIs REST con Spring Boot.',
      'Implementación de seguridad con Spring Security y persistencia con Spring Data / Hibernate.',
      'Desarrollo de sistemas internos y back-ends para tiendas locales y pequeños negocios.',
      'Trabajo con MySQL, PostgreSQL y MongoDB.',
      'Documentación de APIs con Swagger/OpenAPI.',
      'Integración con front-ends en React.js y Angular según necesidades del proyecto.',
    ],
    tags: ['Java', 'Spring Boot', 'Spring Security', 'Spring Data', 'Hibernate', 'PostgreSQL', 'MySQL', 'MongoDB', 'Swagger'],
  },
];
