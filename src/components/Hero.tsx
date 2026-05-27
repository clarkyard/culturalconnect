"use client";

import styles from "./Hero.module.css";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
    },
  };

  const floatingVariants = {
    animate: {
      y: [0, -10, 0],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  return (
    <motion.section 
      className={styles.hero}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* LEFT COLUMN */}
      <motion.div className={styles.leftCol} variants={itemVariants}>
        <div className={styles.empowerTextWrap}>
          <p className={styles.empowerText}>
            Guiding you through<br />undiscovered paths
          </p>
          <div className={styles.arrowIcon}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M19 12H5M5 12L12 19M5 12L12 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </div>

        <motion.div 
          className={styles.hikerCard}
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3 }}
        >
          <Image 
            src="/hiker.png" 
            alt="Person hiking" 
            fill 
            className={styles.hikerImage} 
            sizes="(max-width: 768px) 100vw, 33vw"
            priority 
          />
        </motion.div>
      </motion.div>

      {/* CENTER COLUMN */}
      <div className={styles.centerCol}>
        <motion.h1 className={styles.headline} variants={itemVariants}>
          Discovering <br/>the magic of <br/>the world
        </motion.h1>
        
        <motion.button 
          className={styles.getStartedBtn} 
          variants={itemVariants}
          whileTap={{ scale: 0.95 }}
        >
          <span className={styles.btnText}>Get started</span>
          <div className={styles.btnIconWrapper}>
            <motion.div
              whileHover={{ x: 5 }}
              transition={{ duration: 0.3 }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </motion.div>
          </div>
        </motion.button>
      </div>

      {/* RIGHT COLUMN */}
      <motion.div className={styles.rightCol} variants={itemVariants}>
        <div className={styles.floatingContainer}>
          
          <motion.div className={styles.serviceHeader} variants={itemVariants}>
            <div className={styles.numberBadge}>3</div>
            <h3>24/7 Adventure support</h3>
          </motion.div>

          <motion.div 
            className={styles.bookingCard}
            variants={itemVariants}
          >
            <div className={styles.userAvatar}>
              <div className={styles.avatarGradient}></div>
            </div>
            <div className={styles.bookingDetails}>
              <p className={styles.bookingName}>Sarah Booked <strong>Private Tour</strong></p>
              <p className={styles.bookingType}>Kakum National Park</p>
              <p className={styles.bookingTime}>Just now</p>
            </div>
          </motion.div>

          <motion.div 
            className={styles.bookingCard}
            variants={itemVariants}
          >
            <div className={styles.successIcon}>✓</div>
            <div className={styles.bookingDetails}>
              <p className={styles.bookingName}>Booking Confirmed</p>
              <p className={styles.bookingType}>Mole National Park</p>
              <p className={styles.bookingTime}>12 min ago</p>
            </div>
          </motion.div>

          <motion.div 
            className={styles.chartCard}
            whileHover={{ scale: 1.05 }}
          >
            <div className={styles.miniChart}>
              <motion.div className={styles.miniBar} initial={{height: 0}} animate={{height: "60%"}} transition={{delay: 1.8}}></motion.div>
              <motion.div className={styles.miniBar} initial={{height: 0}} animate={{height: "80%"}} transition={{delay: 1.9}}></motion.div>
              <motion.div className={styles.miniBar} initial={{height: 0}} animate={{height: "40%"}} transition={{delay: 2.0}}></motion.div>
              <motion.div className={styles.miniBar} initial={{height: 0}} animate={{height: "100%"}} transition={{delay: 2.1}}></motion.div>
              <motion.div className={styles.miniBar} initial={{height: 0}} animate={{height: "70%"}} transition={{delay: 2.2}}></motion.div>
            </div>
            <div className={styles.amountPill}>1.2k Tours</div>
          </motion.div>
          
        </div>
      </motion.div>
    </motion.section>
  );
}
