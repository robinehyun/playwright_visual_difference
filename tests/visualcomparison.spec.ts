import { test, expect } from '@playwright/test';

test.describe('Zwift Homepage Test', () => {
    test.beforeEach(async ({page}) => {
        await page.goto('https://www.zwift.com/');
        const acceptBtn = await page.locator('#truste-consent-button');

        await acceptBtn.click();
    })

    test('Create Account/Membership Options Page', async ({ page }) => {
        await page.getByTestId('primary-nav-right').getByTestId('button-create-account').click();
        await page.screenshot({
            fullPage: true,
            path: `create-account.png`
        });
        await expect(page).toHaveScreenshot({
            maxDiffPixelRatio: 0.7,
        });
    });

    test('Authenticated Membership Page', async ({ page }) => {
       await page.getByTestId('primary-nav-login-link').click();
       await page.getByLabel('Email').fill('robin.yun@zwift.com');
       await page.getByLabel('Password').fill('----');
       await page.click('button[type="submit"]', {timeout: 3000});
       await expect(page.getByTestId('Account-secondarynav-link')).toBeVisible();
       await page.screenshot({
           fullPage: true,
           path:`authenticated-membership-page.png`
       });
       await expect(page).toHaveScreenshot({
           maxDiffPixelRatio: 0.7,
       });
    });
})

