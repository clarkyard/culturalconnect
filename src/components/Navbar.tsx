"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./Navbar.module.css";

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "OVERVIEW", href: "/" },
    { label: "ABOUT", href: "/about" },
    { label: "GALLERY", href: "/gall" },
    { label: "CONTACT", href: "/contact" },
  ];

  const actionLinks = [
    { label: "HELP", href: "/contact" },
    { label: "REGISTER", href: "/contact" },
  ];

  const menuVariants = {
    hidden: { opacity: 0, filter: "blur(10px)" },
    visible: { 
      opacity: 1,
      filter: "blur(0px)",
      transition: { staggerChildren: 0.1, delayChildren: 0.2 }
    },
    exit: { opacity: 0, filter: "blur(10px)" }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0, filter: "blur(10px)" },
    visible: { y: 0, opacity: 1, filter: "blur(0px)" }
  };

  return (
    <motion.nav 
      className={`${styles.navbar} ${isScrolled ? styles.scrolled : ""} ${isOpen ? styles.menuOpen : ""}`}
      initial={{ y: -100, filter: "blur(10px)" }}
      animate={{ y: 0, filter: "blur(0px)" }}
      transition={{ duration: 0.5 }}
    >
      <div className={styles.navContainer}>
        <Link href="/" className={styles.logo}>
          <motion.div 
            className={styles.logoImageWrapper}
            whileHover={{ rotate: 360, scale: 1.1 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
          >
            <Image 
              src="/logo.png" 
              alt="Cultural Connect Logo" 
              fill
              className={styles.logoImage}
            />
          </motion.div>
          <motion.span 
            className={styles.logoText}
            whileHover={{ x: 5 }}
            transition={{ duration: 0.2 }}
          >
            Cultural Connect
          </motion.span>
        </Link>

        <div className={styles.rightSection}>
          <div className={styles.links}>
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`${styles.link} ${pathname === link.href ? styles.active : ""}`}
              >
                {link.label}
                {pathname === link.href && (
                  <motion.div 
                    layoutId="activeNav"
                    className={styles.activeIndicator}
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </Link>
            ))}
          </div>
          
          <button 
            className={`${styles.burger} ${isOpen ? styles.burgerActive : ""}`} 
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            className={styles.mobileOverlay}
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <motion.div className={styles.mobileMenu}>
              <div className={styles.mobileLinks}>
                {[...navLinks, ...actionLinks].map((link) => (
                  <motion.div key={link.label} variants={itemVariants}>
                    <Link 
                      href={link.href} 
                      onClick={() => setIsOpen(false)}
                      className={styles.mobileLink}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
