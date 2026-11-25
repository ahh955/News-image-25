// News-image-20261125 v2 entrypoint.
// Copies the pre-rendered entry.png into the grader's output directory.
// Deterministic: the same bytes on every run. No network, no clock,
// no other input besides the single image file next to this script.
import { copyFileSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
const src = join(here, "entry.png");
const dst = join(outDir, "entry.png");
copyFileSync(src, dst);
