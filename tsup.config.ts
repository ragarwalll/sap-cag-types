// tsup.config.ts
import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/index.ts"],
  clean: true,            // rm -rf dist before build
  dts: true,              // emit .d.ts bundle
  format: ["cjs", "esm"], // output both CommonJS and ESM
  outDir: "dist",
  sourcemap: false,
  treeshake: true,
});
