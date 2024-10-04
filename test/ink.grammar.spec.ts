import { parser } from "../src/ink.grammar.js";
import { generateGrammarSuites } from "./grammarSuites.js";

generateGrammarSuites(parser, "./ink.grammar/");
