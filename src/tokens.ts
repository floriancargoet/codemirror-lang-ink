import { ExternalTokenizer, ContextTracker, type Stack } from "@lezer/lr";
import * as terms from "./ink.grammar.terms.js";

function code(c: string) {
  return c.charCodeAt(0);
}

const EOL = code("\n");
const TAG_START = code("#");
const SLASH = code("/");

const contentTextBreak = "{}()|\n\r\\#";
const contentTextBreakIfChoice = "{}()|\n\r\\#[]";
const contentTextBreakIfString = '{}()|\n\r\\#"';
const mayStartTwoCharBreak = "-</";

type StackWithContext = Omit<Stack, "context"> & { context: Context };

export const contentText = new ExternalTokenizer((input, stack: StackWithContext) => {
  console.log("Trying contentText tokenizer at", input.pos, String.fromCharCode(input.next));
  let breakChars;
  switch (stack.context.contentMode) {
    case "choice": {
      breakChars = contentTextBreakIfChoice;
      break;
    }
    // TODO: state parsingString
    case "string": {
      breakChars = contentTextBreakIfString;
      break;
    }
    case "default":
    default: {
      breakChars = contentTextBreak;
      break;
    }
  }

  const initialPos = input.pos;
  let tokenString = "";
  function stop() {
    // We print with JSON.stringify to print \n instead of an actual line break
    if (input.pos !== initialPos) {
      input.acceptToken(terms.content);
      console.log(`Accepting content token ${JSON.stringify(tokenString)}`);
    } else {
      console.log(`Not accepting content token ${JSON.stringify(String.fromCharCode(input.next))}`);
    }
    // input.acceptToken(terms.contentInterrupt);
  }
  while (true) {
    const a = input.next;
    const sa = String.fromCharCode(a);
    // Only peek one character at first
    if (a === -1 || a === EOL || breakChars.includes(sa)) return stop();
    if (mayStartTwoCharBreak.includes(sa)) {
      // Now check the second char
      const b = input.peek(1);
      const ab = sa + String.fromCharCode(b);
      if (b === -1 || ["->", "<-", "<>", "//", "/*"].includes(ab)) return stop();
    }
    // Here "sa" is not a breaker so it's content, we advance one char.
    input.advance();
    tokenString += sa;
  }
});

export const tags = new ExternalTokenizer((input) => {
  if (input.next !== TAG_START) return;

  const initialPos = input.pos;
  function stop() {
    if (input.pos !== initialPos) {
      input.acceptToken(terms.contentTag);
    }
  }
  while (true) {
    const a = input.next;
    // Only peek one character at first
    if (a === -1 || a === EOL) return stop();
    // Two char breaks
    if (a === SLASH && input.peek(1) === SLASH) {
      // A comment is next, we stop here
      return stop();
    }
    input.advance();
  }
});

export const comments = new ExternalTokenizer((input) => {
  if (input.next !== SLASH || input.peek(1) !== SLASH) return;
  // Consume "//"
  input.advance();
  input.advance();

  // Read until newline or EOF
  while (true) {
    if (input.next === -1 || input.next === EOL) {
      input.acceptToken(terms.lineComment);
      return;
    }
    input.advance();
  }
});

type Context = {
  contentMode: "default" | "choice" | "string";
};

export const tracker = new ContextTracker<Context>({
  start: {
    contentMode: "default",
  },
  shift(context, term, stack, input) {
    // Entering Choice
    if (term === terms.Bullets) {
      console.log("entering choice");
      return { ...context, contentMode: "choice" };
    }
    return context;
  },
  reduce(context, term, stack, input) {
    // Exiting Choice
    if (term === terms.Choice) {
      console.log("exiting choice");
      return { ...context, contentMode: "default" };
    }
    return context;
  },
});
