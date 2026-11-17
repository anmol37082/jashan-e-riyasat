import StoriesLanding from './StoriesLanding';
import { JsonLd, pageSchema } from '@/lib/seo';

export const metadata = {
  title: 'Stories | Jashan-e-Riyasat',
  description: 'A collection of wedding hospitality case studies and stories.',
};

export default function StoriesPage() {
  return <><JsonLd data={pageSchema('/stories', 'Wedding Stories', 'A collection of wedding hospitality case studies and stories.', 'CollectionPage')} /><StoriesLanding /></>;
}
