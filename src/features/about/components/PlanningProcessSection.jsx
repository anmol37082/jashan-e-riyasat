import Image from 'next/image';
import styles from './PlanningProcessSection.module.css';

const steps = [
  {
    id: 'I',
    title: 'Planning',
    text: 'Understanding your vision, budget, and priorities.',
    image:
      'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=900&auto=format&fit=crop',
  },
  {
    id: 'II',
    title: 'Design',
    text: 'Curating a theme and decor direction around your story.',
    image:
      'https://images.unsplash.com/photo-1522673607200-164d1b6ce486?q=80&w=900&auto=format&fit=crop',
  },
  {
    id: 'III',
    title: 'Coordination',
    text: 'Locking in trusted vendors and aligning every detail.',
    image:
      'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=900&auto=format&fit=crop',
  },
  {
    id: 'IV',
    title: 'Execution',
    text: 'Managing every moving part so you can simply experience it.',
    image:
      'https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=900&auto=format&fit=crop',
  },
  {
    id: 'V',
    title: 'Celebration',
    text: 'The final farewell, delivered with polish and warmth.',
    image:
      'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?q=80&w=900&auto=format&fit=crop',
  },
];

export default function PlanningProcessSection() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.header}>
          <p className={styles.kicker}>Our Planning Process</p>
          <h2 className={styles.heading}>
            A clear, structured path from first conversation to final farewell.
          </h2>
        </div>

        <div className={styles.grid}>
          {steps.map((step) => (
            <div key={step.id} className={styles.card}>
              <div className={styles.imageWrap}>
                <Image
                  src={step.image}
                  alt={step.title}
                  fill
                  sizes="(max-width: 768px) 90vw, (max-width: 1200px) 45vw, 20vw"
                  className={styles.image}
                />
                <div className={styles.overlay} />
                <p className={styles.numeral}>{step.id}</p>
                <div className={styles.cardText}>
                  <p className={styles.title}>{step.title}</p>
                  <p className={styles.desc}>{step.text}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}