import styles from "./about.module.css";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Cultural Connect",
  description: "Learn about the Cultural Connect travel team, our mission, and the leaders behind AlUla's most unforgettable desert experiences.",
};

const leaders = [
  {
    name: "Khalid Al-Rashidi",
    role: "Founder & CEO",
    bio: "Born and raised in AlUla, Khalid has spent his life exploring the desert's hidden paths. He founded Cultural Connect in 2019 with a vision to share the region's natural and cultural wonders with the world.",
    image: "/hiker.png",
  },
  {
    name: "Nora Al-Farsi",
    role: "Head of Operations",
    bio: "Nora brings 12 years of luxury travel experience to Cultural Connect. She oversees every journey, ensuring every detail — from logistics to local partnerships — exceeds expectations.",
    image: "/woman_desert.png",
  },
  {
    name: "Faris Al-Otaibi",
    role: "Lead Desert Guide",
    bio: "A certified desert guide with decades of experience navigating AlUla's terrain, Faris leads our most adventurous treks and ensures every traveler returns safely with memories for a lifetime.",
    image: "/desert.png",
  },
];

export default function AboutPage() {
  return (
    <main className={`container ${styles.page}`}>
      {/* Hero */}
      <section className={styles.hero}>
        <div className={styles.heroLeft}>
          <span className={styles.label}>About Cultural Connect</span>
          <h1 className={styles.heroTitle}>
            A team rooted<br/>
            in the desert,<br/>
            driven by passion.
          </h1>
        </div>
        <div className={styles.heroRight}>
          <p className={styles.heroDesc}>
            Since 2019, we have been more than just a travel agency. We are storytellers, 
            guides, and advocates for the magnificent landscapes of AlUla. Every journey 
            we curate is built on deep local knowledge, a commitment to safety, and an 
            unwavering passion for sharing the magic of the desert.
          </p>
          <div className={styles.heroImageGrid}>
            <div className={styles.heroImgWrap}>
              <Image src="/desert.png" alt="AlUla Desert" fill className={styles.heroImg} sizes="50vw" />
            </div>
            <div className={styles.heroImgWrap}>
              <Image src="/sunrise.png" alt="Sunrise" fill className={styles.heroImg} sizes="50vw" />
            </div>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className={styles.missionSection}>
        <div className={styles.missionCard}>
          <div className={styles.missionIcon}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
          </div>
          <h2>Our Mission</h2>
          <p>To create transformative, responsible travel experiences that connect travelers deeply with AlUla&apos;s culture, history, and breathtaking natural landscapes — while preserving them for generations to come.</p>
        </div>
        <div className={styles.missionCard}>
          <div className={styles.missionIcon}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>
          </div>
          <h2>Our Vision</h2>
          <p>To become the world&apos;s most trusted gateway to AlUla — a destination known not only for its ancient wonders but for the warmth and authenticity of its people and stories.</p>
        </div>
        <div className={styles.missionCard}>
          <div className={styles.missionIcon}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
          </div>
          <h2>Our Community</h2>
          <p>We partner directly with AlUla&apos;s local communities — hiring local guides, sourcing from regional artisans, and ensuring tourism revenues flow back into the city that inspires everything we do.</p>
        </div>
      </section>

      {/* Leadership */}
      <section className={styles.leadershipSection}>
        <div className={styles.sectionHeader}>
          <span className={styles.label}>Our People</span>
          <h2 className={styles.sectionTitle}>The team behind<br/>every journey</h2>
        </div>

        <div className={styles.leadersGrid}>
          {leaders.map((leader) => (
            <div key={leader.name} className={styles.leaderCard}>
              <div className={styles.leaderImgWrap}>
                <Image src={leader.image} alt={leader.name} fill className={styles.leaderImg} sizes="33vw" />
                <div className={styles.leaderImgOverlay}></div>
              </div>
              <div className={styles.leaderInfo}>
                <div>
                  <h3 className={styles.leaderName}>{leader.name}</h3>
                  <span className={styles.leaderRole}>{leader.role}</span>
                </div>
                <p className={styles.leaderBio}>{leader.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Strip */}
      <section className={styles.ctaSection}>
        <div className={styles.ctaContent}>
          <h2>Ready to explore AlUla with us?</h2>
          <p>Get in touch and our team will craft your perfect desert journey.</p>
        </div>
        <a href="/contact" className={styles.ctaBtn}>Contact Us</a>
      </section>
    </main>
  );
}
