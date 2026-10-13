export const SITE = {
  name: 'Bridge AI Development and Ethics',
  shortName: 'Bridge AIDE',
  url: new URL(import.meta.env.BASE_URL, import.meta.env.SITE).href.replace(/\/$/, ''),
  email: 'info@bridgeaide.org',
  instagram: 'https://www.instagram.com/bridge.aide/',
  x: 'https://www.x.com/bridgeaide/',
  subscribeFormUrl: 'https://docs.google.com/forms/d/e/1FAIpQLSfAPF2xMgBf0wekKk6zTkWojvteuvM-_49Ko8Uf-Y0kSHL4GQ/viewform',
};

/** Prefix a root-relative link or public asset with the deployed site's base path. */
export const withBase = (path: string) =>
  path.startsWith('/') && !path.startsWith('//')
    ? `${import.meta.env.BASE_URL.replace(/\/$/, '')}${path}`
    : path;

export const NAV = [
  { href: '/about', label: 'About' },
  { href: '/projects', label: 'Projects' },
  { href: '/events', label: 'Events' },
  { href: '/team', label: 'Team' },
];

/** URL path without `.html`, `/index`, or a trailing slash, matching the live site's URLs. */
export const cleanPath = (pathname: string) =>
  pathname.replace(/\.html$/, '').replace(/\/index$/, '').replace(/\/$/, '') || '/';
