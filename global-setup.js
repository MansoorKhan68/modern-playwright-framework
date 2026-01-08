import { chromium, expect } from '@playwright/test';
import {Auth} from './src//pages/auth.js'
import dotenv from 'dotenv';


// Load environment variables from .env
dotenv.config();

export default async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  const auth = new Auth(page);
  const userName = process.env.USERNAME;
  console.log('USERNAME:', process.env.USERNAME ? 'SET' : 'NOT SET');
  const password = process.env.PASSWORD;
  console.log('PASSWORD:', process.env.PASSWORD ? 'SET' : 'NOT SET');
  await auth.gotoLoginPage()
  await auth.userLogin(userName, password);
  
  // Save login session
  await page.context().storageState({ path: 'auth.json' });
  await browser.close();
};
