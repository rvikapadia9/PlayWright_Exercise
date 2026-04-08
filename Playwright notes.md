# Playwright Test Commands Cheatsheet

### 🔹 Run Tests

**Run all tests**
```shell
npx playwright test
```
**Run in ui mode**
```shell
npx playwright test --ui
```
**Run in headed mode**
```shell
npx playwright test --headed
```

### 🔹 Run Tests in Specific Browser

**Run in Chromium, Firefox, or WebKit**
```shell
npx playwright test --browser=chromium
npx playwright test --browser=firefox
npx playwright test --browser=webkit
```

**Browser + headed mode**
```shell
npx playwright test --browser=chromium --headed
```

### 🔹 Run Specific Test File

**Run file**
```shell
npx playwright test mytest.spec.ts
```

**File + headed**
```shell
npx playwright test mytest.spec.ts --headed
```

**File + browser**
```shell
npx playwright test mytest.spec.ts --browser=chromium
```

**File + browser + headed**
```shell
npx playwright test mytest.spec.ts --browser=chromium --headed
```

### 🔹 Run Specific Test Case

**Run test case by title**
```shell
npx playwright test mytest.spec.ts -g "Verify Page title"
```

**Test case + headed**
```shell
npx playwright test mytest.spec.ts -g "Verify Page title" --headed
```

**Test case + browser**
```shell
npx playwright test mytest.spec.ts -g "Verify Page title" --browser=chromium
```

**Test case + browser + headed**
```shell
npx playwright test mytest.spec.ts -g "Verify Page title" --browser=chromium --headed
```

### 🔹 Run Tests in Parallel

**Run tests with x workers**
```shell
npx playwright test --workers=3
```

**Parallel + headed**
```shell
npx playwright test --workers=3 --headed
```

**Parallel + browser**
```shell
npx playwright test --workers=3 --browser=chromium
```

**Parallel + browser + headed**
```shell
npx playwright test --workers=3 --browser=chromium --headed
```

### 🔹 Parallel Execution – File / Test Case

**File + parallel**
```shell
npx playwright test mytest.spec.ts --workers=3
```

**Specific test + parallel**
```shell
npx playwright test mytest.spec.ts -g "Verify Page title" --workers=3
```

**Test + parallel + browser + headed**
```shell
npx playwright test mytest.spec.ts -g "Verify Page title" --workers=3 --browser=chromium --headed
```
**debug test step by step**
```shell
npx playwright test --debug
```



---------------------------------------------------------------------------------------------------

PlayWright Locators
1.Built in locators
2.Css
3.Xpath

1.Built in locators--

We need tooo use  page fixtures
