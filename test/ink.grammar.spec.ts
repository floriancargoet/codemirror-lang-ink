import path from "node:path";

import { fileTests } from "@lezer/generator/test";
import { describe, test, assert } from "vitest";

import { parser } from "../src/ink.grammar.js";
import { formatTree } from "../src/utils.js";

// Use glob so that vitest knows to re-run the test when the files change.
const caseFiles: Record<string, string> = import.meta.glob("./ink.grammar/*.spec.ink", {
  eager: true,
  query: "?raw",
  import: "default",
});

// Generate one test suite per ".spec.ink" file.
// Generate one test case per test block inside the ".spec.ink" file.
for (const [file, contents] of Object.entries(caseFiles)) {
  const suiteName = path.relative("./ink.grammar/", file);
  describe(suiteName, () => {
    for (const spec of fileTests(contents, file)) {
      test(spec.name, () => {
        // Run the parser on the current spec, if it fails, try running it in non-strict mode to retrieve the parsed tree.
        try {
          spec.run(parser);
        } catch (e) {
          const errors = [(e as Error).message];
          tryNonStrict(spec, errors);
          assert.fail("Caught error running parser: " + errors.join("\n"));
        }
      });
    }
  });
}

function tryNonStrict(test: ReturnType<typeof fileTests>[number], errors: Array<string>) {
  try {
    const reConfiguredParser = parser.configure({ ...test.config, strict: false });
    const tree = reConfiguredParser.parse(test.text);
    errors.push(
      `Tree re-parsed in non strict mode:\n${formatTree(tree)}\n\nExpected: ${test.expected}`,
    );
  } catch (e) {
    errors.push("Failed while retrying parser in non strict mode: " + (e as Error).message);
  }
}
