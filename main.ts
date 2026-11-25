import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

// news-image-20261125: copy the pre-rendered entry image to /output.
// The image is fully deterministic: it is a fixed file in this repo, so
// every run writes byte-identical output. No timestamps, no randomness,
// no network access — just a straight byte copy.
const here = dirname(fileURLToPath(import.meta.url));
const src = join(here, "entry.png");
const outDir = "/output";

mkdirSync(outDir, { recursive: true });
const bytes = readFileSync(src);
writeFileSync(join(outDir, "entry.png"), bytes);
console.log(`entry.png written: ${bytes.length} bytes`);
