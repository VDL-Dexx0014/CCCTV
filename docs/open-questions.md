# Open Questions

Things unresolved, waiting on external input, or deferred. Close an item by moving it to decisions.md or deleting it once resolved.

---

## Magnite LLD pipeline

- [ ] Confirm 92-column order in `lld.l0_raw` matches the actual Magnite sample file (blocker for ClickPipes wiring)
- [ ] What values does `event_type` take in the sample? Needed to fill `accepted_values` in `models/l1/l1_events.yml`
- [ ] Who creates the S3 bucket — us or does Magnite deliver directly?
- [ ] IAM role trust policy for ClickHouse ClickPipes — generate via the ClickPipes wizard once S3 bucket is confirmed

## CCCTV Survey app

- [ ] Replace logo placeholder in `app/page.tsx` header with actual logo asset
- [ ] Is there a deadline for survey close? If so, add a cutoff date to the thank-you copy
- [ ] Are there additional partner types beyond Broadcasters / Agencies / Technology Suppliers?
