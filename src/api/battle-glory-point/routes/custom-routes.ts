export default {
  routes: [
    {
      method: "POST",
      path: "/battle-glory-points/import",
      handler: "battle-glory-point.importFromJson",
      config: {
        policies: [],
        middlewares: [],
      },
    },
    {
      method: "GET",
      path: "/battle-glory-points/stats",
      handler: "battle-glory-point.getStats",
      config: {
        policies: [],
        middlewares: [],
      },
    },
  ],
};
