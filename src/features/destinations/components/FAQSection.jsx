"use client";

import { useRef, useEffect, useState } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./FAQSection.module.css";

gsap.registerPlugin(ScrollTrigger);

export default function FAQSection({ faqs }) {
  const containerRef = useRef(null);
  const [openIndex, setOpenIndex] = useState(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".faq-heading", {
        scrollTrigger: {
          trigger: ".faq-heading",
          start: "top 85%",
        },
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: "power2.out",
      });

      gsap.from(".faq-item", {
        scrollTrigger: {
          trigger: ".faq-list",
          start: "top 85%",
        },
        y: 30,
        opacity: 0,
        stagger: 0.08,
        duration: 0.6,
        ease: "power2.out",
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const toggle = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  const leftColumn = faqs.filter((_, i) => i % 2 === 0);
  const rightColumn = faqs.filter((_, i) => i % 2 !== 0);

  return (
    <section id="faq" ref={containerRef} className={styles.section}>
      <div className={styles.container}>
        <div className={`${styles.header} faq-heading`}>
          <span className={styles.label}>Got Questions?</span>
          <h2 className={styles.heading}>Frequently Asked Questions</h2>
          <div className={styles.headerAccent} />
        </div>

        <div className={`${styles.grid} faq-list faq-grid`}>
          <div className={styles.column}>
            {leftColumn.map((faq, idx) => {
              const actualIndex = idx * 2;
              const isOpen = openIndex === actualIndex;

              return (
                <div key={actualIndex} className={`${styles.faqItem} faq-item`}>
                  <button onClick={() => toggle(actualIndex)} className={styles.questionBtn}>
                    <Image className={styles.flower} src="/flower.svg" alt="" aria-hidden="true" width={24} height={24} />
                    <span className={styles.questionText}>{faq.q}</span>
                    <span
                      className={`${styles.iconBox} ${
                        isOpen ? styles.iconBoxOpen : ''
                      }`}
                    >
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                        <path
                          d="M6 1V11M1 6H11"
                          stroke="currentColor"
                          strokeWidth="1.5"
                        />
                      </svg>
                    </span>
                  </button>

                  <div
                    className={styles.answerWrapper}
                    style={{
                      maxHeight: isOpen ? '300px' : '0px',
                    }}
                  >
                    <div className={styles.answerInner}>
                      <div className={styles.answerContent}>
                        <div className={styles.divider} />
                        <p className={styles.answerText}>{faq.a}</p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className={styles.column}>
            {rightColumn.map((faq, idx) => {
              const actualIndex = idx * 2 + 1;
              const isOpen = openIndex === actualIndex;

              return (
                <div key={actualIndex} className={`${styles.faqItem} faq-item`}>
                  <button onClick={() => toggle(actualIndex)} className={styles.questionBtn}>
                    <Image className={styles.flower} src="/flower.svg" alt="" aria-hidden="true" width={24} height={24} />
                    <span className={styles.questionText}>{faq.q}</span>
                    <span
                      className={`${styles.iconBox} ${
                        isOpen ? styles.iconBoxOpen : ''
                      }`}
                    >
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                        <path
                          d="M6 1V11M1 6H11"
                          stroke="currentColor"
                          strokeWidth="1.5"
                        />
                      </svg>
                    </span>
                  </button>

                  <div
                    className={styles.answerWrapper}
                    style={{
                      maxHeight: isOpen ? '300px' : '0px',
                    }}
                  >
                    <div className={styles.answerInner}>
                      <div className={styles.answerContent}>
                        <div className={styles.divider} />
                        <p className={styles.answerText}>{faq.a}</p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
