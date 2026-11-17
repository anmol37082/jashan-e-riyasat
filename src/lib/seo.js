export const SITE_URL = 'https://www.jashaneriyaasat.example';
export const SITE_NAME = 'Jashan-e-Riyasat';

export function absoluteUrl(path = '/') {
  return new URL(path, `${SITE_URL}/`).toString();
}

export function JsonLd({ data }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, '\\u003c'),
      }}
    />
  );
}

export function pageSchema(path, name, description, type = 'WebPage') {
  return {
    '@context': 'https://schema.org',
    '@type': type,
    name,
    description,
    url: absoluteUrl(path),
    isPartOf: { '@type': 'WebSite', name: SITE_NAME, url: SITE_URL },
    publisher: { '@type': 'Organization', name: SITE_NAME, url: SITE_URL },
  };
}
