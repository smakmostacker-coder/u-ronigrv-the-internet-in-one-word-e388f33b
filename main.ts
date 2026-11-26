// The Internet in One Word — u-ronigrv-the-internet-in-one-word-e388f33b
//
// One word for the whole internet, written to /output/entry.txt.
// Deterministic: the same word on every run, standard library only,
// no network, no secrets, no model call — the entry is the word itself.
//
// Why "feral": the internet is not a product, a place, or a mood — it is
// wild, untamed, and unmoderated. Nothing about it was domesticated.
// It bites, it multiplies, it cannot be house-trained. Five letters,
// one beat, and it makes you laugh and then nod.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const WORD = "feral";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), WORD, "utf8");
