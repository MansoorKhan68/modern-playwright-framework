import { test, expect } from '@playwright/test';
import { DashboardPage } from '../../pages/dashboar';

test.describe('OrangeHRM Dashboard', () => {

  test('Dashboard loads after login', async ({ page }) => {
    const dashboard = DashboardPage(page);
    await dashboard.gotoDashboard();
    await dashboard.verifyDashboard();
  });

});
