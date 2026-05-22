import { chromium } from 'playwright';
import fs from 'fs';

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 375, height: 667 } });
  await page.goto('http://localhost:3000/Portfolio/', { waitUntil: 'networkidle' });
  await page.waitForTimeout(1000);
  await page.evaluate(() => window.scrollTo(0, 100));
  await page.waitForTimeout(500);
  await page.screenshot({ path: 'scrolled.png' });
  await browser.close();
  const base64 = fs.readFileSync('scrolled.png', { encoding: 'base64' });
  console.log(base64.substring(0, 100) + '...');
  fs.writeFileSync('base64.txt', base64);
})();
