// rollup.config.js
import dts from "rollup-plugin-dts";

export default {
  input: "src/index.ts",
  output: {
    file: "dist/bundle.d.ts",
    format: "es"
  },
  plugins: [dts()]
};
