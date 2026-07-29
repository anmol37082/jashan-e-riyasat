import Image from 'next/image';
import { notFound } from 'next/navigation';

import { getStoryBySlug, stories } from '@/features/home/data/stories';
import StoryGallery from './StoryGallery';

import styles from './page.module.css';

async function resolveParams(params) {
  return typeof params?.then === 'function' ? await params : params;
}

export function generateStaticParams() {
  return stories.map((story) => ({ slug: story.slug }));
}

export async function generateMetadata({ params }) {
  const resolvedParams = await resolveParams(params);
  const story = getStoryBySlug(resolvedParams.slug);

  if (!story) {
    return {
      title: 'Story Not Found',
    };
  }

  return {
    title: `${story.names} | ${story.title}`,
    description: story.detail?.overview || `${story.names} story detail page`,
  };
}

export default async function StoryPage({ params }) {
  const resolvedParams = await resolveParams(params);
  const story = getStoryBySlug(resolvedParams.slug);

  if (!story) {
    notFound();
  }

  return (
    <main className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.heroMedia}>
          <Image
            src={story.heroImage || story.image}
            alt={story.names}
            fill
            priority
            className={styles.heroImage}
          />
          <div className={styles.heroText}>
            <p className={styles.kicker}>Wedding Story</p>
            <h1 className={styles.title}>{story.names}</h1>
            <p className={styles.subtitle}>{story.title}</p>
          </div>
        </div>
      </section>

      {story.detail ? (
        <>
          <section className={styles.introWrap}>
            <div className={styles.metaRow}>
              <div className={styles.metaItem}>
                <span className={styles.metaLabel}>Client:</span> {story.detail.client}
              </div>
              <div className={styles.metaItem}>
                <span className={styles.metaLabel}>Service:</span>{' '}
                {story.detail.serviceProvided}
              </div>
              <div className={styles.metaItem}>
                <span className={styles.metaLabel}>Guest Count:</span>{' '}
                {story.detail.guestCount}
              </div>
            </div>
            <p className={styles.intro}>{story.detail.overview}</p>
            <p className={styles.intro}>{story.detail.intro}</p>
          </section>

          <section className={styles.content}>
            <h2 className={styles.sectionTitle}>Our Scope of Work</h2>
            <div className={styles.sectionList}>
              {story.detail.sections.map((section) => (
                <article key={section.title} className={styles.sectionCard}>
                  <h3 className={styles.sectionHeading}>{section.title}</h3>
                  <p className={styles.sectionText}>{section.body}</p>
                </article>
              ))}
            </div>
          </section>

          <section className={styles.highlights}>
            <h2 className={styles.sectionTitle}>Key Highlights</h2>
            <ul className={styles.highlightsGrid}>
              {story.detail.highlights.map((item) => (
                <li key={item} className={styles.highlightItem}>
                  {item}
                </li>
              ))}
            </ul>
          </section>

          <section className={styles.outcome}>
            <h2 className={styles.sectionTitle}>Outcome</h2>
            <p className={styles.outcomeText}>{story.detail.outcome}</p>
          </section>

          {story.galleryMedia?.length || story.galleryImages?.length ? (
            <StoryGallery
              storyName={story.names}
              mediaItems={story.galleryMedia || story.galleryImages}
            />
          ) : null}
        </>
      ) : (
        <section className={styles.placeholder}>
          <p className={styles.intro}>This case study is coming soon.</p>
        </section>
      )}
    </main>
  );
}
