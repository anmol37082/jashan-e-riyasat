// app/sections/OurBlogs.jsx
import Image from 'next/image';
import styles from './OurBlogs.module.css';
import { blogs } from '../data/blogs';

export default function OurBlogs() {
  const featuredBlogs = blogs.slice(0, 4);

  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <h2 className={styles.title}>Our Blogs</h2>
        <p className={styles.subtitle}>Updates</p>
      </div>
      <div className={styles.grid}>
        {featuredBlogs.map((blog) => (
          <article key={blog.id} className={styles.card}>
            <Image
              src={blog.image}
              alt={blog.title}
              width={500}
              height={300}
              className={styles.image}
            />
            <div className={styles.overlay} />
            <div className={styles.content}>
              <h3 className={styles.blogTitle}>{blog.title}</h3>
              <p className={styles.date}>{blog.date}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
