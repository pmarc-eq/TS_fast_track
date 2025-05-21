import { test, expect } from '@playwright/test';

test('Verify playwright.dev contents', async ({ page }) => {
    await page.goto("https://playwright.dev/");
    
    expect(page.url().startsWith("https://playwright.dev")).toBeTruthy();

    const link = page.locator('a', {hasText: "Get Started"})
    await expect(link).toHaveCount(1);
});