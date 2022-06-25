// import resolve from "@rollup/plugin-node-resolve";

export default {
  input: "./js/index.js", // 진입 경로
  output: {
    name: "utils",
    file: "./dist/bundle.js", // 출력 경로
    format: "iife", // 출력 형식
  },
  // plugins: [resolve({ browser: true })],
};
