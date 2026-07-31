'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styles from './WhyChooseUsSection.module.css';

gsap.registerPlugin(ScrollTrigger);

const reasons = [
  {
    id: '01',
    title: 'Discreet execution',
    text:
      'Every detail is managed quietly behind the scenes, so you and your loved ones can stay fully present and enjoy every moment of the celebration.',
  },
  {
    id: '02',
    title: 'Hospitality first',
    text:
      'From the moment your guests arrive until they say their goodbyes, every interaction is thoughtfully planned to make them feel welcomed, comfortable, and valued.',
  },
  {
    id: '03',
    title: 'Trusted coordination',
    text:
      'We bring together every vendor, timeline, and moving part with careful planning, ensuring your celebration unfolds seamlessly without missing a beat.',
  },
  {
    id: '04',
    title: 'Honest communication',
    text:
      "You'll always know where things stand, with clear updates and practical guidance throughout the planning journey.",
  },
  {
    id: '05',
    title: 'Cultural understanding',
    text:
      'Every family has its own traditions. We respect them, plan around them, and make sure they are beautifully brought to life.',
  },
  {
    id: '06',
    title: 'Stress-free celebrations',
    text:
      'Our role is simple to take the responsibility off your shoulders so you can be present for every meaningful moment.',
  },
];

export default function WhyChooseUsSection() {
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const gridRef = useRef(null);
  const quoteRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        headerRef.current.querySelectorAll(`.${styles.kicker}, .${styles.heading}, .${styles.lead}`),
        { autoAlpha: 0, y: 24 },
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.8,
          ease: 'power3.out',
          stagger: 0.12,
          scrollTrigger: {
            trigger: headerRef.current,
            start: 'top 82%',
            once: true,
          },
        }
      );

      const items = gridRef.current.querySelectorAll(`.${styles.item}`);
      gsap.fromTo(
        items,
        { autoAlpha: 0, y: 36 },
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.9,
          ease: 'power3.out',
          stagger: 0.15,
          scrollTrigger: {
            trigger: gridRef.current,
            start: 'top 78%',
            once: true,
          },
        }
      );

      items.forEach((item) => {
        const accent = item.querySelector(`.${styles.accent}`);
        gsap.fromTo(
          accent,
          { scaleX: 0 },
          {
            scaleX: 1,
            duration: 0.7,
            ease: 'power2.inOut',
            transformOrigin: 'left',
            delay: 0.2,
            scrollTrigger: {
              trigger: item,
              start: 'top 78%',
              once: true,
            },
          }
        );
      });

      gsap.fromTo(
        quoteRef.current,
        { autoAlpha: 0, y: 20 },
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.9,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: quoteRef.current,
            start: 'top 85%',
            once: true,
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className={styles.section} ref={sectionRef}>
      <div className={styles.inner}>
        <div className={styles.header} ref={headerRef}>
          <p className={styles.kicker}>Why Choose Us</p>
          <h2 className={styles.heading}>
           More than planners, we&rsquo;re the team behind your peace of mind. 
          </h2>
          <p className={styles.lead}>
           From the first plan to the final farewell, we take care of every detail
            so you can simply enjoy the celebration with the people who matter most. 
          </p>
        </div>

        <div className={styles.grid} ref={gridRef}>
          {reasons.map((reason) => (
            <div key={reason.id} className={styles.item}>
              <span className={styles.accent} />
              <p className={styles.index}>{reason.id}</p>
              <p className={styles.title}>{reason.title}</p>
              <p className={styles.copy}>{reason.text}</p>
            </div>
          ))}
        </div>

        <div className={styles.quoteWrap} ref={quoteRef}>
          <span className={styles.quoteMark}>&ldquo;</span>
          <p className={styles.quote}>
            Trusted for weddings where hospitality, precision, and calm execution
            matter just as much as the decor.
          </p>
        </div>
      </div>
    </section>
  );
}
