# Bridge AIDE website

The website for **Bridge AI Development and Ethics (Bridge AIDE)**, a student-led organization advancing AI ethics education. It replaces the Wix site at [bridgeaide.org](https://www.bridgeaide.org) with a fast static site that keeps every page, word, and URL.

The design treats the site as an engineering drawing set for a bridge between AI development and ethics. Pages are drawing sheets. Photos print as cyanotypes and develop to full colour on hover. Visitors can switch between two print processes: **Blueprint** (dark) and **Whiteprint** (light).

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

URLs match the Wix site exactly, so existing links and search rankings carry over. A sitemap (`/sitemap-index.xml`) and `robots.txt` are generated.

## Run it locally

Requires Node.js 22.12 or newer.

```bash
npm install
```

```bash
npm run dev
```

Then open http://localhost:4321. To build the production site into `dist/`:

```bash
npm run build
```

## Editing content

- **Events:** add or edit entries in `src/data/events.ts`. Past events go in `PAST_EVENTS` (newest first). Put an upcoming event in `UPCOMING_EVENTS` and the "No events at the moment" panel disappears. Photos go in `public/images/events/` as `name-800.webp` and `name-1600.webp`.
- **Team:** edit `src/data/team.ts`. Portraits go in `public/images/team/` as `name-320.webp` and `name-640.webp`, cropped 4:5 around the face.
- **Navigation, email, social links:** `src/data/site.ts`.
- **Colours, type, and spacing** are design tokens at the top of `src/styles/global.css`.

## Mailing-list sign-ups

Wix handled the mailing list before; the new site needs a form service. Any service that accepts a plain form POST works (for example [Formspree](https://formspree.io), Getform, or Basin):

1. Create a form with the service and copy its endpoint URL.
2. Set `PUBLIC_SUBSCRIBE_ENDPOINT` to that URL: in a local `.env` file (see `.env.example`) and in your host's environment variables. With the GitHub Pages workflow, add it as a repository **variable** named `PUBLIC_SUBSCRIBE_ENDPOINT`.

The form sends `firstName` and `email`. Until an endpoint is set, it falls back to opening an email to info@bridgeaide.org with the sign-up filled in.

## Deploying

### GitHub Pages (workflow included)

`.github/workflows/deploy.yml` builds and publishes the site on every push to `main`.

1. In the repository, open **Settings → Pages** and set **Source** to **GitHub Actions**.
2. Push to `main`.
3. Under **Settings → Pages → Custom domain**, enter `www.bridgeaide.org` (`public/CNAME` already contains it).

### Other hosts

Netlify, Vercel, and Cloudflare Pages all work with no extra config: build command `npm run build`, output directory `dist`.

## Moving the domain off Wix

1. Deploy the site and confirm it works on the host's preview URL.
2. Export your mailing-list contacts from Wix (Contacts → Export) and import them into the new form or email service.
3. At your domain registrar (or in Wix Domains, if Wix manages the domain), point DNS at the new host:
   - **GitHub Pages:** a `CNAME` record for `www` → `<your-github-username>.github.io`, plus `A` records for the apex `bridgeaide.org` → `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`.
   - **Other hosts:** use the records they give you.
4. Turn on HTTPS in the host's settings once DNS has propagated.
5. Only then cancel the Wix premium plan.

## Before launch: content to review

These were carried over as-is from the Wix site and are worth a look:

- **Privacy policy** was updated for the new site (no Wix, no analytics, no cookies; effective October 11, 2026). Once you pick a mailing-list service and host, consider naming them in the "Information We Collect" section.
- **2025 Impact Goals** on the home page are last year's goals.
- **Footer copyright** reads "Bridge AI Ethics and Development" (words reversed from the organization's name) and © 2025.
- **"Vishnu llapakurthi"** on the Team page: check the spelling (lowercase L or a capital I?).
- The three co-founder headshots were 240 px at the source and look soft on large screens. Higher-resolution photos would help.
