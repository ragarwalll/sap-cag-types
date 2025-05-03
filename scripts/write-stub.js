// scripts/write-stub.js
import { writeFileSync, mkdirSync } from "fs";
import { dirname } from "path";

const out = "dist/index.js";
mkdirSync(dirname(out), { recursive: true });
writeFileSync(
  out,
  `// runtime stub\nmodule.exports = {};\n`,
  "utf8"
);
