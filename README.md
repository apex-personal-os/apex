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

## Gmail briefings

At script.google.com select New project and name it APEX Mailer. B3 supplies the mailer source, protected endpoint, Script Properties and five-minute trigger. Gmail authorization and the test send are part of B3.
