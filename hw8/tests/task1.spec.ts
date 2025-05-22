import { test, expect } from '@playwright/test';

test('Verify task1 webpage contents', async ({ page }) => {
    await page.goto("https://the-internet.herokuapp.com/login");

    await page.locator("#username").fill("wrong_un")
    await page.locator("#password").fill("wrong_pw")
    await page.locator("button", {hasText: "Login"}).click()

    await expect(page.locator("h2")).toHaveText("Login Page");
    await expect(page.locator("div.flash.flash")).toHaveText(/Your username is invalid/)

    await page.locator("#username").fill("tomsmith")
    await page.locator("#password").fill("SuperSecretPassword!")
    await page.locator("button", {hasText: "Login"}).click()

    await expect(page.locator("h2")).toHaveText("Secure Area");
    await expect(page.locator("div.flash.flash")).toHaveText(/You logged into a secure area!/)

    await page.locator("a.button.secondary.radius", {hasText: "Logout"}).click()

    await expect(page.locator("h2")).toHaveText("Login Page");
    await expect(page.locator("div.flash.flash")).toHaveText(/You logged out of the secure area!/)
});