# Playwright + TypeScript Exercises

A hands-on collection of 70+ Playwright Test specs written in TypeScript, covering the core techniques used in real UI test automation: locator strategies, synchronisation, complex widgets, data-driven testing, debugging and reporting.

## Tech stack

- [Playwright Test](https://playwright.dev/) with TypeScript
- Allure, HTML, JUnit and JSON reporters
- `csv-parse` and `xlsx` for data-driven tests

## Getting started

```bash
npm install
npx playwright install chromium
npx playwright test                       # run all tests
npx playwright test tests/assertions.spec.ts   # run one file
npx playwright test --ui                  # open UI mode
npx playwright show-report html-report    # open the HTML report
```

More commands are in [Playwright notes.md](Playwright%20notes.md).

## Project structure

```
tests/        Test specs, one topic per file
testdata/     Test data for data-driven tests (JSON, CSV, Excel)
uploads/      Sample files used by the file-upload tests
playwright.config.ts   Reporters, retries, trace/screenshot/video settings
```

## What's covered

| Area | Examples |
|---|---|
| Locators | Built-in locators, CSS, XPath and XPath axes |
| Actions | Mouse and keyboard actions, drag and drop, scrolling, infinite scroll |
| Widgets | Single, multi-select, hidden, dynamic and auto-suggest dropdowns; jQuery and Bootstrap date pickers |
| Tables | Static, dynamic and paginated tables |
| Browser features | Frames, tabs, popups, dialogs, Shadow DOM, cookies, browser contexts, authenticated popups |
| Files | File upload and download |
| Assertions | Hard vs soft assertions, auto-waiting and timeouts |
| Test organisation | Hooks, grouping, tagging, annotations |
| Data-driven testing | Parameterised tests from arrays, JSON, CSV and Excel |
| Debugging & reporting | Tracing, screenshots, visual comparison, multiple reporters including Allure |

## Configuration highlights

- Traces, videos and screenshots kept only for failed tests
- Retries enabled on CI, `forbidOnly` guard against stray `test.only`
- JUnit and JSON results written to `results/` for CI integration

## Author

**Ravi Kapadia**, QA Automation Engineer · [LinkedIn](https://www.linkedin.com/in/ravi-kapadia-b169ab240) · [GitHub](https://github.com/rvikapadia9)
