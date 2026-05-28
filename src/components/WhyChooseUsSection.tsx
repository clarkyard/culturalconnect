"use client";

import Image from "next/image";
import styles from "./WhyChooseUsSection.module.css";
import { motion } from "framer-motion";

export default function WhyChooseUsSection() {
  const fadeInScale = {
    hidden: { opacity: 0, scale: 0.95, filter: "blur(10px)" },
    visible: { opacity: 1, scale: 1, filter: "blur(0px)", transition: { duration: 0.8 } }
  };

  const slideUp = {
    hidden: { opacity: 0, y: 30, filter: "blur(10px)" },
    visible: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.6 } }
  };

  return (
    <motion.section 
      className={styles.whySection}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
    >
      <motion.div className={styles.header} variants={slideUp}>
        <div className={styles.whyLabel}>Why Choose Us</div>
        <h2 className={styles.whyTitle}>
          Why travelers<br/>
          choose Cultural Connect
        </h2>
        <div className={styles.whyDesc}>
          Every journey we organize is built on<br/>
          trust, safety, and unforgettable views.
        </div>
      </motion.div>

      <div className={styles.bentoGrid}>
        
        {/* Left Large Card */}
        <motion.div 
          className={styles.localExpertiseCard} 
          variants={fadeInScale} 
          whileHover={{ y: -10, backgroundColor: "#e9ecef" }}
          transition={{ type: "spring", stiffness: 200 }}
        >
          <div className={styles.mapWatermark}>
             {/* A placeholder for the world map watermark using simple CSS shapes or svg */}
             <svg viewBox="0 0 400 200" fill="none" xmlns="http://www.w3.org/2000/svg" className={styles.mapSvg}>
                {/* Abstract dotted pattern representing a map */}
                <pattern id="dots" x="0" y="0" width="10" height="10" patternUnits="userSpaceOnUse">
                  <motion.circle 
                    fill="rgba(0,0,0,0.05)" 
                    cx="5" cy="5" r="2"
                    animate={{ opacity: [0.3, 0.6, 0.3] }}
                    transition={{ duration: 3, repeat: Infinity }}
                  ></motion.circle>
                </pattern>
                <rect x="0" y="0" width="100%" height="100%" fill="url(#dots)"></rect>
             </svg>
          </div>
          <div className={styles.cardContentBottom}>
            <h3 className={styles.cardTitle}>Local Expertise</h3>
            <p className={styles.cardDesc}>
              Guided by people who grew up in Ghana and<br/>
              know its hidden paths, stories, and traditions.
            </p>
          </div>
        </motion.div>

        {/* Middle Column */}
        <div className={styles.middleCol}>
          <motion.div className={styles.certifiedCard} variants={slideUp} whileHover={{ y: -8, transition: { type: "spring", stiffness: 300 } }}>
            <motion.div 
              className={styles.certifiedIcon}
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
            </motion.div>
            <h3 className={styles.cardTitle}>Certified Tour Guides</h3>
            <p className={styles.cardDesc}>
              Certified by the Ghana Tourism Authority<br/>
              for safety and historical accuracy.
            </p>
          </motion.div>

          <motion.div 
            className={styles.communityCard} 
            variants={slideUp} 
            whileHover="hover"
          >
            <h3 className={styles.cardTitle}>Community & Partnerships</h3>
            
            <div className={styles.avatars}>
              <motion.div className={styles.avatar} style={{background: 'linear-gradient(135deg, #f6d365 0%, #fda085 100%)', zIndex: 5}} variants={{ hover: { x: -20, rotate: -5 } }}></motion.div>
              <motion.div className={styles.avatar} style={{background: 'linear-gradient(135deg, #a1c4fd 0%, #c2e9fb 100%)', zIndex: 4}} variants={{ hover: { x: -10, rotate: -2 } }}></motion.div>
              <motion.div className={styles.avatar} style={{background: 'linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%)', zIndex: 3}} variants={{ hover: { x: 10, rotate: 2 } }}></motion.div>
              <motion.div className={styles.avatar} style={{background: 'linear-gradient(135deg, #84fab0 0%, #8fd3f4 100%)', zIndex: 2}} variants={{ hover: { x: 20, rotate: 5 } }}></motion.div>
            </div>

            <p className={styles.cardDesc}>
              Working hand in hand with local communities<br/>
              to preserve culture and share authentic<br/>
              stories with travelers worldwide.
            </p>
          </motion.div>
        </div>

        {/* Right Tall Image Card */}
        <motion.div 
          className={styles.realMomentsCard} 
          variants={fadeInScale} 
          whileHover="hover"
        >
          <motion.div 
            className={styles.realMomentsImageWrapper}
            variants={{ hover: { scale: 1.05 } }}
            transition={{ duration: 0.8 }}
          >
            <Image 
              src="/woman_desert.png" 
              alt="Woman in Desert" 
              fill 
              className={styles.realMomentsImage} 
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          </motion.div>
          
          <div className={styles.realMomentsContent}>
            <p className={styles.realMomentsText}>
              See real moments<br/>
              from our trips.
            </p>
            <motion.button 
              className={styles.arrowBtnWhite}
              whileHover={{ x: 5, backgroundColor: "#000", color: "#fff" }}
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </motion.button>
          </div>
        </motion.div>

      </div>
    </motion.section>
  );
}
