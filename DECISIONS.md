# Product decisions and provisional defaults

| Topic | Default or status |
| --- | --- |
| Late completion | Reconcile the original base to +1 with a ledger correction and retain accrued delay. Also offer a separate +1 or a configurable late reward. |
| Delay | Fractional hours at −0.05 per hour. Whole hours are optional. The optional cap is off. |
| Academic scoring | Use the universal model by default. Enable the harsher partial penalty per project. |
| Growth | Additive ledger. Exponential growth is illustrative. |
| Task weighting | Every full completion earns +1. Artificial fragmentation is a known limitation. |
| Deadline edits | Append a corrective event with a reason for historical changes. |
| Pause | Suspend new delay accrual by default. |
| Space score | Sum its projects by default. |
| Attendance | Off for Momentum by default. |
| Recurrence | Score each occurrence independently. |
| Importance | Editable weights and urgency constant. A 48-hour exam override is the starting rule. Numeric defaults will be recorded with B2. |
| Acknowledgement | Explicit selection initially. Default one-hour window with re-asks at 30 and 10 minutes. Automatic selection criteria remain open. |
| Notifications | Gentle by default. Profanity and fictional dream-girl phrases are opt-in. Record the configurable intensity mapping in B3. |
| Briefings | 4 AM and 8 AM in Asia/Kolkata by default. Store timestamps in UTC. |
| Milestone gates | Follow the prompt’s per-milestone approval rule before starting B1. |

## B3 dedicated sender

- Every briefing, alert and test is sent by a dedicated Gmail account through its owner-installed Apps Script trigger. The display name is APEX. The personal Gmail account receives the messages.
- Read the sole destination from Script Property `RECIPIENT_EMAIL`. Validate one address and ignore outbox routing fields, including `to`. Use `MailApp` so the sender script needs permission to send mail only. Use `APEX_SECRET` and `APEX_FUNCTION_URL` for polling. Never persist credentials in Git.
- Use the existing five-minute polling and outbox idempotency design. Keep the send and result stages distinct so a delivery with an uncertain result can be reviewed without blindly resending.
- Consumer Apps Script quota is typically 100 recipients per day and resets 24 hours after the first request. Check the current remaining recipient allowance before sending. Reserve the last two available sends for scheduled briefings and process briefings before tests or alerts. As the reserve approaches, combine eligible alerts by priority and drop expired low-priority alerts. Record skipped alerts and pause sending when quota is exhausted. Resume when quota becomes available.
- Email status reports the verified sender, configured recipient, last successful send, last error and pending queue length to the owner. Display a plain-language quota error and explain that sending resumes once Gmail resets the limit.
- B3 acceptance covers a real test email, a 4 AM-style briefing read on a phone, a changed outbox destination that leaves the actual recipient fixed, and accurate email status.
