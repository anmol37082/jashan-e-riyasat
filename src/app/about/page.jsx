import AboutLanding from './AboutLanding';
import { JsonLd, pageSchema } from '@/lib/seo';

export const metadata = {
  title: 'About | Jashan-e-Riyasat',
  description: 'Our story, approach, and wedding hospitality philosophy.',
};

export default function AboutPage() {
  return <><JsonLd data={pageSchema('/about', 'About Jashan-e-Riyasat', 'Our story, approach, and wedding hospitality philosophy.')} /><AboutLanding /></>;
}
