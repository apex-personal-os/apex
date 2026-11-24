# APEX

A personal operating system for projects, commitments and long-term Momentum.

B0 is in progress. The current build has an installable, responsive sign-in interface and a workspace shell. Planning and product defaults are in PLAN.md, DECISIONS.md and DESIGN_NOTES.md.

## Run locally

Install Node.js 24, then use `npm ci` and `npm run dev`. To verify the production build, run `npm test`, `npm run build`, `npx playwright install chromium` and `npm run test:e2e`.

## Set up GitHub Pages

In this repo, open Settings → Pages and set Source to GitHub Actions. Verify the site has a separate hostname before setting the repository Actions variable APEX_PAGES_ENABLED to true. The deploy job reports the deployed URL when it succeeds. APEX uses hash routes so direct links work on a project site.

## Connect a separate Supabase project

Sign in to the Supabase dashboard and choose New project. Pick the Free plan, name it APEX, choose an available region near you and set a database password in Supabase. Keep it private.

Add the project URL and its public publishable key as GitHub Actions repository variables named VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY. For local development copy .env.example to .env.local and fill in the same public values. Keep any secret or service-role key out of browser builds.

Before deploying with a connected project, configure the single owner in Supabase Auth, disable new user sign-ups, and set the Site URL and allowed redirect URLs to the APEX site. Verify Google and magic-link sign-in with the owner and verify that a second account cannot gain access. These cloud steps are pending.

## Gmail briefings (B3)

Complete these steps once B3 supplies the Apps Script source and the Supabase mailer endpoint.

1. Create a separate Google account for APEX. Try a pattern such as `apex.briefings.<suffix>@gmail.com` and choose any available address you like.
2. While signed in as the sender, open [Google Account Security](https://myaccount.google.com/security), choose **2-Step Verification**, and follow Google's prompts to turn it on.
3. Open [Google Apps Script](https://script.google.com/) and check the account avatar. It should show the dedicated APEX account. Choose **New project**, name it **APEX Mailer**, paste the B3 source into the editor, and save.
4. Open **Project Settings** (gear icon) → **Script properties** → **Add script property**. Add `APEX_SECRET` (the shared mailer secret), `RECIPIENT_EMAIL` (your personal address), and `APEX_FUNCTION_URL` (the full Supabase mailer endpoint). Save. Keep the shared secret in Script Properties and Supabase secrets.
5. In the editor select **sendTestEmail** and click **Run**. If asked, click **Review permissions** and select the dedicated sender account. When Google shows **Google hasn't verified this app** for your own APEX Mailer project, review the app name and permissions, click **Advanced** → **Go to APEX Mailer (unsafe)** → **Allow**. Google may omit that warning or vary the button text depending on the account. Use this flow only for the script you created and reviewed.
6. Open **Triggers** (clock icon) → **Add Trigger**. Select **pollOutbox**, **Time-driven**, **Minutes timer**, and **Every 5 minutes**. Save while signed in as the APEX sender.
7. Open **Settings → Email status → Send test email** in APEX. Confirm the message arrives in your personal Gmail inbox and shows **APEX** as the display name and your dedicated Gmail address as the sender. The button queues the message for the next poll. Check delivery before relying on the two daily briefings.

### Keep APEX in your Primary inbox

1. While signed in to your personal Google account, open [Google Contacts](https://contacts.google.com/), choose **Create contact**, enter the APEX sender address, and save.
2. In personal Gmail on desktop, click **Show search options** in the search bar. Enter the dedicated address in **From** and click **Create filter**.
3. Check **Never send it to Spam** and **Always mark it as important**. Set **Categorize as → Primary** if available and click **Create filter**.
4. Open the first test message. If it is in Spam, click **Not spam**. If it lands in Promotions, move the message to **Primary** and accept Gmail's prompt to apply the choice to future messages.

To change the only allowed recipient, edit `RECIPIENT_EMAIL` in the sender-owned script's **Project Settings**. APEX displays the active recipient read-only. A recipient address stored in an outbox row has no effect on delivery.
