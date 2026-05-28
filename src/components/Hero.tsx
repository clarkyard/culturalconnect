"use client";

import styles from "./Hero.module.css";
import Image from "next/image";
import { motion } from "framer-motion";
import { 
  Camera, 
  Mountain, 
  Zap, 
  MapPin, 
  Shield, 
  Car, 
  Route, 
  MousePointer2 
} from "lucide-react";

export default function Hero() {
  return (
    <section className={styles.hero}>
      {/* Background Image */}
      <div className={styles.bgWrapper}>
        <Image
          src="https://images.unsplash.com/photo-1509316785289-025f5b846b35?w=1600"
          alt="Desert Canyon Landscape"
          fill
          priority
          className={styles.bgImage}
        />
        <div className={styles.gradientOverlay} />
      </div>

      {/* Main Content */}
      <div className={styles.content}>
        {/* Bottom Left: Heading and Spots */}
        <div className={styles.bottomLeft}>
          <motion.div
            initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1 className={styles.displayHeading}>
              Explore the Best<br />Natural Places
            </h1>
            <div className={styles.scenicSpots}>
              <p>20+ Scenic</p>
              <p>Spots Included</p>
            </div>
          </motion.div>
        </div>

        {/* Bottom Right: Description */}
        <div className={styles.bottomRight}>
          <motion.p 
            className={styles.description}
            initial={{ opacity: 0, x: 20, filter: "blur(10px)" }}
            animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            We organize scenic tours, photo stops, and guided routes 
            to the most beautiful natural spots, with clear schedules, 
            and simple booking.
          </motion.p>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className={styles.bottomBar}>
        <div className={styles.barInner}>
          {/* Left Group: Icon Pills */}
          <div className={styles.iconGroup}>
            {[Camera, Mountain, Zap, MapPin].map((Icon, i) => (
              <motion.div 
                key={i} 
                className={styles.iconPill}
                initial={{ opacity: 0, scale: 0.8, filter: "blur(10px)" }}
                animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                transition={{ duration: 0.4, delay: 0.4 + (i * 0.1) }}
              >
                <Icon size={20} strokeWidth={1.5} />
              </motion.div>
            ))}
          </div>

          {/* Progress Separator */}
          <div className={styles.separator}>
            <div className={styles.separatorLine} />
          </div>

          {/* Right Group: Feature Badges */}
          <div className={styles.featureGroup}>
            {[
              { Icon: Shield, text: "Private Trips" },
              { Icon: Car, text: "Transport Included" },
              { Icon: Route, text: "Custom Route" }
            ].map((feature, i) => (
              <motion.div 
                key={i} 
                className={styles.featureBadge}
                initial={{ opacity: 0, y: 10, filter: "blur(10px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{ duration: 0.4, delay: 0.8 + (i * 0.1) }}
              >
                <feature.Icon size={16} strokeWidth={1.5} />
                <span>{feature.text}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
