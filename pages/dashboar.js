import { expect } from '@playwright/test';

export class DashboardPage {
  constructor(page) {
    this.page = page;
    this.dashboardUrl = 'https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index';
    this.dashboardTitle = page.locator('//span[h6[text()="Dashboard"]]');
  }
  async goto() {
    await this.page.goto(this.dashboardUrl);
  }

  async verifyDashboardLoaded() {
    await expect(this.page).toHaveURL(/dashboard/);
    await expect(this.dashboardTitle).toBeVisible({ timeout: 6000 });
  }
}
