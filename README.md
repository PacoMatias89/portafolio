# Portafolio — Francisco Matías Molina Jurado

Portafolio IT personal como desarrollador Back-End especializado en Java, Spring Boot, Python e integración de datos.

**Web:** [franciscomolina.me](https://franciscomolina.me)

---

## Stack del proyecto

- React 19 + Vite 8
- TypeScript
- CSS Modules (sin frameworks de UI)

## Estructura

```
src/
├── data/           # Textos, experiencia, tecnologías y proyectos centralizados
├── components/     # Componentes reutilizables (TechBadge, ExperienceCard, ProjectCard...)
├── sections/       # Secciones de la página (Hero, About, Experience, Projects...)
├── layouts/        # Header y Footer
└── styles/         # Variables CSS globales
```

## Ejecución local

```bash
npm install
npm run dev       # http://localhost:5173
npm run build     # Build de producción
```

## Personalización

Todos los textos y datos están centralizados en `src/data/`:

| Archivo | Contenido |
|---|---|
| `profile.ts` | Nombre, bio, contacto, descripción personal |
| `experience.ts` | Experiencia profesional |
| `techstack.ts` | Stack tecnológico por categorías |
| `education.ts` | Formación académica |
| `projects.ts` | Proyectos del portafolio |
| `services.ts` | Áreas de servicio |

## Contacto

- **Email:** francisco.fm34@gmail.com
- **GitHub:** [PacoMatias89](https://github.com/PacoMatias89)
- **Ubicación:** Roquetas de Mar, Almería, España
