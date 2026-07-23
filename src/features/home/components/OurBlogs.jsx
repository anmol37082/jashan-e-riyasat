// app/sections/OurBlogs.jsx
import Image from 'next/image';
import styles from './OurBlogs.module.css';

const blogs = [
  {
    id: 1,
    image: '/images/blog-1.jpg',
    title: 'Guest Accommodation Tips for Jaipur Destination Weddings',
    date: 'Jun 24, 2026',
  },
  {
    id: 2,
    image: '/images/blog-2.jpg',
    title: 'Is Udaipur a Good Place for a Destination Wedding?',
    date: 'Jun 24, 2026',
  },
  {
    id: 3,
    image: '/images/blog-3.jpg',
    title: 'Complete Wedding Planning Guide for Tricity Couples',
    date: 'Jun 19, 2026',
  },
  {
    id: 4,
    image: '/images/blog-4.jpg',
    title: 'Royal Rajasthan Wedding Experiences in Udaipur',
    date: 'Jun 19, 2026',
  },
];

export default function OurBlogs() {
  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <h2 className={styles.title}>Our Blogs</h2>
        <p className={styles.subtitle}>Updates</p>
      </div>
      <div className={styles.grid}>
        {blogs.map((blog) => (
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