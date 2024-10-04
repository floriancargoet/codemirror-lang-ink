import { styleTags, tags as t, type Tag } from "@lezer/highlight";

import * as terms from "./ink.grammar.terms.js";

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
  "| :": t.operator,
  "SequenceOp!": t.operator,
  "SequenceTypeWordAnnotation!": t.keyword,
  String: t.string,
} satisfies Partial<Record<StyleKey, Tag>>;

export const inkHighlight = styleTags(stylesMap);
