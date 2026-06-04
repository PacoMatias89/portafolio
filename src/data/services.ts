export interface ServiceItem {
  title: string;
  description: string;
}

export const services: ServiceItem[] = [
  {
    title: 'Desarrollo de APIs REST',
    description: 'Diseño e implementación de APIs RESTful con Java y Spring Boot. Documentación con Swagger/OpenAPI y seguridad con Spring Security.',
  },
  {
    title: 'Integración de datos y ETL',
    description: 'Construcción de pipelines ETL en Python para consolidar, transformar y cargar datos desde múltiples fuentes hacia sistemas analíticos.',
  },
  {
    title: 'Modelado de bases de datos',
    description: 'Diseño de modelos de datos relacionales en PostgreSQL y MySQL. Esquemas optimizados, índices y lógica procedimental en PL/pgSQL.',
  },
  {
    title: 'Data Warehouse',
    description: 'Diseño e implementación de Data Warehouses con esquemas en estrella y copos de nieve. Integración de fuentes heterogéneas.',
  },
  {
    title: 'Back-end para aplicaciones web',
    description: 'Desarrollo del lado servidor para aplicaciones web: lógica de negocio, autenticación, gestión de datos y exposición de APIs.',
  },
  {
    title: 'Auditoría y optimización SQL',
    description: 'Revisión y optimización de consultas SQL lentas, refactorización de lógica en base de datos y análisis de rendimiento.',
  },
];
