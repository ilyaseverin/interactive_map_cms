import { mergeConfig, type UserConfig } from "vite";

export default (config: UserConfig) => {
  return mergeConfig(config, {
    server: {
      host: true,
      allowedHosts: "all",
    },
    resolve: {
      alias: {
        "@": "/src",
      },
    },
  });
};
