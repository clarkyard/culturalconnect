"use client";

import Image from "next/image";
import AnimatedCounter from "./AnimatedCounter";
import styles from "./AboutSection.module.css";
import { motion } from "framer-motion";

export default function AboutSection() {
  const fadeInScale = {
    hidden: { opacity: 0, scale: 0.95, filter: "blur(10px)" },
    visible: { opacity: 1, scale: 1, filter: "blur(0px)", transition: { duration: 0.8 } }
  };

  const slideUp = {
    hidden: { opacity: 0, y: 30, filter: "blur(10px)" },
    visible: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.6 } }
  };

  const titleLines = [
    "Since 2019, our team has guided hundreds of",
    "travelers through Ghana's unique landscapes, from",
    "canopy walks to cultural festivals."
  ];

  const lineVariants = {
    hidden: { y: "100%", filter: "blur(10px)" },
    visible: (i: number) => ({
      y: 0,
      filter: "blur(0px)",
      transition: {
        delay: i * 0.1,
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1]
      }
    })
  };

  return (
    <motion.section 
      className={styles.aboutSection}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
    >
      <div className={styles.header}>
        <motion.div className={styles.aboutLabel} variants={slideUp}>About Cultural Connect</motion.div>
        <h2 className={styles.aboutTitle}>
          {titleLines.map((line, i) => (
            <div key={i} style={{ overflow: "hidden" }}>
              <motion.div
                custom={i}
                variants={lineVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {line}
              </motion.div>
            </div>
          ))}
        </h2>
      </div>

      <div className={styles.cardsGrid}>
        {/* Left Text Card */}
        <motion.div className={styles.infoCard} variants={slideUp}>
          <div className={styles.iconCircle}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
            </svg>
          </div>
          <p className={styles.infoDescription}>
            Explore Ghana&apos;s landscapes with routes<br/>
            designed for all experience levels.<br/>
            Each trip includes local guides, and<br/>
            scenic stops for photos and rest.
          </p>
          
          <div className={styles.features}>
            <div className={styles.featureItem}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              <span>Pickup<br/>Included</span>
            </div>
            <div className={styles.featureItem}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>
              <span>2-3 Hour<br/>Trips</span>
            </div>
            <div className={styles.featureItem}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4"/></svg>
              <span>Sunset<br/>Views</span>
            </div>
          </div>

          <div className={styles.actionRow}>
            <motion.button className={styles.contactBtn} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>Contact Us</motion.button>
            <motion.button className={styles.arrowBtn} whileHover={{ x: 5 }}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </motion.button>
          </div>
        </motion.div>

        {/* Center Image Card */}
        <motion.div className={styles.desertCard} variants={fadeInScale}>
          <div className={styles.desertLabel}>Ghana Explore</div>
          <Image 
            src="/sunrise.png" 
            alt="Ghana Landscape" 
            fill 
            className={styles.desertImage} 
            sizes="(max-width: 768px) 100vw, 33vw"
          />
        </motion.div>

        {/* Right Collage Card */}
        <motion.div 
          className={styles.collageCard} 
          variants={fadeInScale}
          whileHover="hover"
          initial="visible"
        >
          <div className={styles.polaroidContainer}>
            <motion.div 
              className={`${styles.polaroid} ${styles.polaroid1}`}
              variants={{
                hover: { rotate: -20, x: -30, y: -10, transition: { type: "spring", stiffness: 100 } }
              }}
            >
               <Image src="/hiker.png" alt="Traveler 1" fill className={styles.polaroidImg} />
            </motion.div>
            <motion.div 
              className={`${styles.polaroid} ${styles.polaroid2}`}
              variants={{
                hover: { rotate: 0, y: -20, scale: 1.1, transition: { type: "spring", stiffness: 100 } }
              }}
            >
               <Image src="/oasis.png" alt="Traveler 2" fill className={styles.polaroidImg} />
            </motion.div>
            <motion.div 
              className={`${styles.polaroid} ${styles.polaroid3}`}
              variants={{
                hover: { rotate: 20, x: 30, y: -10, transition: { type: "spring", stiffness: 100 } }
              }}
            >
               <Image src="/stargazing.png" alt="Traveler 3" fill className={styles.polaroidImg} />
            </motion.div>
          </div>
          <p className={styles.collageText}>
            Stories and moments from travelers who<br/>
            explored Ghana with us.
          </p>
        </motion.div>
      </div>

      <motion.div 
        className={styles.statsRow}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          visible: {
            transition: {
              staggerChildren: 0.1
            }
          }
        }}
      >
        <motion.div className={styles.statItem} variants={slideUp}>
          <div className={styles.statNumber}><AnimatedCounter end={5} suffix="+" /></div>
          <div className={styles.statLabel}>years of experience</div>
        </motion.div>
        <motion.div className={styles.statItem} variants={slideUp}>
          <div className={styles.statNumber}><AnimatedCounter end={760} suffix="+" duration={2500} /></div>
          <div className={styles.statLabel}>happy travelers</div>
        </motion.div>
        <motion.div className={styles.statItem} variants={slideUp}>
          <div className={styles.statNumber}><AnimatedCounter end={30} suffix="+" duration={2200} /></div>
          <div className={styles.statLabel}>scenic routes</div>
        </motion.div>
        <motion.div className={styles.statItem} variants={slideUp}>
          <div className={styles.statNumber}><AnimatedCounter end={4.9} decimals={1} duration={2000} /></div>
          <div className={styles.statLabel}>average rating</div>
        </motion.div>
      </motion.div>
    </motion.section>
  );
}
