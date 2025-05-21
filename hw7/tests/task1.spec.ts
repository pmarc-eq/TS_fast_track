import { test, expect } from '@playwright/test';

test('Verify example.com contents', async ({ page }) => {
    await page.goto("https://example.com/");

    expect(await page.title()).toBe("Example Domain");
    
    expect(page.url()).toContain("example.com");

    expect(await page.textContent('body')).toMatch(/This domain is for use in illustrative examples/);

    await expect(page.locator('h1')).toHaveText("Example Domain");
});
