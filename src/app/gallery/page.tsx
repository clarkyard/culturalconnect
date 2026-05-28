import styles from "./gallery.module.css";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gallery | Cultural Connect",
  description: "Browse real moments from our AlUla desert trips — stunning landscapes, ancient ruins, starry skies, and authentic travel memories.",
};

const photos = [
  { id: 1, src: "/desert.png",       alt: "AlUla Desert Dunes",    caption: "Desert Dunes",       size: "large" },
  { id: 2, src: "/sunrise.png",      alt: "Sunrise over AlUla",    caption: "Golden Sunrise",     size: "small" },
  { id: 3, src: "/stargazing.png",   alt: "Stargazing night",      caption: "Milky Way",          size: "small" },
  { id: 4, src: "/oasis.png",        alt: "Hidden Oasis",          caption: "Hidden Oasis",       size: "wide" },
  { id: 5, src: "/hiker.png",        alt: "Desert Hiker",          caption: "Desert Explorer",    size: "small" },
  { id: 6, src: "/woman_desert.png", alt: "Woman in the desert",   caption: "Real Moments",       size: "large" },
  { id: 7, src: "/desert.png",       alt: "Sand dunes at sunset",  caption: "Sunset Dunes",       size: "wide" },
  { id: 8, src: "/sunrise.png",      alt: "Morning hike",          caption: "Morning Trail",      size: "small" },
];

export default function GalleryPage() {
  return (
    <main className={`container ${styles.page}`}>
      {/* Header */}
      <section className={styles.header}>
          <div className={styles.headerLeft}>
            <span className={styles.label}>Gallery</span>
            <h1 className={styles.title}>
              Real moments from<br/>
              our desert journeys.
            </h1>
          </div>
          <p className={styles.headerDesc}>
            Every photo is taken by our guides and travelers in the field —
            no staged shots, just honest, breathtaking memories from AlUla&apos;s landscapes.
          </p>
        </section>

        {/* Bento Gallery Grid */}
        <section className={styles.gallery}>
          {photos.map((photo) => (
            <div
              key={photo.id}
              className={`${styles.galleryItem} ${styles[photo.size]}`}
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                className={styles.galleryImg}
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className={styles.galleryOverlay}>
                <span className={styles.galleryCaption}>{photo.caption}</span>
              </div>
            </div>
          ))}
        </section>

        {/* CTA */}
        <section className={styles.cta}>
          <div className={styles.ctaContent}>
            <h2>Want to be in our next gallery?</h2>
            <p>Book a tour and create your own unforgettable AlUla story.</p>
          </div>
          <a href="/contact" className={styles.ctaBtn}>Plan My Trip</a>
        </section>
      </main>
  );
}
