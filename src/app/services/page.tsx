import React from "react";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import styles from "./services.module.css";

const services = [
  {
    icon: '💻',
    title: 'Web Development',
    description: 'Custom web applications built with modern frameworks like React, Next.js, and Vue.',
    features: ['Responsive Design', 'Performance Optimization', 'SEO Friendly'],
  },
  {
    icon: '📱',
    title: 'Mobile Development',
    description: 'Native and cross-platform mobile apps for iOS and Android.',
    features: ['React Native', 'Flutter', 'Progressive Web Apps'],
  },
  {
    icon: '☁️',
    title: 'Cloud Solutions',
    description: 'Scalable cloud infrastructure and deployment solutions.',
    features: ['AWS', 'Azure', 'Google Cloud'],
  },
  {
    icon: '🎨',
    title: 'UI/UX Design',
    description: 'Beautiful, intuitive interfaces that users love.',
    features: ['User Research', 'Wireframing', 'Prototyping'],
  },
  {
    icon: '🔧',
    title: 'Consulting',
    description: 'Expert guidance on technology strategy and architecture.',
    features: ['Technical Audits', 'Code Reviews', 'Best Practices'],
  },
  {
    icon: '🚀',
    title: 'DevOps',
    description: 'CI/CD pipelines and automated deployment workflows.',
    features: ['Docker', 'Kubernetes', 'Automation'],
  },
];

export default function ServicesPage() {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Header />
      <main style={{ flex: 1 }}>
        <section className={styles.hero}>
          <div className={styles.heroContent}>
            <h1 className={styles.title}>Our Services</h1>
            <p className={styles.subtitle}>
              Comprehensive solutions to bring your digital vision to life
            </p>
          </div>
        </section>

        <section className={styles.services}>
          <div className={styles.container}>
            <div className={styles.grid}>
              {services.map((service, index) => (
                <div key={index} className={styles.card}>
                  <div className={styles.cardHeader}>
                    <div className={styles.icon}>{service.icon}</div>
                    <h3 className={styles.cardTitle}>{service.title}</h3>
                  </div>
                  <p className={styles.cardDescription}>{service.description}</p>
                  <ul className={styles.featureList}>
                    {service.features.map((feature, idx) => (
                      <li key={idx} className={styles.feature}>
                        <span className={styles.checkmark}>✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <button className={styles.learnMore}>Learn More</button>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.cta}>
          <div className={styles.ctaContent}>
            <h2>Ready to Get Started?</h2>
            <p>Let's discuss how we can help your business grow</p>
            <button className={styles.ctaButton}>Contact Us</button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
