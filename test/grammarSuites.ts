import path from "node:path";

import { fileTests } from "@lezer/generator/test";
import { describe, test, assert } from "vitest";

import { formatTree } from "../src/utils.js";
import { LRParser } from "@lezer/lr";

// Use glob so that vitest knows to re-run the test when the files change.
const caseFiles: Record<string, string> = import.meta.glob("./*.grammar/*.spec.ink", {
  eager: true,
  query: "?raw",
  import: "default",
});

export function generateGrammarSuites(parser: LRParser, directory: string) {
  const directoryCaseFiles = Object.entries(caseFiles).filter(([file]) => {
    return file.startsWith(directory);
  });

  // Generate one test suite per ".spec.ink" file.
  // Generate one test case per test block inside the ".spec.ink" file.
  for (const [file, contents] of directoryCaseFiles) {
    const suiteName = path.relative(directory, file);
    describe(suiteName, () => {
      for (const spec of fileTests(contents, file, dontIgnore)) {
        test(spec.name, () => {
          // Run the parser on the current spec, if it fails, try running it in non-strict mode to retrieve the parsed tree.
          try {
            spec.run(parser);
          } catch (e) {
            const errors = [(e as Error).message];
            tryNonStrict(parser, spec, errors);
            assert.fail("Caught error running parser: " + errors.join("\n"));
          }
        });
      }
    });
  }
}

const dontIgnore = () => false;

function tryNonStrict(
  parser: LRParser,
  test: ReturnType<typeof fileTests>[number],
  errors: Array<string>,
) {
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
