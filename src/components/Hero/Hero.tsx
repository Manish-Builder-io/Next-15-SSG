import React from 'react';
import styles from './styles.module.css';

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.content}>
          <h1 className={styles.title}>
            Welcome to <span className={styles.highlight}>MyApp</span>
          </h1>
          <p className={styles.subtitle}>
            Build amazing web experiences with modern technologies and best practices.
            Fast, scalable, and user-friendly solutions.
          </p>
          <div className={styles.buttons}>
            <button className={styles.primaryButton}>Get Started</button>
            <button className={styles.secondaryButton}>Learn More</button>
          </div>
        </div>
        <div className={styles.visual}>
          <div className={styles.visualCard}>
            <div className={styles.visualIcon}>🚀</div>
            <h3>Fast & Modern</h3>
          </div>
        </div>
      </div>
    </section>
  );
}
