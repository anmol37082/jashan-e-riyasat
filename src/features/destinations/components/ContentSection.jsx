"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./ContentSection.module.css";

gsap.registerPlugin(ScrollTrigger);

export default function ContentSection({ blocks, destinations = [], currentSlug }) {
  const containerRef = useRef(null);
  const sidebarWrapRef = useRef(null);
  const sidebarRef = useRef(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    let rafId = 0;

    const resetDesktopSidebar = () => {
      const sidebar = sidebarRef.current;
      const wrap = sidebarWrapRef.current;

      if (!sidebar || !wrap) return;

      sidebar.style.position = "";
      sidebar.style.top = "";
      sidebar.style.left = "";
      sidebar.style.width = "";
      sidebar.style.bottom = "";
      sidebar.style.right = "";
      sidebar.style.maxHeight = "";
      wrap.style.minHeight = "";
    };

    const updateDesktopSidebar = () => {
      const sidebar = sidebarRef.current;
      const wrap = sidebarWrapRef.current;
      const section = containerRef.current;

      if (!sidebar || !wrap || !section) return;

      if (window.innerWidth < 1025) {
        resetDesktopSidebar();
        return;
      }

      const topOffset = 140;
      const sidebarHeight = sidebar.offsetHeight;
      const wrapRect = wrap.getBoundingClientRect();
      const sectionRect = section.getBoundingClientRect();
      const wrapHeight = wrap.offsetHeight;
      const sectionTop = sectionRect.top;
      const sectionBottom = sectionRect.bottom;

      wrap.style.minHeight = `${sidebarHeight}px`;
      sidebar.style.boxSizing = "border-box";

      if (sectionTop > topOffset) {
        sidebar.style.position = "relative";
        sidebar.style.top = "";
        sidebar.style.left = "";
        sidebar.style.width = "";
        sidebar.style.bottom = "";
        sidebar.style.right = "";
        sidebar.style.maxHeight = "";
        return;
      }

      if (sectionBottom <= topOffset + sidebarHeight) {
        sidebar.style.position = "absolute";
        sidebar.style.top = `${Math.max(wrapHeight - sidebarHeight, 0)}px`;
        sidebar.style.left = "0";
        sidebar.style.width = "100%";
        sidebar.style.bottom = "";
        sidebar.style.right = "";
        sidebar.style.maxHeight = `${sidebarHeight}px`;
        return;
      }

      sidebar.style.position = "fixed";
      sidebar.style.top = `${topOffset}px`;
      sidebar.style.left = `${wrapRect.left}px`;
      sidebar.style.width = `${wrapRect.width}px`;
      sidebar.style.bottom = "";
      sidebar.style.right = "";
      sidebar.style.maxHeight = `calc(100vh - ${topOffset + 40}px)`;
    };

    const handlePosition = () => {
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(updateDesktopSidebar);
    };

    const ctx = gsap.context(() => {
      gsap.utils.toArray(".content-block").forEach((item) => {
        gsap.from(item, {
          scrollTrigger: {
            trigger: item,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
          y: 50,
          opacity: 0,
          duration: 0.9,
          ease: "power2.out",
        });
      });

      gsap.from(".stat-card", {
        scrollTrigger: {
          trigger: ".stats-grid",
          start: "top 85%",
        },
        y: 30,
        opacity: 0,
        stagger: 0.12,
        duration: 0.7,
        ease: "power2.out",
      });

      gsap.from(".venue-row", {
        scrollTrigger: {
          trigger: ".venues-wrapper",
          start: "top 85%",
        },
        x: -20,
        opacity: 0,
        stagger: 0.1,
        duration: 0.6,
        ease: "power2.out",
      });

      gsap.from(".theme-card", {
        scrollTrigger: {
          trigger: ".themes-grid",
          start: "top 85%",
        },
        y: 40,
        opacity: 0,
        stagger: 0.15,
        duration: 0.7,
        ease: "power2.out",
      });
    }, containerRef);

    window.addEventListener("scroll", handlePosition, { passive: true });
    window.addEventListener("resize", handlePosition);
    handlePosition();

    return () => {
      window.removeEventListener("scroll", handlePosition);
      window.removeEventListener("resize", handlePosition);
      cancelAnimationFrame(rafId);
      resetDesktopSidebar();
      ctx.revert();
    };
  }, []);

  return (
    <section id="content" ref={containerRef} className={styles.section}>
      <div className={styles.container}>
        {destinations.length ? (
          <aside ref={sidebarWrapRef} className={styles.sidebarWrap} aria-label="Destination links">
            <div ref={sidebarRef} className={styles.sidebar}>
              <button
                type="button"
                className={styles.sidebarHeader}
                onClick={() => setIsSidebarOpen((prev) => !prev)}
                aria-expanded={isSidebarOpen}
                aria-controls="destination-links-list"
              >
                <span className={styles.sidebarLabel}>Other Destinations</span>
                <span className={styles.sidebarToggle} aria-hidden="true">
                  <span
                    className={`${styles.toggleLine} ${
                      isSidebarOpen ? styles.toggleLineTop : ""
                    }`}
                  />
                  <span
                    className={`${styles.toggleLine} ${
                      isSidebarOpen ? styles.toggleLineMiddle : ""
                    }`}
                  />
                  <span
                    className={`${styles.toggleLine} ${
                      isSidebarOpen ? styles.toggleLineBottom : ""
                    }`}
                  />
                </span>
              </button>

              <div
                id="destination-links-list"
                className={`${styles.sidebarList} ${isSidebarOpen ? styles.sidebarListOpen : ""}`}
              >
                {destinations.map((destination) => {
                  const isActive = destination.slug === currentSlug;

                  return (
                    <Link
                      key={destination.slug}
                      href={`/destinations/${destination.slug}`}
                      className={`${styles.sidebarLink} ${
                        isActive ? styles.sidebarLinkActive : ""
                      }`}
                      onClick={() => setIsSidebarOpen(false)}
                    >
                      <span className={styles.sidebarCity}>
                        {destination.hero?.location || destination.slug}
                      </span>
                      <span className={styles.sidebarArrow} aria-hidden="true">
                        <svg viewBox="0 0 20 20" fill="none">
                          <path d="M3.5 10h12M10 4.5l5.5 5.5-5.5 5.5" />
                        </svg>
                      </span>
                    </Link>
                  );
                })}
              </div>
            </div>
          </aside>
        ) : null}

        <div className={styles.contentWrap}>
          {blocks.map((block, i) => (
            <div key={i} className={`${styles.block} content-block`}>
              <h2 className={styles.heading}>{block.h2}</h2>
              <div className={styles.accent} />
              <p className={styles.body}>{block.body}</p>

              {block.stats && (
                <div className={`${styles.statsGrid} stats-grid`}>
                  {block.stats.map((stat, idx) => (
                    <div key={idx} className={`${styles.statCard} stat-card`}>
                      <div className={styles.statValue}>{stat.value}</div>
                      <div className={styles.statLabel}>{stat.label}</div>
                    </div>
                  ))}
                </div>
              )}

              {block.list && (
                <ul className={styles.list}>
                  {block.list.map((item, idx) => (
                    <li key={idx}>
                      <span className={styles.bullet} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              )}

              {block.venues && (
                <div className={`${styles.venuesWrapper} venues-wrapper`}>
                  {block.venues.map((venue, idx) => (
                    <div key={idx} className={`${styles.venueRow} venue-row`}>
                      <span className={styles.venueArea}>{venue.area}</span>
                      <span className={styles.venueType}>{venue.type}</span>
                    </div>
                  ))}
                </div>
              )}

              {block.themes && (
                <div className={`${styles.themesGrid} themes-grid`}>
                  {block.themes.map((theme, idx) => (
                    <div key={idx} className={`${styles.themeCard} theme-card`}>
                      <h3 className={styles.themeName}>{theme.name}</h3>
                      <p className={styles.themeDesc}>{theme.desc}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
