import { chromium } from 'playwright';
import fs from 'node:fs/promises';
import path from 'node:path';

const projects = [
  { name: 'sredsimplify', url: 'https://sredsimplify.com/' },
  { name: 'aidiy-docs', url: 'https://docs.yiw.me/' },
  { name: 'yiw-portfolio', url: 'https://www.yiw.me/' },
  { name: 'fitlogic', url: 'https://fitlogic.vercel.app/' },
  { name: 'dietcopilot', url: 'https://dietcopilot.vercel.app/' },
  { name: 'splitbase', url: 'https://split.yiw.me/' },
];

const outputDir = path.resolve('assets/projects');

await fs.mkdir(outputDir, { recursive: true });

const browser = await chromium.launch({ headless: true });

try {
  const context = await browser.newContext({
    viewport: { width: 1440, height: 900 },
    deviceScaleFactor: 1,
  });

  for (const project of projects) {
    const page = await context.newPage();

    try {
      await page.goto(project.url, {
        waitUntil: 'domcontentloaded',
        timeout: 60_000,
      });

      await page.waitForTimeout(3000);

      const outputPath = path.join(outputDir, `${project.name}.png`);
      await page.screenshot({
        path: outputPath,
        fullPage: false,
      });

      console.log(`Captured ${project.url} -> ${outputPath}`);
    } catch (error) {
      console.error(`Failed to capture ${project.url}:`, error.message);
      throw error;
    } finally {
      await page.close();
    }
  }
} finally {
  await browser.close();
}
