# APEX build plan

| Milestone | Working slice | Acceptance |
| --- | --- | --- |
| B0 | Installable shell, shared components, Mist and Dusk, single-user Supabase authentication, shared engine wiring and Pages deployment | Sign in at the deployed URL, refresh a deep link, run tests and review the shell in both themes at 390, 820 and 1440 px |
| B1 | Spaces, projects, tasks, progress, recurrence, append-only Momentum ledger, deadline scheduler, Home, graph and demo seed | Verify task scoring, correction history, database protections and Home, Project and Task layouts |
| B2 | Calendar, productivity timeline, importance, overlaps, buffers and dependencies | Reproduce and resolve the documented conflicts in place |
| B3 | Acknowledgements, notification personality, push, dedicated Gmail sender, fixed-recipient outbox and daily briefings | Verify real delivery from APEX to the personal inbox, recipient enforcement, quota handling and status |
| B4 | Business, knowledge, search, natural-language quick add and read-only calendar sync | Find and open linked client records from search and verify calendar deduplication |
| B5 | Appearance settings, offline sync, export, accessibility and hardening | Verify reconnect behavior, data export, security and the final walkthrough |

Review gates follow each finished milestone. B0 is in progress. Deployment and live authentication require a GitHub target and the owner's Supabase project configuration. B1 starts after B0 acceptance and approval.
