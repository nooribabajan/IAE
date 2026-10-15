
export function buildCleanCopy(original, options = {}) {
  let output = String(original);

  if (options.removeBom) {
    output = output.replace(/^\uFEFF/, "");
  }

  if (options.normalizeLines) {
    output = output.replace(/\r\n?/g, "\n");
  }

  return output;
}
