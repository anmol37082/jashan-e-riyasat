import Hero from '@/features/home/components/Hero';
import ContactInfo from '@/features/contact/components/ContactInfo';
import WeddingEnquiry from '@/features/contact/components/WeddingEnquiry';
import { JsonLd, pageSchema } from '@/lib/seo';

export const metadata = {
  title: 'Contact | Jashan-e-Riyasat Events',
  description:
    'Get in touch with Jashan-e-Riyasat Events to start planning your Haldi, Mehndi, Wedding, or Reception celebration.',
};

export default function Page() {
  return (
    <main>
      <JsonLd data={pageSchema('/contact', 'Contact Jashan-e-Riyasat', 'Get in touch with Jashan-e-Riyasat Events to start planning your celebration.', 'ContactPage')} />
      <Hero title="Contact" />
      <ContactInfo />
      <WeddingEnquiry/>
    </main>
  );
}
