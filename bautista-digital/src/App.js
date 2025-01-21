import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import SectionSummary from './components/SectionSummary';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className='App'>
      <Header />
      <HeroSection />
      <SectionSummary />
      <Footer />
    </div>
  );
};

export default App;