"use client";

import React, { useState } from "react";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import styles from "./contact.module.css";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Header />
      <main style={{ flex: 1 }}>
        <section className={styles.hero}>
          <div className={styles.heroContent}>
            <h1 className={styles.title}>Get In Touch</h1>
            <p className={styles.subtitle}>
              We'd love to hear from you. Send us a message and we'll respond as soon as possible.
            </p>
          </div>
        </section>

        <section className={styles.contact}>
          <div className={styles.container}>
            <div className={styles.grid}>
              <div className={styles.info}>
                <h2 className={styles.infoTitle}>Contact Information</h2>
                <p className={styles.infoDescription}>
                  Fill out the form and our team will get back to you within 24 hours.
                </p>
                
                <div className={styles.infoCards}>
                  <div className={styles.infoCard}>
                    <div className={styles.infoIcon}>📧</div>
                    <div>
                      <h3>Email</h3>
                      <p>info@myapp.com</p>
                      <p>support@myapp.com</p>
                    </div>
                  </div>

                  <div className={styles.infoCard}>
                    <div className={styles.infoIcon}>📞</div>
                    <div>
                      <h3>Phone</h3>
                      <p>(555) 123-4567</p>
                      <p>Mon-Fri 9am-6pm EST</p>
                    </div>
                  </div>

                  <div className={styles.infoCard}>
                    <div className={styles.infoIcon}>📍</div>
                    <div>
                      <h3>Office</h3>
                      <p>123 Web Street</p>
                      <p>Digital City, DC 12345</p>
                    </div>
                  </div>
                </div>

                <div className={styles.social}>
                  <h3>Follow Us</h3>
                  <div className={styles.socialLinks}>
                    <a href="#" className={styles.socialLink}>Twitter</a>
                    <a href="#" className={styles.socialLink}>LinkedIn</a>
                    <a href="#" className={styles.socialLink}>GitHub</a>
                  </div>
                </div>
              </div>

              <div className={styles.formWrapper}>
                <form onSubmit={handleSubmit} className={styles.form}>
                  <div className={styles.formGroup}>
                    <label htmlFor="name" className={styles.label}>Name *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className={styles.input}
                      placeholder="Your name"
                    />
                  </div>

                  <div className={styles.formGroup}>
                    <label htmlFor="email" className={styles.label}>Email *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className={styles.input}
                      placeholder="your.email@example.com"
                    />
                  </div>

                  <div className={styles.formGroup}>
                    <label htmlFor="subject" className={styles.label}>Subject *</label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className={styles.input}
                      placeholder="How can we help?"
                    />
                  </div>

                  <div className={styles.formGroup}>
                    <label htmlFor="message" className={styles.label}>Message *</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className={styles.textarea}
                      placeholder="Tell us more about your inquiry..."
                    />
                  </div>

                  <button type="submit" className={styles.submitButton}>
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
