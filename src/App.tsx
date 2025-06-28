import React from 'react';
import SplineBackground from './components/SplineBackground';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import About from './components/About';
import ComingSoon from './components/ComingSoon';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <SplineBackground />
      <Header />
      <Hero />
      <Features />
      <About />
      <ComingSoon />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;