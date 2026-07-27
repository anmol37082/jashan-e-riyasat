import './globals.css';
import SiteShell from '@/components/SiteShell';

export const metadata = {
  title: 'Clement & Co. Events | Luxury Wedding Planning',
  description: 'Refined Wedding Planning & Creative Event Production. From Toronto to destinations worldwide.',
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
