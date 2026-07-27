import styles from './WhyChooseUsSection.module.css';

const reasons = [
  {
    id: '01',
    title: 'Discreet execution',
    text:
      'We stay calm, organized, and present behind the scenes so your celebrations feel effortless to you and your family.',
  },
  {
    id: '02',
    title: 'Hospitality first',
    text:
      'Every guest touchpoint is planned with warmth, clarity, and precision so people feel guided from arrival to departure.',
  },
  {
    id: '03',
    title: 'Trusted coordination',
    text:
      'From vendor timings to show flow, we manage the moving parts with discipline so the event stays elegant and on schedule.',
  },
];

export default function WhyChooseUsSection() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.header}>
          <p className={styles.kicker}>Why Choose Us</p>
          <h2 className={styles.heading}>
            Because the right team makes the entire celebration feel lighter.
          </h2>
          <p className={styles.lead}>
            We are built for hosts who want the experience handled with care,
            the family respected at every step, and the celebration delivered
            with polish.
          </p>
        </div>

        <div className={styles.grid}>
          {reasons.map((reason) => (
            <div key={reason.id} className={styles.item}>
              <p className={styles.index}>{reason.id}</p>
              <p className={styles.title}>{reason.title}</p>
              <p className={styles.copy}>{reason.text}</p>
            </div>
          ))}
        </div>

        <p className={styles.quote}>
          Trusted for weddings where hospitality, precision, and calm execution
          matter just as much as the decor.
        </p>
      </div>
    </section>
  );
}