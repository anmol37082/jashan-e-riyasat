import './globals.css';
import SiteShell from '@/components/SiteShell';

export const metadata = {
  title: 'Jashn-e-Riyasat | Luxury Wedding Planning',
  description: 'Luxury wedding planning, creative event design, and refined hospitality for celebrations in India and beyond.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  );
}
