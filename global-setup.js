import { chromium, expect } from '@playwright/test';
import {Auth} from './src//pages/auth.js'
import dotenv from 'dotenv';


// Load environment variables from .env
dotenv.config();

export default async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  const auth = new Auth(page);
  const userName = 'Admin';
  const password = 'admin123';
  
  await auth.gotoLoginPage()
  await auth.userLogin(userName, password);
  await auth.verifyDashboardVisible();
  
  // Save login session
  await page.context().storageState({ path: 'auth.json' });
  await browser.close();
};
