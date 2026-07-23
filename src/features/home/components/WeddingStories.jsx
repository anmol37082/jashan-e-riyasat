// app/sections/WeddingStories.jsx
import Image from 'next/image';
import styles from './WeddingStories.module.css';

const stories = [
  {
    id: 1,
    image: '/images/wedding-1.jpg',
    names: 'abhishek & shaili',
  },
  {
    id: 2,
    image: '/images/wedding-2.jpg',
    names: 'raj & rhia',
  },
  {
    id: 3,
    image: '/images/wedding-3.jpg',
    names: 'shivani & rahul',
  },
  {
    id: 4,
    image: '/images/wedding-4.jpg',
    names: 'ethereal souls',
  },
];

export default function WeddingStories() {
  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <h2 className={styles.title}>Wedding Stories</h2>
        <p className={styles.subtitle}>Special Moments</p>
      </div>
      <div className={styles.grid}>
        {stories.map((story) => (
          <div key={story.id} className={styles.card}>
            <Image
              src={story.image}
              alt={story.names}
              className={styles.image}
              fill
            />
            <div className={styles.overlay}>
              <span className={styles.names}>{story.names}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}