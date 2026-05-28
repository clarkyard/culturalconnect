"use client";

import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import styles from "./gall.module.css";

const photos = [
  {
    id: "p1",
    src: "/sunrise.png",
    alt: "Sunrise over AlUla",
    title: "Sunrise Dune Hike",
    location: "AlUla Canyons",
    desc: "Watching the sun break over the towering sandstone cliffs, painting the desert in deep shades of gold and amber.",
  },
  {
    id: "p2",
    src: "/stargazing.png",
    alt: "Midnight Stargazing",
    title: "Midnight Stargazing",
    location: "Deep Desert",
    desc: "An endless canopy of stars stretching across the silent desert sky, far away from any light pollution.",
  },
  {
    id: "p3",
    src: "/oasis.png",
    alt: "Hidden Oasis",
    title: "Oasis Discovery Tour",
    location: "AlUla Oasis",
    desc: "A lush, hidden paradise of date palms and freshwater springs nestled between giant rocky canyons.",
  },
  {
    id: "p4",
    src: "/desert.png",
    alt: "Desert Dunes",
    title: "Desert Explorer Trek",
    location: "Al-Khuraibah Dunes",
    desc: "Challenging sand dunes shifting with the wind, representing the timeless and untamed beauty of the Arabian desert.",
  },
  {
    id: "p5",
    src: "/woman_desert.png",
    alt: "Real Moments",
    title: "Timeless Moments",
    location: "Heritage Trails",
    desc: "Forging real connections with the land, the history, and the local guides who call AlUla home.",
  },
];

// Single Parallax Item Component
function ParallaxCard({ 
  photo, 
  onOpen 
}: { 
  photo: typeof photos[0]; 
  onOpen: (src: string) => void 
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [offsetY, setOffsetY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const scrollPercent = (window.innerHeight - rect.top) / (window.innerHeight + rect.height);
      
      // Calculate parallax translation range (e.g. -60px to 60px)
      if (scrollPercent >= 0 && scrollPercent <= 1) {
        setOffsetY((scrollPercent - 0.5) * 120); 
      }
    };

    window.addEventListener("scroll", handleScroll);
    // Initial call
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div 
      className={styles.parallaxCard} 
      ref={containerRef}
      onClick={() => onOpen(photo.src)}
    >
      <div className={styles.parallaxFrame}>
        <div 
          className={styles.parallaxImageWrapper}
          style={{ transform: `translateY(${offsetY}px) scale(1.15)` }}
        >
          <Image 
            src={photo.src} 
            alt={photo.alt} 
            fill 
            className={styles.img} 
            sizes="(max-width: 1200px) 100vw, 1000px"
            priority
          />
        </div>
        
        {/* Visual Overlay Details */}
        <div className={styles.cardOverlay}>
          <div className={styles.locationBadge}>{photo.location}</div>
          <h2 className={styles.cardTitle}>{photo.title}</h2>
          <p className={styles.cardDesc}>{photo.desc}</p>
        </div>
      </div>
    </div>
  );
}

export default function GallPage() {
  const [selectedPhoto, setSelectedPhoto] = useState<string | null>(null);

  return (
    <main className={`container ${styles.page}`}>
      {/* Header */}
      <section className={styles.header}>
          <h1 className={styles.title}>
            Real moments from<br />our desert journeys.
          </h1>
          <p className={styles.subtitle}>
            Every photo is taken by our guides and travelers in the field, 
            no staged shots, just honest, breathtaking memories from AlUla&apos;s landscapes.
          </p>
        </section>

        {/* Parallax List Container */}
        <section className={styles.parallaxList}>
          {photos.map((photo) => (
            <ParallaxCard 
              key={photo.id} 
              photo={photo} 
              onOpen={setSelectedPhoto} 
            />
          ))}
        </section>

        {/* Lightbox Modal */}
        {selectedPhoto && (
          <div className={styles.lightbox} onClick={() => setSelectedPhoto(null)}>
            <button className={styles.closeBtn} onClick={() => setSelectedPhoto(null)} aria-label="Close photo">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
            <div className={styles.lightboxContent} onClick={(e) => e.stopPropagation()}>
              <div className={styles.lightboxImgWrap}>
                <Image 
                  src={selectedPhoto} 
                  alt="Expanded Desert Journey" 
                  fill 
                  className={styles.lightboxImg} 
                  sizes="95vw"
                  priority
                />
              </div>
            </div>
          </div>
        )}
      </main>
  );
}
