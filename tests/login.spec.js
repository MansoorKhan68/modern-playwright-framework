import { test, expect } from '@playwright/test';

test.describe('OrangeHRM Dashboard', () => {

  test('Dashboard loads after login', async ({ page }) => {
    // Go directly to dashboard page
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index');
    // Verify URL
    await expect(page).toHaveURL(/dashboard/);
    await expect(page.locator('//span[h6[text()="Dashboard"]]')).toBeVisible({timeout: 6000});

  });

});
