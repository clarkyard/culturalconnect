"use client";

import Navbar from "@/components/Navbar";
import styles from "./contact.module.css";
import { useState } from "react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <main className={`container ${styles.page}`}>
        <Navbar />

        {/* Header */}
        <section className={styles.header}>
          <span className={styles.label}>Contact</span>
          <h1 className={styles.title}>
            Let&apos;s plan your<br/>
            perfect desert trip.
          </h1>
        </section>

        {/* Main two-column layout */}
        <section className={styles.layout}>
          {/* Left: Contact Info */}
          <div className={styles.infoCol}>
            <div className={styles.infoCard}>
              <div className={styles.infoItem}>
                <div className={styles.iconWrap}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.27h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.91a16 16 0 0 0 6 6l.91-.91a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 21.73 16.92z"/></svg>
                </div>
                <div>
                  <p className={styles.infoLabel}>Phone</p>
                  <p className={styles.infoValue}>+966 14 000 0000</p>
                </div>
              </div>

              <div className={styles.infoItem}>
                <div className={styles.iconWrap}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                </div>
                <div>
                  <p className={styles.infoLabel}>Email</p>
                  <p className={styles.infoValue}>hello@marwa-alula.com</p>
                </div>
              </div>

              <div className={styles.infoItem}>
                <div className={styles.iconWrap}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                </div>
                <div>
                  <p className={styles.infoLabel}>Location</p>
                  <p className={styles.infoValue}>AlUla, Medina Province<br/>Saudi Arabia</p>
                </div>
              </div>

              <div className={styles.infoItem}>
                <div className={styles.iconWrap}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>
                </div>
                <div>
                  <p className={styles.infoLabel}>Office Hours</p>
                  <p className={styles.infoValue}>Sun – Thu: 8am – 6pm<br/>Fri – Sat: 9am – 3pm</p>
                </div>
              </div>
            </div>

            <div className={styles.imageCard}>
              <div className={styles.imageLabel}>AlUla, Saudi Arabia</div>
            </div>
          </div>

          {/* Right: Contact Form */}
          <div className={styles.formCol}>
            {submitted ? (
              <div className={styles.successCard}>
                <div className={styles.successIcon}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12"/></svg>
                </div>
                <h2>Message Sent!</h2>
                <p>Thank you for reaching out. Our team will get back to you within 24 hours.</p>
                <button className={styles.resetBtn} onClick={() => { setSubmitted(false); setForm({ name: "", email: "", subject: "", message: "" }); }}>
                  Send Another
                </button>
              </div>
            ) : (
              <form className={styles.form} onSubmit={handleSubmit}>
                <div className={styles.formRow}>
                  <div className={styles.formGroup}>
                    <label htmlFor="name" className={styles.formLabel}>Full Name</label>
                    <input id="name" name="name" type="text" required placeholder="Your name" className={styles.formInput} value={form.name} onChange={handleChange} />
                  </div>
                  <div className={styles.formGroup}>
                    <label htmlFor="email" className={styles.formLabel}>Email</label>
                    <input id="email" name="email" type="email" required placeholder="your@email.com" className={styles.formInput} value={form.email} onChange={handleChange} />
                  </div>
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="subject" className={styles.formLabel}>Subject</label>
                  <select id="subject" name="subject" required className={styles.formInput} value={form.subject} onChange={handleChange}>
                    <option value="" disabled>Select a topic</option>
                    <option value="booking">Tour Booking</option>
                    <option value="custom">Custom Package</option>
                    <option value="info">General Information</option>
                    <option value="partnership">Partnership</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="message" className={styles.formLabel}>Message</label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    placeholder="Tell us about your ideal trip — how many people, preferred dates, any special requests..."
                    className={`${styles.formInput} ${styles.textarea}`}
                    value={form.message}
                    onChange={handleChange}
                  />
                </div>

                <button type="submit" className={styles.submitBtn} id="contact-submit">
                  Send Message
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                </button>
              </form>
            )}
          </div>
        </section>
      </main>
    </>
  );
}
