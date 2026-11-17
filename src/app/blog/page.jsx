import BlogLanding from './BlogLanding';
import { JsonLd, pageSchema } from '@/lib/seo';

export const metadata = {
  title: 'Blog | Jashan-e-Riyasat',
  description: 'Wedding planning insights and hospitality notes.',
};

export default function BlogPage() {
  return <><JsonLd data={pageSchema('/blog', 'Wedding Planning Blog', 'Wedding planning insights and hospitality notes.', 'Blog')} /><BlogLanding /></>;
}
