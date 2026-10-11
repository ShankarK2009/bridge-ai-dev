# Product

<!-- impeccable:product-schema 1 -->

> Facts below come from the live site at https://www.bridgeaide.org (captured 2026-10-11) and the owner's brief. Items marked *(inferred)* were not confirmed in an interview; the owner asked for the migration to proceed without stopping for questions.

## Platform

web

## Stack

delegated: Astro (static output) with hand-written CSS. Eleven pages share one header, footer, and subscribe block, and the four event recaps are one data collection, so a component-based static generator avoids duplicated markup while still deploying as plain HTML to any static host (GitHub Pages, Netlify, Vercel, Cloudflare Pages). *(inferred; no deploy target named)*

## Users

- **Students** (primarily high school, Chicago north suburbs and online) curious how AI shapes their world; they attend free workshops, join the mailing list, and may join the team.
- **Educators** looking for material that teaches ethics and code together.
- **Policymakers and community leaders** looking for youth insight on AI.
- Parents and guardians of under-18 participants *(inferred)*.

## Product Purpose

Bridge AI Development and Ethics (Bridge AIDE) is a student-led organization advancing AI ethics education. It runs workshops, speaker talks, and student-led policy work so that young people act as AI's "watchdogs, architects, and conscience." The site exists to explain the mission, show real past work, collect mailing-list sign-ups, route people to events, and make it easy to contact the team. Success: visitors subscribe, register for events, or email info@bridgeaide.org.

## Positioning

Students teach students both how AI is built (NumPy, backpropagation, model training) and whether it is fair (algorithmic bias, accountability), then carry that into policy: a student-informed bill for ethical AI education in public schools. "We don't separate code from conscience."

## Operating Context

- Workshops held in public libraries (Aspen Drive Library, Vernon Hills, IL; Ela Area Public Library, Lake Zurich, IL) and virtually.
- Mailing list sign-up collects first name + email. Event registration collects first name, last name, email.
- Contact: info@bridgeaide.org. Social: Instagram @bridge.aide, X @bridgeaide.

## Capabilities and Constraints

- Pages (slugs must be preserved for SEO): `/`, `/about`, `/projects`, `/events`, `/event-details/<slug>` (4 recaps), `/team`, `/privacy-policy`, `/accessibility`.
- No upcoming events at capture time; four past workshops with dates, locations, descriptions, and photos.
- Applying for 501(c)(3) status; EIN not yet available. Must not claim nonprofit status as granted.
- Mailing-list provider after leaving Wix is undecided: the form needs a configurable endpoint.
- Hackathons are explicitly "not a current focus." Student Spotlight is "check back soon."

## Owner Decisions

Confirmed by the owner on 2026-10-11:
- Home hero keeps the bridge drawing in about two-thirds of the width with the mailing-list title block in the bottom-right corner, so Subscribe stays visible on load (chosen over a full-width bridge band).
- Keep the additions built from existing content: the Past Workshops strip on Home, sign-up sections on inner pages, and the More Past Events list on recap pages.
- Privacy policy updated for the new site: no Wix, no analytics, no cookies.
- Photos keep their original colours on every page in both print themes; remove the blue tint and hover-to-reveal treatment.

## Brand Commitments

- Name: Bridge AI Development and Ethics; short form Bridge AIDE.
- Existing logo (blue circular bridge mark + BRIDGE wordmark + "AI Development and Ethics"). Keep it.
- Brand blue (~#3E6896 family) from the existing logo.
- Voice: earnest, direct, student-written, a little defiant ("tired of waiting for a more ethical tech future, so we're building it ourselves").
- Signature lines: "Building the Future of AI Starts with Ethical, Youth-Led Voices." / "watchdogs, architects, and conscience" / "Code Meets Conscience."

## Evidence on Hand

- 2025 impact goals: 100+ students engaged, 4+ workshops, 3 student-led initiatives (framed as goals on the live site).
- Four past workshops with real photos (Wix media, migrated to `public/images/events/`).
- Team of 12 with headshots (migrated to `public/images/team/`).
- No testimonials, partners, press, or sponsor logos exist. Do not fabricate any.

## Product Principles

1. Youth voice first: students are the authors, not the audience.
2. Code and conscience together: never present technical skill without its ethical question.
3. Show real work: dates, places, photos, and names over abstract claims.
4. Transparency while growing: say plainly what is in progress (501(c)(3), policy bill, spotlight).
5. Access: free, beginner-friendly, reachable across skill levels and backgrounds.

## Accessibility & Inclusion

Public commitment to WCAG 2.1 AA (accessibility statement): clear consistent navigation, descriptive alt text and link text, readable contrast and scalable text, screen-reader-friendly forms and buttons, keyboard navigation. Audience includes minors; collect only first name + email.
