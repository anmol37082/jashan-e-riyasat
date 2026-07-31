'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styles from './OurStorySection.module.css';

gsap.registerPlugin(ScrollTrigger);

const topics = [
  {
    id: 1,
    label: '01',
    title: 'A Legacy of Celebration',
    body:
      'At Jashn E Riyasat, every wedding is a once-in-a-lifetime celebration planned with love, creativity, and care. Over the years, we have turned many dreams into beautifully designed celebrations shaped around each couple’s story, traditions, and personality.',
    image: '/about/1.webp',
    imageAlt: 'Elegant wedding setting',
    reverse: false,
  },
  {
    id: 2,
    label: '02',
    title: 'Excellence Beyond Expectations',
    body:
      'For us, excellence is more than delivering a beautiful wedding. It means creating an experience that feels effortless, thoughtful, and unforgettable through creative design, precise planning, and flawless execution at every step.',
    image: '/about/2.webp',
    imageAlt: 'Elegant wedding table setting',
    reverse: true,
  },
  {
    id: 3,
    label: '03',
    title: 'The Guest Experience',
    body:
      'A wedding becomes truly special when your guests feel just as celebrated as the couple. We focus on warm welcomes, smooth arrivals, comfortable spaces, and a natural flow so everyone can enjoy the day without stress.',
    image: '/about/3.webp',
    imageAlt: 'Wedding hospitality detail',
    reverse: false,
  },
  {
    id: 4,
    label: '04',
    title: 'Built on Trust',
    body:
      'Every wedding starts with trust, and we value that deeply. By listening closely, staying transparent, and keeping every promise, we build real connections with couples and families that continue long after the celebration ends.',
    image: '/about/4.webp',
    imageAlt: 'Wedding hospitality detail',
    reverse: true,
  },
];

export default function OurStorySection() {
  const sectionRef = useRef(null);
  const rowMap = useRef(new Map());

  const setRowRef = (id) => (el) => {
    if (el) {
      rowMap.current.set(id, el);
    } else {
      rowMap.current.delete(id);
    }
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      rowMap.current.forEach((row) => {
        const media = row.querySelector(`.${styles.storyMedia}`);
        const kicker = row.querySelector(`.${styles.kicker}`);
        const heading = row.querySelector(`.${styles.heading}`);
        const copy = row.querySelector(`.${styles.copy}`);
        const isReverse = row.classList.contains(styles.reverse);

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: row,
            start: 'top 78%',
            once: true,
          },
        });

        tl.fromTo(
          media,
          { autoAlpha: 0, x: isReverse ? 48 : -48, scale: 1.06 },
          { autoAlpha: 1, x: 0, scale: 1, duration: 1.1, ease: 'power3.out' }
        )
          .fromTo(
            kicker,
            { autoAlpha: 0, y: 16 },
            { autoAlpha: 1, y: 0, duration: 0.6, ease: 'power2.out' },
            '-=0.7'
          )
          .fromTo(
            heading,
            { autoAlpha: 0, y: 24 },
            { autoAlpha: 1, y: 0, duration: 0.8, ease: 'power3.out' },
            '-=0.45'
          )
          .fromTo(
            copy,
            { autoAlpha: 0, y: 20 },
            { autoAlpha: 1, y: 0, duration: 0.8, ease: 'power3.out' },
            '-=0.55'
          );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className={styles.storySection} ref={sectionRef}>
      <div className={styles.storyStack}>
        {topics.map((topic) => (
          <div
            key={topic.id}
            ref={setRowRef(topic.id)}
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
