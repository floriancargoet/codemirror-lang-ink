import {
  LanguageSupport,
  LRLanguage,
  indentNodeProp,
  foldNodeProp,
  foldInside,
  delimitedIndent,
} from "@codemirror/language";
import { styleTags, tags as t, type Tag } from "@lezer/highlight";
import { Tree } from "@lezer/common";
import { parser } from "./ink.grammar.js";
import * as terms from "./ink.grammar.terms.js";
import { formatTree, interceptParserDone } from "./utils.js";

// DEBUG
interceptParserDone(parser, (tree: Tree) => {
  console.log(formatTree(tree));
});

// Allow string but with autocomplete from terms
type StyleKey = keyof typeof terms | (string & {});

export const stylesMap = {
  INCLUDE: t.moduleKeyword,
  Included: t.url,
  "VAR CONST LIST EXTERNAL temp function": t.definitionKeyword,
  ref: t.keyword,
  return: t.controlKeyword,
  "FunctionIdentifier!": t.function(t.variableName),
  Identifier: t.name,
  BlockComment: t.blockComment,
  LineComment: t.lineComment,
  "AuthorWarning!": t.docComment,
  Integer: t.integer,
  Float: t.float,
  "true false": t.bool,
  not: t.keyword,
  "DeclarationEqual! =": t.operator,
  "ArithOp! -": t.arithmeticOperator,
  "ListOp! CompareOp!": t.compareOperator,
  'LogicOp! "!"': t.logicOperator,
  "++ -- += -=": t.updateOperator,
  "-> <- ->->": t.controlOperator,
  "GatherDashes! Bullets!": t.definitionOperator,
  "( )": t.paren,
  "{ }": t.brace,
  "[ ]": t.squareBracket,
  "~ , .": t.operator,
  "Tag ChoiceTag": t.meta,
  Glue: t.operator,
  "ContentText!": t.content,
  "KnotTitleEquals! StitchTitleEquals!": t.definitionOperator,
} satisfies Partial<Record<StyleKey, Tag>>;

export const InkLang = LRLanguage.define({
  parser: parser.configure({
    props: [
      indentNodeProp.add({
        Application: delimitedIndent({ closing: ")", align: false }),
      }),
      foldNodeProp.add({
        Application: foldInside,
      }),
      styleTags(stylesMap),
    ],
  }),
});

export function Ink() {
  return new LanguageSupport(InkLang);
}

export { parser };
