// app/sections/WeddingFAQ.jsx
'use client';

import { useState } from 'react';
import styles from './WeddingFAQ.module.css';

const faqData = [
  {
    id: 1,
    question: 'Does Jashn-e-Riyasat plan destination weddings?',
    answer: 'Yes. Jashn-e-Riyasat specializes in destination weddings across India and abroad. From royal palaces in Rajasthan to beach resorts in Goa and international venues, we manage the journey from planning to guest movement.',
  },
  {
    id: 2,
    question: 'How does Jashn-e-Riyasat choose venues and vendors?',
    answer: 'We work with trusted venues and premium vendors built through years of relationships. Every recommendation is curated around your vision, budget, and aesthetic so the full experience feels cohesive.',
  },
  {
    id: 3,
    question: 'How many weddings does Jashn-e-Riyasat handle at once?',
    answer: 'We take a limited number of weddings each month so every couple gets focused attention, creative thinking, and responsive support from the first meeting to the final farewell.',
  },
  {
    id: 4,
    question: 'Does Jashn-e-Riyasat offer decor and theme styling?',
    answer: 'Absolutely. Our decor team designs bespoke themes, from floral direction to stage styling and guest-area details. Whether you want traditional, modern, or fusion styling, we shape it around your story.',
  },
  {
    id: 5,
    question: 'How far in advance should couples book Jashn-e-Riyasat?',
    answer: 'We recommend booking 6 to 12 months in advance for local weddings and 12 to 18 months for destination celebrations. That gives us enough time to secure venues, vendors, and the right planning rhythm.',
  },
  {
    id: 6,
    question: 'Does Jashn-e-Riyasat manage guest hospitality and logistics?',
    answer: 'Yes. We handle guest hospitality end to end, including airport transfers, hotel coordination, transport planning, and on-ground support so every guest feels looked after.',
  },
  {
    id: 7,
    question: 'Can Jashn-e-Riyasat create a fully personalized wedding experience?',
    answer: 'Yes. Every wedding is built around your personalities, rituals, and priorities. From invitations and menus to entertainment and flow, we tailor the details to reflect your story.',
  },
  {
    id: 8,
    question: 'How does Jashn-e-Riyasat make the wedding feel memorable?',
    answer: 'We focus on storytelling, immersive design, meaningful moments, and smooth execution. The goal is simple: make the celebration feel personal, elegant, and unforgettable without feeling forced.',
  },
  {
    id: 9,
    question: 'What makes Jashn-e-Riyasat stand out as a luxury wedding planner?',
    answer: 'Our attention to detail, strong vendor network, design sensibility, and calm execution set us apart. We plan every wedding with the care and pride we would bring to our own family celebration.',
  },
  {
    id: 10,
    question: 'Does Jashn-e-Riyasat handle end-to-end wedding planning?',
    answer: 'Yes. We manage the full process from concept to execution, including venue planning, decor, catering, entertainment, photography, vendor coordination, and on-day management.',
  },
  {
    id: 11,
    question: 'Can Jashn-e-Riyasat coordinate meetings across time zones?',
    answer: 'Absolutely. We regularly work with NRI and overseas clients, so we schedule calls at convenient times and use video meetings and digital planning tools to keep everything moving smoothly.',
  },
  {
    id: 12,
    question: 'Can Jashn-e-Riyasat plan our wedding if we do not live locally?',
    answer: 'Yes. We plan weddings for clients across India and globally. With digital consultations and a strong on-ground team, distance never becomes a barrier to the final experience.',
  },
  {
    id: 13,
    question: 'Will we have one dedicated point of contact?',
    answer: 'Yes. Each wedding is assigned a dedicated planner who stays with you from start to finish, keeping communication clear and execution consistent.',
  },
  {
    id: 14,
    question: 'Will we meet the team handling our wedding?',
    answer: 'Of course. We believe in transparency, so you will be introduced to the core team, including the planner, decor lead, and coordination team well before the wedding day.',
  },
  {
    id: 15,
    question: 'Can we speak to vendors directly?',
    answer: 'We usually manage vendor communication to keep the process organized and avoid confusion. If you want to discuss a specific detail directly, we can arrange those conversations too.',
  },
  {
    id: 16,
    question: 'Can you work with vendors we have already booked on our own?',
    answer: 'Yes. We are happy to collaborate with vendors you have already chosen and align them with the overall vision, timeline, and event flow.',
  },
  {
    id: 17,
    question: 'How do you manage planning when family is spread across cities or countries?',
    answer: 'We use digital planning tools, shared updates, and group calls to keep everyone informed and included, no matter where they are based.',
  },
  {
    id: 18,
    question: 'Do you help with rooming lists, airport pickups, and transport between functions?',
    answer: 'Yes. Guest logistics is a key part of our service, including room allocations, airport transfers, inter-venue transport, and detailed movement plans across functions.',
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
        <img className={styles.flower} src="/flower.svg" alt="" aria-hidden="true" />
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
        <p className={styles.subtitle}>Quick answers for couples planning with Jashn-e-Riyasat</p>
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
