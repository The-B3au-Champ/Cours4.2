import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.wikipedia.org/');
  await page.screenshot({ path:"screenshot.png" });
  await page.getByRole('button', { name: 'Search' }).click();
});