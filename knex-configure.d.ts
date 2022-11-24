export function getConfiguration(
  env: "development" | "staging" | "production"
): import("./node_modules/knex/types/index").Config;
