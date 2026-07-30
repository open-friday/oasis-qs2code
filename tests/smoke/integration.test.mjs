import assert from "node:assert/strict";
import test from "node:test";

import { check } from "../../src/check.js";
import { fmt } from "../../src/fmt.js";
import { greet } from "../../src/index.js";
import { slugify } from "../../src/slug.js";
import { titleCase } from "../../src/title.js";
import { truncate } from "../../src/truncate.js";

test("the integrated public helpers work together through ESM imports", () => {
  assert.equal(greet("Oasis"), "hi Oasis");
  assert.equal(fmt({ a: 1 }), '{\n  "a": 1\n}');
  assert.equal(check(0), true);
  assert.equal(check(null), false);
  assert.equal(check(undefined), false);
  assert.equal(slugify("Hello, Oasis!"), "hello-oasis-");
  assert.equal(slugify(42), "42");
  assert.equal(titleCase("hello oasis"), "Hello Oasis");
  assert.equal(titleCase(""), "");
  assert.equal(truncate("Oasis queue", 5), "Oasis…");
  assert.equal(truncate("Oasis", 5), "Oasis");
  assert.equal(truncate(12345, 3), "123…");
});
