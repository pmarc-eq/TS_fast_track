import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
    await page.goto("https://example.com/");

    const title = await page.title();
    expect(title).toBe("Example Domain");
    
    expect(page.url()).toContain("example.com");

    const body_text = await page.textContent('body');
    expect(body_text).toMatch(/This domain is for use in illustrative examples/);

    const h1_loc = page.locator('h1')
    await expect(h1_loc).toHaveText("Example Domain");
});
