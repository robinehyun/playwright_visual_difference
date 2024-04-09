import { test, expect } from '@playwright/test';

test.describe('Zwift Homepage Test', () => {
    test.beforeEach(async ({page}) => {
        await page.goto('https://www.zwift.com/');
        const acceptBtn = await page.locator('#truste-consent-button');

        await acceptBtn.click();
    })

    test('Visual Comparison Test Demo', async ({ page }) => {
        // await page.goto('https://www.zwift.com/');
        await page.getByTestId('primary-nav-right').getByTestId('button-create-account').click();
        await page.screenshot({
            fullPage: true,
            path: `create-account.png`
        })
        await expect(page).toHaveScreenshot();
    });
})

