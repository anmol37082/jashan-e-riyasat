import Hero from '@/features/home/components/Hero';
import ContactInfo from '@/features/contact/components/ContactInfo';
import WeddingEnquiry from '@/features/contact/components/WeddingEnquiry';

export const metadata = {
  title: 'Contact | Jashn-e-Riyasat Events',
  description:
    'Get in touch with Jashn-e-Riyasat Events to start planning your Haldi, Mehndi, Wedding, or Reception celebration.',
};

export default function Page() {
  return (
    <main>
      <Hero />
      <ContactInfo />
      <WeddingEnquiry/>
    </main>
  );
}
