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
            More than wedding planners, we are the people who turn your dreams into unforgettable celebrations.
          </h2>
          <p className={styles.lead}>
            At Jashan-e-Riyasat, we understand that planning a wedding is about more than choosing a venue, decor, or arrangements. It is about bringing together emotions, traditions, families, and dreams to create moments that last a lifetime. We combine creativity, experience, thoughtful planning, and attention to detail to make every celebration truly special.
          </p>
          <p className={styles.lead}>
            From the initial discussions and creative concepts to the final moments of your celebration, our team takes care of everything with dedication and precision. We focus on understanding your expectations, managing every arrangement, and ensuring that every element comes together beautifully. With personalised planning, stunning decor, seamless coordination, and a commitment to excellence, we make your wedding journey as joyful and stress-free as the celebration itself.
          </p>
          <p className={styles.lead}>
            With Jashan-e-Riyasat by your side, you can leave the planning to us and focus on what truly matters, celebrating love, creating memories, and cherishing every moment with your loved ones.
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
