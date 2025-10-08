import type { StrapiApp } from "@strapi/strapi/admin";
import "./styles.css";

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
