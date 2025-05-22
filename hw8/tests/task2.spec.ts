import { test, expect } from '@playwright/test';

test('Verify task2 webpage contents', async ({ page }) => {
    await page.goto("https://demo.guru99.com/test/radio.html");

    expect(await page.getByRole('checkbox').nth(0).check()).toBeTruthy
    expect(await page.getByRole('checkbox').nth(1).check()).toBeTruthy
    expect(await page.getByRole('checkbox').nth(2).check()).toBeTruthy

    expect(await page.getByRole('checkbox').nth(0).isChecked()).toBeTruthy
    expect(await page.getByRole('checkbox').nth(1).isChecked()).toBeTruthy
    expect(await page.getByRole('checkbox').nth(2).isChecked()).toBeTruthy

    expect(await page.getByRole('checkbox').nth(0).uncheck()).toBeTruthy
    expect(await page.getByRole('checkbox').nth(1).uncheck()).toBeTruthy
    expect(await page.getByRole('checkbox').nth(2).uncheck()).toBeTruthy

    expect(await page.getByRole('checkbox').nth(0).isChecked()).toBeFalsy
    expect(await page.getByRole('checkbox').nth(1).isChecked()).toBeFalsy
    expect(await page.getByRole('checkbox').nth(2).isChecked()).toBeFalsy
});