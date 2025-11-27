# Arquitectura del Proyecto

Este documento describe la estructura y organización del proyecto Tri State Awnings siguiendo las mejores prácticas de Astro.

## Estructura de Carpetas

```
src/
├── assets/             # Assets estáticos (imágenes, iconos, etc.)
│   ├── images/
│   └── icons/
├── components/          # Componentes reutilizables
│   ├── ui/             # Componentes UI básicos (Button, Logo, etc.)
│   └── sections/       # Secciones de página
│       ├── Hero.astro  # Universal (usa en todas las páginas)
│       ├── Footer.astro # Universal (usa en todas las páginas)
│       └── landing/     # Secciones específicas del landing page
│           └── Header.astro
├── config/             # Configuraciones y constantes
│   ├── colors.ts        # Configuración de colores
│   └── site.ts         # Configuración del sitio
├── layouts/            # Layouts de página
├── pages/              # Páginas del sitio (file-based routing)
└── utils/              # Utilidades y helpers
    └── constants.ts    # Constantes compartidas
```

## Convenciones

### Componentes UI (`src/components/ui/`)
Componentes básicos y reutilizables que pueden usarse en cualquier parte del sitio:
- `Button.astro` - Botón con variantes (primary, secondary, outline)
- `Logo.astro` - Logo del sitio con diferentes tamaños

### Secciones (`src/components/sections/`)
Componentes que representan secciones completas de una página:

**Universales** (se usan en todas las páginas):
- `Hero.astro` - Hero section universal
- `Footer.astro` - Footer del sitio

**Específicas por página** (`sections/landing/`):
- `Header.astro` - Header específico del landing page
- Futuras secciones del landing page irán aquí

**Organización por página:**
- Las secciones específicas de una página se organizan en carpetas: `sections/landing/`, `sections/products/`, etc.
- Esto permite mantener el código organizado y escalable cuando se agreguen más páginas

### Configuración (`src/config/`)
Archivos de configuración centralizados:
- `colors.ts` - Paleta de colores del proyecto
- `site.ts` - Información general del sitio

### Utilidades (`src/utils/`)
Funciones y constantes compartidas:
- `constants.ts` - Constantes como items de navegación

## Colores

El color principal del proyecto es **#68C28C** configurado en Tailwind CSS.

### Uso de colores en Tailwind:
- `bg-primary` - Color principal
- `bg-primary-dark` - Variante oscura
- `bg-primary-light` - Variante clara
- `text-primary` - Texto con color principal
- `hover:bg-primary-dark` - Hover con variante oscura

## Mejores Prácticas

1. **Componentes Reutilizables**: Los componentes UI deben ser independientes y reutilizables
2. **Configuración Centralizada**: Colores y constantes en archivos de configuración
3. **TypeScript**: Usar interfaces para props de componentes
4. **Separación de Responsabilidades**: UI components vs Sections
5. **Naming Conventions**: 
   - Componentes: PascalCase (Button.astro)
   - Utilidades: camelCase (constants.ts)
   - Config: UPPER_SNAKE_CASE para constantes exportadas

