import Image from 'next/image';
import styles from './OurStorySection.module.css';

const topics = [
  {
    id: 1,
    label: '01',
    title: 'Our Story',
    body:
      'At Jashn-e-Riyasat, we plan weddings around the people at the center of them. We begin with your story, your rituals, and the atmosphere you want your guests to remember, then shape every detail around that vision.',
    image: '/about.webp',
    imageAlt: 'Elegant wedding setting',
    reverse: false,
  },
  {
    id: 2,
    label: '02',
    title: 'Our Approach',
    body:
      'From intimate family moments to high-profile hospitality, our approach is simple: listen carefully, plan precisely, and manage every moving piece with calm execution so you can stay present in the celebration.',
    image: '/about.webp',
    imageAlt: 'Elegant wedding table setting',
    reverse: true,
  },
  {
    id: 3,
    label: '03',
    title: 'Our Commitment',
    body:
      'We design the experience so hosts can relax and guests feel genuinely cared for. Timing, logistics, and on-ground coordination stay closely managed while the celebration keeps its warmth and elegance.',
    image: '/about.webp',
    imageAlt: 'Wedding hospitality detail',
    reverse: false,
  },
];

export default function OurStorySection() {
  return (
    <section className={styles.storySection}>
      <div className={styles.storyStack}>
        {topics.map((topic) => (
          <div
            key={topic.id}
            className={`${styles.storyInner} ${topic.reverse ? styles.reverse : ''}`}
          >
            <div className={styles.storyMedia}>
              <Image
                src={topic.image}
                alt={topic.imageAlt}
                className={styles.storyImage}
                width={800}
                height={1100}
                priority={topic.id === 1}
              />
            </div>

            <div className={styles.storyText}>
              <p className={styles.kicker}>{topic.label}</p>
              <h2 className={styles.heading}>{topic.title}</h2>
              <p className={styles.copy}>{topic.body}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
