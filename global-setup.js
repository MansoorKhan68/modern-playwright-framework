import { chromium, expect } from '@playwright/test';

export default async () => {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();

  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  await page.fill('input[placeholder="Username"]', 'Admin');
  await page.fill('input[placeholder="Password"]', 'admin123');
  await page.click('button[type="submit"]');
  await expect(page.locator('//span[h6[text()="Dashboard"]]')).toBeVisible();
  // Save login session
  await page.context().storageState({ path: 'auth.json' });

  await browser.close();
};
