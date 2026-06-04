export interface PortfolioProject {
  name: string;
  description: string;
  repositoryUrl: string;
  demoUrl?: string;
  technologies: string[];
  highlights: string[];
  status: 'completed' | 'in-progress';
  featured: boolean;
}

export const projects: PortfolioProject[] = [
  {
    name: 'PulseCheck',
    description:
      'Plataforma de monitorización de uptime y gestión de incidentes. Registra servicios a vigilar, programa comprobaciones automáticas y notifica a través de múltiples canales cuando un servicio cae o se recupera.',
    repositoryUrl: 'https://github.com/PacoMatias89/pulsecheck',
    technologies: ['Java 21', 'Spring Boot 3.2', 'PostgreSQL 16', 'Spring Security', 'JWT', 'Flyway', 'Docker', 'Swagger/OpenAPI'],
    highlights: [
      'Scheduler propio que comprueba el estado de los servicios cada 30 segundos',
      'Notificaciones multi-canal: email, Slack, Discord, Telegram y webhooks',
      'Gestión completa del ciclo de vida de incidentes',
      'Migraciones con Flyway y despliegue con Docker Compose',
    ],
    status: 'in-progress',
    featured: true,
  },
  {
    name: 'RootCause',
    description:
      'API REST para análisis automático de mensajes de error y stack traces. Aplica reglas de clasificación y devuelve un diagnóstico estructurado con categoría, severidad, causa probable y recomendaciones.',
    repositoryUrl: 'https://github.com/PacoMatias89/rootcause',
    technologies: ['Java 21', 'Spring Boot', 'PostgreSQL', 'Spring Data JPA', 'Flyway', 'JUnit 5', 'Mockito', 'Docker'],
    highlights: [
      'Motor de análisis basado en reglas con puntuación de confianza por resultado',
      'Persistencia de análisis en PostgreSQL con migraciones Flyway',
      'Validación de entrada con restricciones configurables (hasta 20.000 caracteres)',
      'Tests unitarios con JUnit 5 y Mockito',
    ],
    status: 'completed',
    featured: true,
  },
  {
    name: 'StockFlow API',
    description:
      'API REST de gestión de inventario y almacenes para entornos empresariales. Aplica Domain-Driven Design con módulos independientes para productos, almacenes, stock, clientes y pedidos.',
    repositoryUrl: 'https://github.com/PacoMatias89/stockflow_api',
    technologies: ['Java', 'Spring Boot', 'PostgreSQL 17', 'Spring Security', 'JWT', 'Flyway', 'MapStruct', 'Testcontainers', 'Docker'],
    highlights: [
      'Optimistic Locking para control de concurrencia en operaciones de stock',
      'Auditoría automática de creación y modificación en todas las entidades',
      'Tests de integración con Testcontainers (base de datos real en tests)',
      'Arquitectura modular DDD separada por agregados de dominio',
    ],
    status: 'in-progress',
    featured: true,
  },
  {
    name: 'Agencia de Viajes',
    description:
      'Backend para una agencia de viajes con módulos de hoteles, vuelos y reservas. Implementa autenticación, operaciones CRUD completas, borrado lógico y cálculo dinámico de precios según tipo de habitación o asiento.',
    repositoryUrl: 'https://github.com/PacoMatias89/agencia_viajes',
    technologies: ['Java', 'Spring Boot', 'Maven', 'Spring Security'],
    highlights: [
      'Borrado lógico (soft-delete) con marcas de tiempo en todas las entidades',
      'Cálculo automático del precio total según noches y tipo de habitación',
      'Colección Postman y esquema SQL documentados en el repositorio',
    ],
    status: 'completed',
    featured: false,
  },
];
