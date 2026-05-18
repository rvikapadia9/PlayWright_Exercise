import { test, expect, devices } from '@playwright/test';

test.use({
  ...devices['iPhone 15 Pro Max'],
});

test('test', async ({ page }) => {
});