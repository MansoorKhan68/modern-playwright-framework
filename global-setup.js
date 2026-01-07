import { chromium, expect } from '@playwright/test';
import {Auth} from './src//pages/auth.js'
import dotenv from 'dotenv';


// Load environment variables from .env
dotenv.config();

export default async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  const auth = new Auth(page);
  const userName = process.env.HRM_USERNAME;
  const password = process.env.HRM_PASSWORD;
  if (!userName || !password) {
    console.warn(
      'Credentials not available (PR pipeline). Skipping auth setup.'
    );
  }
  await auth.gotoLoginPage()
  await auth.userLogin(userName, password);
  await auth.verifyDashboardVisible();
  
  // Save login session
  await page.context().storageState({ path: 'auth.json' });
  await browser.close();
};
