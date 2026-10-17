
import { analyzeHtml } from "./analyzer.js";
import { buildConservativeRefactor } from "./refactor.js";

const MAX_FILE_SIZE = 20 * 1024 * 1024;

const $ = (id) => document.getElementById(id);

const fileInput = $("fileInput");
const fileInfo = $("fileInfo");
const status = $("status");
const analyzeBtn = $("analyzeBtn");
const cleanBtn = $("cleanBtn");
const downloadBtn = $("downloadBtn");
const output = $("output");
const findingsList = $("findings");

let selectedFile = null;
let originalText = null;
let outputText = null;
let latestReport = null;

function setStatus(message) {
  status.textContent = message;
}

function resetReport() {
  latestReport = null;
  outputText = null;
  output.value = "";

  $("lineCount").textContent = "—";
  $("elementCount").textContent = "—";
  $("findingCount").textContent = "—";

  findingsList.replaceChildren();

  const item = document.createElement("li");
  item.textContent = "Analyze a file to see the report.";
  findingsList.append(item);

  cleanBtn.disabled = true;
  downloadBtn.disabled = true;
}

function renderReport(report) {
  $("lineCount").textContent = String(report.lines);
  $("elementCount").textContent = String(report.elements);
  $("findingCount").textContent = String(report.findings.length);

  findingsList.replaceChildren();

  for (const finding of report.findings) {
    const item = document.createElement("li");

    item.className =
      finding.severity === "error"
        ? "finding-error"
        : finding.severity === "warning"
          ? "finding-warning"
          : "finding-info";

    item.textContent =
      `[${finding.severity.toUpperCase()}] ${finding.message}`;

    findingsList.append(item);
  }
}

fileInput.addEventListener("change", async () => {
  selectedFile = fileInput.files?.[0] || null;
  originalText = null;

  resetReport();

  if (!selectedFile) {
    fileInfo.textContent = "No file selected.";
    analyzeBtn.disabled = true;
    setStatus("Ready.");
    return;
  }

  if (!/\.(html|htm)$/i.test(selectedFile.name)) {
    fileInfo.textContent = "Unsupported file type.";
    analyzeBtn.disabled = true;
    setStatus("Choose an .html or .htm file.");
    return;
  }

  if (selectedFile.size > MAX_FILE_SIZE) {
    fileInfo.textContent = "File exceeds the 20 MB limit.";
    analyzeBtn.disabled = true;
    setStatus("File too large.");
    return;
  }

  fileInfo.textContent =
    `${selectedFile.name} · ${selectedFile.size.toLocaleString()} bytes`;

  setStatus("Reading file locally…");

  try {
    originalText = await selectedFile.text();
    analyzeBtn.disabled = false;
    setStatus("File loaded. Ready to analyze.");
  } catch {
    originalText = null;
    analyzeBtn.disabled = true;
    setStatus("Could not read this file.");
  }
});

analyzeBtn.addEventListener("click", () => {
  if (originalText === null) return;

  try {
    latestReport = analyzeHtml(originalText);
    renderReport(latestReport);
    cleanBtn.disabled = false;
    setStatus("Analysis complete. Review the findings.");
  } catch (error) {
    setStatus(`Analysis failed: ${error.message}`);
  }
});

cleanBtn.addEventListener("click", () => {
  if (originalText === null) return;

  try {
    const options = {
      removeBom: $("removeBom").checked,
      normalizeLines: $("normalizeLines").checked
    };

    const result = buildConservativeRefactor(originalText, options);

    outputText = result.source;
    output.value = outputText;
    downloadBtn.disabled = false;

    const summary = result.changes.length
      ? result.changes.join(", ")
      : "No changes needed";

    setStatus(`Cleaned copy ready. ${summary}. Original file is unchanged.`);
  } catch (error) {
    outputText = null;
    output.value = "";
    downloadBtn.disabled = true;
    setStatus(`Cleanup failed: ${error.message}`);
  }
});

downloadBtn.addEventListener("click", () => {
  if (outputText === null || !selectedFile) return;

  const blob = new Blob([outputText], {
    type: "text/html;charset=utf-8"
  });

  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  const baseName = selectedFile.name.replace(/\.(html|htm)$/i, "");

  link.href = url;
  link.download = `${baseName}.refactored.html`;

  document.body.append(link);
  link.click();
  link.remove();

  setTimeout(() => URL.revokeObjectURL(url), 1000);

  setStatus("Download requested.");
});
