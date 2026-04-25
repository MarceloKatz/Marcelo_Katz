# Marcelo Katz — Sitio en Next.js

Migración del sitio [marcelokatz.com.ar](https://marcelokatz.com.ar/) (WordPress) a Next.js 15 con Sanity CMS.

## Stack

- **Next.js 15** (App Router) + TypeScript
- **Tailwind CSS** para estilos
- **Sanity** como headless CMS (el cliente edita textos, imágenes, agenda y prensa desde un panel)
- **next/image** para optimización automática
- Deploy recomendado: Vercel

## Estructura

```
src/
├── app/
│   ├── layout.tsx              # Layout global con Header/Footer
│   ├── page.tsx                # Home
│   ├── docencia/page.tsx
│   ├── espacio-aguirre/page.tsx
│   ├── espectaculos/page.tsx
│   ├── coach/page.tsx
│   ├── eventos/page.tsx
│   ├── agenda/page.tsx
│   ├── bio/page.tsx
│   ├── prensa/page.tsx
│   └── contacto/page.tsx
├── components/
│   ├── Header.tsx
│   ├── Footer.tsx
│   └── ContactForm.tsx
└── lib/
    ├── sanity.ts               # Cliente Sanity
    └── content.ts              # Contenido inicial (fallback / seed)
sanity/
└── schemas/                    # Schemas para que el cliente edite contenido
```

## Setup

```bash
# 1. Instalar dependencias
npm install

# 2. Variables de entorno
cp .env.example .env.local
# Completar NEXT_PUBLIC_SANITY_PROJECT_ID y NEXT_PUBLIC_SANITY_DATASET

# 3. Inicializar Sanity (primera vez)
npx sanity init --bare
# Seguir el wizard: nombre del proyecto, dataset "production", etc.

# 4. Levantar el sitio
npm run dev
# http://localhost:3000

# 5. Levantar Sanity Studio (en otra terminal)
npm run sanity:dev
# http://localhost:3333
```

## Notas para el handoff a Marcelo

- Todas las imágenes y textos están **hardcodeados como fallback** en `src/lib/content.ts`. Una vez que se pobló Sanity con el contenido inicial, las páginas pueden leer de Sanity y el fallback queda como respaldo.
- La **Agenda** y la **Prensa** están pensadas para ser las secciones más editadas — son las primeras que conviene mover a Sanity.
- El form de **Contacto** está como UI; falta conectar el endpoint (recomendación: Resend o un Server Action a un email).
- WhatsApp del home: `+54 9 11 3631 7717` (mantener configurable en Sanity).

## TODO antes de pasar a producción

- [ ] Reemplazar URLs de imágenes (hoy apuntan a `marcelokatz.com.ar/wp-content/...`) — descargarlas y subirlas a Sanity o `/public`.
- [ ] Conectar form de contacto a backend.
- [ ] Configurar SEO/metadata por página.
- [ ] Configurar Sanity Studio definitivamente (auth, roles para Marcelo).
- [ ] Sitemap + robots.
