# Integration verification

Verified on 2026-07-30 with Node.js v22.22.2.

Commands:

```sh
node --check src/index.js
node --check src/fmt.js
node --check src/check.js
node --test tests/smoke/integration.test.mjs
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
`fmt`, and `check`, including the `null` and `undefined` rejection boundary.
