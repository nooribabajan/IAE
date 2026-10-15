
# Template V2 Refactor Model

Version: 0.1.0

A local-first HTML inspection and conservative cleanup tool.

## Features

- Select a local `.html` or `.htm` file.
- Inspect basic HTML patterns and possible issues.
- Report duplicate IDs, inline event handlers, and javascript: URLs.
- Optionally remove a leading BOM.
- Optionally normalize line endings.
- Preview and download a separate HTML copy.
- No backend, external CDN, or third-party JavaScript dependency.

## Run

1. Upload the project files to a GitHub repository.
2. Open `index.html` in a modern browser, or serve the repository using
   a local static HTTP server.
3. Select an HTML file and choose **Analyze HTML**.
4. Review the report.
5. Choose the cleanup options and select **Build cleaned copy**.
6. Review the output and download it.

Some mobile browsers restrict local-file module loading. If direct opening
does not work, serve the files over HTTP or HTTPS.

## Safety model

The original file is never overwritten.

The cleanup engine only performs two optional transformations:

- Remove a leading Unicode BOM.
- Normalize CRLF and CR line endings to LF.

The tool does not execute scripts from the selected HTML file. It uses
DOMParser to inspect markup. DOMParser may repair malformed markup during
parsing, so its parsed document is used for advisory analysis only; it is
not used to generate the output.

Findings are heuristics, not a complete validator or security audit.
A report with no warnings does not guarantee that the HTML is safe or valid.

## Limitations

Version 0.1.0 does not perform structural HTML refactoring, JavaScript
refactoring, CSS optimization, or template-aware transformations.

Before adding such transformations, create representative test fixtures
from the actual Template V2 project. Preserve template placeholders,
script contents, whitespace-sensitive text, comments, and existing behavior.

## Privacy

The application reads the selected file in the browser. It does not
intentionally send file contents to a server.

## Next milestone

Template V2-specific analysis and refactoring, backed by test fixtures
and before/after comparisons.
