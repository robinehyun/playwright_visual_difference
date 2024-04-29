const { test, expect } = require('@playwright/test');

test.describe('Shopify Homepage', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('https://www.zwift.com/');
        const acceptBtn = await page.locator('#truste-consent-button');

        await acceptBtn.click();

    });

    test('Validate Home Page', async ({ page }) => {
        await expect(page.url()).toContain('/')

    });

    test('Accessibility icon in footer', async ({ page }) => {
        await expect(page.locator('[href*=\'www.essentialaccessibility.com\']')).toBeVisible();
        await page.click('[href*=\'www.essentialaccessibility.com\']');
        await expect(page.url()).toContain('https://www.levelaccess.com/a/zwift');
    });
});
