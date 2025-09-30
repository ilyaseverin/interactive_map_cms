import type { StrapiApp } from "@strapi/strapi/admin";

export default {
  config: {
    locales: [
      "ru", // Русский язык включен
    ],
  },
  bootstrap(app: StrapiApp) {
    console.log(app);
  },
};
