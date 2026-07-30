import assert from "node:assert/strict";
import test from "node:test";

import { check } from "../../src/check.js";
import { fmt } from "../../src/fmt.js";
import { greet } from "../../src/index.js";

test("the integrated public helpers work together through ESM imports", () => {
  assert.equal(greet("Oasis"), "hi Oasis");
  assert.equal(fmt({ a: 1 }), '{\n  "a": 1\n}');
  assert.equal(check(0), true);
  assert.equal(check(null), false);
  assert.equal(check(undefined), false);
});
