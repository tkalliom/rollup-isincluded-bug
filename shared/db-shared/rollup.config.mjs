import commonjs from "@rollup/plugin-commonjs";
import resolve from "@rollup/plugin-node-resolve";
import replace from "@rollup/plugin-replace";
import typescript from 'rollup-plugin-typescript2';

export default [
  {
    input: "index.ts",
    output: {
      dir: "dist/nodejs/node_modules/db-shared",
      format: "cjs",
    },
    plugins: [
      replace({
        "../../knex-configure": "../../../knex-configure",
        "require('../../dialects": "function (arg) { return arg; }('excluded from dist",
        "require('./native": "function (arg) { return arg; }('undefined",
        "this.options.Client || Client || require('pg').Client": "this.options.Client || Client"
      }),
      resolve({ preferBuiltins: true }),
      commonjs(),
      typescript()
    ]
  }
];
