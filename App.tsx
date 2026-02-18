
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProductSection from './components/ProductSection';
import Features from './components/Features';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col overflow-x-hidden">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <ProductSection />
        <Features />
      </main>
      <Footer />
    </div>
  );
};

export default App;
