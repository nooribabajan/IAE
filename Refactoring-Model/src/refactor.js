
function escRe(value) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function cssTopLevelParts(text, delimiter) {
  const parts = [];
  let start = 0;
  let braces = 0;
  let parens = 0;
  let brackets = 0;
  let quote = "";
  let comment = false;

  for (let i = 0; i < text.length; i++) {
    const ch = text[i];
    const next = text[i + 1];

    if (comment) {
      if (ch === "*" && next === "/") {
        comment = false;
        i++;
      }
      continue;
    }

    if (quote) {
      if (ch === "\\") i++;
      else if (ch === quote) quote = "";
      continue;
    }

    if (ch === "/" && next === "*") {
      comment = true;
      i++;
    } else if (ch === '"' || ch === "'") {
      quote = ch;
    } else if (ch === "{") braces++;
    else if (ch === "}") braces--;
    else if (ch === "(") parens++;
    else if (ch === ")") parens--;
    else if (ch === "[") brackets++;
    else if (ch === "]") brackets--;
    else if (
      ch === delimiter &&
      braces === 0 &&
      parens === 0 &&
      brackets === 0
    ) {
      parts.push(text.slice(start, i));
      start = i + 1;
    }
  }

  parts.push(text.slice(start));
  return parts;
}

function dedupeCssDeclarations(body) {
  const declarations = cssTopLevelParts(body, ";");
  const seen = new Set();
  const kept = [];

  for (let i = declarations.length - 1; i >= 0; i--) {
    const declaration = declarations[i].trim();
    if (!declaration) continue;

    const colon = declaration.indexOf(":");
    if (colon < 1) {
      kept.unshift(declaration);
      continue;
    }

    const property = declaration.slice(0, colon).trim().toLowerCase();
    const value = declaration.slice(colon + 1).trim();
    const key = property.startsWith("--")
      ? property
      : property.replace(/\\s+/g, "");

    if (!seen.has(key)) {
      seen.add(key);
      kept.unshift(`${property}: ${value}`);
    }
  }

  return kept.join("; ");
}

function refactorTopLevelCss(css) {
  return css.replace(/([^{}]+)\{([^{}]*)\}/g, (whole, selector, body) => {
    const cleanedSelector = selector.trim().replace(/\s+/g, " ");
    const cleanedBody = dedupeCssDeclarations(body);
    return `${cleanedSelector} { ${cleanedBody} }`;
  });
}

function compactJsonWhitespace(source) {
  return source.replace(
    /("(?:\\.|[^"\\])*")\s*:\s*("(?:\\.|[^"\\])*"|true|false|null|-?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?)/g,
    "$1: $2"
  );
}

function cleanHtmlShell(source) {
  return source
    .replace(/<!--(?!\[if)[\s\S]*?-->/g, "")
    .replace(/[ \t]+\n/g, "\n")
    .replace(/\n{3,}/g, "\n\n")
    .trim();
}

function refactorInlineJs(source) {
  return source
    .replace(/^[ \t]+$/gm, "")
    .replace(/\n{3,}/g, "\n\n");
}

export function buildConservativeRefactor(original, options = {}) {
  let output = String(original);
  const changes = [];

  if (options.removeBom) {
    const next = output.replace(/^\uFEFF/, "");
    if (next !== output) changes.push("Removed BOM");
    output = next;
  }

  if (options.normalizeLines) {
    const next = output.replace(/\r\n?/g, "\n");
    if (next !== output) changes.push("Normalized line endings");
    output = next;
  }

  const beforeShell = output;
  output = cleanHtmlShell(output);
  if (output !== beforeShell) changes.push("Cleaned HTML shell");

  output = output.replace(
    /(<style\b[^>]*>)([\s\S]*?)(<\/style\s*>)/gi,
    (whole, open, css, close) =>
      open + refactorTopLevelCss(css) + close
  );
  if (output !== beforeShell && /<style\b/i.test(output)) {
    changes.push("Cleaned CSS");
  }

  const beforeJs = output;
  output = output.replace(
    /(<script\b(?![^>]*\bsrc\s*=)[^>]*>)([\s\S]*?)(<\/script\s*>)/gi,
    (whole, open, js, close) =>
      open + refactorInlineJs(js) + close
  );
  if (output !== beforeJs) changes.push("Cleaned inline JavaScript");

  return { source: output, changes };
}

export function buildCleanCopy(original, options = {}) {
  return buildConservativeRefactor(original, options).source;
}
