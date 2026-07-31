"use client";

import Image from "next/image";
import styles from "./HeroSection.module.css";

export default function HeroSection({ data }) {
  return (
    <section className={styles.section}>
      <div className={styles.mediaWrap}>
        <Image
          src={data.image}
          alt={data.location || data.h1}
          fill
          priority
          className={styles.backgroundImage}
        />
        <div className={styles.overlay} />
      </div>
    </section>
  );
}
