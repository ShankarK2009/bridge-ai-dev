export const SITE = {
  name: 'Bridge AI Development and Ethics',
  shortName: 'Bridge AIDE',
  url: 'https://www.bridgeaide.org',
  email: 'info@bridgeaide.org',
  instagram: 'https://www.instagram.com/bridge.aide/',
  x: 'https://www.x.com/bridgeaide/',
  /** Form endpoint for mailing-list sign-ups. See .env.example. */
  subscribeEndpoint: import.meta.env.PUBLIC_SUBSCRIBE_ENDPOINT ?? '',
};

export const NAV = [
  { href: '/about', label: 'About' },
  { href: '/projects', label: 'Projects' },
  { href: '/events', label: 'Events' },
  { href: '/team', label: 'Team' },
];

/** URL path without `.html`, `/index`, or a trailing slash, matching the live site's URLs. */
export const cleanPath = (pathname: string) =>
  pathname.replace(/\.html$/, '').replace(/\/index$/, '').replace(/\/$/, '') || '/';
