// app/sections/WeddingFAQ.jsx
'use client';

import Image from 'next/image';
import { useState } from 'react';
import styles from './WeddingFAQ.module.css';
import faqData from '../data/faq.json';

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
        <Image className={styles.flower} src="/flower.svg" alt="" aria-hidden="true" width={24} height={24} />
        <span className={styles.text}>{item.question}</span>
        <span className={`${styles.arrow} ${openId === item.id ? styles.arrowOpen : ''}`}>
          &rsaquo;
        </span>
      </button>
      <div className={`${styles.answer} ${openId === item.id ? styles.answerOpen : ''}`}>
        {item.answer.split(/\r?\n\r?\n/).map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>
    </div>
  );

  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <h2 className={styles.title}>Wedding FAQ&#39;s</h2>
        <p className={styles.subtitle}>Quick answers for couples planning with Jashan-e-Riyasat</p>
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

