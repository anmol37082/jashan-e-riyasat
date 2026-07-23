// app/sections/WeddingFAQ.jsx
'use client';

import { useState } from 'react';
import styles from './WeddingFAQ.module.css';

const faqData = [
  {
    id: 1,
    question: 'Does Shaandaar Events do destination weddings?',
    answer: 'Yes, we specialize in destination weddings across India and abroad. From royal palaces in Rajasthan to beach resorts in Goa and international locations, we handle everything from venue selection to guest logistics.',
  },
  {
    id: 2,
    question: 'How does Shaandaar Events bring together the best venues, vendors, and wedding experiences?',
    answer: 'We have built strong relationships with premium venues and vendors over the years. Our team carefully curates each vendor based on your vision, budget, and style to create a seamless wedding experience.',
  },
  {
    id: 3,
    question: 'How many weddings does Shaandaar Events take up at a time?',
    answer: 'To ensure personalized attention, we take a limited number of weddings each month. This allows our team to dedicate full resources and creativity to make your special day truly unforgettable.',
  },
  {
    id: 4,
    question: 'Does Shaandaar Events offer wedding decor and theme styling?',
    answer: 'Absolutely! Our in-house decor team creates bespoke themes from floral arrangements to stage design. Whether you want traditional, modern, or fusion decor, we bring your vision to life.',
  },
  {
    id: 5,
    question: 'How far in advance should couples plan their wedding with Shaandaar Events?',
    answer: 'We recommend booking 6-12 months in advance for local weddings and 12-18 months for destination weddings. This ensures ample time for planning, vendor bookings, and perfect execution.',
  },
  {
    id: 6,
    question: 'Does Shaandaar Events assist in guest hospitality and logistics?',
    answer: 'Yes, we provide end-to-end guest management including airport pickups, hotel bookings, transportation, and on-ground hospitality to ensure your guests have a comfortable experience.',
  },
  {
    id: 7,
    question: 'Can Shaandaar Events create a completely personalized wedding experience for us?',
    answer: 'Every wedding we plan is unique and personalized. From custom invitations to bespoke menus and entertainment, we tailor every detail to reflect your personality and love story.',
  },
  {
    id: 8,
    question: 'How does Shaandaar Events transform a wedding into a once in a lifetime experience?',
    answer: 'We focus on storytelling through design, immersive experiences, surprise elements, and flawless execution. Our creative team ensures every moment becomes a cherished memory.',
  },
  {
    id: 9,
    question: 'What makes Shaandaar Events one of the best luxury wedding planners in India?',
    answer: 'Our attention to detail, creative excellence, vendor network, and commitment to making every wedding unique sets us apart. We treat every wedding as our own family celebration.',
  },
  {
    id: 10,
    question: 'Does Shaandaar Events take care of end to end wedding planning?',
    answer: 'Yes, we offer comprehensive wedding planning services from concept to execution. This includes venue, decor, catering, entertainment, photography, and on-day coordination.',
  },
  {
    id: 11,
    question: 'Do you schedule wedding planning meetings according to our time zone if we live abroad?',
    answer: 'Absolutely! We regularly work with NRI clients and schedule meetings at convenient times across all time zones. We also use video calls and digital planning tools for seamless communication.',
  },
  {
    id: 12,
    question: 'Can Shaandaar Events plan our wedding if we don\'t live in Chandigarh?',
    answer: 'Yes, we plan weddings for clients across India and globally. Our digital consultation process and on-ground team ensure distance is never a barrier to your dream wedding.',
  },
  {
    id: 13,
    question: 'Will we have one dedicated point of contact throughout the wedding planning process?',
    answer: 'Yes, each wedding is assigned a dedicated planner who serves as your single point of contact from start to finish, ensuring clear communication and consistent execution.',
  },
  {
    id: 14,
    question: 'Will you introduce us to the team managing our wedding?',
    answer: 'Of course! We believe in transparency. You will meet your core team including the planner, decor head, and coordinator well before the wedding day.',
  },
  {
    id: 15,
    question: 'Can we speak to wedding vendors directly, or does Shaandaar Events handle all communication?',
    answer: 'We handle all vendor coordination to ensure consistency and avoid confusion. However, we can arrange vendor meetings if you wish to discuss specific details personally.',
  },
  {
    id: 16,
    question: 'Can you work with vendors we have already booked on our own?',
    answer: 'Yes, we are happy to collaborate with your preferred vendors. We will coordinate with them to ensure everything aligns with the overall wedding vision and timeline.',
  },
  {
    id: 17,
    question: 'How do you manage wedding planning when family members are involved from different cities or countries?',
    answer: 'We use digital planning tools, group calls, and shared dashboards to keep everyone informed and involved, regardless of their location.',
  },
  {
    id: 18,
    question: 'Do you help with guest rooming lists, airport pickups, transport, and family movement across functions?',
    answer: 'Yes, guest logistics is a key part of our service. We manage room allocations, airport transfers, inter-venue transport, and detailed itineraries for all guests.',
  },
];

export default function WeddingFAQ() {
  const [openId, setOpenId] = useState(null);

  const toggleFAQ = (id) => {
    setOpenId(openId === id ? null : id);
  };

  // Split into two columns
  const leftColumn = faqData.filter((_, i) => i % 2 === 0);
  const rightColumn = faqData.filter((_, i) => i % 2 !== 0);

  const renderFAQItem = (item) => (
    <div key={item.id} className={styles.item}>
      <button
        className={styles.question}
        onClick={() => toggleFAQ(item.id)}
      >
        <span className={styles.dot} />
        <span className={styles.text}>{item.question}</span>
        <span className={`${styles.arrow} ${openId === item.id ? styles.arrowOpen : ''}`}>
          ›
        </span>
      </button>
      <div className={`${styles.answer} ${openId === item.id ? styles.answerOpen : ''}`}>
        <p>{item.answer}</p>
      </div>
    </div>
  );

  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <h2 className={styles.title}>Wedding FAQ&#39;s</h2>
        <p className={styles.subtitle}>Instant Questions</p>
      </div>
      <div className={styles.grid}>
        <div className={styles.column}>
          {leftColumn.map(renderFAQItem)}
        </div>
        <div className={styles.column}>
          {rightColumn.map(renderFAQItem)}
        </div>
      </div>
    </section>
  );
}