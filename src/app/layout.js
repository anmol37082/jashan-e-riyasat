import './globals.css';
import SiteShell from '@/components/SiteShell';
import { JsonLd, SITE_URL, SITE_NAME } from '@/lib/seo';

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: 'Jashan-e-Riyasat | Luxury Wedding Planning',
  description: 'Luxury wedding planning, creative event design, and refined hospitality for celebrations in India and beyond.',
  icons: {
    icon: '/mainlogo.webp',
    shortcut: '/mainlogo.webp',
    apple: '/mainlogo.webp',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning>
        <JsonLd data={{
          '@context': 'https://schema.org',
          '@type': 'Organization',
          name: SITE_NAME,
          url: SITE_URL,
          logo: `${SITE_URL}/mainlogo.webp`,
          sameAs: [
            'https://www.facebook.com/JASHNERIYASAT/',
            'https://www.youtube.com/@Jashn-E-Riyasat',
            'https://www.pinterest.com/Jashn_E_Riyasat/',
            'https://www.instagram.com/jashn_e_riyasat/',
          ],
        }} />
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  );
}
