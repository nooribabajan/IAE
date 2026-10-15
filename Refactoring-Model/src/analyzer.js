
export function analyzeHtml(source) {
  const findings = [];

  const add = (severity, message) => {
    findings.push({ severity, message });
  };

  const lines = source.length
    ? source.split(/\r\n|\r|\n/).length
    : 0;

  if (!source.trim()) {
    add("error", "The selected file is empty.");
    return {
      lines,
      elements: 0,
      findings,
      scripts: 0,
      styles: 0
    };
  }

  if (!/^\uFEFF?\s*<!doctype\s+html\b/i.test(source)) {
    add("warning", "HTML doctype is missing or not at the beginning.");
  }

  if (source.charCodeAt(0) === 0xFEFF) {
    add("info", "A leading byte-order mark (BOM) was found.");
  }

  if (source.length > 2_000_000) {
    add("warning", "Large HTML file: review performance before processing.");
  }

  if (/<!--(?![\s\S]*?-->)/.test(source)) {
    add("warning", "A possible unclosed HTML comment was detected.");
  }

  if (/\{\{[\s\S]*?\}\}|<%[\s\S]*?%>|\$\{[\s\S]*?\}/.test(source)) {
    add(
      "info",
      "Template markers were detected. Preserve them during refactoring."
    );
  }

  let doc;

  try {
    doc = new DOMParser().parseFromString(source, "text/html");
  } catch {
    add("error", "The browser could not parse the HTML.");
    return {
      lines,
      elements: 0,
      findings,
      scripts: 0,
      styles: 0
    };
  }

  const elements = [...doc.querySelectorAll("*")];
  const idCounts = new Map();

  for (const element of elements) {
    const id = element.getAttribute("id");

    if (id) {
      idCounts.set(id, (idCounts.get(id) || 0) + 1);
    }

    for (const attribute of [...element.attributes]) {
      const name = attribute.name.toLowerCase();
      const value = attribute.value.trim();

      if (/^on[a-z]+$/i.test(name)) {
        add(
          "warning",
          `Inline event handler found: ${name} on <${element.localName}>.`
        );
      }

      if (
        ["href", "src", "action", "formaction", "xlink:href"].includes(name) &&
        /^\s*javascript\s*:/i.test(value)
      ) {
        add(
          "error",
          `Potentially unsafe javascript: URL in ${name} on <${element.localName}>.`
        );
      }
    }
  }

  for (const [id, count] of idCounts) {
    if (count > 1) {
      add("warning", `Duplicate id="${id}" found ${count} times.`);
    }
  }

  const scripts = doc.querySelectorAll("script").length;
  const styles = doc.querySelectorAll("style, link[rel~='stylesheet']").length;

  if (scripts > 0) {
    add(
      "info",
      `${scripts} script element(s) found. Review before changing script content.`
    );
  }

  if (styles > 0) {
    add("info", `${styles} stylesheet reference(s) or style block(s) found.`);
  }

  if (findings.length === 0) {
    add("info", "No issues were detected by these basic checks.");
  }

  add(
    "info",
    "This is a heuristic report, not a complete HTML validator or security audit."
  );

  return {
    lines,
    elements: elements.length,
    findings,
    scripts,
    styles
  };
}
