import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';

import { blogs, getBlogBySlug } from '@/features/home/data/blogs';

import styles from './page.module.css';

async function resolveParams(params) {
  return typeof params?.then === 'function' ? await params : params;
}

export function generateStaticParams() {
  return blogs.map((blog) => ({ slug: blog.slug }));
}

export async function generateMetadata({ params }) {
  const resolvedParams = await resolveParams(params);
  const blog = getBlogBySlug(resolvedParams.slug);

  if (!blog) {
    return { title: 'Blog Not Found' };
  }

  return {
    title: `${blog.title} | Jashn-e-Riyasat`,
    description: blog.excerpt,
  };
}

export default async function BlogSlugPage({ params }) {
  const resolvedParams = await resolveParams(params);
  const blog = getBlogBySlug(resolvedParams.slug);

  if (!blog) {
    notFound();
  }

  return (
    <main className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.imageWrap}>
          <Image src={blog.image} alt={blog.title} fill priority className={styles.image} />
          <div className={styles.overlay} />
          <div className={styles.heroContent}>
            <p className={styles.kicker}>Blog</p>
            <h1 className={styles.title}>{blog.title}</h1>
            <p className={styles.meta}>{blog.date}</p>
          </div>
        </div>
      </section>

      <section className={styles.article}>
        <p className={styles.excerpt}>{blog.excerpt}</p>

        {blog.content?.length ? (
          <div className={styles.sections}>
            {blog.content.map((section) => (
              <article key={section.heading} className={styles.sectionCard}>
                <h2 className={styles.sectionHeading}>{section.heading}</h2>
                {section.body.map((paragraph) => (
                  <p key={paragraph} className={styles.paragraph}>
                    {paragraph}
                  </p>
                ))}
              </article>
            ))}
          </div>
        ) : (
          <p className={styles.placeholderText}>Full article coming soon.</p>
        )}

        <div className={styles.backWrap}>
          <Link href="/blog" className={styles.backLink}>
            Back to Blog
          </Link>
        </div>
      </section>
    </main>
  );
}
