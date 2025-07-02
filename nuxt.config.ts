import tailwindcss from "@tailwindcss/vite";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-05-25",
  future: {
    compatibilityVersion: 4,
  },
  devtools: { enabled: true },
  css: ["~/assets/css/main.css"],
  vite: {
    plugins: [tailwindcss()],
  },
  app: {
    head: {
      htmlAttrs: {
        lang: "en",
      },
      title: "Frontend Mentor | E-commerce Product Page",
      meta: [{ name: "description", content: "A Frontend Mentor challenge." }],
      link: [{ rel: "icon", type: "image/x-icon", href: "/favicon-32x32.png" }],
    },
  },
});
