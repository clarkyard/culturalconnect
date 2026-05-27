"use client";

import styles from "./Footer.module.css";
import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";

export default function Footer() {
  const [isHovered, setIsHovered] = useState(false);
  const [isMarqueeHovered, setIsMarqueeHovered] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.topSection}>
        <div className={styles.navLinks}>
          {["OVERVIEW", "ABOUT", "GALLERY", "CONTACT"].map((label) => (
            <Link 
              key={label} 
              href={label === "GALLERY" ? "/gall" : label === "OVERVIEW" ? "/" : `/${label.toLowerCase()}`} 
              className={styles.link}
            >
              <motion.span whileHover={{ y: -2 }} display="inline-block">{label}</motion.span>
            </Link>
          ))}
        </div>

        <motion.button 
          className={styles.backToTopBtn}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onClick={scrollToTop}
          whileTap={{ scale: 0.95 }}
        >
          <motion.div 
            className={styles.btnBg}
            initial={false}
            animate={{ 
              scale: isHovered ? 1.5 : 0,
              opacity: isHovered ? 1 : 0
            }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
          />
          <span className={styles.btnTextAction}>Back to Top</span>
          <div className={styles.btnIconWrapperAction}>
            <motion.div
              animate={{ y: isHovered ? -5 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 19V5M5 12l7-7 7 7" />
              </svg>
            </motion.div>
          </div>
        </motion.button>
      </div>

      <div 
        className={styles.marqueeWrapper}
        onMouseEnter={() => setIsMarqueeHovered(true)}
        onMouseLeave={() => setIsMarqueeHovered(false)}
      >
        <motion.div 
          className={styles.marquee}
          animate={{ x: ["0%", "-50%"] }}
          transition={{ 
            duration: isMarqueeHovered ? 10 : 20, 
            repeat: Infinity, 
            ease: "linear" 
          }}
        >
          <span className={styles.marqueeText}>CULTURAL CONNECT — </span>
          <span className={styles.marqueeText}>CULTURAL CONNECT — </span>
          <span className={styles.marqueeText}>CULTURAL CONNECT — </span>
          <span className={styles.marqueeText}>CULTURAL CONNECT — </span>
        </motion.div>
      </div>
    </footer>
  );
}
