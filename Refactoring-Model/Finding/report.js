{
  "schemaVersion": "unified-1.0",
  "timestamp": "2026-10-17T08:33:19.403Z",
  "fileName": "Refactoring_Workbench_two_warnings_addressed.html",
  "fileType": "html",
  "sourceBytes": 111895,
  "operations": [
    "html",
    "roles",
    "inventory",
    "clean"
  ],
  "findings": [
    {
      "level": "info",
      "title": "DYNAMIC OR CONDITIONAL CSS ROLE",
      "detail": "#unifiedOperations label has no static match, but an exact selector token is mentioned in embedded JavaScript. The reference may be conditional or string-based; verify the relevant workflow before changing it.",
      "operation": "Role & residue audit"
    },
    {
      "level": "info",
      "title": "DYNAMIC OR CONDITIONAL CSS ROLE",
      "detail": "#unifiedOperations input has no static match, but an exact selector token is mentioned in embedded JavaScript. The reference may be conditional or string-based; verify the relevant workflow before changing it.",
      "operation": "Role & residue audit"
    },
    {
      "level": "info",
      "title": "DYNAMIC OR CONDITIONAL CSS ROLE",
      "detail": "#unifiedParameters .param-grid has no static match, but an exact selector token is mentioned in embedded JavaScript. The reference may be conditional or string-based; verify the relevant workflow before changing it.",
      "operation": "Role & residue audit"
    },
    {
      "level": "info",
      "title": "DYNAMIC OR CONDITIONAL CSS ROLE",
      "detail": "#unifiedParameters .param has no static match, but an exact selector token is mentioned in embedded JavaScript. The reference may be conditional or string-based; verify the relevant workflow before changing it.",
      "operation": "Role & residue audit"
    },
    {
      "level": "info",
      "title": "DYNAMIC OR CONDITIONAL CSS ROLE",
      "detail": "#unifiedParameters input[type=text] has no static match, but an exact selector token is mentioned in embedded JavaScript. The reference may be conditional or string-based; verify the relevant workflow before changing it.",
      "operation": "Role & residue audit"
    },
    {
      "level": "info",
      "title": "DYNAMIC OR CONDITIONAL CSS ROLE",
      "detail": "#unifiedParameters input[type=file] has no static match, but an exact selector token is mentioned in embedded JavaScript. The reference may be conditional or string-based; verify the relevant workflow before changing it.",
      "operation": "Role & residue audit"
    },
    {
      "level": "info",
      "title": "DYNAMIC OR CONDITIONAL CSS ROLE",
      "detail": "#unifiedParameters select has no static match, but an exact selector token is mentioned in embedded JavaScript. The reference may be conditional or string-based; verify the relevant workflow before changing it.",
      "operation": "Role & residue audit"
    },
    {
      "level": "info",
      "title": "DYNAMIC OR CONDITIONAL CSS ROLE",
      "detail": "#unifiedParameters textarea has no static match, but an exact selector token is mentioned in embedded JavaScript. The reference may be conditional or string-based; verify the relevant workflow before changing it.",
      "operation": "Role & residue audit"
    },
    {
      "level": "info",
      "title": "DYNAMIC OR CONDITIONAL CSS ROLE",
      "detail": "#unifiedWorkspace .item.info has no static match, but an exact selector token is mentioned in embedded JavaScript. The reference may be conditional or string-based; verify the relevant workflow before changing it.",
      "operation": "Role & residue audit"
    },
    {
      "level": "info",
      "title": "DYNAMIC OR CONDITIONAL CSS ROLE",
      "detail": "#unifiedParameters .param-grid has no static match, but an exact selector token is mentioned in embedded JavaScript. The reference may be conditional or string-based; verify the relevant workflow before changing it.",
      "operation": "Role & residue audit"
    },
    {
      "level": "info",
      "title": "DYNAMIC OR CONDITIONAL CSS ROLE",
      "detail": ".item has no static match, but an exact selector token is mentioned in embedded JavaScript. The reference may be conditional or string-based; verify the relevant workflow before changing it.",
      "operation": "Role & residue audit"
    },
    {
      "level": "info",
      "title": "DYNAMIC OR CONDITIONAL CSS ROLE",
      "detail": ".item.warning has no static match, but an exact selector token is mentioned in embedded JavaScript. The reference may be conditional or string-based; verify the relevant workflow before changing it.",
      "operation": "Role & residue audit"
    },
    {
      "level": "info",
      "title": "DYNAMIC OR CONDITIONAL CSS ROLE",
      "detail": ".item.error has no static match, but an exact selector token is mentioned in embedded JavaScript. The reference may be conditional or string-based; verify the relevant workflow before changing it.",
      "operation": "Role & residue audit"
    },
    {
      "level": "info",
      "title": "DYNAMIC OR CONDITIONAL CSS ROLE",
      "detail": ".item.info has no static match, but an exact selector token is mentioned in embedded JavaScript. The reference may be conditional or string-based; verify the relevant workflow before changing it.",
      "operation": "Role & residue audit"
    },
    {
      "level": "info",
      "title": "DYNAMIC OR CONDITIONAL CSS ROLE",
      "detail": ".item p has no static match, but an exact selector token is mentioned in embedded JavaScript. The reference may be conditional or string-based; verify the relevant workflow before changing it.",
      "operation": "Role & residue audit"
    },
    {
      "level": "info",
      "title": "DYNAMIC OR CONDITIONAL CSS ROLE",
      "detail": ".badge has no static match, but an exact selector token is mentioned in embedded JavaScript. The reference may be conditional or string-based; verify the relevant workflow before changing it.",
      "operation": "Role & residue audit"
    },
    {
      "level": "info",
      "title": "Cleanup made no changes",
      "detail": "No source bytes were changed. no leading BOM was present; line endings were already LF or no line endings needed normalization. This is a no-op result, not an error.",
      "operation": "Safe cleanup"
    }
  ],
  "operationResults": {
    "html": {
      "lines": 353,
      "elements": 395,
      "bytes": 111895,
      "findings": []
    },
    "roles": {
      "timestamp": "2026-10-17T08:33:19.793Z",
      "summary": {
        "elements": 395,
        "uniqueIds": 103,
        "uniqueClasses": 21,
        "cssSelectors": 62,
        "unmatchedCssCandidates": 16,
        "jsDeclarations": 239,
        "unreferencedJsCandidates": 0,
        "possibleOverrides": 0,
        "duplicateSelectorBlocks": 6,
        "externalScripts": 0,
        "externalStyles": 0,
        "dynamicConstructionDetected": true
      },
      "findings": [
        {
          "level": "info",
          "title": "FRONT-PAGE ROLE MAP",
          "detail": "395 elements inspected; 103 unique IDs and 21 class tokens found. Semantic inventory: 16 headings, 0 images/SVGs, 12 structural containers, 6 navigation controls, 71 interactive controls. Each must be assessed against its intended role and relevant workflow."
        },
        {
          "level": "info",
          "title": "DYNAMIC OR CONDITIONAL CSS ROLE",
          "detail": "#unifiedOperations label has no static match, but an exact selector token is mentioned in embedded JavaScript. The reference may be conditional or string-based; verify the relevant workflow before changing it."
        },
        {
          "level": "info",
          "title": "DYNAMIC OR CONDITIONAL CSS ROLE",
          "detail": "#unifiedOperations input has no static match, but an exact selector token is mentioned in embedded JavaScript. The reference may be conditional or string-based; verify the relevant workflow before changing it."
        },
        {
          "level": "info",
          "title": "DYNAMIC OR CONDITIONAL CSS ROLE",
          "detail": "#unifiedParameters .param-grid has no static match, but an exact selector token is mentioned in embedded JavaScript. The reference may be conditional or string-based; verify the relevant workflow before changing it."
        },
        {
          "level": "info",
          "title": "DYNAMIC OR CONDITIONAL CSS ROLE",
          "detail": "#unifiedParameters .param has no static match, but an exact selector token is mentioned in embedded JavaScript. The reference may be conditional or string-based; verify the relevant workflow before changing it."
        },
        {
          "level": "info",
          "title": "DYNAMIC OR CONDITIONAL CSS ROLE",
          "detail": "#unifiedParameters input[type=text] has no static match, but an exact selector token is mentioned in embedded JavaScript. The reference may be conditional or string-based; verify the relevant workflow before changing it."
        },
        {
          "level": "info",
          "title": "DYNAMIC OR CONDITIONAL CSS ROLE",
          "detail": "#unifiedParameters input[type=file] has no static match, but an exact selector token is mentioned in embedded JavaScript. The reference may be conditional or string-based; verify the relevant workflow before changing it."
        },
        {
          "level": "info",
          "title": "DYNAMIC OR CONDITIONAL CSS ROLE",
          "detail": "#unifiedParameters select has no static match, but an exact selector token is mentioned in embedded JavaScript. The reference may be conditional or string-based; verify the relevant workflow before changing it."
        },
        {
          "level": "info",
          "title": "DYNAMIC OR CONDITIONAL CSS ROLE",
          "detail": "#unifiedParameters textarea has no static match, but an exact selector token is mentioned in embedded JavaScript. The reference may be conditional or string-based; verify the relevant workflow before changing it."
        },
        {
          "level": "info",
          "title": "DYNAMIC OR CONDITIONAL CSS ROLE",
          "detail": "#unifiedWorkspace .item.info has no static match, but an exact selector token is mentioned in embedded JavaScript. The reference may be conditional or string-based; verify the relevant workflow before changing it."
        },
        {
          "level": "info",
          "title": "DYNAMIC OR CONDITIONAL CSS ROLE",
          "detail": "#unifiedParameters .param-grid has no static match, but an exact selector token is mentioned in embedded JavaScript. The reference may be conditional or string-based; verify the relevant workflow before changing it."
        },
        {
          "level": "info",
          "title": "DYNAMIC OR CONDITIONAL CSS ROLE",
          "detail": ".item has no static match, but an exact selector token is mentioned in embedded JavaScript. The reference may be conditional or string-based; verify the relevant workflow before changing it."
        },
        {
          "level": "info",
          "title": "DYNAMIC OR CONDITIONAL CSS ROLE",
          "detail": ".item.warning has no static match, but an exact selector token is mentioned in embedded JavaScript. The reference may be conditional or string-based; verify the relevant workflow before changing it."
        },
        {
          "level": "info",
          "title": "DYNAMIC OR CONDITIONAL CSS ROLE",
          "detail": ".item.error has no static match, but an exact selector token is mentioned in embedded JavaScript. The reference may be conditional or string-based; verify the relevant workflow before changing it."
        },
        {
          "level": "info",
          "title": "DYNAMIC OR CONDITIONAL CSS ROLE",
          "detail": ".item.info has no static match, but an exact selector token is mentioned in embedded JavaScript. The reference may be conditional or string-based; verify the relevant workflow before changing it."
        },
        {
          "level": "info",
          "title": "DYNAMIC OR CONDITIONAL CSS ROLE",
          "detail": ".item p has no static match, but an exact selector token is mentioned in embedded JavaScript. The reference may be conditional or string-based; verify the relevant workflow before changing it."
        },
        {
          "level": "info",
          "title": "DYNAMIC OR CONDITIONAL CSS ROLE",
          "detail": ".badge has no static match, but an exact selector token is mentioned in embedded JavaScript. The reference may be conditional or string-based; verify the relevant workflow before changing it."
        }
      ]
    },
    "inventory": {
      "rules": 57,
      "results": [
        {
          "level": "info",
          "title": "USED — static selector evidence",
          "detail": ".eyebrow · definitions: 1 · matched DOM elements: 15 · specificity: 0-1-0."
        },
        {
          "level": "info",
          "title": "REPEATED SELECTOR — review declarations",
          "detail": ".muted is defined 2 times at source orders 9, 10. Specificity 0-1-0; declarations: color: rgb(167, 181, 204); line-height: 1.55; margin-top: 0px; margin-right: 0px; margin-bottom: 0px; margin-left: 0px; max-width: 850px. Repeated selectors are not automatically defects. Preserve responsive/context-specific rules and additive declarations unless a tested consolidation is justified."
        },
        {
          "level": "info",
          "title": "USED — static selector evidence",
          "detail": ".muted · definitions: 2 · matched DOM elements: 1 · specificity: 0-1-0."
        },
        {
          "level": "info",
          "title": "USED — static selector evidence",
          "detail": ".help · definitions: 1 · matched DOM elements: 16 · specificity: 0-1-0 · JS token references: help."
        },
        {
          "level": "info",
          "title": "USED — static selector evidence",
          "detail": ".panel · definitions: 1 · matched DOM elements: 22 · specificity: 0-1-0."
        },
        {
          "level": "info",
          "title": "USED — static selector evidence",
          "detail": ".tabs · definitions: 1 · matched DOM elements: 1 · specificity: 0-1-0."
        },
        {
          "level": "info",
          "title": "USED — static selector evidence",
          "detail": ".tab · definitions: 1 · matched DOM elements: 6 · specificity: 0-1-0 · JS token references: tab."
        },
        {
          "level": "info",
          "title": "USED — static selector evidence",
          "detail": ".tab.active · definitions: 1 · matched DOM elements: 1 · specificity: 0-2-0 · JS token references: tab, active."
        },
        {
          "level": "info",
          "title": "USED — static selector evidence",
          "detail": ".pane · definitions: 1 · matched DOM elements: 7 · specificity: 0-1-0 · JS token references: pane."
        },
        {
          "level": "info",
          "title": "USED — static selector evidence",
          "detail": ".pane.active · definitions: 1 · matched DOM elements: 2 · specificity: 0-2-0 · JS token references: pane, active."
        },
        {
          "level": "info",
          "title": "USED — static selector evidence",
          "detail": ".legacy-workspace · definitions: 1 · matched DOM elements: 1 · specificity: 0-1-0."
        },
        {
          "level": "info",
          "title": "USED — static selector evidence",
          "detail": ".legacy-footer · definitions: 1 · matched DOM elements: 1 · specificity: 0-1-0."
        },
        {
          "level": "info",
          "title": "USED — static selector evidence",
          "detail": "#unifiedWorkspace · definitions: 1 · matched DOM elements: 1 · specificity: 1-0-0."
        },
        {
          "level": "info",
          "title": "RESPONSIVE SELECTOR REUSE — review cascade context",
          "detail": "#unifiedOperations is defined 2 times at source orders 20, 29. Specificity 1-0-0; declarations: grid-template-columns: repeat(2, minmax(0px, 1fr)); grid-template-columns: 1fr. Repeated selectors are not automatically defects. Preserve responsive/context-specific rules and additive declarations unless a tested consolidation is justified."
        },
        {
          "level": "info",
          "title": "USED — static selector evidence",
          "detail": "#unifiedOperations · definitions: 2 · matched DOM elements: 1 · specificity: 1-0-0 · JS token references: unifiedOperations."
        },
        {
          "level": "info",
          "title": "USED — static selector evidence",
          "detail": "#unifiedOperations label · definitions: 1 · matched DOM elements: 0 · specificity: 1-0-1 · JS token references: unifiedOperations."
        },
        {
          "level": "info",
          "title": "USED — static selector evidence",
          "detail": "#unifiedOperations input · definitions: 1 · matched DOM elements: 0 · specificity: 1-0-1 · JS token references: unifiedOperations."
        },
        {
          "level": "info",
          "title": "RESPONSIVE SELECTOR REUSE — review cascade context",
          "detail": "#unifiedParameters .param-grid is defined 2 times at source orders 23, 29. Specificity 1-1-0; declarations: display: grid; grid-template-columns: repeat(2, minmax(0px, 1fr)); row-gap: 12px; column-gap: 12px; grid-template-columns: 1fr. Repeated selectors are not automatically defects. Preserve responsive/context-specific rules and additive declarations unless a tested consolidation is justified."
        },
        {
          "level": "info",
          "title": "USED — static selector evidence",
          "detail": "#unifiedParameters .param-grid · definitions: 2 · matched DOM elements: 0 · specificity: 1-1-0 · JS token references: unifiedParameters."
        },
        {
          "level": "info",
          "title": "USED — static selector evidence",
          "detail": "#unifiedParameters .param · definitions: 1 · matched DOM elements: 0 · specificity: 1-1-0 · JS token references: param, unifiedParameters."
        },
        {
          "level": "info",
          "title": "USED — static selector evidence",
          "detail": "#unifiedParameters input[type=\"text\"] · definitions: 1 · matched DOM elements: 0 · specificity: 1-1-1 · JS token references: unifiedParameters."
        },
        {
          "level": "info",
          "title": "USED — static selector evidence",
          "detail": "#unifiedParameters input[type=\"file\"] · definitions: 1 · matched DOM elements: 0 · specificity: 1-1-1 · JS token references: unifiedParameters."
        },
        {
          "level": "info",
          "title": "USED — static selector evidence",
          "detail": "#unifiedParameters select · definitions: 1 · matched DOM elements: 0 · specificity: 1-0-1 · JS token references: unifiedParameters."
        },
        {
          "level": "info",
          "title": "USED — static selector evidence",
          "detail": "#unifiedParameters textarea · definitions: 1 · matched DOM elements: 0 · specificity: 1-0-1 · JS token references: unifiedParameters."
        },
        {
          "level": "info",
          "title": "USED — static selector evidence",
          "detail": "#unifiedWorkspace .item.info · definitions: 1 · matched DOM elements: 0 · specificity: 1-2-0 · JS token references: item, info."
        },
        {
          "level": "info",
          "title": "RESPONSIVE SELECTOR REUSE — review cascade context",
          "detail": ".row is defined 2 times at source orders 30, 57. Specificity 0-1-0; declarations: display: grid; grid-template-columns: repeat(2, minmax(0px, 1fr)); row-gap: 12px; column-gap: 12px; grid-template-columns: 1fr. Repeated selectors are not automatically defects. Preserve responsive/context-specific rules and additive declarations unless a tested consolidation is justified."
        },
        {
          "level": "info",
          "title": "USED — static selector evidence",
          "detail": ".row · definitions: 2 · matched DOM elements: 9 · specificity: 0-1-0 · JS token references: row."
        },
        {
          "level": "info",
          "title": "USED — static selector evidence",
          "detail": ".field · definitions: 1 · matched DOM elements: 20 · specificity: 0-1-0 · JS token references: field."
        },
        {
          "level": "info",
          "title": "USED — static selector evidence",
          "detail": "textarea.tall · definitions: 1 · matched DOM elements: 7 · specificity: 0-1-1."
        },
        {
          "level": "info",
          "title": "USED — static selector evidence",
          "detail": "button.secondary · definitions: 1 · matched DOM elements: 21 · specificity: 0-1-1."
        },
        {
          "level": "info",
          "title": "USED — static selector evidence",
          "detail": ".actions · definitions: 1 · matched DOM elements: 11 · specificity: 0-1-0."
        },
        {
          "level": "info",
          "title": "RESPONSIVE SELECTOR REUSE — review cascade context",
          "detail": ".stats is defined 2 times at source orders 40, 58. Specificity 0-1-0; declarations: display: grid; grid-template-columns: repeat(4, minmax(0px, 1fr)); row-gap: 9px; column-gap: 9px; grid-template-columns: repeat(2, minmax(0px, 1fr)). Repeated selectors are not automatically defects. Preserve responsive/context-specific rules and additive declarations unless a tested consolidation is justified."
        },
        {
          "level": "info",
          "title": "USED — static selector evidence",
          "detail": ".stats · definitions: 2 · matched DOM elements: 8 · specificity: 0-1-0 · JS token references: stats."
        },
        {
          "level": "info",
          "title": "USED — static selector evidence",
          "detail": ".stat · definitions: 1 · matched DOM elements: 32 · specificity: 0-1-0 · JS token references: stat."
        },
        {
          "level": "info",
          "title": "USED — static selector evidence",
          "detail": ".stat small · definitions: 1 · matched DOM elements: 32 · specificity: 0-1-1 · JS token references: stat."
        },
        {
          "level": "info",
          "title": "USED — static selector evidence",
          "detail": ".stat strong · definitions: 1 · matched DOM elements: 32 · specificity: 0-1-1 · JS token references: stat."
        },
        {
          "level": "info",
          "title": "USED — static selector evidence",
          "detail": ".results · definitions: 1 · matched DOM elements: 9 · specificity: 0-1-0 · JS token references: results."
        },
        {
          "level": "info",
          "title": "USED — static selector evidence",
          "detail": ".item · definitions: 1 · matched DOM elements: 0 · specificity: 0-1-0 · JS token references: item."
        },
        {
          "level": "info",
          "title": "USED — static selector evidence",
          "detail": ".item.warning · definitions: 1 · matched DOM elements: 0 · specificity: 0-2-0 · JS token references: item, warning."
        },
        {
          "level": "info",
          "title": "USED — static selector evidence",
          "detail": ".item.error · definitions: 1 · matched DOM elements: 0 · specificity: 0-2-0 · JS token references: item, error."
        },
        {
          "level": "info",
          "title": "USED — static selector evidence",
          "detail": ".item.info · definitions: 1 · matched DOM elements: 0 · specificity: 0-2-0 · JS token references: item, info."
        },
        {
          "level": "info",
          "title": "USED — static selector evidence",
          "detail": ".item p · definitions: 1 · matched DOM elements: 0 · specificity: 0-1-1 · JS token references: item."
        },
        {
          "level": "info",
          "title": "USED — static selector evidence",
          "detail": ".badge · definitions: 1 · matched DOM elements: 0 · specificity: 0-1-0 · JS token references: badge."
        },
        {
          "level": "info",
          "title": "USED — static selector evidence",
          "detail": ".status · definitions: 1 · matched DOM elements: 10 · specificity: 0-1-0 · JS token references: status."
        },
        {
          "level": "info",
          "title": "USED — static selector evidence",
          "detail": ".diff · definitions: 1 · matched DOM elements: 1 · specificity: 0-1-0 · JS token references: diff."
        },
        {
          "level": "info",
          "title": "USED — static selector evidence",
          "detail": ".check · definitions: 1 · matched DOM elements: 5 · specificity: 0-1-0 · JS token references: check."
        },
        {
          "level": "info",
          "title": "USED — static selector evidence",
          "detail": ".check input · definitions: 1 · matched DOM elements: 5 · specificity: 0-1-1 · JS token references: check."
        },
        {
          "level": "info",
          "title": "CASCADE REVIEW — competing declarations",
          "detail": "77|BUTTON||active.tab|background-color|: .tab { background-color: rgb(28, 41, 65) } [specificity 0-1-0, order 14]; .tab.active { background-color: rgb(125, 211, 252) } [specificity 0-2-0, order 15]; button { background-color: rgb(125, 211, 252) } [specificity 0-0-1, order 36]. Approximate winner: .tab.active { background-color: rgb(125, 211, 252) }. This is an advisory approximation; layers, shorthands, states, and media conditions can change the outcome."
        },
        {
          "level": "info",
          "title": "CASCADE REVIEW — competing declarations",
          "detail": "77|BUTTON||active.tab|color|: .tab { color: rgb(219, 231, 249) } [specificity 0-1-0, order 14]; .tab.active { color: rgb(8, 32, 51) } [specificity 0-2-0, order 15]; button { color: rgb(8, 32, 51) } [specificity 0-0-1, order 36]. Approximate winner: .tab.active { color: rgb(8, 32, 51) }. This is an advisory approximation; layers, shorthands, states, and media conditions can change the outcome."
        },
        {
          "level": "info",
          "title": "CASCADE REVIEW — competing declarations",
          "detail": "77|BUTTON||active.tab|border-top-width|: .tab { border-top-width: 1px } [specificity 0-1-0, order 14]; button { border-top-width: 0px } [specificity 0-0-1, order 36]. Approximate winner: .tab { border-top-width: 1px }. This is an advisory approximation; layers, shorthands, states, and media conditions can change the outcome."
        },
        {
          "level": "info",
          "title": "CASCADE REVIEW — competing declarations",
          "detail": "77|BUTTON||active.tab|border-right-width|: .tab { border-right-width: 1px } [specificity 0-1-0, order 14]; button { border-right-width: 0px } [specificity 0-0-1, order 36]. Approximate winner: .tab { border-right-width: 1px }. This is an advisory approximation; layers, shorthands, states, and media conditions can change the outcome."
        },
        {
          "level": "info",
          "title": "CASCADE REVIEW — competing declarations",
          "detail": "77|BUTTON||active.tab|border-bottom-width|: .tab { border-bottom-width: 1px } [specificity 0-1-0, order 14]; button { border-bottom-width: 0px } [specificity 0-0-1, order 36]. Approximate winner: .tab { border-bottom-width: 1px }. This is an advisory approximation; layers, shorthands, states, and media conditions can change the outcome."
        },
        {
          "level": "info",
          "title": "CASCADE REVIEW — competing declarations",
          "detail": "77|BUTTON||active.tab|border-left-width|: .tab { border-left-width: 1px } [specificity 0-1-0, order 14]; button { border-left-width: 0px } [specificity 0-0-1, order 36]. Approximate winner: .tab { border-left-width: 1px }. This is an advisory approximation; layers, shorthands, states, and media conditions can change the outcome."
        },
        {
          "level": "info",
          "title": "CASCADE REVIEW — competing declarations",
          "detail": "77|BUTTON||active.tab|border-top-style|: .tab { border-top-style: solid } [specificity 0-1-0, order 14]; button { border-top-style: none } [specificity 0-0-1, order 36]. Approximate winner: .tab { border-top-style: solid }. This is an advisory approximation; layers, shorthands, states, and media conditions can change the outcome."
        },
        {
          "level": "info",
          "title": "CASCADE REVIEW — competing declarations",
          "detail": "77|BUTTON||active.tab|border-right-style|: .tab { border-right-style: solid } [specificity 0-1-0, order 14]; button { border-right-style: none } [specificity 0-0-1, order 36]. Approximate winner: .tab { border-right-style: solid }. This is an advisory approximation; layers, shorthands, states, and media conditions can change the outcome."
        },
        {
          "level": "info",
          "title": "CASCADE REVIEW — competing declarations",
          "detail": "77|BUTTON||active.tab|border-bottom-style|: .tab { border-bottom-style: solid } [specificity 0-1-0, order 14]; button { border-bottom-style: none } [specificity 0-0-1, order 36]. Approximate winner: .tab { border-bottom-style: solid }. This is an advisory approximation; layers, shorthands, states, and media conditions can change the outcome."
        },
        {
          "level": "info",
          "title": "CASCADE REVIEW — competing declarations",
          "detail": "77|BUTTON||active.tab|border-left-style|: .tab { border-left-style: solid } [specificity 0-1-0, order 14]; button { border-left-style: none } [specificity 0-0-1, order 36]. Approximate winner: .tab { border-left-style: solid }. This is an advisory approximation; layers, shorthands, states, and media conditions can change the outcome."
        },
        {
          "level": "info",
          "title": "CASCADE REVIEW — competing declarations",
          "detail": "77|BUTTON||active.tab|border-top-color|: .tab { border-top-color: rgb(57, 73, 102) } [specificity 0-1-0, order 14]; .tab.active { border-top-color: rgb(125, 211, 252) } [specificity 0-2-0, order 15]; button { border-top-color: currentcolor } [specificity 0-0-1, order 36]. Approximate winner: .tab.active { border-top-color: rgb(125, 211, 252) }. This is an advisory approximation; layers, shorthands, states, and media conditions can change the outcome."
        },
        {
          "level": "info",
          "title": "CASCADE REVIEW — competing declarations",
          "detail": "77|BUTTON||active.tab|border-right-color|: .tab { border-right-color: rgb(57, 73, 102) } [specificity 0-1-0, order 14]; .tab.active { border-right-color: rgb(125, 211, 252) } [specificity 0-2-0, order 15]; button { border-right-color: currentcolor } [specificity 0-0-1, order 36]. Approximate winner: .tab.active { border-right-color: rgb(125, 211, 252) }. This is an advisory approximation; layers, shorthands, states, and media conditions can change the outcome."
        },
        {
          "level": "info",
          "title": "CASCADE REVIEW — competing declarations",
          "detail": "77|BUTTON||active.tab|border-bottom-color|: .tab { border-bottom-color: rgb(57, 73, 102) } [specificity 0-1-0, order 14]; .tab.active { border-bottom-color: rgb(125, 211, 252) } [specificity 0-2-0, order 15]; button { border-bottom-color: currentcolor } [specificity 0-0-1, order 36]. Approximate winner: .tab.active { border-bottom-color: rgb(125, 211, 252) }. This is an advisory approximation; layers, shorthands, states, and media conditions can change the outcome."
        },
        {
          "level": "info",
          "title": "CASCADE REVIEW — competing declarations",
          "detail": "77|BUTTON||active.tab|border-left-color|: .tab { border-left-color: rgb(57, 73, 102) } [specificity 0-1-0, order 14]; .tab.active { border-left-color: rgb(125, 211, 252) } [specificity 0-2-0, order 15]; button { border-left-color: currentcolor } [specificity 0-0-1, order 36]. Approximate winner: .tab.active { border-left-color: rgb(125, 211, 252) }. This is an advisory approximation; layers, shorthands, states, and media conditions can change the outcome."
        },
        {
          "level": "info",
          "title": "CASCADE REVIEW — competing declarations",
          "detail": "78|BUTTON||tab|background-color|: .tab { background-color: rgb(28, 41, 65) } [specificity 0-1-0, order 14]; button { background-color: rgb(125, 211, 252) } [specificity 0-0-1, order 36]. Approximate winner: .tab { background-color: rgb(28, 41, 65) }. This is an advisory approximation; layers, shorthands, states, and media conditions can change the outcome."
        },
        {
          "level": "info",
          "title": "SHARED — multiple lexical references",
          "detail": "variable $: 483 total lexical occurrences (482 beyond declaration)."
        },
        {
          "level": "info",
          "title": "SHARED — multiple lexical references",
          "detail": "variable reports: 30 total lexical occurrences (29 beyond declaration)."
        },
        {
          "level": "info",
          "title": "SHARED — multiple lexical references",
          "detail": "variable runLog: 21 total lexical occurrences (20 beyond declaration)."
        },
        {
          "level": "info",
          "title": "SHARED — multiple lexical references",
          "detail": "function esc: 8 total lexical occurrences (7 beyond declaration)."
        },
        {
          "level": "info",
          "title": "SHARED — multiple lexical references",
          "detail": "function bytes: 59 total lexical occurrences (58 beyond declaration)."
        },
        {
          "level": "info",
          "title": "SHARED — multiple lexical references",
          "detail": "function fmt: 58 total lexical occurrences (57 beyond declaration)."
        },
        {
          "level": "info",
          "title": "SHARED — multiple lexical references",
          "detail": "function stats: 17 total lexical occurrences (16 beyond declaration)."
        },
        {
          "level": "info",
          "title": "SHARED — multiple lexical references",
          "detail": "function findings: 70 total lexical occurrences (69 beyond declaration)."
        },
        {
          "level": "info",
          "title": "SHARED — multiple lexical references",
          "detail": "function download: 17 total lexical occurrences (16 beyond declaration)."
        },
        {
          "level": "info",
          "title": "SHARED — multiple lexical references",
          "detail": "variable url: 3 total lexical occurrences (2 beyond declaration)."
        },
        {
          "level": "info",
          "title": "SHARED — multiple lexical references",
          "detail": "variable a: 100 total lexical occurrences (99 beyond declaration)."
        },
        {
          "level": "info",
          "title": "SHARED — multiple lexical references",
          "detail": "function readFileInput: 6 total lexical occurrences (5 beyond declaration)."
        },
        {
          "level": "info",
          "title": "SHARED — multiple lexical references",
          "detail": "variable f: 54 total lexical occurrences (53 beyond declaration)."
        },
        {
          "level": "info",
          "title": "REFERENCED — inspect dependency count",
          "detail": "function markupForCommentScan: 1 additional lexical occurrence(s) beyond declaration."
        },
        {
          "level": "info",
          "title": "SHARED — multiple lexical references",
          "detail": "function scanHtmlComments: 3 total lexical occurrences (2 beyond declaration)."
        },
        {
          "level": "info",
          "title": "SHARED — multiple lexical references",
          "detail": "variable markup: 9 total lexical occurrences (8 beyond declaration)."
        },
        {
          "level": "info",
          "title": "SHARED — multiple lexical references",
          "detail": "variable p: 12 total lexical occurrences (11 beyond declaration)."
        },
        {
          "level": "info",
          "title": "SHARED — multiple lexical references",
          "detail": "variable start: 8 total lexical occurrences (7 beyond declaration)."
        },
        {
          "level": "info",
          "title": "SHARED — multiple lexical references",
          "detail": "variable end: 4 total lexical occurrences (3 beyond declaration)."
        },
        {
          "level": "info",
          "title": "SHARED — multiple lexical references",
          "detail": "function analyzeHtml: 3 total lexical occurrences (2 beyond declaration)."
        },
        {
          "level": "info",
          "title": "SHARED — multiple lexical references",
          "detail": "variable out: 30 total lexical occurrences (29 beyond declaration)."
        },
        {
          "level": "info",
          "title": "SHARED — multiple lexical references",
          "detail": "variable add: 71 total lexical occurrences (70 beyond declaration)."
        },
        {
          "level": "info",
          "title": "SHARED — multiple lexical references",
          "detail": "variable doc: 60 total lexical occurrences (59 beyond declaration)."
        },
        {
          "level": "info",
          "title": "SHARED — multiple lexical references",
          "detail": "variable comments: 12 total lexical occurrences (11 beyond declaration)."
        },
        {
          "level": "info",
          "title": "SHARED — multiple lexical references",
          "detail": "variable all: 8 total lexical occurrences (7 beyond declaration)."
        },
        {
          "level": "info",
          "title": "SHARED — multiple lexical references",
          "detail": "variable id: 61 total lexical occurrences (60 beyond declaration)."
        },
        {
          "level": "info",
          "title": "SHARED — multiple lexical references",
          "detail": "variable decoded: 3 total lexical occurrences (2 beyond declaration)."
        },
        {
          "level": "info",
          "title": "SHARED — multiple lexical references",
          "detail": "variable label: 58 total lexical occurrences (57 beyond declaration)."
        },
        {
          "level": "info",
          "title": "SHARED — multiple lexical references",
          "detail": "variable refs: 4 total lexical occurrences (3 beyond declaration)."
        },
        {
          "level": "info",
          "title": "SHARED — multiple lexical references",
          "detail": "variable missing: 10 total lexical occurrences (9 beyond declaration)."
        },
        {
          "level": "info",
          "title": "SHARED — multiple lexical references",
          "detail": "variable rel: 9 total lexical occurrences (8 beyond declaration)."
        },
        {
          "level": "info",
          "title": "SHARED — multiple lexical references",
          "detail": "variable handlers: 5 total lexical occurrences (4 beyond declaration)."
        },
        {
          "level": "info",
          "title": "SHARED — multiple lexical references",
          "detail": "variable local: 8 total lexical occurrences (7 beyond declaration)."
        },
        {
          "level": "info",
          "title": "SHARED — multiple lexical references",
          "detail": "variable v: 41 total lexical occurrences (40 beyond declaration)."
        },
        {
          "level": "info",
          "title": "REFERENCED — inspect dependency count",
          "detail": "variable cssFindings: 1 additional lexical occurrence(s) beyond declaration."
        },
        {
          "level": "info",
          "title": "SHARED — multiple lexical references",
          "detail": "variable scripts: 4 total lexical occurrences (3 beyond declaration)."
        },
        {
          "level": "info",
          "title": "SHARED — multiple lexical references",
          "detail": "function inspectEmbeddedCss: 3 total lexical occurrences (2 beyond declaration)."
        },
        {
          "level": "info",
          "title": "SHARED — multiple lexical references",
          "detail": "variable records: 13 total lexical occurrences (12 beyond declaration)."
        },
        {
          "level": "info",
          "title": "SHARED — multiple lexical references",
          "detail": "variable unsupported: 11 total lexical occurrences (10 beyond declaration)."
        },
        {
          "level": "info",
          "title": "SHARED — multiple lexical references",
          "detail": "variable temp: 11 total lexical occurrences (10 beyond declaration)."
        },
        {
          "level": "info",
          "title": "SHARED — multiple lexical references",
          "detail": "variable rules: 19 total lexical occurrences (18 beyond declaration)."
        },
        {
          "level": "info",
          "title": "SHARED — multiple lexical references",
          "detail": "variable walk: 13 total lexical occurrences (12 beyond declaration)."
        },
        {
          "level": "info",
          "title": "SHARED — multiple lexical references",
          "detail": "variable context: 19 total lexical occurrences (18 beyond declaration)."
        },
        {
          "level": "info",
          "title": "SHARED — multiple lexical references",
          "detail": "variable matched: 12 total lexical occurrences (11 beyond declaration)."
        },
        {
          "level": "info",
          "title": "SHARED — multiple lexical references",
          "detail": "variable prop: 15 total lexical occurrences (14 beyond declaration)."
        },
        {
          "level": "info",
          "title": "SHARED — multiple lexical references",
          "detail": "variable key: 18 total lexical occurrences (17 beyond declaration)."
        },
        {
          "level": "info",
          "title": "SHARED — multiple lexical references",
          "detail": "variable arr: 17 total lexical occurrences (16 beyond declaration)."
        },
        {
          "level": "info",
          "title": "SHARED — multiple lexical references",
          "detail": "variable vals: 4 total lexical occurrences (3 beyond declaration)."
        },
        {
          "level": "info",
          "title": "SHARED — multiple lexical references",
          "detail": "variable first: 24 total lexical occurrences (23 beyond declaration)."
        },
        {
          "level": "info",
          "title": "REFERENCED — inspect dependency count",
          "detail": "variable desc: 1 additional lexical occurrence(s) beyond declaration."
        },
        {
          "level": "info",
          "title": "SHARED — multiple lexical references",
          "detail": "function splitCssSelectorList: 3 total lexical occurrences (2 beyond declaration)."
        },
        {
          "level": "info",
          "title": "SHARED — multiple lexical references",
          "detail": "variable parts: 4 total lexical occurrences (3 beyond declaration)."
        },
        {
          "level": "info",
          "title": "SHARED — multiple lexical references",
          "detail": "variable c: 60 total lexical occurrences (59 beyond declaration)."
        },
        {
          "level": "info",
          "title": "REFERENCED — inspect dependency count",
          "detail": "function cssSpecificity: 1 additional lexical occurrence(s) beyond declaration."
        },
        {
          "level": "info",
          "title": "SHARED — multiple lexical references",
          "detail": "variable x: 90 total lexical occurrences (89 beyond declaration)."
        },
        {
          "level": "info",
          "title": "SHARED — multiple lexical references",
          "detail": "variable ids: 26 total lexical occurrences (25 beyond declaration)."
        },
        {
          "level": "info",
          "title": "SHARED — multiple lexical references",
          "detail": "variable classes: 21 total lexical occurrences (20 beyond declaration)."
        },
        {
          "level": "info",
          "title": "SHARED — multiple lexical references",
          "detail": "variable types: 14 total lexical occurrences (13 beyond declaration)."
        },
        {
          "level": "info",
          "title": "SHARED — multiple lexical references",
          "detail": "function scanDynamicCssUsage: 4 total lexical occurrences (3 beyond declaration)."
        },
        {
          "level": "info",
          "title": "REFERENCED — inspect dependency count",
          "detail": "variable cssBlocks: 1 additional lexical occurrence(s) beyond declaration."
        },
        {
          "level": "info",
          "title": "REFERENCED — inspect dependency count",
          "detail": "variable jsBlocks: 1 additional lexical occurrence(s) beyond declaration."
        },
        {
          "level": "info",
          "title": "SHARED — multiple lexical references",
          "detail": "variable js: 23 total lexical occurrences (22 beyond declaration)."
        },
        {
          "level": "info",
          "title": "SHARED — multiple lexical references",
          "detail": "variable domClasses: 7 total lexical occurrences (6 beyond declaration)."
        },
        {
          "level": "info",
          "title": "SHARED — multiple lexical references",
          "detail": "variable suffix: 5 total lexical occurrences (4 beyond declaration)."
        },
        {
          "level": "info",
          "title": "SHARED — multiple lexical references",
          "detail": "variable constants: 5 total lexical occurrences (4 beyond declaration)."
        },
        {
          "level": "info",
          "title": "SHARED — multiple lexical references",
          "detail": "variable dynamicTokens: 5 total lexical occurrences (4 beyond declaration)."
        },
        {
          "level": "info",
          "title": "REFERENCED — inspect dependency count",
          "detail": "variable args: 1 additional lexical occurrence(s) beyond declaration."
        },
        {
          "level": "info",
          "title": "SHARED — multiple lexical references",
          "detail": "variable arg: 11 total lexical occurrences (10 beyond declaration)."
        },
        {
          "level": "info",
          "title": "SHARED — multiple lexical references",
          "detail": "variable bits: 8 total lexical occurrences (7 beyond declaration)."
        },
        {
          "level": "info",
          "title": "REFERENCED — inspect dependency count",
          "detail": "variable dynamicMarkers: 1 additional lexical occurrence(s) beyond declaration."
        },
        {
          "level": "info",
          "title": "SHARED — multiple lexical references",
          "detail": "variable hasDynamic: 5 total lexical occurrences (4 beyond declaration)."
        },
        {
          "level": "info",
          "title": "SHARED — multiple lexical references",
          "detail": "variable escRe: 4 total lexical occurrences (3 beyond declaration)."
        },
        {
          "level": "info",
          "title": "SHARED — multiple lexical references",
          "detail": "variable sourceOrder: 3 total lexical occurrences (2 beyond declaration)."
        },
        {
          "level": "info",
          "title": "SHARED — multiple lexical references",
          "detail": "variable selectors: 13 total lexical occurrences (12 beyond declaration)."
        },
        {
          "level": "info",
          "title": "SHARED — multiple lexical references",
          "detail": "variable item: 7 total lexical occurrences (6 beyond declaration)."
        },
        {
          "level": "info",
          "title": "SHARED — multiple lexical references",
          "detail": "variable dynamicHits: 5 total lexical occurrences (4 beyond declaration)."
        },
        {
          "level": "info",
          "title": "SHARED — multiple lexical references",
          "detail": "variable unusedSelectors: 4 total lexical occurrences (3 beyond declaration)."
        },
        {
          "level": "info",
          "title": "SHARED — multiple lexical references",
          "detail": "variable matches: 6 total lexical occurrences (5 beyond declaration)."
        },
        {
          "level": "info",
          "title": "REFERENCED — inspect dependency count",
          "detail": "variable missingClasses: 1 additional lexical occurrence(s) beyond declaration."
        },
        {
          "level": "info",
          "title": "REFERENCED — inspect dependency count",
          "detail": "variable dynamicMatch: 1 additional lexical occurrence(s) beyond declaration."
        },
        {
          "level": "info",
          "title": "SHARED — multiple lexical references",
          "detail": "variable literalJsHits: 4 total lexical occurrences (3 beyond declaration)."
        },
        {
          "level": "info",
          "title": "REFERENCED — inspect dependency count",
          "detail": "variable staticEvidence: 1 additional lexical occurrence(s) beyond declaration."
        },
        {
          "level": "info",
          "title": "REFERENCED — inspect dependency count",
          "detail": "variable declarationSummary: 1 additional lexical occurrence(s) beyond declaration."
        },
        {
          "level": "info",
          "title": "SHARED — multiple lexical references",
          "detail": "variable conflicts: 6 total lexical occurrences (5 beyond declaration)."
        },
        {
          "level": "info",
          "title": "REFERENCED — inspect dependency count",
          "detail": "variable elementOrder: 1 additional lexical occurrence(s) beyond declaration."
        },
        {
          "level": "info",
          "title": "SHARED — multiple lexical references",
          "detail": "variable conflictCount: 4 total lexical occurrences (3 beyond declaration)."
        },
        {
          "level": "info",
          "title": "SHARED — multiple lexical references",
          "detail": "variable winner: 5 total lexical occurrences (4 beyond declaration)."
        },
        {
          "level": "info",
          "title": "SHARED — multiple lexical references",
          "detail": "variable declarations: 22 total lexical occurrences (21 beyond declaration)."
        },
        {
          "level": "info",
          "title": "SHARED — multiple lexical references",
          "detail": "variable declRe: 4 total lexical occurrences (3 beyond declaration)."
        },
        {
          "level": "info",
          "title": "SHARED — multiple lexical references",
          "detail": "variable name: 63 total lexical occurrences (62 beyond declaration)."
        },
        {
          "level": "info",
          "title": "SHARED — multiple lexical references",
          "detail": "variable unreferenced: 4 total lexical occurrences (3 beyond declaration)."
        },
        {
          "level": "info",
          "title": "SHARED — multiple lexical references",
          "detail": "variable hits: 5 total lexical occurrences (4 beyond declaration)."
        },
        {
          "level": "info",
          "title": "SHARED — multiple lexical references",
          "detail": "variable count: 24 total lexical occurrences (23 beyond declaration)."
        },
        {
          "level": "info",
          "title": "SHARED — multiple lexical references",
          "detail": "variable exported: 6 total lexical occurrences (5 beyond declaration)."
        },
        {
          "level": "info",
          "title": "SHARED — multiple lexical references",
          "detail": "variable indirect: 3 total lexical occurrences (2 beyond declaration)."
        },
        {
          "level": "info",
          "title": "SHARED — multiple lexical references",
          "detail": "variable level: 54 total lexical occurrences (53 beyond declaration)."
        },
        {
          "level": "info",
          "title": "REFERENCED — inspect dependency count",
          "detail": "variable commentScan: 1 additional lexical occurrence(s) beyond declaration."
        },
        {
          "level": "info",
          "title": "SHARED — multiple lexical references",
          "detail": "variable src: 35 total lexical occurrences (34 beyond declaration)."
        },
        {
          "level": "info",
          "title": "SHARED — multiple lexical references",
          "detail": "variable r: 127 total lexical occurrences (126 beyond declaration)."
        },
        {
          "level": "info",
          "title": "SHARED — multiple lexical references",
          "detail": "function auditRoles: 4 total lexical occurrences (3 beyond declaration)."
        },
        {
          "level": "info",
          "title": "SHARED — multiple lexical references",
          "detail": "variable elements: 21 total lexical occurrences (20 beyond declaration)."
        },
        {
          "level": "info",
          "title": "SHARED — multiple lexical references",
          "detail": "variable roleCounts: 6 total lexical occurrences (5 beyond declaration)."
        },
        {
          "level": "info",
          "title": "REFERENCED — inspect dependency count",
          "detail": "class tokens: 1 additional lexical occurrence(s) beyond declaration."
        },
        {
          "level": "info",
          "title": "SHARED — multiple lexical references",
          "detail": "variable css: 16 total lexical occurrences (15 beyond declaration)."
        },
        {
          "level": "info",
          "title": "REFERENCED — inspect dependency count",
          "detail": "variable htmlOnly: 1 additional lexical occurrence(s) beyond declaration."
        },
        {
          "level": "info",
          "title": "SHARED — multiple lexical references",
          "detail": "variable dynamic: 13 total lexical occurrences (12 beyond declaration)."
        },
        {
          "level": "info",
          "title": "SHARED — multiple lexical references",
          "detail": "variable classConstants: 5 total lexical occurrences (4 beyond declaration)."
        },
        {
          "level": "info",
          "title": "SHARED — multiple lexical references",
          "detail": "variable constructedTokens: 4 total lexical occurrences (3 beyond declaration)."
        },
        {
          "level": "info",
          "title": "SHARED — multiple lexical references",
          "detail": "variable value: 97 total lexical occurrences (96 beyond declaration)."
        },
        {
          "level": "info",
          "title": "SHARED — multiple lexical references",
          "detail": "variable ruleOrder: 3 total lexical occurrences (2 beyond declaration)."
        },
        {
          "level": "info",
          "title": "SHARED — multiple lexical references",
          "detail": "variable raw: 7 total lexical occurrences (6 beyond declaration)."
        },
        {
          "level": "info",
          "title": "SHARED — multiple lexical references",
          "detail": "variable selector: 51 total lexical occurrences (50 beyond declaration)."
        },
        {
          "level": "info",
          "title": "REFERENCED — inspect dependency count",
          "detail": "variable propNames: 1 additional lexical occurrence(s) beyond declaration."
        },
        {
          "level": "info",
          "title": "SHARED — multiple lexical references",
          "detail": "variable tokenMatches: 3 total lexical occurrences (2 beyond declaration)."
        },
        {
          "level": "info",
          "title": "SHARED — multiple lexical references",
          "detail": "variable constructed: 3 total lexical occurrences (2 beyond declaration)."
        },
        {
          "level": "info",
          "title": "REFERENCED — inspect dependency count",
          "detail": "variable jsMention: 1 additional lexical occurrence(s) beyond declaration."
        },
        {
          "level": "info",
          "title": "REFERENCED — inspect dependency count",
          "detail": "variable idRefs: 1 additional lexical occurrence(s) beyond declaration."
        },
        {
          "level": "info",
          "title": "SHARED — multiple lexical references",
          "detail": "variable decls: 5 total lexical occurrences (4 beyond declaration)."
        },
        {
          "level": "info",
          "title": "SHARED — multiple lexical references",
          "detail": "variable jsCandidates: 3 total lexical occurrences (2 beyond declaration)."
        },
        {
          "level": "info",
          "title": "SHARED — multiple lexical references",
          "detail": "variable dynamicDispatch: 3 total lexical occurrences (2 beyond declaration)."
        },
        {
          "level": "info",
          "title": "REFERENCED — inspect dependency count",
          "detail": "variable assignedGlobal: 1 additional lexical occurrence(s) beyond declaration."
        },
        {
          "level": "info",
          "title": "SHARED — multiple lexical references",
          "detail": "variable externalScripts: 13 total lexical occurrences (12 beyond declaration)."
        },
        {
          "level": "info",
          "title": "REFERENCED — inspect dependency count",
          "detail": "variable duplicateRuleCount: 1 additional lexical occurrence(s) beyond declaration."
        },
        {
          "level": "info",
          "title": "SHARED — multiple lexical references",
          "detail": "variable consolidatedReport: 4 total lexical occurrences (3 beyond declaration)."
        },
        {
          "level": "info",
          "title": "SHARED — multiple lexical references",
          "detail": "function runConsolidatedAudit: 3 total lexical occurrences (2 beyond declaration)."
        },
        {
          "level": "info",
          "title": "SHARED — multiple lexical references",
          "detail": "variable source: 125 total lexical occurrences (124 beyond declaration)."
        },
        {
          "level": "info",
          "title": "SHARED — multiple lexical references",
          "detail": "variable role: 22 total lexical occurrences (21 beyond declaration)."
        },
        {
          "level": "info",
          "title": "SHARED — multiple lexical references",
          "detail": "variable runtime: 16 total lexical occurrences (15 beyond declaration)."
        },
        {
          "level": "info",
          "title": "SHARED — multiple lexical references",
          "detail": "variable residue: 14 total lexical occurrences (13 beyond declaration)."
        },
        {
          "level": "info",
          "title": "SHARED — multiple lexical references",
          "detail": "variable suspiciousComments: 3 total lexical occurrences (2 beyond declaration)."
        },
        {
          "level": "info",
          "title": "SHARED — multiple lexical references",
          "detail": "variable inlineHandlers: 3 total lexical occurrences (2 beyond declaration)."
        },
        {
          "level": "info",
          "title": "SHARED — multiple lexical references",
          "detail": "variable checks: 18 total lexical occurrences (17 beyond declaration)."
        },
        {
          "level": "info",
          "title": "SHARED — multiple lexical references",
          "detail": "variable merged: 7 total lexical occurrences (6 beyond declaration)."
        },
        {
          "level": "info",
          "title": "SHARED — multiple lexical references",
          "detail": "variable seen: 10 total lexical occurrences (9 beyond declaration)."
        },
        {
          "level": "info",
          "title": "SHARED — multiple lexical references",
          "detail": "variable report: 57 total lexical occurrences (56 beyond declaration)."
        },
        {
          "level": "info",
          "title": "SHARED — multiple lexical references",
          "detail": "variable rs: 5 total lexical occurrences (4 beyond declaration)."
        },
        {
          "level": "info",
          "title": "SHARED — multiple lexical references",
          "detail": "variable candidateSelect: 4 total lexical occurrences (3 beyond declaration)."
        },
        {
          "level": "info",
          "title": "SHARED — multiple lexical references",
          "detail": "variable o: 5 total lexical occurrences (4 beyond declaration)."
        },
        {
          "level": "info",
          "title": "SHARED — multiple lexical references",
          "detail": "variable s: 174 total lexical occurrences (173 beyond declaration)."
        },
        {
          "level": "info",
          "title": "SHARED — multiple lexical references",
          "detail": "function renderRunLog: 3 total lexical occurrences (2 beyond declaration)."
        },
        {
          "level": "info",
          "title": "SHARED — multiple lexical references",
          "detail": "variable n: 52 total lexical occurrences (51 beyond declaration)."
        },
        {
          "level": "info",
          "title": "SHARED — multiple lexical references",
          "detail": "variable scenario: 10 total lexical occurrences (9 beyond declaration)."
        },
        {
          "level": "info",
          "title": "SHARED — multiple lexical references",
          "detail": "variable run: 30 total lexical occurrences (29 beyond declaration)."
        },
        {
          "level": "info",
          "title": "SHARED — multiple lexical references",
          "detail": "variable cleanResult: 6 total lexical occurrences (5 beyond declaration)."
        },
        {
          "level": "info",
          "title": "SHARED — multiple lexical references",
          "detail": "function invalidateHtmlDerived: 3 total lexical occurrences (2 beyond declaration)."
        },
        {
          "level": "info",
          "title": "SHARED — multiple lexical references",
          "detail": "function invalidateDataReport: 3 total lexical occurrences (2 beyond declaration)."
        },
        {
          "level": "info",
          "title": "SHARED — multiple lexical references",
          "detail": "function invalidateCodeReport: 3 total lexical occurrences (2 beyond declaration)."
        },
        {
          "level": "info",
          "title": "SHARED — multiple lexical references",
          "detail": "variable original: 11 total lexical occurrences (10 beyond declaration)."
        },
        {
          "level": "info",
          "title": "SHARED — multiple lexical references",
          "detail": "variable output: 30 total lexical occurrences (29 beyond declaration)."
        },
        {
          "level": "info",
          "title": "SHARED — multiple lexical references",
          "detail": "variable changes: 13 total lexical occurrences (12 beyond declaration)."
        },
        {
          "level": "info",
          "title": "SHARED — multiple lexical references",
          "detail": "variable next: 11 total lexical occurrences (10 beyond declaration)."
        },
        {
          "level": "info",
          "title": "SHARED — multiple lexical references",
          "detail": "variable before: 38 total lexical occurrences (37 beyond declaration)."
        },
        {
          "level": "info",
          "title": "SHARED — multiple lexical references",
          "detail": "function compareLines: 3 total lexical occurrences (2 beyond declaration)."
        },
        {
          "level": "info",
          "title": "SHARED — multiple lexical references",
          "detail": "variable A: 26 total lexical occurrences (25 beyond declaration)."
        },
        {
          "level": "info",
          "title": "SHARED — multiple lexical references",
          "detail": "variable dp: 7 total lexical occurrences (6 beyond declaration)."
        },
        {
          "level": "info",
          "title": "SHARED — multiple lexical references",
          "detail": "variable i: 121 total lexical occurrences (120 beyond declaration)."
        },
        {
          "level": "info",
          "title": "SHARED — multiple lexical references",
          "detail": "variable d: 48 total lexical occurrences (47 beyond declaration)."
        },
        {
          "level": "info",
          "title": "SHARED — multiple lexical references",
          "detail": "variable linesA: 4 total lexical occurrences (3 beyond declaration)."
        },
        {
          "level": "info",
          "title": "REFERENCED — inspect dependency count",
          "detail": "function parseCSV: 1 additional lexical occurrence(s) beyond declaration."
        },
        {
          "level": "info",
          "title": "SHARED — multiple lexical references",
          "detail": "variable rows: 19 total lexical occurrences (18 beyond declaration)."
        },
        {
          "level": "info",
          "title": "SHARED — multiple lexical references",
          "detail": "variable row: 21 total lexical occurrences (20 beyond declaration)."
        },
        {
          "level": "info",
          "title": "REFERENCED — inspect dependency count",
          "detail": "function detectDelimiter: 1 additional lexical occurrence(s) beyond declaration."
        },
        {
          "level": "info",
          "title": "SHARED — multiple lexical references",
          "detail": "variable comma: 4 total lexical occurrences (3 beyond declaration)."
        },
        {
          "level": "info",
          "title": "SHARED — multiple lexical references",
          "detail": "function profileData: 3 total lexical occurrences (2 beyond declaration)."
        },
        {
          "level": "info",
          "title": "SHARED — multiple lexical references",
          "detail": "variable trimmed: 3 total lexical occurrences (2 beyond declaration)."
        },
        {
          "level": "info",
          "title": "SHARED — multiple lexical references",
          "detail": "variable data: 39 total lexical occurrences (38 beyond declaration)."
        },
        {
          "level": "info",
          "title": "SHARED — multiple lexical references",
          "detail": "variable nodes: 7 total lexical occurrences (6 beyond declaration)."
        },
        {
          "level": "info",
          "title": "SHARED — multiple lexical references",
          "detail": "variable truncated: 7 total lexical occurrences (6 beyond declaration)."
        },
        {
          "level": "info",
          "title": "SHARED — multiple lexical references",
          "detail": "variable keys: 15 total lexical occurrences (14 beyond declaration)."
        },
        {
          "level": "info",
          "title": "SHARED — multiple lexical references",
          "detail": "variable items: 30 total lexical occurrences (29 beyond declaration)."
        },
        {
          "level": "info",
          "title": "SHARED — multiple lexical references",
          "detail": "variable delimiter: 7 total lexical occurrences (6 beyond declaration)."
        },
        {
          "level": "info",
          "title": "SHARED — multiple lexical references",
          "detail": "variable rawHeaders: 3 total lexical occurrences (2 beyond declaration)."
        },
        {
          "level": "info",
          "title": "SHARED — multiple lexical references",
          "detail": "variable width: 7 total lexical occurrences (6 beyond declaration)."
        },
        {
          "level": "info",
          "title": "SHARED — multiple lexical references",
          "detail": "variable headers: 8 total lexical occurrences (7 beyond declaration)."
        },
        {
          "level": "info",
          "title": "SHARED — multiple lexical references",
          "detail": "variable missingByCol: 5 total lexical occurrences (4 beyond declaration)."
        },
        {
          "level": "info",
          "title": "SHARED — multiple lexical references",
          "detail": "variable duplicateRows: 5 total lexical occurrences (4 beyond declaration)."
        },
        {
          "level": "info",
          "title": "SHARED — multiple lexical references",
          "detail": "variable rowSeen: 3 total lexical occurrences (2 beyond declaration)."
        },
        {
          "level": "info",
          "title": "SHARED — multiple lexical references",
          "detail": "variable sig: 3 total lexical occurrences (2 beyond declaration)."
        },
        {
          "level": "info",
          "title": "SHARED — multiple lexical references",
          "detail": "function scanCode: 4 total lexical occurrences (3 beyond declaration)."
        },
        {
          "level": "info",
          "title": "SHARED — multiple lexical references",
          "detail": "variable lines: 13 total lexical occurrences (12 beyond declaration)."
        },
        {
          "level": "info",
          "title": "SHARED — multiple lexical references",
          "detail": "variable repairBaseline: 8 total lexical occurrences (7 beyond declaration)."
        },
        {
          "level": "info",
          "title": "SHARED — multiple lexical references",
          "detail": "function structuralInventory: 6 total lexical occurrences (5 beyond declaration)."
        },
        {
          "level": "info",
          "title": "REFERENCED — inspect dependency count",
          "detail": "variable ruleBlocks: 1 additional lexical occurrence(s) beyond declaration."
        },
        {
          "level": "info",
          "title": "REFERENCED — inspect dependency count",
          "detail": "function renderBaseline: 1 additional lexical occurrence(s) beyond declaration."
        },
        {
          "level": "info",
          "title": "SHARED — multiple lexical references",
          "detail": "variable b: 97 total lexical occurrences (96 beyond declaration)."
        },
        {
          "level": "info",
          "title": "SHARED — multiple lexical references",
          "detail": "function sha256: 5 total lexical occurrences (4 beyond declaration)."
        },
        {
          "level": "info",
          "title": "SHARED — multiple lexical references",
          "detail": "variable digest: 3 total lexical occurrences (2 beyond declaration)."
        },
        {
          "level": "info",
          "title": "SHARED — multiple lexical references",
          "detail": "variable select: 7 total lexical occurrences (6 beyond declaration)."
        },
        {
          "level": "info",
          "title": "SHARED — multiple lexical references",
          "detail": "variable current: 9 total lexical occurrences (8 beyond declaration)."
        },
        {
          "level": "info",
          "title": "SHARED — multiple lexical references",
          "detail": "variable proposed: 15 total lexical occurrences (14 beyond declaration)."
        },
        {
          "level": "info",
          "title": "SHARED — multiple lexical references",
          "detail": "variable prefix: 5 total lexical occurrences (4 beyond declaration)."
        },
        {
          "level": "info",
          "title": "SHARED — multiple lexical references",
          "detail": "variable preserved: 5 total lexical occurrences (4 beyond declaration)."
        },
        {
          "level": "info",
          "title": "SHARED — multiple lexical references",
          "detail": "variable pass: 10 total lexical occurrences (9 beyond declaration)."
        },
        {
          "level": "info",
          "title": "REFERENCED — inspect dependency count",
          "detail": "function repairStatusAfterApply: 1 additional lexical occurrence(s) beyond declaration."
        },
        {
          "level": "info",
          "title": "SHARED — multiple lexical references",
          "detail": "variable post: 8 total lexical occurrences (7 beyond declaration)."
        },
        {
          "level": "info",
          "title": "SHARED — multiple lexical references",
          "detail": "variable unifiedState: 51 total lexical occurrences (50 beyond declaration)."
        },
        {
          "level": "info",
          "title": "REFERENCED — inspect dependency count",
          "detail": "variable unifiedOps: 1 additional lexical occurrence(s) beyond declaration."
        },
        {
          "level": "info",
          "title": "SHARED — multiple lexical references",
          "detail": "function detectUnifiedType: 3 total lexical occurrences (2 beyond declaration)."
        },
        {
          "level": "info",
          "title": "SHARED — multiple lexical references",
          "detail": "variable ext: 6 total lexical occurrences (5 beyond declaration)."
        },
        {
          "level": "info",
          "title": "SHARED — multiple lexical references",
          "detail": "function unifiedTypeLabel: 6 total lexical occurrences (5 beyond declaration)."
        },
        {
          "level": "info",
          "title": "SHARED — multiple lexical references",
          "detail": "function renderUnifiedOps: 3 total lexical occurrences (2 beyond declaration)."
        },
        {
          "level": "info",
          "title": "SHARED — multiple lexical references",
          "detail": "variable host: 6 total lexical occurrences (5 beyond declaration)."
        },
        {
          "level": "info",
          "title": "SHARED — multiple lexical references",
          "detail": "function renderUnifiedParams: 4 total lexical occurrences (3 beyond declaration)."
        },
        {
          "level": "info",
          "title": "SHARED — multiple lexical references",
          "detail": "variable prior: 3 total lexical occurrences (2 beyond declaration)."
        },
        {
          "level": "info",
          "title": "SHARED — multiple lexical references",
          "detail": "variable selected: 11 total lexical occurrences (10 beyond declaration)."
        },
        {
          "level": "info",
          "title": "SHARED — multiple lexical references",
          "detail": "variable h: 11 total lexical occurrences (10 beyond declaration)."
        },
        {
          "level": "info",
          "title": "SHARED — multiple lexical references",
          "detail": "variable el: 44 total lexical occurrences (43 beyond declaration)."
        },
        {
          "level": "info",
          "title": "SHARED — multiple lexical references",
          "detail": "variable file: 30 total lexical occurrences (29 beyond declaration)."
        },
        {
          "level": "info",
          "title": "SHARED — multiple lexical references",
          "detail": "variable t: 20 total lexical occurrences (19 beyond declaration)."
        },
        {
          "level": "info",
          "title": "REFERENCED — inspect dependency count",
          "detail": "function loadUnifiedFile: 1 additional lexical occurrence(s) beyond declaration."
        },
        {
          "level": "info",
          "title": "REFERENCED — inspect dependency count",
          "detail": "variable previous: 1 additional lexical occurrence(s) beyond declaration."
        },
        {
          "level": "info",
          "title": "SHARED — multiple lexical references",
          "detail": "variable cb: 3 total lexical occurrences (2 beyond declaration)."
        },
        {
          "level": "info",
          "title": "REFERENCED — inspect dependency count",
          "detail": "function concernOnly: 1 additional lexical occurrence(s) beyond declaration."
        },
        {
          "level": "info",
          "title": "REFERENCED — inspect dependency count",
          "detail": "function cssStandaloneAudit: 1 additional lexical occurrence(s) beyond declaration."
        },
        {
          "level": "info",
          "title": "SHARED — multiple lexical references",
          "detail": "variable style: 40 total lexical occurrences (39 beyond declaration)."
        },
        {
          "level": "info",
          "title": "SHARED — multiple lexical references",
          "detail": "variable order: 21 total lexical occurrences (20 beyond declaration)."
        },
        {
          "level": "info",
          "title": "SHARED — multiple lexical references",
          "detail": "variable sel: 8 total lexical occurrences (7 beyond declaration)."
        },
        {
          "level": "info",
          "title": "REFERENCED — inspect dependency count",
          "detail": "variable ctx: 1 additional lexical occurrence(s) beyond declaration."
        },
        {
          "level": "info",
          "title": "SHARED — multiple lexical references",
          "detail": "variable contexts: 5 total lexical occurrences (4 beyond declaration)."
        },
        {
          "level": "info",
          "title": "REFERENCED — inspect dependency count",
          "detail": "variable selectorCount: 1 additional lexical occurrence(s) beyond declaration."
        },
        {
          "level": "info",
          "title": "SHARED — multiple lexical references",
          "detail": "variable importantCount: 3 total lexical occurrences (2 beyond declaration)."
        },
        {
          "level": "info",
          "title": "SHARED — multiple lexical references",
          "detail": "function pushUnified: 6 total lexical occurrences (5 beyond declaration)."
        },
        {
          "level": "info",
          "title": "SHARED — multiple lexical references",
          "detail": "variable declarationKey: 3 total lexical occurrences (2 beyond declaration)."
        },
        {
          "level": "info",
          "title": "SHARED — multiple lexical references",
          "detail": "variable title: 69 total lexical occurrences (68 beyond declaration)."
        },
        {
          "level": "info",
          "title": "SHARED — multiple lexical references",
          "detail": "variable m: 51 total lexical occurrences (50 beyond declaration)."
        },
        {
          "level": "info",
          "title": "SHARED — multiple lexical references",
          "detail": "variable existingIndex: 4 total lexical occurrences (3 beyond declaration)."
        },
        {
          "level": "info",
          "title": "SHARED — multiple lexical references",
          "detail": "variable candidate: 5 total lexical occurrences (4 beyond declaration)."
        },
        {
          "level": "info",
          "title": "REFERENCED — inspect dependency count",
          "detail": "variable existing: 1 additional lexical occurrence(s) beyond declaration."
        },
        {
          "level": "info",
          "title": "SHARED — multiple lexical references",
          "detail": "function runUnified: 3 total lexical occurrences (2 beyond declaration)."
        },
        {
          "level": "info",
          "title": "SHARED — multiple lexical references",
          "detail": "variable ops: 7 total lexical occurrences (6 beyond declaration)."
        },
        {
          "level": "info",
          "title": "SHARED — multiple lexical references",
          "detail": "variable lang: 8 total lexical occurrences (7 beyond declaration)."
        },
        {
          "level": "info",
          "title": "SHARED — multiple lexical references",
          "detail": "variable cleaned: 14 total lexical occurrences (13 beyond declaration)."
        },
        {
          "level": "info",
          "title": "SHARED — multiple lexical references",
          "detail": "variable checked: 34 total lexical occurrences (33 beyond declaration)."
        },
        {
          "level": "info",
          "title": "SHARED — multiple lexical references",
          "detail": "variable evidence: 20 total lexical occurrences (19 beyond declaration)."
        },
        {
          "level": "info",
          "title": "SHARED — multiple lexical references",
          "detail": "variable at: 16 total lexical occurrences (15 beyond declaration)."
        },
        {
          "level": "info",
          "title": "REFERENCED — inspect dependency count",
          "detail": "variable invDelta: 1 additional lexical occurrence(s) beyond declaration."
        },
        {
          "level": "info",
          "title": "SHARED — multiple lexical references",
          "detail": "variable rr: 4 total lexical occurrences (3 beyond declaration)."
        },
        {
          "level": "info",
          "title": "SHARED — multiple lexical references",
          "detail": "variable second: 11 total lexical occurrences (10 beyond declaration)."
        },
        {
          "level": "info",
          "title": "SHARED — multiple lexical references",
          "detail": "variable high: 4 total lexical occurrences (3 beyond declaration)."
        }
      ],
      "hasDynamic": true,
      "inventory": {
        "sourceBytes": 111895,
        "htmlComments": 0,
        "embeddedCssBytes": 4085,
        "embeddedJsBytes": 84694,
        "cssSelectors": 57,
        "usedSelectors": 42,
        "unusedSelectorCandidates": 0,
        "dynamicSelectors": 0,
        "duplicateSelectors": 5,
        "cascadeConflicts": 696,
        "domClasses": 21,
        "domIds": 103,
        "jsDeclarations": 239,
        "unreferencedDeclarationCandidates": 0,
        "sharedDeclarations": 204,
        "externalScripts": 0,
        "externalStylesheets": 0,
        "hasDynamic": true
      },
      "resultsTruncated": true
    },
    "clean": {
      "changes": [],
      "originalBytes": 111895,
      "outputBytes": 111895,
      "unchanged": true
    }
  }
        }
