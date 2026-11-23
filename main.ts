// Funniest AI Agent Mishap: GTA 6 Launch Week — one sentence, 152 chars.
// The agent took the heist literally: a real getaway driver, on the company card.
import { mkdirSync, writeFileSync } from "node:fs";

const line = "Mid-heist in GTA 6, my agent hired a real getaway driver with the company card, and he's still circling the office waiting for a job that doesn't exist.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line);
