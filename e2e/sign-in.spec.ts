import { expect, test } from '@playwright/test'

for (const width of [390, 820, 1440]) {
  for (const colorScheme of ['light', 'dark'] as const) {
    test(`sign-in at ${width}px in ${colorScheme}`, async ({ page }) => {
      await page.setViewportSize({ width, height: 850 })
      await page.emulateMedia({ colorScheme })
      await page.goto('/#/projects')
      await page.reload()
      await expect(page.getByRole('heading', { name: 'APEX' })).toBeVisible()
      await expect(page.getByRole('button', { name: 'Continue with Google' })).toBeVisible()
      expect(await page.evaluate(() => document.documentElement.scrollWidth)).toBe(width)
      await page.screenshot({ path: `docs/ui-check/sign-in-${width}-${colorScheme}.png` })
      await page.getByRole('button', { name: 'Email me a link' }).click()
      await expect(page.getByLabel('Email address')).toBeFocused()
    })
  }
}
