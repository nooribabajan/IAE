
# Test Fixtures

Before implementing aggressive refactoring, test these cases.

## Fixture 1: Leading BOM

Input starts with a Unicode BOM.

Expected:
- Analyzer reports a BOM.
- With the option enabled, output does not start with a BOM.
- With the option disabled, the BOM remains.

## Fixture 2: Line endings

Input uses CRLF and CR line endings.

Expected:
- With normalization enabled, all line endings are LF.
- With normalization disabled, line endings remain unchanged.

## Fixture 3: Duplicate IDs

Input:

<div id="sample">A</div>
<div id="sample">B</div>

Expected:
- Analyzer reports a duplicate ID.
- Cleanup does not rename either ID.

## Fixture 4: Inline event handler

Input:

<button onclick="doSomething()">Run</button>

Expected:
- Analyzer reports an inline event handler.
- Cleanup does not remove or rewrite the handler.

## Fixture 5: Template markers

Input:

<div>{{ user.name }}</div>

Expected:
- Analyzer identifies possible template markers.
- Output preserves the marker exactly.

## Fixture 6: Script content

Input includes JavaScript inside a script element.

Expected:
- Output preserves the script text exactly.
- The application never executes the selected file's script.

## Fixture 7: Whitespace-sensitive content

Input includes pre, textarea, and code elements.

Expected:
- Their text content remains unchanged.

## Fixture 8: Download

Expected:
- Download creates a separate `.refactored.html` file.
- The selected source file remains untouched.
