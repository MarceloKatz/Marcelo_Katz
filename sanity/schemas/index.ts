import { defineType, defineField, defineArrayMember } from "sanity";

// ---- HOME ----
const home = defineType({
  name: "home",
  title: "Home",
  type: "document",
  fields: [
    defineField({ name: "heroImage", title: "Imagen principal", type: "image", options: { hotspot: true } }),
    defineField({ name: "headline", title: "Titular", type: "string" }),
    defineField({ name: "intro", title: "Bajada", type: "text", rows: 3 }),
    defineField({ name: "paragraphs", title: "Párrafos", type: "array", of: [{ type: "text" }] }),
    defineField({ name: "keywords", title: "Palabras clave (footer del home)", type: "string" }),
    defineField({ name: "whatsapp", title: "WhatsApp", type: "string" }),
  ],
});

// ---- DOCENCIA ----
const docencia = defineType({
  name: "docencia",
  title: "Docencia",
  type: "document",
  fields: [
    defineField({ name: "title", type: "string" }),
    defineField({ name: "subtitle", type: "string" }),
    defineField({
      name: "disciplines",
      title: "Disciplinas (3 imágenes principales)",
      type: "array",
      of: [
        defineArrayMember({
          type: "object",
          fields: [
            defineField({ name: "label", type: "string" }),
            defineField({ name: "image", type: "image", options: { hotspot: true } }),
          ],
        }),
      ],
    }),
    defineField({
      name: "schedules",
      title: "Esquemas de cursada",
      type: "array",
      of: [
        defineArrayMember({
          type: "object",
          fields: [
            defineField({ name: "title", type: "string" }),
            defineField({ name: "items", type: "array", of: [{ type: "string" }] }),
          ],
        }),
      ],
    }),
    defineField({
      name: "trainings",
      title: "Descripción de entrenamientos",
      type: "array",
      of: [
        defineArrayMember({
          type: "object",
          fields: [
            defineField({ name: "title", type: "string" }),
            defineField({ name: "body", type: "text" }),
            defineField({
              name: "link",
              type: "object",
              fields: [
                defineField({ name: "label", type: "string" }),
                defineField({ name: "url", type: "url" }),
              ],
            }),
          ],
        }),
      ],
    }),
    defineField({
      name: "gallery",
      title: "Galería de cursos",
      type: "array",
      of: [
        defineArrayMember({
          type: "object",
          fields: [
            defineField({ name: "image", type: "image", options: { hotspot: true } }),
            defineField({ name: "caption", type: "string" }),
          ],
        }),
      ],
    }),
  ],
});

// ---- ESPACIO AGUIRRE ----
const espacioAguirre = defineType({
  name: "espacioAguirre",
  title: "Espacio Aguirre",
  type: "document",
  fields: [
    defineField({ name: "heroImage", type: "image", options: { hotspot: true } }),
    defineField({ name: "paragraphs", type: "array", of: [{ type: "text" }] }),
    defineField({
      name: "external",
      type: "object",
      fields: [
        defineField({ name: "label", type: "string" }),
        defineField({ name: "url", type: "url" }),
        defineField({ name: "logo", type: "image" }),
      ],
    }),
  ],
});

// ---- ESPECTÁCULOS ----
const espectaculos = defineType({
  name: "espectaculos",
  title: "Espectáculos",
  type: "document",
  fields: [
    defineField({
      name: "enCartel",
      type: "object",
      fields: [
        defineField({ name: "title", type: "string" }),
        defineField({ name: "body", type: "text" }),
      ],
    }),
    defineField({
      name: "intro",
      type: "object",
      fields: [
        defineField({ name: "title", type: "string" }),
        defineField({ name: "body", type: "text" }),
      ],
    }),
    defineField({
      name: "reviews",
      title: "Críticas",
      type: "array",
      of: [
        defineArrayMember({
          type: "object",
          fields: [
            defineField({ name: "source", type: "string" }),
            defineField({ name: "author", type: "string" }),
            defineField({ name: "quote", type: "text" }),
          ],
        }),
      ],
    }),
    defineField({
      name: "awards",
      type: "object",
      fields: [
        defineField({ name: "title", type: "string" }),
        defineField({ name: "items", type: "array", of: [{ type: "string" }] }),
      ],
    }),
    defineField({ name: "actorBody", type: "text" }),
    defineField({ name: "directorBody", type: "text" }),
  ],
});

// ---- COACH ----
const coach = defineType({
  name: "coach",
  title: "Coach",
  type: "document",
  fields: [
    defineField({ name: "title", type: "string" }),
    defineField({ name: "intro", type: "text" }),
    defineField({ name: "clients", type: "text" }),
    defineField({ name: "images", type: "array", of: [{ type: "image" }] }),
    defineField({
      name: "benefits",
      type: "object",
      fields: [
        defineField({ name: "title", type: "string" }),
        defineField({ name: "items", type: "array", of: [{ type: "string" }] }),
      ],
    }),
    defineField({
      name: "testimonials",
      type: "array",
      of: [
        defineArrayMember({
          type: "object",
          fields: [
            defineField({ name: "author", type: "string" }),
            defineField({ name: "role", type: "string" }),
            defineField({ name: "quote", type: "text" }),
          ],
        }),
      ],
    }),
  ],
});

// ---- EVENTOS ----
const eventos = defineType({
  name: "eventos",
  title: "Eventos",
  type: "document",
  fields: [
    defineField({ name: "title", type: "string" }),
    defineField({ name: "body", type: "text" }),
    defineField({ name: "clients", type: "text" }),
    defineField({
      name: "gallery",
      type: "array",
      of: [
        defineArrayMember({
          type: "object",
          fields: [
            defineField({ name: "image", type: "image", options: { hotspot: true } }),
            defineField({ name: "caption", type: "string" }),
          ],
        }),
      ],
    }),
  ],
});

// ---- AGENDA ----
const agendaItem = defineType({
  name: "agendaItem",
  title: "Evento de agenda",
  type: "document",
  fields: [
    defineField({
      name: "kind",
      title: "Tipo",
      type: "string",
      options: { list: ["funcion", "entrenamiento"] },
    }),
    defineField({ name: "month", title: "Mes (ej: MARZO 2026)", type: "string" }),
    defineField({ name: "date", title: "Fecha", type: "date" }),
    defineField({ name: "city", title: "Ciudad", type: "string" }),
    defineField({ name: "country", title: "País", type: "string" }),
    defineField({ name: "description", title: "Descripción", type: "string" }),
    defineField({ name: "ticketUrl", title: "Link de entradas", type: "url" }),
  ],
});

// ---- BIO ----
const bio = defineType({
  name: "bio",
  title: "Bio",
  type: "document",
  fields: [
    defineField({ name: "heroImage", type: "image", options: { hotspot: true } }),
    defineField({ name: "title", type: "string" }),
    defineField({ name: "paragraphs", type: "array", of: [{ type: "text" }] }),
  ],
});

// ---- PRENSA ----
const prensaItem = defineType({
  name: "prensaItem",
  title: "Nota de prensa",
  type: "document",
  fields: [
    defineField({ name: "title", type: "string", validation: (R) => R.required() }),
    defineField({ name: "image", type: "image", options: { hotspot: true } }),
    defineField({ name: "href", type: "url" }),
    defineField({ name: "publishedAt", title: "Fecha", type: "date" }),
    defineField({ name: "order", title: "Orden", type: "number" }),
  ],
});

// ---- SETTINGS ----
const settings = defineType({
  name: "settings",
  title: "Configuración del sitio",
  type: "document",
  fields: [
    defineField({ name: "siteName", type: "string" }),
    defineField({ name: "email", type: "string" }),
    defineField({ name: "whatsapp", type: "string" }),
    defineField({ name: "logo", type: "image" }),
    defineField({ name: "logoFooter", type: "image" }),
  ],
});

export const schemaTypes = [
  settings,
  home,
  docencia,
  espacioAguirre,
  espectaculos,
  coach,
  eventos,
  agendaItem,
  bio,
  prensaItem,
];
