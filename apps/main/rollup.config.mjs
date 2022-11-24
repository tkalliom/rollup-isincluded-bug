import commonjs from '@rollup/plugin-commonjs';
import json from '@rollup/plugin-json';
import resolve from '@rollup/plugin-node-resolve';
import typescript from 'rollup-plugin-typescript2';


export default {
  input: './index.ts',
  output: {
    dir: 'dist/',
    format: 'cjs',
  },
  external: ["db-shared"],
  plugins: [
    resolve({ preferBuiltins: true, exportConditions: ["default", "module", "require", "node"] }),
    commonjs(),
    json(),
    typescript()
  ]
};
