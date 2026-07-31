'use client';

import styles from './WhyChooseUsSection.module.css';

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

  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.header}>
          <p className={styles.kicker}>Why Choose Us</p>
          <h2 className={styles.heading}>
           More than planners, we&rsquo;re the team behind your peace of mind. 
          </h2>
          <p className={styles.lead}>
           From the first plan to the final farewell, we take care of every detail
            so you can simply enjoy the celebration with the people who matter most. 
          </p>
        </div>

        <div className={styles.grid}>
          {reasons.map((reason) => (
            <div key={reason.id} className={styles.item}>
              <span className={styles.accent} />
              <p className={styles.index}>{reason.id}</p>
              <p className={styles.title}>{reason.title}</p>
              <p className={styles.copy}>{reason.text}</p>
            </div>
          ))}
        </div>

        <div className={styles.quoteWrap}>
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
