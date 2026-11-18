import { notFound } from 'next/navigation';

import {
  destinationList,
  getDestinationBySlug,
} from '@/features/destinations/data/destinations';
import HeroSection from '@/features/destinations/components/HeroSection';
import ContentSection from '@/features/destinations/components/ContentSection';
import FAQSection from '@/features/destinations/components/FAQSection';

import styles from './page.module.css';
import { absoluteUrl, JsonLd, pageSchema } from '@/lib/seo';

async function resolveParams(params) {
  return typeof params?.then === 'function' ? await params : params;
}

export function generateStaticParams() {
  return destinationList.map((destination) => ({ slug: destination.slug }));
}

export async function generateMetadata({ params }) {
  const resolvedParams = await resolveParams(params);
  const data = getDestinationBySlug(resolvedParams.slug);

  if (!data) {
    return {};
  }

  return {
    title: data.meta.title,
    description: data.meta.description,
  };
}

export default async function DestinationPage({ params }) {
  const resolvedParams = await resolveParams(params);
  const data = getDestinationBySlug(resolvedParams.slug);

  if (!data) {
    notFound();
  }

  return (
    <main className={styles.page}>
      <JsonLd data={{
        ...pageSchema(`/destinations/${data.slug}`, data.meta.title, data.meta.description, 'WebPage'),
        about: { '@type': 'Place', name: data.hero.location },
        primaryImageOfPage: absoluteUrl(data.hero.image),
      }} />
      <HeroSection data={data.hero} />
      <ContentSection
        blocks={data.contentBlocks}
        destinations={destinationList}
        currentSlug={resolvedParams.slug}
      />
      {data.faqs?.length > 0 && <FAQSection faqs={data.faqs} />}
    </main>
  );
}
