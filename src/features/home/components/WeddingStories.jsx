// app/sections/WeddingStories.jsx
import Image from 'next/image';
import styles from './WeddingStories.module.css';

const stories = [
  {
    id: 1,
    image: '/stories/story1.webp',
    names: 'abhishek & shaili',
  },
  {
    id: 2,
    image: '/stories/story2.webp',
    names: 'raj & rhia',
  },
  {
    id: 3,
    image: '/stories/story3.webp',
    names: 'shivani & rahul',
  },
  {
    id: 4,
    image: '/stories/story4.png',
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