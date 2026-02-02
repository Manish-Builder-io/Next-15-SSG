import React from 'react';
import styles from './styles.module.css';

const features = [
  {
    icon: '⚡',
    title: 'Lightning Fast',
    description: 'Optimized for performance with cutting-edge technologies and best practices.',
  },
  {
    icon: '🎨',
    title: 'Beautiful Design',
    description: 'Modern, clean, and responsive design that works on all devices.',
  },
  {
    icon: '🔒',
    title: 'Secure',
    description: 'Built with security in mind, protecting your data and privacy.',
  },
  {
    icon: '📱',
    title: 'Responsive',
    description: 'Perfectly adapted for desktop, tablet, and mobile experiences.',
  },
  {
    icon: '🚀',
    title: 'Scalable',
    description: 'Architecture designed to grow with your business needs.',
  },
  {
    icon: '💡',
    title: 'Innovative',
    description: 'Using the latest technologies and methodologies in web development.',
  },
];

export default function Features() {
  return (
    <section className={styles.features}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>Why Choose Us</h2>
          <p className={styles.subtitle}>
            Discover the features that make our platform stand out
          </p>
        </div>
        <div className={styles.grid}>
          {features.map((feature, index) => (
            <div key={index} className={styles.card}>
              <div className={styles.icon}>{feature.icon}</div>
              <h3 className={styles.cardTitle}>{feature.title}</h3>
              <p className={styles.cardDescription}>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
