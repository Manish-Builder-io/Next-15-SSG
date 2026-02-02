import React from "react";
import Header from "@/components/Header/Header";
import Hero from "@/components/Hero/Hero";
import Features from "@/components/Features/Features";
import Footer from "@/components/Footer/Footer";

const page = () => {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Header />
      <main style={{ flex: 1 }}>
        <Hero />
        <Features />
      </main>
      <Footer />
    </div>
  );
};

export default page;
