
export const wowAnimation = () => {
  if (typeof window !== "undefined") {
    import("wowjs").then((module) => {
      const WOW = module.default;
      new WOW.WOW({ live: false }).init();
    });
  }
};

export function discountPrice(price: number, discount: number) {
  return price - (price * discount) / 100;
}

export const formatKey = (key: string) => {
  return key
    .replace(/([A-Z])/g, ' $1') // Add space before capital letters
    .replace(/^./, (str) => str.toUpperCase()); // Capitalize first letter
};

export const removeTagInText = (text: string) => {
  return text.replace(/(<([^>]+)>)/gi, "");
};



/** HTML void / self-closing elements (no closing tag on stack). */
const VOID_HTML_TAGS = new Set([
  "area", "base", "br", "col", "embed", "hr", "img", "input", "link", "meta",
  "param", "source", "track", "wbr",
]);

/**
 * Keeps first `maxTextChars` of visible text; copies tags verbatim.
 * On truncate, closes still-open tags in stack order and appends "...".
 * HTML entities count as one character each.
 */
export function truncateHtmlPreserveTags(html: string, maxTextChars: number): string {
  let i = 0;
  let textCount = 0;
  let out = "";
  const stack: string[] = [];
  let hitLimit = false;

  const closeOpenTags = () => {
    while (stack.length > 0) {
      out += `</${stack.pop()}>`;
    }
  };

  while (i < html.length) {
    if (textCount >= maxTextChars) {
      hitLimit = i < html.length;
      break;
    }

    const ch = html[i];
    if (ch !== "<") {
      if (ch === "&") {
        const semi = html.indexOf(";", i);
        if (semi !== -1 && semi - i <= 24) {
          out += html.slice(i, semi + 1);
          textCount += 1;
          i = semi + 1;
          continue;
        }
      }
      out += ch;
      textCount += 1;
      i += 1;
      continue;
    }

    if (html.startsWith("<!--", i)) {
      const cEnd = html.indexOf("-->", i + 4);
      if (cEnd === -1) break;
      out += html.slice(i, cEnd + 3);
      i = cEnd + 3;
      continue;
    }

    const end = html.indexOf(">", i);
    if (end === -1) break;
    const raw = html.slice(i, end + 1);
    i = end + 1;

    if (raw.startsWith("<!") || raw.startsWith("<?")) {
      out += raw;
      continue;
    }

    const openMatch = raw.match(/^<\s*(\/?)\s*([a-zA-Z][\w:-]*)/);
    if (!openMatch) {
      out += raw;
      continue;
    }

    const isClose = openMatch[1] === "/";
    const tagName = openMatch[2].toLowerCase();
    const trimmedEnd = raw.trimEnd();
    const selfClosing =
      trimmedEnd.endsWith("/>") || VOID_HTML_TAGS.has(tagName);

    if (isClose) {
      while (stack.length > 0 && stack[stack.length - 1] !== tagName) {
        out += `</${stack.pop()}>`;
      }
      if (stack.length > 0 && stack[stack.length - 1] === tagName) {
        stack.pop();
      }
      out += raw;
      continue;
    }

    out += raw;
    if (!selfClosing) {
      stack.push(tagName);
    }
  }

  closeOpenTags();
  if (hitLimit) {
    out += "...";
  }
  return out;
}