import babel from "rollup-plugin-babel";
import external from "rollup-plugin-peer-deps-external";
import commonjs from "@rollup/plugin-commonjs";
import { terser } from "rollup-plugin-terser";
import { nodeResolve } from "@rollup/plugin-node-resolve";

export default [
  {
    input: "./src/index.js",
    output: [
      {
        file: "dist/index.js",
        format: "cjs",
      },
      {
        file: "dist/index.es.js",
        format: "es",
        exports: "named",
      },
    ],
    plugins: [
      nodeResolve({
        extensions: [".js", ".jsx"],
      }),
      external(),
      commonjs(),
      babel({ exclude: "node_modules/**", presets: ["@babel/preset-react"] }),
      terser(),
    ],
  },
];
