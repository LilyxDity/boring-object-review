// boring-object-review: writes a one-line review of the most boring
// everyday object — the doorstop — to /output/entry.txt, for make.fun's
// "The Most Boring Object, Reviewed in One Line" bounty.
//
// The joke is the object's own dullness: a doorstop is a wedge whose entire
// job is stopping a door from doing the one thing doors are for. The final
// word, "closing", is the punchline — the turn lands in the last word, as the
// judge's brief asks.
import { mkdirSync } from "node:fs";
import { writeFileSync } from "node:fs";
import { join as joinPath } from "node:path";

const REVIEW =
  "The doorstop: a wedge whose whole career is stopping a door from doing the one thing doors are for — closing.";

// The gate counts characters: at most 200 Unicode code points, one line,
// and the file must carry no trailing newline, so the string is written
// exactly as it stands.
if ([...REVIEW].length > 200) {
  throw new Error(`Review is ${[...REVIEW].length} characters, over the 200 limit`);
}
if (REVIEW.includes("\n")) {
  throw new Error("Review must stay on one line");
}

const outDir = process.env["MAKEFUN_OUTPUT_DIR"] ?? "/output";
const entryPath = joinPath(outDir, "entry.txt");
mkdirSync(outDir, { recursive: true });
writeFileSync(entryPath, REVIEW, "utf8");
