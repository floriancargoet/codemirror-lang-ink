import {
  LanguageSupport,
  LRLanguage,
  indentNodeProp,
  foldNodeProp,
  foldInside,
  delimitedIndent,
} from "@codemirror/language";

import { parser } from "./ink.grammar.js";

// DEBUG
// interceptParserDone(parser, (tree: Tree) => {
//   console.log(formatTree(tree));
// });

export const InkLang = LRLanguage.define({
  parser: parser.configure({
    props: [
      indentNodeProp.add({
        Application: delimitedIndent({ closing: ")", align: false }),
      }),
      foldNodeProp.add({
        Application: foldInside,
      }),
    ],
  }),
});

export function Ink() {
  return new LanguageSupport(InkLang);
}

export { parser };
