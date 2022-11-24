import knex, { Knex } from "knex";

import { getConfiguration } from "../../knex-configure";

export function initDbClient(): Knex {
  const env = process.env.ENVIRONMENT || "staging";
  if (env !== "development" && env !== "staging" && env !== "production") throw new Error(`Unknown environment ${env}`);
  const config: Knex.Config = getConfiguration(env);

  return knex(config);
}
