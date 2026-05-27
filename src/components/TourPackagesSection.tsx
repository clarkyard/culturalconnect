"use client";

import Image from "next/image";
import { useRef } from "react";
import styles from "./TourPackagesSection.module.css";
import { motion } from "framer-motion";

export default function TourPackagesSection() {
  const carouselRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: "left" | "right") => {
    if (!carouselRef.current) return;
    carouselRef.current.scrollBy({ left: dir === "right" ? 420 : -420, behavior: "smooth" });
  };

  const packages = [
    {
      id: 1,
      title: "Kakum Canopy Walk",
      price: "$50",
      duration: "2 Hours",
      difficulty: "Moderate",
      image: "/sunrise.png",
      description: "Walk above the rainforest floor on a series of suspension bridges with breathtaking views of Kakum National Park."
    },
    {
      id: 2,
      title: "Cape Coast Castle",
      price: "$40",
      duration: "3 Hours",
      difficulty: "Easy",
      image: "/stargazing.png",
      description: "A profound journey through history at one of Ghana's most significant UNESCO World Heritage sites."
    },
    {
      id: 3,
      title: "Wli Waterfalls Hike",
      price: "$60",
      duration: "4 Hours",
      difficulty: "Moderate",
      image: "/oasis.png",
      description: "Trek to the highest waterfall in West Africa, nestled deep within the lush greenery of the Volta Region."
    },
    {
      id: 4,
      title: "Mole Safari Trek",
      price: "$120",
      duration: "6 Hours",
      difficulty: "Moderate",
      image: "/desert.png",
      description: "An immersive walking safari to see elephants and other wildlife in their natural habitat at Mole National Park."
    },
    {
      id: 5,
      title: "Kwame Nkrumah Memorial",
      price: "$30",
      duration: "1.5 Hours",
      difficulty: "Easy",
      image: "/hiker.png",
      description: "Explore the life and legacy of Ghana's first president at this stunning architectural and historical landmark."
    }
  ];

  return (
    <motion.section 
      className={styles.packagesSection}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8 }}
    >
      <div className={styles.header}>
        <div className={styles.packagesLabel}>Tour Packages</div>
        <h2 className={styles.packagesTitle}>
          Explore our curated<br/>
          Ghanaian experiences
        </h2>
        <div className={styles.headerAction}>
          <motion.button 
            className={styles.exploreBtn}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Explore Tours
          </motion.button>
        </div>
      </div>

      <div className={styles.carouselWrapper}>
        <motion.div 
          className={styles.carousel} 
          ref={carouselRef}
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
          {packages.map((pkg) => (
            <motion.div 
              key={pkg.id} 
              className={styles.packageCard}
              variants={{
                hidden: { opacity: 0, x: 20 },
                visible: { opacity: 1, x: 0 }
              }}
              whileHover={{ y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <div className={styles.imageWrapper}>
                <Image
                  src={pkg.image}
                  alt={pkg.title}
                  fill
                  className={styles.cardImage}
                  sizes="380px"
                />
                <motion.div 
                  className={styles.priceTag}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  {pkg.price} <span className={styles.priceUnit}>/ person</span>
                </motion.div>
              </div>

              <div className={styles.cardContent}>
                <h3 className={styles.cardTitle}>{pkg.title}</h3>
                <p className={styles.cardDesc}>{pkg.description}</p>

                <div className={styles.metaRow}>
                  <motion.div className={styles.metaItem} whileHover={{ y: -3 }}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>
                    <span>{pkg.duration}</span>
                  </motion.div>
                  <motion.div className={styles.metaItem} whileHover={{ y: -3 }}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 9.36l-7.1 7.1a1 1 0 0 1-1.4 0l-2.8-2.8a1 1 0 0 1 0-1.4l7.1-7.1a6 6 0 0 1 9.36-7.94z"/></svg>
                    <span>{pkg.difficulty}</span>
                  </motion.div>
                </div>

                <motion.button 
                  className={styles.bookBtn}
                  whileHover={{ gap: "16px", paddingRight: "2rem" }}
                  whileTap={{ scale: 0.98 }}
                >
                  Book Now
                  <motion.svg 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2"
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </motion.svg>
                </motion.button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div className={styles.carouselControls}>
          <motion.button 
            id="carousel-prev" 
            className={styles.controlBtn} 
            onClick={() => scroll("left")}
            whileHover={{ x: -5 }}
          >
            Previous
          </motion.button>
          <motion.button 
            id="carousel-next" 
            className={styles.controlBtnDark} 
            onClick={() => scroll("right")}
            whileHover={{ x: 5 }}
          >
            Next
          </motion.button>
        </div>
      </div>
    </motion.section>
  );
}
