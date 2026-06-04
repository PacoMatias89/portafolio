export interface EducationItem {
  title: string;
  institution: string;
  period: string;
  description: string;
}

export const education: EducationItem[] = [
  {
    title: 'DAM — Desarrollo de Aplicaciones Multiplataforma',
    institution: 'IES Portada Alta',
    period: '2021 – 2024',
    description: 'Formación técnica en desarrollo de software, bases de datos, programación orientada a objetos y despliegue de aplicaciones.',
  },
  {
    title: 'Bootcamp Desarrollo Back-End con Java & Spring Boot',
    institution: 'Hack a Boss',
    period: '2023 – 2024',
    description: 'Formación intensiva en desarrollo back-end con Java, Spring Boot, APIs REST, seguridad y buenas prácticas de desarrollo.',
  },
];
