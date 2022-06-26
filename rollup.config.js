import { nodeResolve } from "@rollup/plugin-node-resolve";
// import commonjs from "@rollup/plugin-commonjs";
// import json from "@rollup/plugin-json";

import pkg from "./package.json";

export default {
  input: "./js/index.js", // 진입 경로
  output: {
    name: "utils",
    file: pkg.main, // 출력 경로
    format: "iife", // 출력 형식
  },
  plugins: [
    nodeResolve(),
    //resolve({ preferBuiltins: false, browser: true }),
    // commonjs(),
    // json(),
  ],
};
