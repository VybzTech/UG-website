# Urban Gravity — Build & Deployment Roadmap

**Product:** Urban Gravity — swipe-to-match property discovery, verification and rental platform
**Owner:** VybzTech Inc. · Adeboyejo David A.
**Version:** 1.0 | **Date:** July 2026 | **Status:** Living document

> Canonical, always-current version lives in Notion:
> https://app.notion.com/p/3ac27272c8ac81dc9713cf7403d22237
>
> This file is a mirror for reference from the codebase. When the two disagree, Notion wins.

---

## Where we are today (29 July 2026)

Design and front end are substantially built. No backend is wired. Every screen renders against local state and mock data.

| Surface | Status | Evidence |
| --- | --- | --- |
| Brand, UI direction, design system | Done | Hubot Sans type system, colour constants, Button / Input / Select / Textarea / Card / Modal / Badge / Toggle / Loader with usage docs |
| Marketing site (Landing, About, Contact) | Done | Hero, scroll and feature-scroll sections, Spline 3D runtime, optimised imagery — deployed on Vercel |
| Auth journey screens | Built, unwired | `src/pages/auth/*` |
| Tenant screens | Built, unwired | `src/pages/tenant/*` |
| Landlord screens | Built, routes disabled | `src/pages/landlord/*` — imports commented out in `src/App.tsx` |
| Officer console | Built, routes disabled | `src/pages/officer/*` |
| Agent screens | Partial | Explore, Listings, Profile only |
| Domain model | Done | `src/types/*` |
| Client state | Done | `src/store/*` (app, swipe, landlord, officer, bargain, UI) |
| Backend, database, auth, storage | Not started | No client, no schema, no RLS. `supabaseId` exists on the user type as intent only |
| Payments, escrow, KYC integrations | Not started | Types defined; no provider selected or contracted |

**The honest read:** roughly the entire visible product exists and roughly none of the trust machinery does. Phases 0–1 exist to close exactly that gap before any new screen is opened.

---

## Phase map

| Phase | Name | Sprints | Window | Exit gate |
| --- | --- | --- | --- | --- |
| 0 | Foundations & Decisions | 1 | 3 – 14 Aug 2026 | Schema migrated, RLS tested, CI green, escrow legality answered in writing, platform and backend contradictions resolved |
| 1 | Trust Spine | 2 – 4 | 17 Aug – 25 Sep 2026 | A user can sign up, pick a role, complete NIN verification, and hold a verified status that RLS enforces |
| 2 | Supply — Listings & Media | 5 – 6 | 28 Sep – 23 Oct 2026 | A verified landlord can publish a listing with media that passes duplicate detection and officer review |
| 3 | Demand — Discovery & Matching | 7 – 8 | 26 Oct – 20 Nov 2026 | A tenant sets preferences, swipes a live deck of verified listings, and creates a real match |
| 4 | Transaction Layer | 9 – 11 | 23 Nov 2026 – 15 Jan 2027 | Chat, inspection booking, negotiation and escrow working end to end with a rehearsed dispute path |
| 5 | Officer Console & Anti-Fraud | 12 – 13 | 18 Jan – 12 Feb 2027 | Verification queue, audit trail, fraud rules and payout holds operational with a trained officer |
| 6 | Hardening & Launch | 14 – 15 | 15 – 26 Feb 2027 | Security, performance, accessibility and legal gates passed; production live with 50 verified listings |
| 7 | Post-Launch & Expansion | 16+ | Mar 2027 onward | Tenant ratings, amenity management, SOS, forum, exit checklist, second-city expansion |

---

## Critical path

Anything slipping here slips launch one-for-one:

```
UG-05 Schema
  → UG-06 RLS
  → UG-08 Auth + roles
  → UG-11 NIN verification
  → UG-16 Listing create + media
  → UG-18 Officer review gate
  → UG-19 Preference engine
  → UG-21 Swipe deck + match
  → UG-26 Chat
  → UG-29 Inspection booking
  → UG-33 Escrow payment
  → UG-35 Move-in verification release
  → UG-38 Verification queue
  → UG-44 RLS isolation test
  → UG-49 Staging UAT
  → UG-50 Production cutover
```

Everything else — analytics, bargaining, agent tier, marketing iteration, tiering and billing — is float. If a week is lost, protect the chain above and let float slip.

---

## Risk register

| ID | Risk | Impact | Likelihood | Mitigated by |
| --- | --- | --- | --- | --- |
| R-01 | Cold start — tenants open the app to an empty deck and never return | High | High | UG-45 |
| R-02 | Escrow not legally available without a licensed partner or trust account | High | High | D-02, UG-09 |
| R-03 | NIN provider cost, latency or downtime blocks onboarding | High | Medium | UG-11 |
| R-04 | Fake listings built from photos reposted off other platforms | High | High | UG-40 |
| R-05 | Deals leak off-platform to WhatsApp, destroying take rate and audit trail | High | High | UG-29, UG-33 |
| R-06 | RLS misconfiguration exposes NIN, documents or PII across accounts | High | Low | UG-06, UG-44 |
| R-07 | NDPA exposure from storing NIN and identity documents | High | Medium | UG-10, UG-47 |
| R-08 | Solo-builder capacity conflict — TRACKD occupies Aug–Dec 2026 | High | High | D-01 |
| R-09 | Verification friction collapses signup conversion | Medium | Medium | UG-12 |

---

## Blocking decisions

Open contradictions that must be resolved explicitly before dependent work proceeds.

| # | Decision | Blocks | Status |
| --- | --- | --- | --- |
| D-01 | **Capacity conflict.** TRACKD claims 3 Aug – 18 Dec 2026 with the same delivery resource. Sequence after TRACKD, split the week explicitly, or add capacity? | Every dated item | Open — blocks Phase 0 |
| D-02 | **Escrow structure.** Licensed partner arrangement or in-house trust account? Nigerian regulatory feasibility must be answered by counsel first. | UG-33, UG-34, UG-35 | Open — counsel-gated |
| D-03 | **Platform contradiction.** Docs specify React Native + Expo; the repo is a React web app; the landing page renders store buttons for an app that does not exist. | UG-02, marketing copy, all role screens | Open — blocks Phase 0 |
| D-04 | **Backend contradiction.** Docs name Node + Express, FastAPI + SQLAlchemy, Prisma, Firebase and raw PostgreSQL; the code implies Supabase via `supabaseId`. | UG-05, UG-06, UG-07 and downstream | Open — blocks Phase 0 |
| D-05 | **Monetisation.** `FREE` / `PRO` / `PREMIUM` exist in `src/types/enums.ts` with no prices and no feature split. | UG-42, UG-43, Plans screen | Open |
| D-06 | **Bargaining.** `BargainOffer` is fully typed in `src/types/bargain.ts` but appears nowhere in the product docs. | UG-31, UG-32 | Open |
| D-07 | **AI positioning.** Portfolio copy markets "AI-powered matching"; the MVP ships a deterministic preference filter. | UG-19, UG-20, public copy | Open |
| D-08 | **Officer staffing.** The verification SLA assumes a human reviewer from launch day. Who, and are they contracted? | UG-38, UG-45, launch readiness | Open |

---

## Execution rules

- Two-week sprints, each opening with a scope lock and closing with a demo against acceptance criteria.
- One module = one folder = one owner. The existing `src/pages/{role}` structure is the module boundary.
- **Screens already exist.** The default unit of work in Phases 1–5 is wiring an existing screen to real data, not building a new one. Building a new screen while a built one sits unwired is scope creep.
- Routes stay commented out in `src/App.tsx` until the role behind them is wired and RLS-tested. Enabling a route is an explicit exit criterion, never a side effect.
- Every merge to `main` must pass CI: typecheck, lint, unit and contract tests, build.
- **Finish before starting.** No new module opens while a prior module sits undeployed to preview.

### Environments

| Environment | Branch | Purpose |
| --- | --- | --- |
| Local | `feature/*` | Development, migration authoring |
| Preview | PR builds | Per-PR review deploys, three-viewport design check |
| Staging | `develop` | UAT, performance runs, RLS isolation testing, escrow dry runs |
| Production | `main` | Live platform — protected, migration-gated |

Migrations are versioned SQL files in-repo, applied forward-only. No manual schema edits in the dashboard on staging or production. Secrets never enter the repo — the `.env` deletion on 28 July 2026 is the baseline, and CI secret scanning enforces it from UG-04 onward.

---

## Trust & anti-fraud architecture

The defensible core. These are product requirements, not security chores.

1. **On-platform escrow.** No deposit reaches a private account. Funds held until move-in verification completes.
2. **Strong identity anchoring.** NIN verification with liveness for every account that lists or pays. Identifiers hashed, never stored raw.
3. **Listing provenance.** Photos, address and owner identity bound to a verifiable record with timestamps and hashes.
4. **Graduated agent privileges.** New agents start with limited visibility and a refundable bond.
5. **Hybrid fraud scoring.** Deterministic rules ship in v1; ML does not — it needs labelled data that will not exist until after launch.
6. **Fast dispute and inspection workflow.** Short evidence window, then human adjudication for edge cases.
7. **Officer console as product.** Verification queue, upgrade requests and audit trail are first-class surfaces with SLAs.
8. **Transparent fees and refund rules.** Say exactly what happens to the money, in plain language, before it moves.

### Escrow flow

1. Tenant pays deposit or rent on-platform.
2. Funds land in a clearly labelled escrow account — never the landlord's balance.
3. Landlord or agent accepts and signs the tenancy agreement within the agreed window.
4. Both parties upload timestamped move-in evidence — photos plus a short video.
5. Evidence matches → escrow releases. Evidence conflicts or missing → dispute opens, funds stay locked.
6. Automated checks run first; officer arbitration handles edge cases.

---

## Quality gates

- **API contract tests (MSW + Zod)** are the primary safety net. Zod is already a dependency — schemas authored once, shared between client and edge validation.
- **Integration tests over unit tests** for anything touching RLS, verification transitions, escrow release, or the listing-approval gate.
- **Adversarial testing is mandatory.** Attempt cross-account reads, replayed listing photos, and escrow release without move-in evidence. A trust platform never attacked in staging is untested.
- **Schema enforcement.** Every KYC response and payment webhook is validated server-side before reaching Postgres.
- **Accessibility.** WCAG 2.1 AA is a gate. The swipe deck needs a keyboard and screen-reader equivalent path — gesture-only discovery is an accessibility failure.
- **Design check.** Three-viewport responsive review on every screen before it leaves preview. Mobile is the primary target.

---

## Success criteria

1. Tenant North Star: under 10 minutes from app open to a shortlist of 5+ matched, verified properties.
2. Landlord North Star: under 20 minutes from signup to a live, verified, discoverable listing.
3. Officer North Star: median identity-verification turnaround under 4 working hours.
4. Zero confirmed fraudulent payouts in the first 90 days.
5. Zero cross-tenant data leaks in the pre-launch RLS isolation test.
6. 50 genuinely verified Lagos listings live before public launch.
7. P95 targets met: swipe response < 100ms, listing detail < 2.5s, upload feedback < 1s.
