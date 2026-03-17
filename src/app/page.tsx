export default function HomePage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center gap-4">
      <h1 className="text-4xl font-bold">Home Page</h1>
      <p className="text-lg text-gray-600">
        This is your homepage. Customize this content as needed.
      </p>
    </main>
  );
}

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
