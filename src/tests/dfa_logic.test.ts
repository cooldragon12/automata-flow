
import assert from "node:assert";
import { test, it } from "node:test";

// Import from default values

import { prob1, prob2, prob1_pda, prob2_pda } from "@/context";

assert.strictEqual(prob1.execute("ab"), false);
assert.strictEqual(prob1.execute("ba"), false);
assert.strictEqual(prob1.execute("aaaa"), true);
assert.strictEqual(prob1.execute("bbbb"), true);
assert.strictEqual(prob1.execute("aaab"), true);
