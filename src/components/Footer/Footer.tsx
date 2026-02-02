import React from 'react';
import Link from 'next/link';
import styles from './styles.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.grid}>
          <div className={styles.column}>
            <h3>About Us</h3>
            <p>Building amazing digital experiences with modern web technologies.</p>
          </div>
          <div className={styles.column}>
            <h3>Quick Links</h3>
            <ul className={styles.linkList}>
              <li><Link href="/about">About</Link></li>
              <li><Link href="/services">Services</Link></li>
              <li><Link href="/contact">Contact</Link></li>
              <li><Link href="/privacy">Privacy Policy</Link></li>
            </ul>
          </div>
          <div className={styles.column}>
            <h3>Contact</h3>
            <ul className={styles.contactList}>
              <li>Email: info@myapp.com</li>
              <li>Phone: (555) 123-4567</li>
              <li>Address: 123 Web St, Digital City</li>
            </ul>
          </div>
          <div className={styles.column}>
            <h3>Follow Us</h3>
            <div className={styles.socialLinks}>
              <a href="#" aria-label="Twitter">Twitter</a>
              <a href="#" aria-label="LinkedIn">LinkedIn</a>
              <a href="#" aria-label="GitHub">GitHub</a>
            </div>
          </div>
        </div>
        <div className={styles.copyright}>
          <p>&copy; {new Date().getFullYear()} MyApp. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
