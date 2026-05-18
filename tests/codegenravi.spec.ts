import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://testautomationpractice.blogspot.com/');
  await page.getByRole('textbox', { name: 'Enter Name' }).click();
  await page.getByRole('textbox', { name: 'Enter Name' }).fill('ravi');
  await page.getByRole('textbox', { name: 'Enter EMail' }).click();
  await page.getByRole('textbox', { name: 'Enter EMail' }).fill('rvjaoaduad');
  await page.getByText('Colors: Red Blue Green Yellow').click();
  await page.getByLabel('Colors:').selectOption('blue');
  await page.getByLabel('Colors:').selectOption('yellow');
  await page.getByLabel('Colors:').selectOption('red');
  await page.getByText('Colors:').click();
  await page.getByText('Sorted List:').click();
  await page.getByLabel('Sorted List:').selectOption('cheetah');
  await page.getByLabel('Sorted List:').selectOption('deer');
  await page.getByLabel('Sorted List:').selectOption('elephant');
  await page.getByText('Date Picker 1 (mm/dd/yyyy):').click();
  await page.getByText('Date Picker 3: (Select a Date').click();
  await page.getByText('to Submit').click();
  await page.getByText('GUI Elements Form Elements').click();
  await page.getByLabel('Sorted List:').selectOption('cheetah');
  await page.getByRole('button', { name: 'Point Me' }).click();
  page.once('dialog', dialog => {
    console.log(`Dialog message: ${dialog.message()}`);
    dialog.dismiss().catch(() => {});
  });
  await page.getByRole('button', { name: 'Simple Alert' }).click();
  page.once('dialog', dialog => {
    console.log(`Dialog message: ${dialog.message()}`);
    dialog.dismiss().catch(() => {});
  });
  await page.getByRole('button', { name: 'Confirmation Alert' }).click();
  page.once('dialog', dialog => {
    console.log(`Dialog message: ${dialog.message()}`);
    dialog.dismiss().catch(() => {});
  }); 
  await page.getByRole('button', { name: 'Prompt Alert' }).click();

});