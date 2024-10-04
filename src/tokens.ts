import { ExternalTokenizer, ContextTracker, type Stack } from "@lezer/lr";
import * as terms from "./ink.grammar.terms.js";

const termNames: Array<keyof typeof terms> = [];
for (const key in terms) {
  const k = key as keyof typeof terms;
  termNames[terms[k]] = k;
}

function code(c: string) {
  return c.charCodeAt(0);
}

const EOL = code("\n");
const TAG_START = code("#");
const SLASH = code("/");
const TILDE = code("~");
const contentTextBreak = "{}()|\n\r\\#";
const contentTextBreakIfChoice = contentTextBreak + "[]";
const contentTextBreakIfString = contentTextBreak + '"';
const mayStartTwoCharBreak = "-</";
const sequenceSyms = "&!~$";

interface StackWithContext extends Stack {
  context: Context;
}

export const contentText = new ExternalTokenizer(
  (input, stack: StackWithContext) => {
    console.log("Trying contentToken at", input.pos, String.fromCharCode(input.next));
    const currentContentMode = stack.context.contentMode[stack.context.contentMode.length - 1];
    // console.log({ currentContentMode, next: String.fromCharCode(input.next) });
    // Early abort, can't start with ~
    if (input.next === TILDE) return;

    // console.log("Trying contentText tokenizer at", input.pos, String.fromCharCode(input.next));
    let breakChars;
    switch (currentContentMode) {
      case "choice": {
        breakChars = contentTextBreakIfChoice;
        break;
      }
      // FIXME: state parsingString
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
    function stop(discard = false) {
      // We print with JSON.stringify to print \n instead of an actual line break
      if (input.pos !== initialPos) {
        if (discard) {
          console.log(`Discarding ${JSON.stringify(tokenString)}`);
        } else {
          input.acceptToken(terms.content);
          console.log(`Accepting content token ${JSON.stringify(tokenString)}`);
        }
      } else {
        console.log(
          `Not accepting content token ${JSON.stringify(String.fromCharCode(input.next))}`,
        );
      }
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
      // FIXME: only check inside a sequence
      // console.log("<content token so far>", tokenString);
      // console.log("CAN SHIFT", whatCanShift(stack));
      if (sa === ":") {
        const sequenceCandidate = tokenString.replaceAll(/ \t/g, "");
        if (sequenceCandidate === "once:" && stack.canShift(terms.once)) return stop(true);
        if (sequenceCandidate === "shuffle:" && stack.canShift(terms.shuffle)) return stop(true);
        if (sequenceCandidate === "stopping:" && stack.canShift(terms.stopping)) return stop(true);
        if (sequenceCandidate === "cycle:" && stack.canShift(terms.cycle)) return stop(true);
      }
    }
  },
  { fallback: true },
);

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

export const sequenceSymbols = new ExternalTokenizer((input) => {
  if (sequenceSyms.includes(String.fromCharCode(input.next))) {
    input.advance();
    input.acceptToken(terms.sequenceSymbol);
  }
});

type ContentMode = "default" | "choice" | "string" | "inline-logic";
type Context = {
  contentMode: Array<ContentMode>;
};

export const tracker = new ContextTracker<Context>({
  start: {
    contentMode: ["default"],
  },
  shift(context, term, stack: StackWithContext, input) {
    console.log("> Shift", termNames[term], term);
    const currentContentMode = stack.context.contentMode[stack.context.contentMode.length - 1];
    // // console.log(term, String.fromCharCode(input.next));
    // Entering Choice
    if (term === terms.Bullets) {
      // console.log("entering choice");
      return pushContentMode(context, "choice");
    }
    if (term === terms.openInlineLogic) {
      return pushContentMode(context, "inline-logic");
    }
    if (term === terms.closeInlineLogic && currentContentMode === "inline-logic") {
      return popContentMode(context);
    }
    return context;
  },
  reduce(context, term, stack, input) {
    console.log("< Reduce", termNames[term], term);
    // Exiting Choice
    if (term === terms.Choice) {
      // console.log("exiting choice");
      return popContentMode(context);
    }
    return context;
  },
});

function pushContentMode(context: Context, mode: ContentMode) {
  // console.log("push", context.contentMode, mode);
  return { ...context, contentMode: [...context.contentMode, mode] };
}

function popContentMode(context: Context) {
  // console.log("pop", context.contentMode);
  return { ...context, contentMode: context.contentMode.slice(0, -1) };
}

function whatCanShift(stack: Stack) {
  return (Object.keys(terms) as Array<keyof typeof terms>).filter((termName) =>
    stack.canShift(terms[termName]),
  );
}
