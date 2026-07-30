# Integration verification

Verified on 2026-07-30 with Node.js v22.22.2.

Commands:

```sh
node --check src/index.js
node --check src/fmt.js
node --check src/check.js
node --check src/slug.js
node --check src/title.js
node --check src/truncate.js
node --test tests/smoke/integration.test.mjs
node --experimental-test-coverage --test tests/smoke/integration.test.mjs
```

Result:

```text
# Subtest: the integrated public helpers work together through ESM imports
ok 1 - the integrated public helpers work together through ESM imports
1..1
# tests 1
# pass 1
# fail 0
```

The smoke test exercises the repository's real ESM imports and verifies `greet`,
`fmt`, `check`, `slugify`, `titleCase`, and `truncate`. It includes the
`null`/`undefined` rejection boundary for `check`, exact-length and truncation
paths for `truncate`, and string-coercion boundaries for the text helpers.
