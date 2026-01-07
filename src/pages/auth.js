import { expect } from '@playwright/test';

export class Auth {
  constructor(page) {
    this.page = page;
    this.baseUrl = 'https://opensource-demo.orangehrmlive.com';
    this.title = /OrangeHRM/i;
    this.userName = page.locator('input[placeholder="Username"]');
    this.password = page.locator('input[placeholder="Password"]');
    this.loginButton = page.locator('button[type="submit"]');
    this.dashboardTitle = page.locator('//span[h6[text()="Dashboard"]]'); // added
  }

  // Go to login page
  async gotoLoginPage() {
    await this.page.goto(this.baseUrl);
  }

  // Log in user
  async userLogin(userName, password) {
    await expect(this.userName).toBeEnabled();
    await expect(this.userName).toBeVisible();
    await this.userName.fill(userName);

    await expect(this.password).toBeEnabled();
    await expect(this.password).toBeVisible();
    await this.password.fill(password);

    await expect(this.loginButton).toBeEnabled();
    await expect(this.loginButton).toBeVisible();
    await this.loginButton.click();
  }

  // Verify dashboard is visible after login
  async verifyDashboardVisible() {
    await expect(this.dashboardTitle).toBeVisible({ timeout: 10000 });
  }
}
