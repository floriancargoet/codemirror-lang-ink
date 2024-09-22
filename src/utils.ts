import { Tree, Parser } from "@lezer/common";

export function interceptParserDone(parser: Parser, interceptor: (tree: Tree) => void) {
  /* eslint-disable @typescript-eslint/unbound-method */
  const origStartParse = parser.startParse;
  parser.startParse = function (...args) {
    const parse = origStartParse.apply(this, args);
    const origAdvance = parse.advance;
    parse.advance = function (...args2) {
      const done = origAdvance.apply(this, args2);
      if (done) interceptor(done);
      return done;
    };
    return parse;
  };

  /* eslint-enable @typescript-eslint/unbound-method */
}

export function formatTree(tree: Tree) {
  let indent = 0;
  const protectedStr = String(tree)
    // protect strings "(", "," & ")"
    // This is naive and doesn't handle well to consecutive strings: foo("a","b") which contains ","
    // We need a real parser here.
    .replaceAll('"("', "@@openParen@@")
    .replaceAll('","', "@@comma@@")
    .replaceAll('")"', "@@closeParen@@");
  const formatted = protectedStr.replaceAll(/[(),]/g, (match) => {
    switch (match) {
      case "(":
        indent++;
        break;
      case ")":
        indent--;
        break;
    }
    const indentStr = "\n" + Array(indent).fill("  ").join("");
    switch (match) {
      case "(":
      case ",":
        return match + indentStr;
      case ")":
        return indentStr + match;
      default:
        return match;
    }
  });
  // Unprotect
  return formatted
    .replaceAll("@@openParen@@", '"("')
    .replaceAll("@@comma@@", '","')
    .replaceAll("@@closeParen@@", '")"');
}
