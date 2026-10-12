# Bridge AIDE website

The website for **Bridge AI Development and Ethics (Bridge AIDE)**, a student-led organization advancing AI ethics education. Built with Astro and TypeScript, it is a static replacement for the Wix site at [bridgeaide.org](https://www.bridgeaide.org), preserving the existing public page routes and workshop recaps.

The design treats the site as an engineering drawing set for a bridge between AI development and ethics. Pages are drawing sheets. Photos show their original colours at all times, with no tint or hover-to-reveal effect. Visitors can switch between two print processes: **Blueprint** (dark) and **Whiteprint** (light). The site follows the system colour preference until a visitor chooses a theme, then saves that choice in local storage. Fonts and images are served locally, and animations respect reduced-motion preferences.

## Pages

| URL | Source |
| --- | --- |
| `/` | `src/pages/index.astro` |
| `/about` | `src/pages/about.astro` |
| `/projects` | `src/pages/projects.astro` |
| `/events` | `src/pages/events.astro` |
| `/event-details/<slug>` (4 workshop recaps) | `src/pages/event-details/[slug].astro` + `src/data/events.ts` |
| `/team` | `src/pages/team.astro` + `src/data/team.ts` |
| `/privacy-policy` | `src/pages/privacy-policy.astro` |
| `/accessibility` | `src/pages/accessibility.astro` |
| Custom error page | `src/pages/404.astro` |

The existing page paths are retained, including the original `workshop-understanding-backpropogation` slug. Astro generates a sitemap at `/sitemap-index.xml`; `public/robots.txt` supplies the crawler configuration. Canonical URLs use `https://www.bridgeaide.org`.

## Run it locally

Requires Node.js 22.12 or newer and npm. From the repository root:

```bash
npm ci
npm run dev
```

Then open [localhost:4321](http://localhost:4321). To build the production site into `dist/` and preview that build locally:

```bash
npm run build
npm run preview
```

Use the local URL printed by the preview command. The available npm scripts are `dev`, `build`, and `preview`; there is no dedicated test or lint script.

## Project structure

| Path | Purpose |
| --- | --- |
| `src/pages/` | Page content and routes |
| `src/layouts/Base.astro` | Shared page shell, metadata, fonts, and theme initialization |
| `src/components/` | Navigation, footer, forms, and reusable drawing-sheet elements |
| `src/data/` | Site links, events, and team members |
| `src/styles/global.css` | Design tokens, themes, and shared styles |
| `public/` | Images, icons, crawler configuration, and custom domain file |
| `astro.config.mjs` | Site URL, sitemap integration, and static output settings |
| `DESIGN.md` / `PRODUCT.md` | Design direction and product requirements |
| `docs/wix-content-archive.md` | Original Wix content reference |

## Editing content

- **Events:** add or edit entries in `src/data/events.ts`. Add events to `EVENTS` with an ISO `start` time including its UTC offset and a public `registrationUrl` when registration is available. Each build derives upcoming events (soonest first) and past events (newest first) from `start`; registration closes once the start time is reached. Photos go in `public/images/events/` as `name-800.webp` and `name-1600.webp`. Each cover also needs a `name-share.jpg` for social previews.
- **Team:** edit `src/data/team.ts`. Portraits go in `public/images/team/` as `name-320.webp` and `name-640.webp`, cropped 4:5 around the face.
- **Photo rendering:** use `src/components/Print.astro` for responsive sources, cropping, alt text, and loading priority. Photos retain their original colours in both themes.
- **Navigation, email, social links:** `src/data/site.ts`.
- **Colours, type, and spacing** are design tokens at the top of `src/styles/global.css`.
- **Page copy:** edit the corresponding file in `src/pages/`. Event detail pages are generated from `EVENTS`.
- **Domain:** keep `astro.config.mjs`, `src/data/site.ts`, `public/CNAME`, and `public/robots.txt` consistent if the site URL changes.

## Mailing-list sign-ups

Wix handled the mailing list before; this static site needs an external endpoint to collect sign-ups. The endpoint must accept a browser `POST` containing `FormData`, allow cross-origin requests from the site, and return a successful HTTP status (`2xx`). The request includes `Accept: application/json`.

1. Configure the form service and copy its endpoint URL.
2. Copy `.env.example` to `.env` and set `PUBLIC_SUBSCRIBE_ENDPOINT` locally. For deployment, set the same value in the build environment. With the GitHub Pages workflow, add it as a repository **variable** named `PUBLIC_SUBSCRIBE_ENDPOINT`.
3. Rebuild or restart the development server after changing the value, then verify a sign-up reaches the service.

The form sends `firstName` and `email`. The endpoint is embedded in the public build, so it must not contain a secret. Until an endpoint is set, the form opens a prefilled email to info@bridgeaide.org; the visitor must send that email to request a sign-up.

## Deploying

### GitHub Pages (workflow included)

`.github/workflows/deploy.yml` builds and publishes the site on every push to `main` and daily at 06:17 UTC to refresh event listings and registration. Scheduled runs take effect once the workflow is on the default branch; event status stays as of the last successful build, so expiry can lag by about a day (longer if a scheduled run is delayed or disabled). It also supports a manual run through **Actions → Deploy to GitHub Pages → Run workflow**. A push to another branch does not automatically deploy.

1. In the repository, open **Settings → Pages** and set **Source** to **GitHub Actions**.
2. Push to `main`.
3. Under **Settings → Pages → Custom domain**, enter `www.bridgeaide.org` (`public/CNAME` already contains it).

### Other hosts

For a static host, use build command `npm run build` and output directory `dist`. Configure Node.js to satisfy `package.json`, and set `PUBLIC_SUBSCRIBE_ENDPOINT` before building if sign-ups are enabled. The build uses `.html` files with extensionless navigation links; verify direct visits to `/about` and `/event-details/workshop-intro-to-numpy` on the chosen host, along with its handling of `404.html`.

## Moving the domain off Wix

1. Deploy the site and confirm it works on the host's preview URL.
2. Export your mailing-list contacts from Wix (Contacts → Export) and import them into the new form or email service.
3. At your domain registrar (or in Wix Domains, if Wix manages the domain), point DNS at the new host using its current custom-domain instructions. Preserve the records used for email.
4. Turn on HTTPS in the host's settings once DNS has propagated.
5. Only then cancel the Wix premium plan.

## Before launch: content to review

Review these before replacing the Wix site:

- **Privacy policy** was updated for the new site (no Wix, no analytics, no cookies; effective October 11, 2026). Once you pick a mailing-list service and host, consider naming them in the "Information We Collect" section.
- **2025 Impact Goals** on the home page are last year's goals.
- **Footer copyright** reads "Bridge AI Ethics and Development" (words reversed from the organization's name) and © 2025.
- **"Vishnu llapakurthi"** on the Team page: check the spelling (lowercase L or a capital I?).
- The three co-founder headshots were 240 px at the source and look soft on large screens. Higher-resolution photos would help.
