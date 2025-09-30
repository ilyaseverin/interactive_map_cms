import { mergeConfig, type UserConfig } from "vite";

export default (config: UserConfig) => {
  return mergeConfig(config, {
    server: {
      allowedHosts: ["localhost", "127.0.0.1", "admin.dev67.russoft-it.ru"],
    },
    resolve: {
      alias: {
        "@": "/src",
      },
    },
  });
};
