const { test, expect } = require('@playwright/test');
test('homepage loads', async ({ page }) => {
  await page.goto('/');
  await expect(page).toHaveTitle(/.+/);
  await expect(page.locator('h1')).toBeVisible();
});
